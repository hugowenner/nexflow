'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hoverScale?: number
}

export function GlowCard({ children, className, glowColor = '#0EA5E9', hoverScale = 1.02 }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale, y: -4 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-surface border border-border',
        'transition-shadow duration-300',
        isHovered && 'shadow-card-hover',
        className
      )}
      style={{
        boxShadow: isHovered
          ? `0 0 0 1px rgba(14,165,233,0.2), 0 8px 40px rgba(0,0,0,0.4)`
          : '0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full transition-opacity duration-300"
          style={{
            width: 250,
            height: 250,
            top: pos.y - 125,
            left: pos.x - 125,
            background: `radial-gradient(circle, ${glowColor}18 0%, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  )
}

export function BadgeLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase',
        'text-primary px-3 py-1 rounded-full',
        'bg-primary/10 border border-primary/20',
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
}: {
  label?: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BadgeLabel>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
            {label}
          </BadgeLabel>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn('text-muted text-lg leading-relaxed', align === 'center' ? 'max-w-2xl' : 'max-w-xl')}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
