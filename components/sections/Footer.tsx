'use client'

import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const links = {
  Serviços: [
    'Agente WhatsApp IA',
    'Automação de Agendamentos',
    'Chatbot de Atendimento',
    'CRM Integrado',
    'Automação Financeira',
    'Sites & Landing Pages',
  ],
  Empresa: [
    'Como Funciona',
    'Casos de Uso',
    'Planos e Preços',
    'FAQ',
    'Blog',
  ],
  Legal: [
    'Política de Privacidade',
    'Termos de Uso',
    'Política de Cookies',
    'LGPD',
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-syne font-bold text-xl gradient-text">NexFlow</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
              Automação empresarial com IA para pequenas e médias empresas brasileiras.
              Automatize o que te atrasa. Escale o que importa.
            </p>

            <div className="flex flex-col gap-2.5 text-sm text-muted">
              <a
                href="mailto:hugowenner5@gmail.com"
                className="flex items-center gap-2.5 hover:text-text-primary transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                hugowenner5@gmail.com
              </a>
              <a
                href="tel:+5531971836063"
                className="flex items-center gap-2.5 hover:text-text-primary transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                (31) 9 7183-6063
              </a>
              <span className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                Belo Horizonte — MG, Brasil
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">{category}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2025 NexFlow Automações. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="https://nexflow.com.br" className="hover:text-primary transition-colors flex items-center gap-1">
              nexflow.com.br
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="opacity-30">·</span>
            <span>Feito com ❤️ em Belo Horizonte</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
