import { Link } from 'react-router-dom'
import { Download, ArrowRight, Smartphone, Laptop, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { ScreenshotCarousel } from './ScreenshotCarousel'
import { DOWNLOAD_URLS } from '../config'

export function Hero() {
  const { t } = useTranslation()
  const platforms = [
    { label: t('cta.ios'), icon: Smartphone, href: DOWNLOAD_URLS.ios },
    { label: t('cta.macos'), icon: Laptop, href: DOWNLOAD_URLS.macos },
    { label: t('cta.tvos'), icon: Tv, href: DOWNLOAD_URLS.tvos },
  ]

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold leading-tight mb-6">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto md:mx-0">
              {t('hero.subtitle')}
            </p>
            <div id="download" className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start scroll-mt-24">
              {platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <platform.icon className="w-5 h-5" />
                  <Download className="w-4 h-4" />
                  {platform.label}
                </a>
              ))}
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 border border-black/10 hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-black/5"
              >
                {t('hero.learnMore')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex min-w-0 justify-center md:justify-end">
            <ScreenshotCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
