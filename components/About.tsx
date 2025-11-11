'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '500+', label: 'Clientes Atendidos' },
    { value: '50+', label: 'Países' },
    { value: '15+', label: 'Anos de Experiência' },
    { value: '98%', label: 'Satisfação do Cliente' },
  ]

  return (
    <section id="sobre" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a BTS Global Corp
          </h2>
          <p className="text-xl text-gray-600">
            Somos uma empresa líder em soluções empresariais globais, dedicada a transformar desafios em oportunidades de crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Proporcionar soluções empresariais inovadoras que impulsionem o crescimento sustentável de nossos clientes, através de consultoria estratégica, tecnologia de ponta e expertise global.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Acreditamos que cada empresa tem potencial único, e nosso papel é desbloquear esse potencial através de estratégias personalizadas e execução impecável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <ul className="space-y-3">
              {[
                'Excelência em tudo que fazemos',
                'Inovação constante',
                'Integridade e transparência',
                'Foco no cliente',
                'Trabalho em equipe',
              ].map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
