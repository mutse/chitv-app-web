import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

export function Hero() {
  const { t } = useTranslation()

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <Download className="w-5 h-5" />
                {t('hero.download')}
              </a>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 border border-black/10 hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-black/5"
              >
                {t('hero.learnMore')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <figure className="relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl">
                <img
                  src="/screenshots/tvos.jpg"
                  alt="ChiTV tvOS"
                  className="w-full h-auto"
                  loading="eager"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-medium">
                  tvOS
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
