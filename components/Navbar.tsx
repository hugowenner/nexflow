'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Casos de Uso', href: '#cases' },
  { label: 'Preços', href: '#precos' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-blue-sm">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-syne font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
              NexFlow
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5531971836063"
              className="text-sm font-medium text-muted hover:text-text-primary transition-colors"
            >
              Falar no WhatsApp
            </a>
            <motion.a
              href="#precos"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary shadow-glow-blue-sm hover:shadow-glow-blue transition-shadow duration-300"
            >
              Agendar Demo
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-text-primary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-muted"
            >
              <X className="w-6 h-6" />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="font-syne text-3xl font-bold text-text-primary hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#precos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-secondary text-lg"
            >
              Agendar Demo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
