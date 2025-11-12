import { useEffect, useRef } from 'react';

export function WorldMapCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create world map dot pattern
    const dots: { x: number; y: number; opacity: number; pulseDelay: number }[] = [];
    const gridSpacing = 30;
    
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        // Only add dots in "land" areas (simplified world map simulation)
        const lat = ((y / canvas.height) * 180) - 90;
        const lon = ((x / canvas.width) * 360) - 180;
        
        // Simplified land detection (very basic)
        const isLand = Math.abs(lat) < 70 && (
          (lon > -120 && lon < -70 && lat > 15) || // North America
          (lon > -80 && lon < -35 && lat > -55 && lat < 10) || // South America
          (lon > -10 && lon < 60 && lat > 35) || // Europe
          (lon > 10 && lon < 50 && lat > -35 && lat < 35) || // Africa
          (lon > 60 && lon < 150 && lat > -10 && lat < 70) // Asia
        );
        
        if (isLand && Math.random() > 0.5) {
          dots.push({
            x,
            y,
            opacity: Math.random() * 0.5 + 0.3,
            pulseDelay: Math.random() * 3,
          });
        }
      }
    }

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots with pulse effect
      dots.forEach((dot) => {
        const pulse = Math.sin(time + dot.pulseDelay) * 0.3 + 0.7;
        const size = 2 * pulse;
        
        ctx.fillStyle = `rgba(24, 90, 180, ${dot.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines (sparse)
      ctx.strokeStyle = 'rgba(24, 90, 180, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < dots.length; i += 20) {
        const dot1 = dots[i];
        for (let j = i + 1; j < Math.min(i + 40, dots.length); j += 20) {
          const dot2 = dots[j];
          const distance = Math.sqrt((dot2.x - dot1.x) ** 2 + (dot2.y - dot1.y) ** 2);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }

      time += 0.02;
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
      className="absolute inset-0 opacity-40 pointer-events-none"
    />
  );
}
