'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

const links = [
  { label: 'Story', href: '#story' },
  { label: 'Journey', href: '#journey' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Wholesale', href: '#wholesale' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-5 py-3 sm:px-8 md:py-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="Food King home">
          <span className="relative flex h-11 w-11 items-center justify-center md:h-12 md:w-12">
            <Image
              src="/images/fk-emblem-transparent.png"
              alt="Food King crest"
              width={96}
              height={96}
              className="h-full w-full object-contain drop-shadow-[0_1px_3px_rgba(40,10,10,0.3)]"
              priority
            />
          </span>
          <span className={`font-display text-lg font-semibold tracking-[0.2em] ${scrolled ? 'text-burgundy' : 'text-cream'}`}>
            FOOD&nbsp;KING
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                scrolled
                  ? 'text-charcoal/70 hover:text-charcoal'
                  : 'text-cream/90 hover:text-cream'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#wholesale"
            className={`hidden rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:inline-block ${
              scrolled
                ? 'border border-burgundy/60 text-burgundy hover:bg-burgundy hover:text-cream'
                : 'border border-cream/60 text-cream hover:bg-cream/20 hover:text-cream'
            }`}
          >
            Request a Quote
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className={`h-px w-5 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`}
            />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className={`h-px w-5 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`} />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className={`h-px w-5 ${scrolled ? 'bg-charcoal' : 'bg-cream'}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-2 py-3 text-sm font-medium uppercase tracking-[0.16em] text-charcoal/80 transition-colors hover:text-charcoal"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#wholesale"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-burgundy px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-cream"
              >
                Request a Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
