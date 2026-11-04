import { createContext, useState, useEffect, type ReactNode } from 'react'
import { locales, localeTags, type Locale } from './types'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const I18nContext = createContext<I18nContextType>({
  locale: 'zh',
  setLocale: () => {},
})

export function detectLocale(): Locale {
  const stored = localStorage.getItem('chitv-lang')
  const savedLocale = locales.find((locale) => locale === stored)
  if (savedLocale) return savedLocale

  const lang = navigator.language.toLowerCase()
  if (lang.startsWith('zh-tw') || lang.startsWith('zh-hk') || lang.startsWith('zh-mo')) return 'tw'
  const primary = lang.split('-')[0]
  return locales.find((locale) => locale !== 'tw' && locale === primary) ?? 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('chitv-lang', newLocale)
  }

  useEffect(() => {
    document.documentElement.lang = localeTags[locale]
  }, [locale])

  return (
    <I18nContext value={{ locale, setLocale }}>
      {children}
    </I18nContext>
  )
}
