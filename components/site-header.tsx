'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Journey', href: '#journey' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Quality', href: '#quality' },
  { label: 'Wholesale', href: '#wholesale' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'border-b border-ink-line/60 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-5 py-4 sm:px-8 md:py-5">
        <a href="#top" className="group flex items-center gap-3" aria-label="Food King home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold">
            <CrownMark />
          </span>
          <span className="font-display text-lg font-semibold tracking-[0.22em] text-cream">
            FOOD&nbsp;KING
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-medium uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#wholesale"
          className="rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
        >
          Request a Quote
        </a>
      </div>
    </motion.header>
  )
}

function CrownMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 8l3.5 3L12 5l5.5 6L21 8l-1.6 10.5H4.6L3 8z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
