import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NexFlow Automações — Automatize o que te atrasa. Escale o que importa.',
  description:
    'Automação empresarial com IA para pequenas e médias empresas brasileiras. Agentes de IA, WhatsApp, CRM, agendamentos e muito mais.',
  keywords: ['automação', 'IA', 'WhatsApp', 'chatbot', 'agendamento', 'CRM', 'Brasil', 'PME'],
  authors: [{ name: 'NexFlow Automações' }],
  openGraph: {
    title: 'NexFlow Automações',
    description: 'Automatize o que te atrasa. Escale o que importa.',
    url: 'https://nexflow.com.br',
    siteName: 'NexFlow',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexFlow Automações',
    description: 'Automatize o que te atrasa. Escale o que importa.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${syne.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-text-primary font-inter antialiased">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
