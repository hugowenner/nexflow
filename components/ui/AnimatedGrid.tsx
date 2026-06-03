'use client'

import { useEffect, useRef } from 'react'

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 grid-pattern"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)',
        }}
      />

      {/* Primary orb */}
      <div
        className="orb absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Secondary orb */}
      <div
        className="orb-2 absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Bottom orb */}
      <div
        className="orb-3 absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}

export function SectionOrbs({ variant = 'default' }: { variant?: 'default' | 'purple' | 'green' }) {
  const colors = {
    default: { c1: 'rgba(14,165,233,0.10)', c2: 'rgba(99,102,241,0.08)' },
    purple: { c1: 'rgba(99,102,241,0.12)', c2: 'rgba(14,165,233,0.06)' },
    green: { c1: 'rgba(16,185,129,0.10)', c2: 'rgba(14,165,233,0.06)' },
  }
  const { c1, c2 } = colors[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-[10%] w-[400px] h-[400px] rounded-full"
        style={{ background: `radial-gradient(circle, ${c1} 0%, transparent 70%)`, filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full"
        style={{ background: `radial-gradient(circle, ${c2} 0%, transparent 70%)`, filter: 'blur(60px)' }}
      />
    </div>
  )
}
