'use client'

import { useRef, forwardRef, useState, useEffect } from 'react'
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

  // Slideshow state
  const slides = [
    '/images/hero-dates.png',
    '/images/date-amber.png',
    '/images/date-coated.png'
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev + slides.length - 1) % slides.length)
  }

  // Slide fade variants
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
  }

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {/* Slideshow container - outside the scroll-transformed div */}
      <div className="absolute inset-0 z-10">
        {/* Slides */}
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={index === currentSlide ? 'visible' : 'hidden'}
              animate={index === currentSlide ? 'visible' : 'hidden'}
              variants={slideVariants}
              className="absolute inset-0"
            >
              <Image
                src={slide}
                alt={`Food King premium dates slide ${index + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Gradient overlays - pointer-events-none so they don't block clicks */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Navigation arrows - positioned directly in section, below header */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-ink/60 hover:bg-ink/80 text-cream transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-gold active:scale-95 cursor-pointer"
        aria-label="Previous slide"
      >
        <span className="text-3xl font-bold text-cream">‹</span>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-ink/60 hover:bg-ink/80 text-cream transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-gold active:scale-95 cursor-pointer"
        aria-label="Next slide"
      >
        <span className="text-3xl font-bold text-cream">›</span>
      </button>

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
          width={448}
          height={448}
          className="h-[28rem] w-[28rem] object-contain drop-shadow-[0_4px_20px_rgba(40,10,10,0.4)]"
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
