'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './reveal'

const steps = [
  {
    num: '01',
    title: 'Selection',
    image: '/images/journey-groves.png',
    body: 'Every product starts with sourcing done properly — the right origin, the right season, the right supplier, chosen with care.',
  },
  {
    num: '02',
    title: 'Quality & Craft',
    image: '/images/journey-grading.png',
    body: 'Hand-checked and graded against our own standard, then packed to protect texture, aroma and freshness in transit.',
  },
  {
    num: '03',
    title: 'To the World',
    image: '/images/journey-global.png',
    body: 'Documented, certified and shipped — reaching buyers, distributors and gourmet retailers across the globe.',
  },
]

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Desktop only: move the horizontal track. 3 panels -> translate to show all.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-134%'])
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" className="relative bg-paper-soft/60">
      <div className="mx-auto flex w-full max-w-[110rem] items-end justify-between px-5 pt-24 pb-8 sm:px-8 md:hidden md:pt-0">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            From Source to Table
          </p>
          <h2 className="font-display text-4xl font-semibold leading-none text-charcoal">The Journey</h2>
        </div>
      </div>

      {/* Mobile & tablet: natural vertical scroll, no horizontal or sticky behaviour */}
      <div className="flex flex-col gap-5 px-5 pb-20 pt-16 sm:px-8 md:hidden">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <article className="relative h-[58vh] w-full overflow-hidden rounded-sm">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-7">
                <span className="font-display text-5xl font-semibold text-gold-soft/90">{s.num}</span>
                <div>
                  <h3 className="font-display text-3xl font-semibold text-cream">{s.title}</h3>
                  <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-cream/80">{s.body}</p>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
            </article>
          </Reveal>
        ))}
      </div>

      {/* Desktop: immersive scroll-driven horizontal reveal, unchanged interaction */}
      <div ref={ref} className="relative hidden h-[380vh] md:block">
        <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[110rem] items-end justify-between px-5 pt-24 pb-8 sm:px-8">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold/60" />
                From Source to Table
              </p>
              <h2 className="font-display text-4xl font-semibold leading-none text-charcoal md:text-6xl">
                The Journey
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm text-charcoal-soft md:block">
              Three stages of care stand between sourcing and your shelf.
            </p>
          </div>

          <div className="relative flex flex-1 items-center">
            <motion.div style={{ x }} className="flex h-full items-center gap-6 px-5 sm:gap-8 sm:px-8">
              {steps.map((s) => (
                <article
                  key={s.num}
                  className="relative h-[62vh] w-[62vw] shrink-0 overflow-hidden rounded-sm lg:w-[46vw]"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                    <span className="font-display text-6xl font-semibold text-gold-soft/90 md:text-7xl">
                      {s.num}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl font-semibold text-cream md:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-cream/80 md:text-base">
                        {s.body}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
                </article>
              ))}
            </motion.div>
          </div>

          <div className="mx-auto w-full max-w-[110rem] px-5 pb-10 sm:px-8">
            <div className="h-px w-full bg-line">
              <motion.div style={{ width: progress }} className="h-px bg-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
