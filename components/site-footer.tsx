import { MaskText } from './reveal'

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-line/60 bg-ink">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 8l3.5 3L12 5l5.5 6L21 8l-1.6 10.5H4.6L3 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-[0.22em] text-cream">FOOD&nbsp;KING</span>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-cream/55">
              Premium Persian date exports for importers, distributors and gourmet retailers.
              Cultivated with heritage, delivered with precision.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/45">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><a href="#story" className="transition-colors hover:text-gold">Our Story</a></li>
              <li><a href="#journey" className="transition-colors hover:text-gold">The Journey</a></li>
              <li><a href="#catalog" className="transition-colors hover:text-gold">Catalog</a></li>
              <li><a href="#quality" className="transition-colors hover:text-gold">Quality</a></li>
              <li><a href="#wholesale" className="transition-colors hover:text-gold">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/45">Export Desk</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li><a href="mailto:export@foodking.example" className="transition-colors hover:text-gold">export@foodking.example</a></li>
              <li><a href="tel:+9800000000" className="transition-colors hover:text-gold">+98 (00) 000 0000</a></li>
              <li className="text-cream/50">Bandar Abbas &middot; Tehran</li>
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
          <p>&copy; {new Date().getFullYear()} Food King Export Co. All rights reserved.</p>
          <p>The Crown of Persian Dates</p>
        </div>
      </div>
    </footer>
  )
}
