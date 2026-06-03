'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowUpRight } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { GlowCard, SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

function MiniBarChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-1 h-12">
      {data.map((val, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(val / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
          className="flex-1 rounded-sm min-h-[2px]"
          style={{ background: i === data.length - 1 ? color : `${color}50` }}
        />
      ))}
    </div>
  )
}

const cases = [
  {
    company: 'Clínica DentCare',
    segment: 'Odontologia',
    metric: 52,
    suffix: '%',
    prefix: '−',
    metricLabel: 'menos faltas',
    period: '60 dias',
    before: '38% de presença confirmada',
    after: '91% de presença confirmada',
    desc: 'Confirmações automáticas e reagendamentos via WhatsApp eliminaram quase todas as faltas sem aviso — agenda sempre cheia de verdade.',
    chart: [20, 28, 35, 30, 48, 42, 58, 55, 70, 68, 80, 91],
    color: '#0EA5E9',
  },
  {
    company: 'AutoPro Oficina',
    segment: 'Automotivo',
    metric: 100,
    suffix: '%',
    metricLabel: 'orçamentos respondidos',
    period: '30 dias',
    before: '3h para responder orçamento',
    after: 'Resposta em menos de 2 minutos',
    desc: 'O agente IA recebe a foto, faz as perguntas certas, gera o orçamento e envia para o cliente — sem tirar o mecânico do serviço.',
    chart: [12, 18, 22, 30, 35, 45, 52, 60, 72, 80, 88, 100],
    color: '#10B981',
  },
  {
    company: 'CasaCerta Imobiliária',
    segment: 'Real Estate',
    metric: 91,
    suffix: '%',
    metricLabel: 'taxa de resposta a leads',
    period: '45 dias',
    before: '23% de taxa de resposta',
    after: '91% de taxa de resposta',
    desc: 'Leads do portal, site e redes sociais agora são qualificados e respondidos em segundos, independente do horário.',
    chart: [23, 30, 38, 45, 52, 60, 65, 72, 78, 84, 88, 91],
    color: '#6366F1',
  },
]

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <GlowCard glowColor={c.color} className="p-6 flex flex-col gap-5 h-full group">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{c.segment}</p>
            <h3 className="font-syne font-bold text-lg text-text-primary mt-0.5">{c.company}</h3>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${c.color}15` }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: c.color }} />
          </div>
        </div>

        {/* Metric */}
        <div className="flex items-end gap-1">
          {c.prefix && (
            <span className="font-syne font-bold text-4xl leading-none" style={{ color: c.color }}>
              {c.prefix}
            </span>
          )}
          <span className="font-syne font-bold text-5xl leading-none" style={{ color: c.color }}>
            {inView ? (
              <CountUp end={c.metric} duration={2} suffix={c.suffix} useEasing />
            ) : `0${c.suffix}`}
          </span>
        </div>
        <p className="font-semibold text-text-primary -mt-2">{c.metricLabel}</p>

        {/* Chart */}
        <MiniBarChart data={c.chart} color={c.color} />

        {/* Before/After */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-danger/8 border border-danger/15">
            <p className="text-[10px] text-danger/80 font-semibold uppercase tracking-wide mb-1">Antes</p>
            <p className="text-xs text-muted">{c.before}</p>
          </div>
          <div className="p-2.5 rounded-lg border" style={{ background: `${c.color}08`, borderColor: `${c.color}20` }}>
            <p className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color: c.color }}>Depois</p>
            <p className="text-xs text-muted">{c.after}</p>
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed">{c.desc}</p>

        <div
          className="mt-auto flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-default"
          style={{ color: c.color }}
        >
          Resultado em {c.period}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </GlowCard>
    </motion.div>
  )
}

export function Cases() {
  return (
    <section id="cases" className="relative py-28 overflow-hidden">
      <SectionOrbs variant="default" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Resultados reais"
          title={<>Empresas que<br /><span className="gradient-text">transformaram</span><br />o operacional</>}
          description="Resultados mensuráveis nos primeiros 30–60 dias de automação. Sem promessas — apenas números reais."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <CaseCard key={c.company} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
