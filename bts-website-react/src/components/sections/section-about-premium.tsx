import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Heart } from 'lucide-react';
import { useLanguage } from '../../contexts/language-context';

export function SectionAboutPremium() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-[#F6F9FC] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        {/* Header with video placeholder */}
        <motion.div
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-8 text-[#122539]">{t.about.title}</h2>
            <p className="text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
              {t.about.intro}
            </p>
          </div>

          {/* Video manifesto placeholder */}
          <motion.div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#122539] to-[#006DA5]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg">
                {t.language === 'pt' ? 'Manifesto BTS: Estruture o Futuro' : 'BTS Manifesto: Structure the Future'}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll progress indicator */}
        <motion.div
          className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-px h-32 bg-[#E8E8E8] relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#185AB4]"
              style={{ height: '50%' }}
            />
          </div>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/5 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#E8E8E8] rounded-2xl p-10 shadow-[0_8px_24px_rgba(18,37,57,0.06)] group-hover:shadow-[0_12px_32px_rgba(18,37,57,0.1)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#185AB4] to-[#006DA5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#122539]">{t.about.visionTitle}</h3>
                    <p className="text-[#6B7280] text-lg leading-relaxed">
                      {t.about.visionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/5 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#E8E8E8] rounded-2xl p-10 shadow-[0_8px_24px_rgba(18,37,57,0.06)] group-hover:shadow-[0_12px_32px_rgba(18,37,57,0.1)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#185AB4] to-[#006DA5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Compass className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#122539]">{t.about.missionTitle}</h3>
                    <p className="text-[#6B7280] text-lg leading-relaxed">
                      {t.about.missionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#185AB4]/5 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm border border-[#E8E8E8] rounded-2xl p-10 shadow-[0_8px_24px_rgba(18,37,57,0.06)] group-hover:shadow-[0_12px_32px_rgba(18,37,57,0.1)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#185AB4] to-[#006DA5] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-6 text-[#122539]">{t.about.valuesTitle}</h3>
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="mb-2 text-[#122539] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#185AB4]" />
                          {t.about.value1Title}
                        </h4>
                        <p className="text-[#6B7280] pl-4">{t.about.value1Text}</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="mb-2 text-[#122539] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#185AB4]" />
                          {t.about.value2Title}
                        </h4>
                        <p className="text-[#6B7280] pl-4">{t.about.value2Text}</p>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="mb-2 text-[#122539] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#185AB4]" />
                          {t.about.value3Title}
                        </h4>
                        <p className="text-[#6B7280] pl-4">{t.about.value3Text}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
