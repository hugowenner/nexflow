'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Phone, Building2, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/GlowCard'
import { SectionOrbs } from '@/components/ui/AnimatedGrid'

const WPP_NUMBER = '5531971836063'

const segments = [
  'Clínica / Saúde',
  'Oficina / Automotivo',
  'Imobiliária',
  'Restaurante / Alimentação',
  'Prestador de Serviço',
  'Outro',
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

type FormState = { name: string; phone: string; segment: string; message: string }

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', segment: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Digite seu nome'
    if (!form.phone.trim()) errs.phone = 'Digite seu WhatsApp'
    if (!form.segment) errs.segment = 'Escolha um segmento'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const text =
      `Olá, Hugo! Vim pelo site da NexFlow. 👋\n\n` +
      `*Nome:* ${form.name}\n` +
      `*WhatsApp:* ${form.phone}\n` +
      `*Segmento:* ${form.segment}\n` +
      (form.message ? `*Mensagem:* ${form.message}` : `*Interesse:* Quero saber mais sobre automação para meu negócio.`)

    setSent(true)
    setTimeout(() => {
      window.open(
        `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(text)}`,
        '_blank'
      )
    }, 800)
  }

  return (
    <section id="contato-form" className="relative py-28 overflow-hidden border-t border-border">
      <SectionOrbs variant="green" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — info */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              label="Fale com a gente"
              title={<>Vamos conversar<br /><span className="gradient-text">sobre o seu</span><br />negócio?</>}
              description="Preencha o formulário e você será direcionado para o nosso WhatsApp com todas as informações já prontas. Respondemos em minutos."
            />

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <WhatsAppIcon className="w-4 h-4" />,
                  label: 'WhatsApp',
                  value: '(31) 9 7183-6063',
                  href: `https://wa.me/${WPP_NUMBER}`,
                  color: '#10B981',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'E-mail',
                  value: 'hugowenner5@gmail.com',
                  href: 'mailto:hugowenner5@gmail.com',
                  color: '#0EA5E9',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: 'Localização',
                  value: 'Belo Horizonte — MG, Brasil',
                  href: undefined,
                  color: '#6366F1',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border group transition-all duration-200 hover:border-white/10"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-text-primary hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-success/8 border border-success/20">
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse flex-shrink-0" />
              <p className="text-sm text-success font-medium">
                Tempo médio de resposta: <span className="font-bold">menos de 10 minutos</span>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {sent ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-5 p-10 rounded-2xl bg-surface/60 border border-success/25 text-center min-h-[460px]"
                  style={{ backdropFilter: 'blur(20px)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-success/15 border border-success/30 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </motion.div>
                  <div>
                    <h3 className="font-syne font-bold text-2xl text-text-primary mb-2">
                      Abrindo o WhatsApp…
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      Sua mensagem já está pronta. Se não abriu automaticamente,{' '}
                      <a
                        href={`https://wa.me/${WPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-success underline underline-offset-2"
                      >
                        clique aqui
                      </a>
                      .
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', phone: '', segment: '', message: '' }) }}
                    className="text-xs text-muted hover:text-text-primary transition-colors underline underline-offset-2"
                  >
                    Enviar outro
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="p-6 sm:p-8 rounded-2xl border border-border flex flex-col gap-5"
                  style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(20px)' }}
                >
                  <p className="font-syne font-bold text-lg text-text-primary">
                    Quero automatizar meu negócio
                  </p>

                  {/* Name */}
                  <Field
                    icon={<User className="w-4 h-4" />}
                    label="Seu nome *"
                    error={errors.name}
                  >
                    <input
                      type="text"
                      placeholder="Como você se chama?"
                      value={form.name}
                      onChange={set('name')}
                      className="input-base"
                    />
                  </Field>

                  {/* Phone */}
                  <Field
                    icon={<Phone className="w-4 h-4" />}
                    label="WhatsApp *"
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      placeholder="(31) 9 0000-0000"
                      value={form.phone}
                      onChange={set('phone')}
                      className="input-base"
                    />
                  </Field>

                  {/* Segment */}
                  <Field
                    icon={<Building2 className="w-4 h-4" />}
                    label="Segmento da empresa *"
                    error={errors.segment}
                  >
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {segments.map((seg) => (
                        <button
                          key={seg}
                          type="button"
                          onClick={() => { setForm((p) => ({ ...p, segment: seg })); setErrors((e) => ({ ...e, segment: undefined })) }}
                          className="px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200 text-left"
                          style={
                            form.segment === seg
                              ? { background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(14,165,233,0.4)', color: '#0EA5E9' }
                              : { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)', color: '#94A3B8' }
                          }
                        >
                          {seg}
                        </button>
                      ))}
                    </div>
                  </Field>

                  {/* Message */}
                  <Field
                    icon={<MessageSquare className="w-4 h-4" />}
                    label="Mensagem (opcional)"
                  >
                    <textarea
                      rows={3}
                      placeholder="Conte um pouco sobre o seu negócio ou o que você quer automatizar…"
                      value={form.message}
                      onChange={set('message')}
                      className="input-base resize-none"
                    />
                  </Field>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(16,185,129,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full font-bold text-sm text-white bg-success hover:bg-success/90 shadow-glow-green transition-all duration-300 mt-1"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Falar no WhatsApp agora
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <p className="text-center text-xs text-muted">
                    Ao enviar, você será redirecionado ao WhatsApp com sua mensagem pronta.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-base {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.875rem;
          color: #F8FAFC;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: var(--font-inter);
        }
        .input-base::placeholder { color: #475569; }
        .input-base:focus {
          border-color: rgba(14,165,233,0.4);
          box-shadow: 0 0 0 3px rgba(14,165,233,0.08);
        }
      `}</style>
    </section>
  )
}

function Field({
  icon, label, error, children,
}: {
  icon: React.ReactNode; label: string; error?: string; children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-xs font-semibold text-muted">
        <span className="text-primary">{icon}</span>
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-danger font-medium"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
