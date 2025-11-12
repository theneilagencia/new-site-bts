import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function NetworkTopology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 500;
    canvas.height = 500;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    let rotation = 0;

    // Jurisdiction nodes
    const nodes = 8;
    const nodePositions: { angle: number; distance: number; pulse: number }[] = [];
    
    for (let i = 0; i < nodes; i++) {
      nodePositions.push({
        angle: (i / nodes) * Math.PI * 2,
        distance: radius + Math.random() * 30,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Central core (BTS nucleus)
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      coreGradient.addColorStop(0, 'rgba(79, 123, 255, 0.8)');
      coreGradient.addColorStop(0.5, 'rgba(31, 74, 255, 0.4)');
      coreGradient.addColorStop(1, 'rgba(31, 74, 255, 0)');
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      
      // Core ring
      ctx.strokeStyle = 'rgba(79, 123, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.stroke();

      // Orbital nodes
      nodePositions.forEach((node, i) => {
        node.pulse += 0.03;
        const pulseSize = Math.sin(node.pulse) * 0.3 + 1;
        
        const angle = node.angle + rotation;
        const x = centerX + Math.cos(angle) * node.distance;
        const y = centerY + Math.sin(angle) * node.distance;
        
        // Connection line to center
        ctx.strokeStyle = 'rgba(79, 123, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Node glow
        const nodeGradient = ctx.createRadialGradient(x, y, 0, x, y, 15 * pulseSize);
        nodeGradient.addColorStop(0, 'rgba(79, 123, 255, 0.8)');
        nodeGradient.addColorStop(1, 'rgba(79, 123, 255, 0)');
        
        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(x, y, 15 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Node core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(node.pulse) * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, 4 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Orbital ring
      ctx.strokeStyle = 'rgba(79, 123, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      rotation += 0.003;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <canvas
        ref={canvasRef}
        className="max-w-full max-h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
    </motion.div>
  );
}
