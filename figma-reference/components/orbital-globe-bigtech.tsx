import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function OrbitalGlobeBigTech() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 900;
    const height = canvas.height = 900;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 220;

    let rotation = 0;

    // Orbital nodes (jurisdictions)
    const nodes: { lat: number; lng: number; size: number; pulse: number }[] = [];
    
    for (let i = 0; i < 40; i++) {
      nodes.push({
        lat: (Math.random() - 0.5) * Math.PI,
        lng: Math.random() * Math.PI * 2,
        size: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    function drawGlobe() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      // Main globe circle
      ctx.strokeStyle = 'rgba(31, 74, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner glow
      const innerGlow = ctx.createRadialGradient(centerX, centerY, radius - 20, centerX, centerY, radius);
      innerGlow.addColorStop(0, 'rgba(31, 74, 255, 0.05)');
      innerGlow.addColorStop(1, 'rgba(31, 74, 255, 0)');
      ctx.fillStyle = innerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Meridians (longitude lines)
      ctx.strokeStyle = 'rgba(79, 123, 255, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2 + rotation;
        ctx.beginPath();
        
        for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.05) {
          const x = centerX + Math.cos(lat) * Math.cos(angle) * radius;
          const y = centerY + Math.sin(lat) * radius;
          const z = Math.cos(lat) * Math.sin(angle);
          
          if (z > -0.2) {
            const alpha = (z + 0.2) / 1.2;
            if (lat === -Math.PI / 2) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        ctx.globalAlpha = 0.6;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // Parallels (latitude lines)
      for (let i = 0; i < 10; i++) {
        const lat = ((i - 5) / 10) * Math.PI;
        ctx.beginPath();
        
        for (let lng = 0; lng <= Math.PI * 2; lng += 0.05) {
          const adjustedLng = lng + rotation;
          const x = centerX + Math.cos(lat) * Math.cos(adjustedLng) * radius;
          const y = centerY + Math.sin(lat) * radius;
          const z = Math.cos(lat) * Math.sin(adjustedLng);
          
          if (z > -0.2) {
            if (lng === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
        }
        ctx.stroke();
      }

      // Orbital nodes
      nodes.forEach((node) => {
        node.pulse += 0.03;
        const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
        
        const adjustedLng = node.lng + rotation;
        const x = centerX + Math.cos(node.lat) * Math.cos(adjustedLng) * radius;
        const y = centerY + Math.sin(node.lat) * radius;
        const z = Math.cos(node.lat) * Math.sin(adjustedLng);
        
        if (z > -0.2) {
          const alpha = (z + 0.2) / 1.2;
          
          // Node glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, node.size * 6 * pulseSize);
          gradient.addColorStop(0, `rgba(79, 123, 255, ${alpha * 0.8})`);
          gradient.addColorStop(0.5, `rgba(31, 74, 255, ${alpha * 0.3})`);
          gradient.addColorStop(1, 'rgba(31, 74, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, node.size * 6 * pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Node core
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          ctx.beginPath();
          ctx.arc(x, y, node.size * pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      rotation += 0.0015;
      requestAnimationFrame(drawGlobe);
    }

    drawGlobe();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <canvas
        ref={canvasRef}
        className="opacity-40"
        style={{ width: '900px', height: '900px' }}
      />
    </motion.div>
  );
}
