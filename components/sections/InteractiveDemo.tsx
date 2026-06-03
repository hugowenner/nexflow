'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Database, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

type Message = {
  id: number
  role: 'user' | 'ai'
  text: string
  delay: number
}

const flows: { label: string; icon: string; messages: Message[] }[] = [
  {
    label: 'Clínica / Saúde',
    icon: '🏥',
    messages: [
      { id: 1, role: 'user', text: 'Oi! Quero marcar uma consulta pra amanhã 🦷', delay: 500 },
      { id: 2, role: 'ai', text: 'Olá! Sou o assistente da Clínica DentCare 😊\n\nTemos horários disponíveis amanhã:\n• 10h00 — Dr. Carvalho\n• 14h00 — Dra. Fernanda\n• 16h30 — Dr. Carvalho\n\nQual prefere?', delay: 1800 },
      { id: 3, role: 'user', text: '14h com a Dra. Fernanda', delay: 3200 },
      { id: 4, role: 'ai', text: '✅ Consulta agendada!\n\n*Amanhã às 14h00 — Dra. Fernanda*\n\nVou te enviar um lembrete 1h antes. Qualquer imprevisto, é só avisar aqui 👍', delay: 4800 },
      { id: 5, role: 'user', text: 'Perfeito, obrigado!', delay: 6200 },
      { id: 6, role: 'ai', text: 'Ótimo! Até amanhã! Se precisar de qualquer coisa antes, estou aqui 24/7 🤗', delay: 7400 },
    ],
  },
  {
    label: 'Oficina / Auto',
    icon: '🔧',
    messages: [
      { id: 1, role: 'user', text: 'Boa tarde! Meu carro tá fazendo barulho estranho ao frear', delay: 500 },
      { id: 2, role: 'ai', text: 'Olá! Sou o assistente da AutoPro Oficina 🔧\n\nEntendi! Para te dar um orçamento preciso, me conta:\n1. Qual o modelo e ano do veículo?\n2. O barulho é ao frear ou sempre?', delay: 1800 },
      { id: 3, role: 'user', text: 'Honda Civic 2019, só ao frear mesmo', delay: 3000 },
      { id: 4, role: 'ai', text: 'Perfeito! Provavelmente pastilhas de freio desgastadas.\n\n💰 *Orçamento estimado:*\nPastilhas dianteiras: R$ 280–350\nMão de obra: R$ 120\n*Total: ~R$ 400–470*\n\nTemos vaga hoje às 15h ou amanhã manhã. Qual prefere?', delay: 4800 },
      { id: 5, role: 'user', text: 'Amanhã manhã, que horas?', delay: 6200 },
      { id: 6, role: 'ai', text: '✅ Reservado para amanhã às 08h30!\n\nVocê receberá confirmação por SMS. Chegue 10min antes 🚗', delay: 7600 },
    ],
  },
  {
    label: 'Imobiliária',
    icon: '🏠',
    messages: [
      { id: 1, role: 'user', text: 'Vi um apartamento no portal por R$ 450k, ainda disponível?', delay: 500 },
      { id: 2, role: 'ai', text: 'Olá! Sou da CasaCerta Imobiliária! 🏠\n\nSim, o Apto 703 ainda está disponível!\n\n📋 *Resumo:*\n• 2 quartos, 1 suite\n• 78m², varanda gourmet\n• 1 vaga coberta\n• IPTU: R$ 180/mês\n\nGostaria de agendar uma visita?', delay: 1800 },
      { id: 3, role: 'user', text: 'Sim! Tenho disponibilidade sábado', delay: 3200 },
      { id: 4, role: 'ai', text: 'Ótimo! Temos 3 horários disponíveis no sábado:\n• 09h00\n• 11h00\n• 14h30\n\nQual prefere?', delay: 4600 },
      { id: 5, role: 'user', text: '11h perfeito', delay: 5800 },
      { id: 6, role: 'ai', text: '✅ Visita agendada para sábado às 11h!\n\nNosso corretor Marcos vai te encontrar na recepção. Qualquer dúvida, estou aqui! 🔑', delay: 7200 },
    ],
  },
]

