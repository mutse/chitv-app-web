import { useTranslation } from '../i18n/useTranslation'
import type { Locale } from '../i18n/types'
import { Globe } from 'lucide-react'

// 简体 → 繁体 → English 循环切换，按钮显示将要切换到的语言
const nextLocale: Record<Locale, Locale> = {
  zh: 'tw',
  tw: 'en',
  en: 'zh',
}

const localeLabelKey: Record<Locale, string> = {
  zh: 'lang.zh',
  tw: 'lang.tw',
  en: 'lang.en',
}

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useTranslation()
  const target = nextLocale[locale]

  return (
    <button
      onClick={() => setLocale(target)}
      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"
      aria-label={t('a11y.switchLanguage')}
    >
      <Globe className="w-4 h-4" />
      <span>{t(localeLabelKey[target])}</span>
    </button>
  )
}
