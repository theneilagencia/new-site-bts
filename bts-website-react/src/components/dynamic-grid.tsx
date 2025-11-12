import React, { useRef, useEffect } from 'react';

export function DynamicGrid() {
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

    const gridSize = 40;
    let offsetY = 0;

    function drawGrid() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vertical lines
      ctx.strokeStyle = 'rgba(31, 74, 255, 0.08)';
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with parallax
      for (let y = offsetY % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Energy lines (random highlights)
      if (Math.random() > 0.98) {
        const randomX = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        const gradient = ctx.createLinearGradient(randomX, 0, randomX, canvas.height);
        gradient.addColorStop(0, 'rgba(79, 123, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(79, 123, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(79, 123, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(randomX, 0);
        ctx.lineTo(randomX, canvas.height);
        ctx.stroke();
      }

      offsetY += 0.5; // Slow parallax movement
      requestAnimationFrame(drawGrid);
    }

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
