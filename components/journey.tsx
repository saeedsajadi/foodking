'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const steps = [
  {
    num: '01',
    title: 'The Groves',
    image: '/images/journey-groves.png',
    body: 'Ancient palms in Bam, Jiroft and Khuzestan ripen under desert sun, unhurried and sun-fed.',
  },
  {
    num: '02',
    title: 'The Harvest',
    image: '/images/journey-harvest.png',
    body: 'Each cluster is picked by hand at peak maturity — never mechanized, never rushed.',
  },
  {
    num: '03',
    title: 'Sorting & Grading',
    image: '/images/journey-grading.png',
    body: 'Fruit is hand-graded for size, colour and moisture, then rated to export specification.',
  },
  {
    num: '04',
    title: 'Cold-Chain Packing',
    image: '/images/journey-packing.png',
    body: 'Temperature-controlled facilities preserve texture and aroma from pallet to port.',
  },
  {
    num: '05',
    title: 'To the World',
    image: '/images/journey-export.png',
    body: 'Documented, certified and containerized — shipped to buyers across six continents.',
  },
]

export function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Move the horizontal track. 5 panels -> translate to show all.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" ref={ref} className="relative h-[500vh] bg-ink-soft/30">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-[110rem] items-end justify-between px-5 pt-24 pb-8 sm:px-8">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold/60" />
              From Grove to Global
            </p>
            <h2 className="font-display text-4xl font-semibold leading-none text-cream md:text-6xl">
              The Journey
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-cream/55 md:block">
            Five stages of obsessive care stand between the palm and your shelf.
          </p>
        </div>

        <div className="relative flex flex-1 items-center">
          <motion.div style={{ x }} className="flex h-full items-center gap-6 px-5 sm:gap-8 sm:px-8">
            {steps.map((s) => (
              <article
                key={s.num}
                className="relative h-[62vh] w-[82vw] shrink-0 overflow-hidden rounded-sm sm:w-[62vw] md:w-[46vw] lg:w-[38vw]"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 82vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                  <span className="font-display text-6xl font-semibold text-gold/90 md:text-7xl">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-cream md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-cream/75 md:text-base">
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
          <div className="h-px w-full bg-cream/15">
            <motion.div style={{ width: progress }} className="h-px bg-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
