import { useEffect, useRef } from 'react';

export function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = Math.min(600, window.innerWidth * 0.8);
      canvas.height = Math.min(600, window.innerWidth * 0.8);
    };
    resize();
    window.addEventListener('resize', resize);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 40;

    // Animation state
    let rotation = 0;
    const particles: { x: number; y: number; z: number; angle: number }[] = [];

    // Create orbital particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: 0,
        y: 0,
        z: 0,
        angle: (Math.PI * 2 * i) / 60,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw meridians and parallels
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      // Meridians (vertical lines)
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + rotation;
        ctx.beginPath();
        for (let j = 0; j <= 50; j++) {
          const t = (j / 50) * Math.PI;
          const x = centerX + Math.sin(t) * radius * Math.cos(angle);
          const y = centerY + Math.cos(t) * radius;
          const z = Math.sin(t) * radius * Math.sin(angle);
          
          if (z > 0) {
            ctx.globalAlpha = 0.3;
          } else {
            ctx.globalAlpha = 0.1;
          }
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Parallels (horizontal circles)
      for (let i = 1; i < 5; i++) {
        const lat = (Math.PI * i) / 5;
        const r = Math.sin(lat) * radius;
        const y = centerY - Math.cos(lat) * radius;
        
        ctx.beginPath();
        ctx.arc(centerX, y, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw orbital particles
      ctx.fillStyle = 'rgba(33, 182, 243, 0.8)';
      particles.forEach((particle, i) => {
        const angle = particle.angle + rotation;
        const orbitRadius = radius * 1.1;
        const x = centerX + Math.cos(angle) * orbitRadius * Math.cos(rotation * 0.5);
        const y = centerY + Math.sin(angle) * orbitRadius * 0.3;
        const z = Math.cos(angle) * orbitRadius * Math.sin(rotation * 0.5);
        
        // Size based on depth
        const size = z > 0 ? 3 : 2;
        const alpha = z > 0 ? 0.8 : 0.3;
        
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      rotation += 0.005;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
      style={{ maxWidth: '600px', maxHeight: '600px' }}
    />
  );
}
