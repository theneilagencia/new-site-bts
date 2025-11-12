import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/language-context';
import { ButtonAI } from '../ui/button-ai';
import { ButtonText } from '../ui/button-text';

export function TrustedBigTech() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Orbital particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number }[] = [];
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = `rgba(79, 123, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 15);
        gradient.addColorStop(0, `rgba(79, 123, 255, ${p.alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(79, 123, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 15, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock logos
  const logos = Array(8).fill(null);

  return (
    <section className="relative py-40 bg-[#0B1221] overflow-hidden">
      {/* Animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Vertical light beam loop */}
      <motion.div
        className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#4F7BFF] to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#4F7BFF] to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1F4AFF]/10 backdrop-blur-xl border border-[#4F7BFF]/30 rounded-full mb-12"
            whileHover={{ scale: 1.05, borderColor: 'rgba(79, 123, 255, 0.5)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-[#4F7BFF] rounded-full shadow-[0_0_10px_#4F7BFF]" />
            <span className="text-white font-medium">{t.trusted.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mb-12 text-white"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t.trusted.title}
          </motion.h2>

          {/* Text content */}
          <motion.div
            className="space-y-8 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl text-[#C6CEDF] leading-relaxed">
              {t.trusted.text1}
            </p>
            <p className="text-xl text-[#C6CEDF] leading-relaxed">
              {t.trusted.text2}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-24"
          >
            <motion.button
              className="relative px-12 py-5 bg-white text-[#0B1221] text-lg font-semibold rounded-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4F7BFF]/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10">{t.trusted.cta}</span>
              
              {/* Pulse glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: ['0 0 20px rgba(79, 123, 255, 0.3)', '0 0 40px rgba(79, 123, 255, 0.5)', '0 0 20px rgba(79, 123, 255, 0.3)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {logos.map((_, i) => (
              <motion.div
                key={i}
                className="h-20 bg-[#1F4AFF]/5 backdrop-blur-sm border border-[#4F7BFF]/20 rounded-xl flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.05, duration: 0.5 }}
                whileHover={{
                  borderColor: 'rgba(79, 123, 255, 0.5)',
                  scale: 1.05,
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <div className="w-24 h-8 bg-[#C6CEDF]/20 rounded" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { value: '100+', label: t.trusted.stat1Label },
              { value: '24/7', label: t.trusted.stat2Label },
              { value: '100%', label: t.trusted.stat3Label },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-6xl font-bold text-white mb-3 bg-gradient-to-r from-white to-[#4F7BFF] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-[#C6CEDF] uppercase text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}