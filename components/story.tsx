'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { MaskText, Reveal } from './reveal'

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="story" ref={ref} className="relative mx-auto max-w-[110rem] px-5 py-28 sm:px-8 md:py-40">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.div style={{ y: imageY }} className="absolute inset-[-12%]">
              <Image
                src="/images/story-orchard.png"
                alt="A premium date palm orchard glowing at golden hour"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
          </div>
          <Reveal
            delay={0.1}
            className="absolute -bottom-8 -right-4 hidden rounded-sm border border-gold/40 bg-ink/90 px-8 py-6 backdrop-blur sm:block"
          >
            <p className="font-display text-3xl font-semibold text-gold-soft">Pure.</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-cream/70">Premium. Perfect.</p>
          </Reveal>
        </div>

        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Our Story
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-charcoal md:text-6xl">
            <MaskText text="Rooted in" className="block" />
            <MaskText text="honest quality" className="block italic text-gold" delay={0.06} />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-charcoal-soft md:text-lg">
              Food King began with a single product, chosen with care and offered without
              compromise. That same standard — knowing an ingredient by its origin, its season,
              its character — is what guides every product we bring to the table.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-charcoal-soft/80">
              We&apos;re building Food King into a broader food company, one category at a time —
              pairing traditional sourcing with modern logistics, food-safety practice and the
              reliability serious buyers require.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-charcoal md:text-3xl">
              &ldquo;Great food cannot be rushed. Neither can trust.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
