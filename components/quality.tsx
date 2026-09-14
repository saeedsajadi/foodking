'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { MaskText, Reveal } from './reveal'

const stats = [
  { value: 55, suffix: '+', label: 'Years of cultivation' },
  { value: 22, suffix: '', label: 'Date grades & products' },
  { value: 40, suffix: '+', label: 'Export destinations' },
  { value: 12000, suffix: ' MT', label: 'Annual export capacity' },
]

const certs = ['ISO 22000', 'HACCP', 'Halal Certified', 'Global G.A.P.', 'Organic (EU)', 'FDA Registered']

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Quality() {
  return (
    <section id="quality" className="border-y border-ink-line/60 bg-ink-soft/30">
      <div className="mx-auto max-w-[110rem] px-5 py-28 sm:px-8 md:py-40">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Quality & Assurance
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
              <MaskText text="Certified at" className="block" />
              <MaskText text="every step" className="block italic text-gold" delay={0.06} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-cream/70">
                Serious buyers demand more than flavour. Our facilities operate to international
                food-safety standards, with full traceability, laboratory testing and complete export
                documentation on every shipment.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {certs.map((c, i) => (
                <Reveal key={c} delay={0.05 * i}>
                  <span className="rounded-full border border-gold/30 bg-ink/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gold-soft">
                    {c}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink-line/60 bg-ink-line/60">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-10 md:px-8 md:py-14">
                <p className="font-display text-5xl font-semibold text-cream md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cream/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
