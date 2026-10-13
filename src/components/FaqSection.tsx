import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

const FAQ_COUNT = 6

export function FaqSection() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('faq.title')}</h2>
        <div className="space-y-4">
          {Array.from({ length: FAQ_COUNT }, (_, i) => i + 1).map((n) => {
            const isOpen = open === n
            return (
              <div
                key={n}
                className="bg-surface rounded-xl border border-black/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : n)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold">{t(`faq.q${n}`)}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                      {t(`faq.a${n}`)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
