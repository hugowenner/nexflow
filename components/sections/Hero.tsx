'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles, TrendingUp, Users, Zap, Bell } from 'lucide-react'
import { AnimatedGrid } from '@/components/ui/AnimatedGrid'

// ── Dashboard mockup ──────────────────────────────────────────────────────────

function MiniSparkline({ color = '#0EA5E9' }: { color?: string }) {
  const points = [0, 30, 15, 45, 35, 60, 50, 80, 65, 90, 75, 100]
  const w = 120, h = 40
  const max = Math.max(...points)
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w
    const y = h - (p / max) * h
    return `${x},${y}`
  })
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={coords.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FloatingNotification({ delay, icon, text, sub, color }: {
  delay: number; icon: React.ReactNode; text: string; sub: string; color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl px-3 py-2 flex items-center gap-2.5 shadow-card w-52"
      style={{ animation: `float ${5 + delay}s ease-in-out ${delay}s infinite` }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}20` }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-text-primary leading-tight">{text}</p>
        <p className="text-[10px] text-muted">{sub}</p>
      </div>
      <div
        className="w-1.5 h-1.5 rounded-full ml-auto flex-shrink-0 animate-pulse"
        style={{ background: color }}
      />
    </motion.div>
  )
}

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Glow behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative glass rounded-2xl p-5 shadow-card border border-white/[0.08]"
        style={{ animation: 'float 8s ease-in-out infinite' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted font-medium">Dashboard — NexFlow IA</p>
            <p className="text-sm font-semibold text-text-primary">Visão geral em tempo real</p>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-danger/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-success/80" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: 'Respostas', value: '1.2K', trend: '+32%', color: '#0EA5E9' },
            { label: 'Conversões', value: '89', trend: '+18%', color: '#10B981' },
            { label: 'Satisfação', value: '98%', trend: '+4%', color: '#6366F1' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] rounded-xl p-2.5 border border-white/[0.04]"
            >
              <p className="text-[9px] text-muted mb-0.5">{stat.label}</p>
              <p className="text-base font-bold font-syne text-text-primary leading-tight">{stat.value}</p>
              <p className="text-[9px] font-semibold mt-0.5" style={{ color: stat.color }}>{stat.trend}</p>
              <MiniSparkline color={stat.color} />
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">Atividade recente</p>
          {[
            { msg: 'Lead capturado — Clínica Silva', time: 'Agora', color: '#10B981' },
            { msg: 'Agendamento confirmado — AutoPro', time: '2min', color: '#0EA5E9' },
            { msg: 'Follow-up enviado automaticamente', time: '5min', color: '#6366F1' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.3 }}
              className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: item.color }}
              />
              <p className="text-[11px] text-text-primary flex-1">{item.msg}</p>
              <p className="text-[10px] text-muted">{item.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating cards */}
      <div className="absolute -left-16 top-10 hidden lg:block">
        <FloatingNotification
          delay={0.8}
          icon={<MessageCircle className="w-4 h-4" />}
          text="Novo lead qualificado"
          sub="Imobiliária CasaCerta"
          color="#10B981"
        />
      </div>
      <div className="absolute -right-14 top-1/3 hidden lg:block">
        <FloatingNotification
          delay={1.1}
          icon={<TrendingUp className="w-4 h-4" />}
          text="+52% menos faltas"
          sub="DentCare Clínica"
          color="#0EA5E9"
        />
      </div>
      <div className="absolute -left-12 bottom-16 hidden lg:block">
        <FloatingNotification
          delay={1.4}
          icon={<Bell className="w-4 h-4" />}
          text="Agendamento confirmado"
          sub="Lembrete enviado ✓"
          color="#6366F1"
        />
      </div>
      <div className="absolute -right-8 bottom-8 hidden lg:block">
        <FloatingNotification
          delay={1.7}
          icon={<Users className="w-4 h-4" />}
          text="100 leads este mês"
          sub="Recorde histórico 🚀"
          color="#F59E0B"
        />
      </div>
    </div>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const rotateX = useTransform(springY, [-300, 300], [3, -3])
  const rotateY = useTransform(springX, [-300, 300], [-3, 3])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      <AnimatedGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Automação com IA para PMEs Brasileiras
              <span className="w-2 h-2 rounded-full bg-success animate-pulse ml-1" />
            </motion.div>

            <div className="flex flex-col gap-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter text-text-primary"
              >
                Automatize
                <br />
                <span className="gradient-text">o que te</span>
                <br />
                atrasa.
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter text-muted"
              >
                Escale o que
                <br />
                <span className="text-text-primary">importa.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-muted leading-relaxed max-w-lg"
            >
              Agentes de IA que respondem clientes, confirmam agendamentos e geram leads — enquanto você cuida do que realmente importa no seu negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href="#precos"
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(14,165,233,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-glow-blue transition-all duration-300 text-sm"
              >
                Ver demonstração
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/5531971836063"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-success border border-success/30 bg-success/5 hover:bg-success/10 hover:border-success/50 transition-all duration-300 text-sm"
                target="_blank"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </motion.a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                {['DC', 'AP', 'CC', 'VF', 'LT'].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-[9px] font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="text-text-primary font-semibold">+50 empresas</span> automatizando agora
              </p>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="relative"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
