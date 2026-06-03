'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Lightbulb, Rocket, RefreshCw } from 'lucide-react'
import { SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Entendemos seu negócio, mapeamos gargalos e identificamos onde a automação gera mais ROI imediato.',
    color: '#0EA5E9',
    duration: '30–60 min',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Planejamento',
    desc: 'Desenhamos a arquitetura da solução com escopo claro, prazos definidos e métricas de sucesso acordadas.',
    color: '#6366F1',
    duration: '1–2 dias',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Implementação',
    desc: 'Construímos, testamos e implantamos tudo no seu ambiente com treinamento para sua equipe.',
    color: '#10B981',
    duration: '7–14 dias',
  },
  {
    num: '04',
    icon: RefreshCw,
    title: 'Otimização Contínua',
    desc: 'Monitoramos resultados, ajustamos fluxos e expandimos automações conforme seu negócio cresce.',
    color: '#F59E0B',
    duration: 'Ongoing',
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <section id="como-funciona" ref={containerRef} className="relative py-28 overflow-hidden">
      <SectionOrbs variant="green" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Como funciona"
          title={<>Do diagnóstico ao ar<br /><span className="gradient-text">em até 14 dias</span></>}
          description="Um processo enxuto e transparente. Você não precisa entender de tecnologia — apenas nos contar sobre o seu negócio."
          align="center"
          className="mb-20"
        />

        {/* Timeline — desktop */}
        <div className="hidden lg:block relative">
          {/* Progress line background */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-border" />
          {/* Animated progress */}
          <motion.div
            className="absolute top-14 left-[12.5%] h-px origin-left"
            style={{ width: lineWidth, background: 'linear-gradient(90deg, #0EA5E9, #6366F1, #10B981, #F59E0B)' }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center gap-5 group"
                >
                  {/* Circle */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-[56px] h-[56px] rounded-full bg-surface border-2 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow-blue cursor-default"
                      style={{ borderColor: step.color }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-wider mb-1"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </div>
                    <h3 className="font-syne font-bold text-base text-text-primary mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>

                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${step.color}15`, color: step.color }}
                  >
                    {step.duration}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline — mobile */}
        <div className="lg:hidden flex flex-col gap-6 relative">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-border" />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 pl-0"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 relative"
                  style={{ background: `${step.color}15`, border: `2px solid ${step.color}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <div className="pt-1 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: step.color }}>
                    {step.num} · {step.duration}
                  </span>
                  <h3 className="font-syne font-bold text-base text-text-primary mt-0.5 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://wa.me/5531971836063"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-primary to-secondary shadow-glow-blue hover:shadow-glow-blue transition-all duration-300"
          >
            Começar com diagnóstico gratuito →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
