'use client'

import { useRef } from 'react'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MarketsMarquee } from '@/components/markets-marquee'
import { Story } from '@/components/story'
import { Journey } from '@/components/journey'
import { Catalog } from '@/components/catalog'
import { Wholesale } from '@/components/wholesale'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <SiteHeader heroRef={heroRef} />
      <main>
        <Hero ref={heroRef} />
        <MarketsMarquee />
        <Story />
        <Journey />
        <Catalog />
        <Wholesale />
      </main>
      <SiteFooter />
    </>
  )
}
