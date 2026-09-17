const values = [
  'Pure',
  'Premium',
  'Perfect',
  'Persian Dates',
  'Pickles',
  'Quality Foods',
  'Natural Taste',
  'Selected Products',
  'Food King',
]

export function MarketsMarquee() {
  return (
    <section
      aria-label="What Food King stands for"
      className="border-y border-line bg-paper-soft/60 py-6"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center" style={{ ['--marquee-duration' as string]: '45s' }}>
          {[...values, ...values].map((m, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8 font-display text-2xl italic text-charcoal/70 md:text-3xl">
                {m}
              </span>
              <span className="text-gold" aria-hidden>
                &#10022;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
