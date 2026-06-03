'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionHeader } from '@/components/ui/GlowCard'

const faqs = [
  {
    q: 'Preciso ter conhecimento técnico para usar?',
    a: 'Não. Nossa equipe cuida de tudo — configuração, integração e treinamento. Você só precisa usar o sistema já funcionando. Se surgir dúvida no dia a dia, estamos disponíveis via WhatsApp para ajudar.',
  },
  {
    q: 'Em quanto tempo fica pronto?',
    a: 'Em média de 7 a 14 dias úteis após diagnóstico e aprovação do escopo. Projetos mais simples (chatbot básico) podem ficar prontos em 5 dias. Projetos com integrações complexas podem levar até 21 dias.',
  },
  {
    q: 'E se o WhatsApp mudar as regras?',
    a: 'Trabalhamos com a API oficial do WhatsApp Business (Meta) — a via mais estável e dentro dos termos. Acompanhamos cada atualização de política e adaptamos sua automação sem custo adicional dentro do período contratado.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Todos os dados são processados em infraestrutura com criptografia em trânsito e em repouso. Seguimos as diretrizes da LGPD e assinamos um Acordo de Processamento de Dados (DPA) com todos os clientes.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Não há fidelidade nem multa. Você avisa com 30 dias de antecedência e encerramos sem burocracia. Seus dados ficam disponíveis para exportação por até 60 dias após o cancelamento.',
  },
  {
    q: 'Vocês atendem qual tipo de empresa?',
    a: 'Principalmente PMEs brasileiras: clínicas, consultórios, oficinas, imobiliárias, restaurantes, salões, prestadores de serviço e e-commerces. Se você tem fluxo de atendimento repetitivo, provavelmente conseguimos automatizar.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Perguntas frequentes"
          title={<>Tire suas<br /><span className="gradient-text">dúvidas</span></>}
          description="Respondemos as perguntas mais comuns antes de você dar o próximo passo."
          align="center"
          className="mb-14"
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'rgba(14,165,233,0.25)' : 'rgba(255,255,255,0.06)',
                  background: isOpen ? 'rgba(14,165,233,0.04)' : 'rgba(15,23,42,0.5)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-text-primary leading-snug">{faq.q}</span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.06)',
                      color: isOpen ? '#0EA5E9' : '#94A3B8',
                    }}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-sm text-muted"
        >
          Ainda tem dúvidas?{' '}
          <a
            href="https://wa.me/5531971836063"
            className="text-primary font-semibold hover:underline underline-offset-2"
            target="_blank"
          >
            Fale conosco no WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
