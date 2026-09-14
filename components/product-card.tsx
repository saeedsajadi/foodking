'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-ink-line/60 bg-ink-soft/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-cream/25 bg-ink/50 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-cream/80 backdrop-blur">
          {product.category}
        </span>
        <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-gold px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {product.moq}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-cream">{product.name}</h3>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gold/80">{product.origin}</p>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-cream/60">{product.note}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink-line/60 pt-4">
          <span className="text-xs text-cream/50">{product.moisture}</span>
          <a
            href="#wholesale"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:text-gold"
          >
            Enquire &rarr;
          </a>
        </div>
      </div>
    </motion.article>
  )
}
