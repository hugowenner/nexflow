'use client'

import { motion } from 'framer-motion'
import { MessageSquareOff, Clock, Wrench, Calendar, BellOff, Users } from 'lucide-react'
import { GlowCard, SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'
import { StaggerContainer, staggerItem } from '@/components/ui/SectionReveal'

const problems = [
  {
    icon: MessageSquareOff,
    title: 'Leads perdidos no WhatsApp',
    desc: 'Clientes mandam mensagem, não recebem resposta rápida e vão para o concorrente. Cada minuto sem resposta custa dinheiro.',
    color: '#EF4444',
  },
  {
    icon: Clock,
    title: 'Atendimento lento e inconsistente',
    desc: 'Sua equipe não consegue responder todos ao mesmo tempo. Fins de semana e noites ficam sem cobertura.',
    color: '#F59E0B',
  },
  {
    icon: Wrench,
    title: 'Processos totalmente manuais',
    desc: 'Planilhas, cadernos, post-its. Informação descentralizada, erro humano frequente, retrabalho constante.',
    color: '#EF4444',
  },
  {
    icon: Calendar,
    title: 'Agendamento caótico',
    desc: 'Agenda feita no papel, confirmações esquecidas, faltas sem aviso — prejuízo invisível todo mês.',
    color: '#F59E0B',
  },
  {
    icon: BellOff,
    title: 'Follow-up inexistente',
    desc: 'O cliente pediu um orçamento, você não retornou a tempo e ele esqueceu de você. Receita jogada fora.',
    color: '#EF4444',
  },
  {
    icon: Users,
    title: 'Equipe sobrecarregada',
    desc: 'Seus melhores colaboradores gastam horas em tarefas repetitivas em vez de gerar valor real para o negócio.',
    color: '#F59E0B',
  },
]

export function Problems() {
  return (
    <section id="problemas" className="relative py-28 overflow-hidden">
      <SectionOrbs variant="default" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Problemas que resolvemos"
          title={<>Você reconhece<br /><span className="gradient-text-warm">algum desses</span><br />problemas?</>}
          description="São os gargalos que travam o crescimento de milhares de PMEs brasileiras todos os dias. Nós automatizamos cada um deles."
          className="mb-16"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <motion.div key={problem.title} variants={staggerItem}>
                <GlowCard
                  glowColor={problem.color}
                  className="p-6 h-full flex flex-col gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${problem.color}15`,
                      border: `1px solid ${problem.color}25`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: problem.color }} />
                  </div>

                  <div>
                    <h3 className="font-syne font-bold text-base text-text-primary mb-2 group-hover:text-white transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{problem.desc}</p>
                  </div>

                  {/* Glow line at bottom */}
                  <div
                    className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${problem.color}, transparent)` }}
                  />
                </GlowCard>
              </motion.div>
            )
          })}
        </StaggerContainer>

        {/* Bottom CTA hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted mt-12"
        >
          A NexFlow resolve{' '}
          <span className="text-primary font-semibold">todos esses problemas</span>
          {' '}em até 14 dias.{' '}
          <a href="#precos" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            Ver como →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
