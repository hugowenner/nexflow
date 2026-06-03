'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function FinalCTA() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const orbX = useTransform(springX, [-400, 400], [-30, 30])
  const orbY = useTransform(springY, [-300, 300], [-20, 20])

  return (
    <section
      id="contato"
      className="relative py-32 overflow-hidden border-t border-border"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          style={{
            x: orbX,
            y: orbY,
            background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          className="absolute top-[-20%] left-[20%] w-[700px] h-[700px] rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-0 grid-pattern"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 100%)',
            opacity: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Próximo passo
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tighter text-text-primary"
        >
          Pronto para
          <br />
          <span className="gradient-text">automatizar</span>
          <br />
          seu negócio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted max-w-xl leading-relaxed"
        >
          Agende uma conversa gratuita de 30 minutos. Sem compromisso — só um diagnóstico honesto do que faz sentido para o seu caso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="https://wa.me/5531971836063?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20NexFlow"
            target="_blank"
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(16,185,129,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base bg-success hover:bg-success/90 shadow-glow-green transition-all duration-300"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar com especialista agora
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href="#precos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm text-muted border border-border hover:border-white/15 hover:text-text-primary transition-all duration-300"
          >
            Ver planos e preços
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-2 text-sm text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-success/60" />
            Diagnóstico 100% gratuito
          </span>
          <span className="hidden sm:block opacity-30">·</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-success/60" />
            Sem fidelidade
          </span>
          <span className="hidden sm:block opacity-30">·</span>
          <a href="tel:+5531971836063" className="flex items-center gap-1.5 hover:text-text-primary transition-colors">
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            (31) 9 7183-6063 — BH/MG
          </a>
        </motion.div>
      </div>
    </section>
  )
}
