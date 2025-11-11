import React, { useRef, useEffect } from 'react';

export function LogicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Logic particles (interconnected nodes)
    const particles: { 
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      connections: number[];
      pulse: number;
    }[] = [];
    
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(79, 123, 255, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.15;
            ctx.strokeStyle = `rgba(79, 123, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        const pulseSize = Math.sin(p.pulse) * 0.3 + 1;
        
        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 10 * pulseSize);
        gradient.addColorStop(0, 'rgba(79, 123, 255, 0.6)');
        gradient.addColorStop(0.5, 'rgba(79, 123, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(79, 123, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + Math.sin(p.pulse) * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}
