import { Download, Smartphone, Laptop, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { DOWNLOAD_URLS } from '../config'

export function CTASection() {
  const { t } = useTranslation()

  const platforms = [
    { label: t('cta.ios'), icon: Smartphone, href: DOWNLOAD_URLS.ios },
    { label: t('cta.macos'), icon: Laptop, href: DOWNLOAD_URLS.macos },
    { label: t('cta.tvos'), icon: Tv, href: DOWNLOAD_URLS.tvos },
    // 暂时隐藏 Android 下载按钮，恢复时取消注释：{ label: t('cta.android'), icon: Play, href: DOWNLOAD_URLS.android },
  ]

  return (
    <section id="download" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-bg border border-black/10 rounded-2xl" />
          <div className="relative px-8 py-16 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{t('cta.title')}</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <platform.icon className="w-5 h-5" />
                  <Download className="w-4 h-4" />
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
