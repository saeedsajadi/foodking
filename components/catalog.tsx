'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { categories, products, type Category } from '@/lib/products'
import { ProductCard } from './product-card'
import { MaskText, Reveal } from './reveal'

type Filter = 'All' | Category
const filters: Filter[] = ['All', ...categories]

export function Catalog() {
  const [active, setActive] = useState<Filter>('All')

  const shown = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="catalog" className="mx-auto max-w-[110rem] px-5 py-28 sm:px-8 md:py-40">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            The Catalog
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] text-cream md:text-6xl">
            <MaskText text="Every grade the" className="block" />
            <MaskText text="palm can offer" className="block italic text-gold" delay={0.06} />
          </h2>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-cream/60">
            From glossy soft Mazafati to industrial-scale Zahedi and hand-finished confections —
            all available for bulk export with full documentation.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
              active === f
                ? 'border-gold bg-gold text-ink'
                : 'border-ink-line/70 text-cream/65 hover:border-cream/50 hover:text-cream'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
