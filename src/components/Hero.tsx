import { Link } from 'react-router-dom'
import { Download, ArrowRight, Smartphone, Monitor, Laptop } from 'lucide-react'
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
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-surface rounded-2xl p-6 border border-black/10 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-4">
                  <div className="bg-bg rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">iOS & tvOS</div>
                        <div className="text-xs text-text-secondary">Mobile</div>
                      </div>
                    </div>
                    <div className="h-2 bg-primary/30 rounded-full">
                      <div className="h-full w-4/5 bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="bg-bg rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Laptop className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">macOS</div>
                        <div className="text-xs text-text-secondary">Desktop</div>
                      </div>
                    </div>
                    <div className="h-2 bg-accent/30 rounded-full">
                      <div className="h-full w-3/5 bg-accent rounded-full" />
                    </div>
                  </div>
                  <div className="bg-bg rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">HLS Streaming</div>
                        <div className="text-xs text-text-secondary">Adaptive Bitrate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
