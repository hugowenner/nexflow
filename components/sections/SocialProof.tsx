'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const logos = [
  { abbr: 'DC', name: 'DentCare', color: '#0EA5E9' },
  { abbr: 'AP', name: 'AutoPro', color: '#F59E0B' },
  { abbr: 'CC', name: 'CasaCerta', color: '#10B981' },
  { abbr: 'PM', name: 'PedroMed', color: '#8B5CF6' },
  { abbr: 'VF', name: 'VitaFit', color: '#EC4899' },
  { abbr: 'LT', name: 'LogiTech MG', color: '#14B8A6' },
]

const stats = [
  { value: 320, suffix: '%', label: 'mais respostas automáticas', sub: 'média nos primeiros 60 dias', color: '#0EA5E9' },
  { value: 1.2, suffix: 'M', label: 'mensagens processadas', sub: 'por mês nos clientes ativos', color: '#6366F1', decimals: 1 },
  { value: 98.7, suffix: '%', label: 'satisfação dos clientes', sub: 'CSAT médio da plataforma', color: '#10B981', decimals: 1 },
  { value: 14, suffix: 'dias', label: 'tempo médio de implantação', sub: 'do diagnóstico ao ar', color: '#F59E0B' },
]

function StatCard({ value, suffix, label, sub, color, decimals = 0, delay }: {
  value: number; suffix: string; label: string; sub: string; color: string; decimals?: number; delay: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-2 p-6 rounded-2xl bg-surface/60 border border-border hover:border-white/10 transition-all duration-300 group"
    >
      <div className="flex items-end gap-1 leading-none">
        <span
          className="font-syne font-bold text-5xl lg:text-6xl"
          style={{ color }}
        >
          {inView ? (
            <CountUp
              end={value}
              duration={2.5}
              decimals={decimals}
              separator="."
              decimal=","
              useEasing
            />
          ) : '0'}
        </span>
        <span className="font-syne font-bold text-2xl pb-1" style={{ color }}>
          {suffix}
        </span>
      </div>
      <p className="font-semibold text-text-primary text-sm">{label}</p>
      <p className="text-xs text-muted">{sub}</p>
      <div
        className="h-0.5 w-0 group-hover:w-full rounded transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </motion.div>
  )
}

export function SocialProof() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border">
      {/* Logos strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-widest text-muted mb-8"
        >
          Empresas que já automatizaram com a NexFlow
        </motion.p>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden mb-20">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #020617, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #020617, transparent)' }}
          />
          <div
            className="flex gap-12 w-max"
            style={{ animation: 'scroll-x 30s linear infinite' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity cursor-default flex-shrink-0"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `${logo.color}30`, color: logo.color }}
                >
                  {logo.abbr}
                </div>
                <span className="font-syne font-bold text-sm text-text-primary whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
