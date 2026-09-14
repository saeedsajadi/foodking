'use client'

import { Reveal } from './reveal'

export function Testimonial() {
  return (
    <section className="mx-auto max-w-[110rem] px-5 py-28 sm:px-8 md:py-40">
      <Reveal>
        <p className="mb-10 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold/60" />
          From our buyers
          <span className="h-px w-8 bg-gold/60" />
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <blockquote className="mx-auto max-w-5xl text-balance text-center font-display text-3xl font-medium leading-[1.15] text-cream md:text-5xl md:leading-[1.12]">
          &ldquo;We have sourced dates from four countries. Food King is the only supplier whose
          quality never moves — <span className="italic text-gold">shipment after shipment</span>,
          season after season.&rdquo;
        </blockquote>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-1">
          <p className="font-display text-lg text-cream">Nadia Kessler</p>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
            Head of Sourcing &middot; Levantine Gourmet, Hamburg
          </p>
        </div>
      </Reveal>
    </section>
  )
}
