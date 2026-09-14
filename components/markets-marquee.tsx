const markets = [
  'Dubai',
  'London',
  'Hamburg',
  'Toronto',
  'Kuala Lumpur',
  'Sydney',
  'Istanbul',
  'Mumbai',
  'Moscow',
  'Rotterdam',
  'Singapore',
  'Doha',
]

export function MarketsMarquee() {
  return (
    <section
      aria-label="Markets we serve"
      className="border-y border-ink-line/60 bg-ink-soft/40 py-6"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center" style={{ ['--marquee-duration' as string]: '45s' }}>
          {[...markets, ...markets].map((m, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="px-8 font-display text-2xl italic text-cream/70 md:text-3xl">
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
