import { Download, Smartphone, Laptop, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { ScreenshotCarousel } from './ScreenshotCarousel'
import { DOWNLOAD_URLS } from '../config'

export function Hero() {
  const { t, locale } = useTranslation()
  // 中文标题 9 字：默认 lg:text-[4.5rem] 时左栏放不下会换行。
  // 仅对 zh/tw 用按断点收紧的字号 + 不换行，各断点起点处均能一行放下
  // （移动端 30px/270px、md 36px/324px 对 336px 栏、lg 48px/432px 对 456px 栏、xl 60px/540px 对 584px 栏），
  // 英文标题本身多行，不适用此规则，保持原样。
  const isCjk = locale === 'zh' || locale === 'tw'
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
            <h1
              className={`font-extrabold leading-tight mb-8 ${
                isCjk
                  ? 'whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'
                  : 'text-4xl sm:text-5xl lg:text-[4.5rem]'
              }`}
            >
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
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-7 py-[13px] rounded-full min-w-[158px] transition-all duration-300 hover:-translate-y-px"
                >
                  <platform.icon className="w-5 h-5" />
                  <Download className="w-4 h-4" />
                  {platform.label}
                </a>
              ))}
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
