import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../i18n/useTranslation'
import type { Locale } from '../i18n/types'
import { Globe, Check, ChevronDown } from 'lucide-react'

const localeLabelKey: Record<Locale, string> = {
  zh: 'lang.zh',
  tw: 'lang.tw',
  en: 'lang.en',
}

const locales: Locale[] = ['zh', 'tw', 'en']

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open ])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('a11y.switchLanguage')}
        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-pointer"
      >
        <Globe className="w-4 h-4" />
        <span>{t(localeLabelKey[locale])}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 min-w-36 bg-surface border border-black/10 rounded-lg shadow-lg py-1 z-50"
        >
          {locales.map((item) => {
            const active = item === locale
            return (
              <button
                key={item}
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setLocale(item)
                  setOpen(false)
                }}
                className={`w-full flex items-center justify-between gap-2 px-4 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                  active
                    ? 'text-primary font-medium'
                    : 'text-text-secondary hover:text-text-primary hover:bg-black/5'
                }`}
              >
                {t(localeLabelKey[item])}
                {active && <Check className="w-4 h-4" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
