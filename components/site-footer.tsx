import Image from 'next/image'
import { MaskText } from './reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-line/60 bg-ink">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center">
                <Image
                  src="/images/fk-emblem-transparent.png"
                  alt="Food King crest"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-lg font-semibold tracking-[0.22em] text-cream">FOOD&nbsp;KING</span>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-cream/55">
              Pure. Premium. Perfect. Food King is a premium food products house — supplying
              importers, distributors and gourmet retailers with our signature dates and a
              growing range of quality foods.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/45">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><a href="#story" className="transition-colors hover:text-gold">Our Story</a></li>
              <li><a href="#journey" className="transition-colors hover:text-gold">The Journey</a></li>
              <li><a href="#catalog" className="transition-colors hover:text-gold">Catalog</a></li>
              <li><a href="#wholesale" className="transition-colors hover:text-gold">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/45">Get in Touch</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><a href="mailto:hello@foodking.example" className="transition-colors hover:text-gold">hello@foodking.example</a></li>
              <li><a href="tel:+9800000000" className="transition-colors hover:text-gold">+98 (00) 000 0000</a></li>
              <li className="text-cream/50">Sun–Thu, 08:00–17:00 IRST</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <p className="font-display text-[15vw] font-semibold leading-none text-cream/[0.06] md:text-[11rem]">
            <MaskText text="FOOD KING" />
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-ink-line/60 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Food King. All rights reserved.</p>
          <p>Pure. Premium. Perfect.</p>
        </div>
      </div>
    </footer>
  )
}
