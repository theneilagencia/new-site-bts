import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Shield, Link as LinkIcon, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function SectionSolutionsPremium() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'offshore',
      icon: Building2,
      title: t.solutions.offshore.title,
      gradient: 'from-blue-50/50 to-white',
      cards: [
        { title: t.solutions.offshore.card1Title, text: t.solutions.offshore.card1Text },
        { title: t.solutions.offshore.card2Title, text: t.solutions.offshore.card2Text },
        { title: t.solutions.offshore.card3Title, text: t.solutions.offshore.card3Text },
      ],
      features: [
        t.solutions.offshore.feature1,
        t.solutions.offshore.feature2,
        t.solutions.offshore.feature3,
        t.solutions.offshore.feature4,
      ],
    },
    {
      id: 'foundation',
      icon: Shield,
      title: t.solutions.foundation.title,
      gradient: 'from-white to-slate-50',
      cards: [
        { title: t.solutions.foundation.card1Title, text: t.solutions.foundation.card1Text },
        { title: t.solutions.foundation.card2Title, text: t.solutions.foundation.card2Text },
        { title: t.solutions.foundation.card3Title, text: t.solutions.foundation.card3Text },
      ],
      features: [
        t.solutions.foundation.feature1,
        t.solutions.foundation.feature2,
        t.solutions.foundation.feature3,
        t.solutions.foundation.feature4,
      ],
    },
    {
      id: 'blocktrust',
      icon: LinkIcon,
      title: t.solutions.blocktrust.title,
      gradient: 'from-purple-50/30 to-white',
      cards: [
        { title: t.solutions.blocktrust.card1Title, text: t.solutions.blocktrust.card1Text },
        { title: t.solutions.blocktrust.card2Title, text: t.solutions.blocktrust.card2Text },
        { title: t.solutions.blocktrust.card3Title, text: t.solutions.blocktrust.card3Text },
      ],
      features: [
        t.solutions.blocktrust.feature1,
        t.solutions.blocktrust.feature2,
        t.solutions.blocktrust.feature3,
        t.solutions.blocktrust.feature4,
      ],
    },
  ];

  return (
    <section id="solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-[#122539]">{t.solutions.title}</h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-32">
          {solutions.map((solution, solutionIndex) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Title */}
                <div className="flex items-center gap-4 mb-12">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-[#185AB4] to-[#006DA5] rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-[#122539]">{solution.title}</h3>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {solution.cards.map((card, cardIndex) => (
                    <motion.div
                      key={cardIndex}
                      className="group relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.1, duration: 0.6 }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative bg-white border border-[#E8E8E8] rounded-2xl p-8 h-full shadow-[0_8px_24px_rgba(18,37,57,0.06)] group-hover:shadow-[0_12px_32px_rgba(18,37,57,0.12)] transition-all duration-500">
                        <h4 className="mb-4 text-[#122539]">{card.title}</h4>
                        <p className="text-[#6B7280] leading-relaxed">{card.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features Table */}
                <motion.div
                  className={`bg-gradient-to-br ${solution.gradient} border border-[#E8E8E8] rounded-2xl p-10 shadow-[0_8px_24px_rgba(18,37,57,0.04)]`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {solution.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + featureIndex * 0.05, duration: 0.4 }}
                        whileHover={{ x: 4 }}
                      >
                        <Check className="w-5 h-5 text-[#185AB4] mt-1 flex-shrink-0" />
                        <p className="text-[#122539]">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#185AB4] hover:text-[#006DA5] group"
                    whileHover={{ x: 4 }}
                  >
                    <span>
                      {solutionIndex === 0 
                        ? (t.language === 'pt' ? 'Explore com o BTS Assistant' : 'Explore with BTS Assistant')
                        : solutionIndex === 1
                        ? (t.language === 'pt' ? 'Comece com o BTS Assistant' : 'Get started with BTS Assistant')
                        : (t.language === 'pt' ? 'Saiba mais' : 'Learn more')
                      }
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
