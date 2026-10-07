'use client'

import { useRef, forwardRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { MaskText } from './reveal'

export const Hero = forwardRef<HTMLDivElement, {}>((_, ref) => {
  // Use window scrollY for synchronization with header logo animation
  const { scrollY } = useScroll()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Logo animation transforms - synchronized with header logo using window scrollY
  // Header logo animates from scrollY 0-400, so hero logo should animate in same range
  // Hero logo is centered in hero section (absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2)
  // Hero section scrolls up with page, so logo center moves up by scrollY pixels
  // At scrollY=0: hero section top=0, logo center at viewport 50% (295.5px)
  // At scrollY=400: hero section top=-400, logo center at viewport -104.5px
  // Target header logo center: ~60px from left, ~44px from top
  // Lower the final logoY value to move the logo higher; raise it to move lower.
  const logoScale = useTransform(scrollY, [0, 200, 400], [1, 0.5, 0.2])
  const logoY = useTransform(scrollY, [0, 200, 400], ['0%', '5vh', '8vh'])
  const logoX = useTransform(scrollY, [0, 200, 400], ['0%', '-22vw', '-44.0vw'])
  const logoOpacity = useTransform(scrollY, [200, 400], [1, 0])

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

      {/* Large centered logo - positioned in the center of hero */}
      <motion.div
        style={{
          y: logoY,
          x: logoX,
          scale: logoScale,
          opacity: logoOpacity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        initial={false}
      >
        <Image
          src="/images/fk-logo-full-transparent.png"
          alt="Food King crest"
          width={280}
          height={280}
          className="h-[280px] w-[280px] object-contain drop-shadow-[0_4px_20px_rgba(40,10,10,0.4)]"
          priority
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-center px-5 pb-16 sm:px-8 md:pb-24"
      >
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
})