const flowSteps = [
  { icon: '💬', label: 'Cliente manda mensagem', color: '#0EA5E9' },
  { icon: '🤖', label: 'IA analisa e responde', color: '#6366F1' },
  { icon: '📅', label: 'Agenda / qualifica lead', color: '#10B981' },
  { icon: '✅', label: 'Confirmação automática', color: '#F59E0B' },
  { icon: '📊', label: 'Lead salvo no CRM', color: '#EC4899' },
]

export function InteractiveDemo() {
  const [activeFlow, setActiveFlow] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)
  const [running, setRunning] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const runDemo = () => {
    clearTimers()
    setVisibleMessages([])
    setIsTyping(false)
    setActiveStep(-1)
    setRunning(true)

    const flow = flows[activeFlow]

    flow.messages.forEach((msg, i) => {
      if (msg.role === 'ai') {
        const typingId = setTimeout(() => {
          setIsTyping(true)
        }, msg.delay - 600)
        timers.current.push(typingId)
      }
      const showId = setTimeout(() => {
        setIsTyping(false)
        setVisibleMessages((prev) => [...prev, msg.id])
        setActiveStep(i >= 3 ? 2 : i >= 1 ? 1 : 0)
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
      }, msg.delay)
      timers.current.push(showId)
    })

    const step3 = setTimeout(() => setActiveStep(3), 5500)
    const step4 = setTimeout(() => { setActiveStep(4); setRunning(false) }, 8000)
    timers.current.push(step3, step4)
  }

  useEffect(() => {
    const id = setTimeout(runDemo, 600)
    return () => { clearTimeout(id); clearTimers() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFlow])

  const messages = flows[activeFlow].messages.filter((m) => visibleMessages.includes(m.id))

  return (
    <section id="demo" className="relative py-28 overflow-hidden border-y border-border">
      <SectionOrbs variant="purple" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Demo interativa"
          title={<>Veja a IA trabalhando<br /><span className="gradient-text">em tempo real</span></>}
          description="Escolha um segmento e veja como o agente NexFlow responde, agenda e salva o lead no CRM — tudo automaticamente."
          align="center"
          className="mb-12"
        />

        {/* Segment tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {flows.map((flow, i) => (
            <button
              key={flow.label}
              onClick={() => setActiveFlow(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFlow === i
                  ? 'bg-primary text-white shadow-glow-blue-sm'
                  : 'bg-surface border border-border text-muted hover:text-text-primary hover:border-white/15'
              }`}
            >
              <span>{flow.icon}</span>
              {flow.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
          {/* Chat window */}
          <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-card">
            {/* Header */}
            <div className="px-4 py-3 border-b border-border flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-success/70" />
              </div>
              <div className="flex items-center gap-2 ml-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-text-primary">Assistente NexFlow IA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              </div>
              <button
                onClick={runDemo}
                disabled={running}
                className="ml-auto text-xs font-medium text-primary hover:text-primary/80 transition-colors disabled:opacity-50"
              >
                {running ? 'Executando...' : '↺ Reiniciar'}
              </button>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="h-80 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth">
              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-primary text-white rounded-br-sm'
                          : 'bg-white/[0.06] text-text-primary rounded-bl-sm border border-white/[0.06]'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/[0.06] border border-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-muted"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.16 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Flow steps */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
              Fluxo de automação
            </p>
            {flowSteps.map((step, i) => {
              const isActive = activeStep >= i
              const isCurrent = activeStep === i
              return (
                <motion.div
                  key={step.label}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    x: isCurrent ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-3.5 p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'border-white/10 bg-white/[0.04]'
                      : 'border-border bg-transparent'
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? `${step.color}20` : 'rgba(255,255,255,0.04)',
                      border: isActive ? `1px solid ${step.color}40` : '1px solid transparent',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: isActive ? step.color : '#94A3B8' }}
                  >
                    {step.label}
                  </span>
                  {isActive && i < activeStep && (
                    <CheckCircle2 className="w-4 h-4 ml-auto text-success flex-shrink-0" />
                  )}
                  {isCurrent && (
                    <ArrowRight className="w-4 h-4 ml-auto animate-pulse flex-shrink-0" style={{ color: step.color }} />
                  )}
                </motion.div>
              )
            })}

            {activeStep >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 p-4 rounded-xl border border-success/25 bg-success/8 flex items-center gap-3"
              >
                <Database className="w-5 h-5 text-success flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-success">Lead salvo no CRM!</p>
                  <p className="text-xs text-muted">Nome, contato e contexto registrados automaticamente</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
