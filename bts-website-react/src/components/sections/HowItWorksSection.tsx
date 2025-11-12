import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t.howItWorks?.step1 || 'Diga-nos seus objetivos',
      description: 'Expansão, proteção ou sucessão',
    },
    {
      number: '02',
      title: t.howItWorks?.step2 || 'Sugerimos a estrutura certa',
      description: 'Baseado em seu perfil e necessidades',
    },
    {
      number: '03',
      title: t.howItWorks?.step3 || 'Você revisa e confirma',
      description: 'Total transparência no processo',
    },
    {
      number: '04',
      title: t.howItWorks?.step4 || 'Checkout e criação',
      description: 'Processo simples e seguro',
    },
    {
      number: '05',
      title: t.howItWorks?.step5 || 'Receba e gerencie',
      description: 'Tudo dentro do ChatGPT',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-[#0A2540] to-[#122539] overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.howItWorks?.title || 'Como Funciona'}
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Processo simples e transparente para estruturar seu patrimônio globalmente
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-[#185AB4] to-[#006DA5]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Number Circle */}
                  <motion.div
                    className="relative z-10 mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-[#185AB4] to-[#006DA5] flex items-center justify-center mb-6 shadow-xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-2 rounded-full bg-[#0A2540] flex items-center justify-center"
                      whileHover={{ scale: 0.95 }}
                    >
                      <span className="text-3xl font-extrabold text-white">
                        {step.number}
                      </span>
                    </motion.div>
                    
                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#185AB4]"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#185AB4] to-[#006DA5] flex items-center justify-center shadow-xl">
                  <span className="text-xl font-extrabold text-white">
                    {step.number}
                  </span>
                </div>
                
                {/* Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-8 w-0.5 h-12 bg-white/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#185AB4] to-[#006DA5] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.howItWorks?.cta || 'Criar Minha Estrutura'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
