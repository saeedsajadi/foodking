'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { MaskText } from './reveal'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <Image
          src="/images/hero-dates.png"
          alt="Glistening premium Food King dates, lit by warm golden light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-end px-5 pb-16 sm:px-8 md:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.34em] text-gold-soft"
        >
          <span className="h-px w-10 bg-gold/60" />
          Premium Food Products
        </motion.p>

        <h1 className="max-w-5xl font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-cream sm:text-[10vw] md:text-[8rem]">
          <MaskText text="Pure. Premium." className="block" delay={0.4} />
          <span className="block">
            <span className="italic text-gold-soft">
              <MaskText text="Perfect." delay={0.55} />
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-cream/75 md:text-lg"
        >
          Food King supplies premium food products to importers, distributors and gourmet
          retailers across the globe — led by our signature Persian dates, and growing into
          pickles and new categories built on the same standard of quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#catalog"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-transform duration-300 hover:scale-[1.03]"
          >
            Explore the Catalog
          </a>
          <a
            href="#wholesale"
            className="rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:border-cream/70"
          >
            Become a Buyer
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 sm:right-8 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/50">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-gold"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}
