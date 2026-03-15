import { useContext } from 'react'
import { I18nContext } from './I18nProvider'
import { translations } from './translations'

export function useTranslation() {
  const { locale, setLocale } = useContext(I18nContext)

  const t = (key: string): string => {
    const entry = translations[key]
    if (!entry) return key
    return entry[locale]
  }

  return { t, locale, setLocale }
}
