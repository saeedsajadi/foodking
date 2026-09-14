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
                src="/images/story-grove.png"
                alt="A Persian date palm grove glowing at golden hour"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
          </div>
          <Reveal
            delay={0.1}
            className="absolute -bottom-8 -right-4 hidden rounded-sm border border-gold/30 bg-ink/90 px-8 py-6 backdrop-blur sm:block"
          >
            <p className="font-display text-4xl font-semibold text-gold">1968</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-cream/60">Three generations</p>
          </Reveal>
        </div>

        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Our Story
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-cream md:text-6xl">
            <MaskText text="Rooted in the" className="block" />
            <MaskText text="oldest orchards" className="block italic text-gold" delay={0.06} />
            <MaskText text="on earth" className="block" delay={0.12} />
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-cream/75 md:text-lg">
              For over half a century, our family has tended the palm groves of Bam, Jiroft and
              Khuzestan — where the desert sun ripens fruit no greenhouse can imitate. We know each
              variety by its skin, its sugar, its season.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-cream/60">
              Food King was built to carry that heritage to the world&apos;s finest tables —
              pairing ancestral cultivation with cold-chain logistics, food-safety certification and
              the reliability serious buyers require.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-cream/90 md:text-3xl">
              &ldquo;A great date cannot be rushed. Neither can trust.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
