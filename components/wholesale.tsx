'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { categories } from '@/lib/products'
import { MaskText, Reveal } from './reveal'

const terms = [
  { k: 'Incoterms', v: 'FOB, CIF & CFR from Bandar Abbas' },
  { k: 'Packaging', v: 'Retail cartons to bulk pallets, private label' },
  { k: 'Lead time', v: '2–4 weeks from confirmed order' },
  { k: 'Payment', v: 'L/C at sight, T/T against documents' },
]

const fieldClass =
  'w-full rounded-sm border border-line bg-paper px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 outline-none transition-colors focus:border-gold'

export function Wholesale() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="wholesale" className="border-t border-line bg-paper-soft/60">
      <div className="mx-auto grid max-w-[110rem] gap-14 px-5 py-28 sm:px-8 md:py-40 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Wholesale & Export
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.03] text-charcoal md:text-6xl">
            <MaskText text="Let&apos;s move" className="block" />
            <MaskText text="quality together" className="block italic text-gold" delay={0.06} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-charcoal-soft">
              Tell us what you&apos;re looking for. Our export desk will respond with a
              specification sheet, samples and a formal quotation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {terms.map((t) => (
              <div key={t.k} className="bg-paper px-6 py-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.k}</p>
                <p className="mt-2 text-sm text-charcoal-soft">{t.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-sm border border-line bg-paper p-6 shadow-sm md:p-10">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[26rem] flex-col items-center justify-center text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold text-charcoal">Thank you</h3>
                <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-charcoal-soft">
                  Your enquiry has reached our export desk. Expect a specification sheet and
                  quotation within one business day.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-charcoal"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <input required className={fieldClass} placeholder="Your name" autoComplete="name" />
                  </Field>
                  <Field label="Company">
                    <input required className={fieldClass} placeholder="Company name" autoComplete="organization" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email">
                    <input required type="email" className={fieldClass} placeholder="you@company.com" autoComplete="email" />
                  </Field>
                  <Field label="Destination country (optional)">
                    <input className={fieldClass} placeholder="e.g. Germany" autoComplete="country-name" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Product of interest">
                    <select required defaultValue="" className={fieldClass}>
                      <option value="" disabled>
                        Select a category
                      </option>
                      {categories.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                      <option>Mixed / Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="Estimated volume">
                    <input className={fieldClass} placeholder="e.g. 20 MT / month" />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea rows={4} className={`${fieldClass} resize-none`} placeholder="Tell us about your market and requirements" />
                </Field>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-transform duration-300 hover:scale-[1.02]"
                >
                  Request a Quotation
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-charcoal-soft">{label}</span>
      {children}
    </label>
  )
}
