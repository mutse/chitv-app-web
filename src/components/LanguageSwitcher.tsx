import { useTranslation } from '../i18n/useTranslation'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useTranslation()

  return (
    <button
      onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"
      aria-label={t('a11y.switchLanguage')}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'zh' ? 'EN' : '中文'}</span>
    </button>
  )
}
