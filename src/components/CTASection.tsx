import { Download } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

export function CTASection() {
  const { t } = useTranslation()

  const platforms = [
    { label: t('cta.ios'), icon: '🍎' },
    { label: t('cta.macos'), icon: '💻' },
    { label: 'tvOS', icon: '📺' },
  ]

  return (
    <section id="download" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
          <div className="relative px-8 py-16 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {platforms.map((platform) => (
                <button
                  key={platform.label}
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span className="text-lg">{platform.icon}</span>
                  <Download className="w-4 h-4" />
                  {platform.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
