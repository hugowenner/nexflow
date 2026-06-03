'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, Star, Shield } from 'lucide-react'
import { SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    monthly: 497,
    annual: 447,
    desc: 'Para quem está começando a automatizar o atendimento.',
    color: '#0EA5E9',
    features: [
      'Chatbot WhatsApp básico',
      'Respostas automáticas 24/7',
      'Menu interativo configurável',
      'Até 500 conversas/mês',
      'Relatório mensal básico',
      'Suporte por email',
    ],
  },
  {
    name: 'Pro',
    icon: Star,
    monthly: 797,
    annual: 717,
    desc: 'Para empresas que querem automação real com IA e visibilidade de dados.',
    color: '#6366F1',
    popular: true,
    features: [
      'Agente IA com GPT-4o',
      'CRM integrado ao WhatsApp',
      'Automação de agendamentos',
      'Até 2.000 conversas/mês',
      'Dashboard + relatórios avançados',
      'Suporte prioritário WhatsApp',
      'Integração Google Agenda',
      'Follow-up automático',
    ],
  },
  {
    name: 'Enterprise',
    icon: Shield,
    monthly: 1497,
    annual: 1347,
    desc: 'Operação completa com gerente dedicado e SLA garantido.',
    color: '#10B981',
    features: [
      'Tudo do plano Pro',
      'Automação financeira',
      'Integrações personalizadas',
      'Conversas ilimitadas',
      'Gerente de conta dedicado',
      'SLA de resposta em 2h',
      'Onboarding premium',
      'Infraestrutura dedicada',
    ],
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precos" className="relative py-28 overflow-hidden">
      <SectionOrbs variant="purple" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Planos e preços"
          title={<>Preço justo e<br /><span className="gradient-text">previsível</span></>}
          description="Sem surpresas, sem contratos longos. Cancele quando quiser com 30 dias de aviso."
          align="center"
          className="mb-10"
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium transition-colors ${!annual ? 'text-text-primary' : 'text-muted'}`}>
            Mensal
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full transition-all duration-300 flex-shrink-0"
            style={{ background: annual ? 'linear-gradient(135deg, #0EA5E9, #6366F1)' : 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              animate={{ x: annual ? 28 : 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="absolute top-[3px] w-[22px] h-[22px] bg-white rounded-full shadow-lg"
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors ${annual ? 'text-text-primary' : 'text-muted'}`}>
              Anual
            </span>
            <AnimatePresence>
              {annual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-[11px] font-bold text-success bg-success/10 border border-success/25 px-2 py-0.5 rounded-full"
                >
                  −10%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            const price = annual ? plan.annual : plan.monthly

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white px-4 py-1 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #6366F1, #0EA5E9)' }}>
                      ⭐ Mais Popular
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border flex flex-col gap-5 h-full transition-shadow duration-300"
                  style={{
                    background: plan.popular
                      ? `linear-gradient(160deg, ${plan.color}10, rgba(15,23,42,0.8))`
                      : 'rgba(15,23,42,0.6)',
                    borderColor: plan.popular ? `${plan.color}40` : 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: plan.popular ? `0 0 60px ${plan.color}20` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: plan.color }} />
                    </div>
                    <h3 className="font-syne font-bold text-xl text-text-primary">{plan.name}</h3>
                  </div>

                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-muted text-base pb-1">R$</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="font-syne font-bold text-5xl text-text-primary leading-none"
                        >
                          {price.toLocaleString('pt-BR')}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-muted text-sm pb-1">/mês</span>
                    </div>
                    <p className="text-sm text-muted mt-2 leading-relaxed">{plan.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <div
                          className="w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${plan.color}15` }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                        </div>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/5531971836063"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    target="_blank"
                    className="block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    style={
                      plan.popular
                        ? {
                            background: `linear-gradient(135deg, ${plan.color}, #0EA5E9)`,
                            color: '#fff',
                            boxShadow: `0 0 30px ${plan.color}40`,
                          }
                        : {
                            background: `${plan.color}10`,
                            color: plan.color,
                            border: `1px solid ${plan.color}30`,
                          }
                    }
                  >
                    Começar agora
                  </motion.a>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted mt-10"
        >
          Todos os planos incluem instalação gratuita · Sem taxa de setup · Cancele quando quiser
        </motion.p>
      </div>
    </section>
  )
}
