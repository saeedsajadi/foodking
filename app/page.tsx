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
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <SiteHeader />
      <main>
        <Hero />
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
