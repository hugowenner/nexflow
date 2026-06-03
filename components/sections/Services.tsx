'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Bot, BarChart3, Workflow, Globe, LayoutDashboard, Server, Plug } from 'lucide-react'
import { GlowCard, SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

const services = [
  {
    icon: MessageCircle,
    name: 'IA para WhatsApp',
    desc: 'Agente que responde 24/7, qualifica leads e agenda automaticamente.',
    price: 'A partir de R$ 297/mês',
    color: '#10B981',
    size: 'large',
    tag: 'Mais popular',
  },
  {
    icon: Bot,
    name: 'Agentes de IA',
    desc: 'Agentes autônomos treinados no contexto do seu negócio.',
    price: 'A partir de R$ 497/mês',
    color: '#0EA5E9',
    size: 'medium',
  },
  {
    icon: BarChart3,
    name: 'CRM Integrado',
    desc: 'Pipeline de vendas, histórico de clientes e follow-up automático.',
    price: 'A partir de R$ 247/mês',
    color: '#6366F1',
    size: 'medium',
  },
  {
    icon: Workflow,
    name: 'Automações',
    desc: 'Fluxos automáticos de agendamento, cobrança e notificação.',
    price: 'A partir de R$ 197/mês',
    color: '#F59E0B',
    size: 'medium',
  },
  {
    icon: Globe,
    name: 'Sites & Landing Pages',
    desc: 'Presença digital profissional integrada às automações.',
    price: 'A partir de R$ 1.497 único',
    color: '#0EA5E9',
    size: 'medium',
  },
  {
    icon: LayoutDashboard,
    name: 'Dashboards',
    desc: 'Visibilidade em tempo real de métricas e performance.',
    price: 'Incluso nos planos Pro+',
    color: '#10B981',
    size: 'medium',
  },
  {
    icon: Server,
    name: 'Infraestrutura',
    desc: 'Servidor, domínio, SSL, backups e monitoramento 24/7.',
    price: 'Incluso em todos os planos',
    color: '#6366F1',
    size: 'medium',
  },
  {
    icon: Plug,
    name: 'Integrações',
    desc: 'Google Agenda, Notion, planilhas, sistemas legados e muito mais.',
    price: 'A partir de R$ 97/integração',
    color: '#F59E0B',
    size: 'medium',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon
  const isLarge = service.size === 'large'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={isLarge ? 'sm:col-span-2 lg:col-span-2' : ''}
    >
      <GlowCard
        glowColor={service.color}
        className={`p-6 flex flex-col gap-5 h-full group ${isLarge ? 'lg:flex-row lg:items-start lg:gap-8' : ''}`}
      >
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
              style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
            >
              <Icon className="w-5 h-5" style={{ color: service.color }} />
            </div>
            {service.tag && (
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ background: `${service.color}20`, color: service.color }}
              >
                {service.tag}
              </span>
            )}
          </div>

          <div>
            <h3 className="font-syne font-bold text-base text-text-primary mb-1.5">{service.name}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
          </div>
        </div>

        <div className={`${isLarge ? 'lg:flex-shrink-0 lg:pt-1' : ''}`}>
          <div
            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full border"
            style={{ color: service.color, background: `${service.color}10`, borderColor: `${service.color}25` }}
          >
            {service.price}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="servicos" className="relative py-28 overflow-hidden">
      <SectionOrbs variant="purple" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Nossos serviços"
          title={<>Tudo que seu negócio<br /><span className="gradient-text">precisa para</span><br />crescer automatizado</>}
          description="Cada serviço foi desenhado para o contexto real de PMEs brasileiras — implantação rápida, resultado medível, suporte humano."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
