import { createContext, useState, useEffect, type ReactNode } from 'react'
import type { Locale } from './types'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextType>({
  locale: 'zh',
  setLocale: () => {},
})

function detectLocale(): Locale {
  const stored = localStorage.getItem('chitv-lang')
  if (stored === 'zh' || stored === 'tw' || stored === 'en') return stored
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('zh-tw') || lang.startsWith('zh-hk') || lang.startsWith('zh-mo')) return 'tw'
  return lang.startsWith('zh') ? 'zh' : 'en'
}

const htmlLang: Record<Locale, string> = {
  zh: 'zh-CN',
  tw: 'zh-TW',
  en: 'en',
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('chitv-lang', newLocale)
  }

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale]
  }, [locale])

  return (
    <I18nContext value={{ locale, setLocale }}>
      {children}
    </I18nContext>
  )
}
