import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, Globe, Handshake, Award, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';
import { ButtonAI } from '../ui/button-ai';

export function PartnerBigTech() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: { x: number; y: number; pulse: number; growing: boolean }[] = [];
    for (let i = 0; i < 25; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        pulse: Math.random(),
        growing: Math.random() > 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      ctx.strokeStyle = 'rgba(79, 123, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Points
      points.forEach((p) => {
        p.pulse += p.growing ? 0.01 : -0.01;
        if (p.pulse >= 1) p.growing = false;
        if (p.pulse <= 0.3) p.growing = true;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
        gradient.addColorStop(0, `rgba(79, 123, 255, ${p.pulse})`);
        gradient.addColorStop(1, 'rgba(79, 123, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${p.pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const benefits = [
    { icon: Users, title: t.partner.benefit1Title, text: t.partner.benefit1Text },
    { icon: TrendingUp, title: t.partner.benefit2Title, text: t.partner.benefit2Text },
    { icon: Globe, title: t.partner.benefit3Title, text: t.partner.benefit3Text },
    { icon: Handshake, title: t.partner.benefit4Title, text: t.partner.benefit4Text },
    { icon: Award, title: t.partner.benefit5Title, text: t.partner.benefit5Text },
    { icon: Zap, title: t.partner.benefit6Title, text: t.partner.benefit6Text },
  ];

  return (
    <section id="partner" className="py-40 bg-[#122539] relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-white">{t.partner.title}</h2>
          <p className="text-2xl text-[#C6CEDF] max-w-3xl mx-auto mb-4">{t.partner.subtitle}</p>
          
          {/* New intro paragraph */}
          <motion.p 
            className="text-lg text-[#C6CEDF]/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.partner.intro}
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                className="group relative" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.3 + index * 0.1 }} 
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-[#0A0E16]/60 backdrop-blur-2xl border border-[#4F7BFF]/20 rounded-2xl p-8 h-full group-hover:border-[#4F7BFF]/40 transition-all">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }} 
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-[#4F7BFF] mb-6" />
                  </motion.div>
                  <h4 className="mb-4 text-white">{benefit.title}</h4>
                  <p className="text-[#C6CEDF] leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center relative" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F4AFF]/5 to-transparent rounded-3xl blur-3xl" />
          <div className="relative bg-[#0A0E16]/60 backdrop-blur-2xl border border-[#4F7BFF]/30 rounded-3xl p-12">
            <h3 className="mb-4 text-white">{t.partner.ctaTitle}</h3>
            <p className="text-lg text-[#C6CEDF] mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.partner.ctaText}
            </p>
            
            <ButtonAI>
              {t.partner.cta}
            </ButtonAI>
          </div>
        </motion.div>
      </div>
    </section>
  );
}