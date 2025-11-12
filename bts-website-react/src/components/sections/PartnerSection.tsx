import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Globe, Handshake, Award, Zap } from 'lucide-react';
import { ButtonPrimary } from '@/components/ui/ButtonPrimary';
import { useLanguage } from '@/contexts/LanguageContext';

export function PartnerSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // World map with animated points
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const points: { x: number; y: number; alpha: number; growing: boolean }[] = [];
    
    // Generate random partner points
    for (let i = 0; i < 30; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        alpha: Math.random(),
        growing: Math.random() > 0.5,
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(24, 90, 180, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate points
      points.forEach((point) => {
        // Update alpha
        if (point.growing) {
          point.alpha += 0.01;
          if (point.alpha >= 1) point.growing = false;
        } else {
          point.alpha -= 0.01;
          if (point.alpha <= 0.2) point.growing = true;
        }

        // Draw point
        ctx.fillStyle = `rgba(24, 90, 180, ${point.alpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 10);
        gradient.addColorStop(0, `rgba(24, 90, 180, ${point.alpha * 0.5})`);
        gradient.addColorStop(1, 'rgba(24, 90, 180, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
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
    <section id="partner" className="py-32 bg-[#122539] relative overflow-hidden">
      {/* World map canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-white">{t.partner.title}</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            {t.partner.subtitle}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-[#185AB4] mb-6" />
                  </motion.div>
                  <h4 className="mb-4 text-white">{benefit.title}</h4>
                  <p className="text-white/70 leading-relaxed">
                    {benefit.text}
                  </p>
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
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/5 to-transparent rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="mb-4 text-white">{t.partner.ctaTitle}</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.partner.ctaText}
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <ButtonPrimary className="text-lg px-10 py-5 bg-white text-[#122539] hover:bg-white/90 shadow-[0_0_32px_rgba(255,255,255,0.2)]">
                {t.partner.cta}
              </ButtonPrimary>
            </motion.div>

            <motion.p
              className="mt-6 text-white/50 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t.language === 'pt' ? 'Processo de Aprovação Rigoroso' : 'Strict Approval Process'}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
