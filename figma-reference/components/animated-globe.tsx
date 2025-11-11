import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 800;
    const height = canvas.height = 800;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 200;

    let rotation = 0;

    const particles: { lat: number; lng: number; alpha: number }[] = [];
    
    // Generate orbital particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        lat: (Math.random() - 0.5) * Math.PI,
        lng: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    function drawGlobe() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw globe circle
      ctx.strokeStyle = 'rgba(24, 90, 180, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw meridians
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + rotation;
        ctx.strokeStyle = 'rgba(24, 90, 180, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.1) {
          const x = centerX + Math.cos(lat) * Math.cos(angle) * radius;
          const y = centerY + Math.sin(lat) * radius;
          const z = Math.cos(lat) * Math.sin(angle);
          
          if (z > 0) {
            if (lat === -Math.PI / 2) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw parallels
      for (let i = 0; i < 8; i++) {
        const lat = ((i - 4) / 8) * Math.PI;
        ctx.strokeStyle = 'rgba(24, 90, 180, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let lng = 0; lng <= Math.PI * 2; lng += 0.1) {
          const adjustedLng = lng + rotation;
          const x = centerX + Math.cos(lat) * Math.cos(adjustedLng) * radius;
          const y = centerY + Math.sin(lat) * radius;
          const z = Math.cos(lat) * Math.sin(adjustedLng);
          
          if (z > 0) {
            if (lng === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        ctx.stroke();
      }

      // Draw particles (jurisdictions)
      particles.forEach((p) => {
        const adjustedLng = p.lng + rotation;
        const x = centerX + Math.cos(p.lat) * Math.cos(adjustedLng) * radius;
        const y = centerY + Math.sin(p.lat) * radius;
        const z = Math.cos(p.lat) * Math.sin(adjustedLng);
        
        if (z > 0) {
          ctx.fillStyle = `rgba(24, 90, 180, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Glow effect
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
          gradient.addColorStop(0, `rgba(24, 90, 180, ${p.alpha * 0.4})`);
          gradient.addColorStop(1, 'rgba(24, 90, 180, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      rotation += 0.002;
      requestAnimationFrame(drawGlobe);
    }

    drawGlobe();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="opacity-30"
        style={{ width: '800px', height: '800px' }}
      />
    </motion.div>
  );
}
