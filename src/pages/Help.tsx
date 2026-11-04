import { Link, useLocation } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'
import { FaqSection } from '../components/FaqSection'
import { CONTACT_EMAIL, TELEGRAM_URL, DOWNLOAD_URLS } from '../config'

// 帮助页：与 Releases 同款平台判定——/android/help 显示 Android 版，其余显示 Apple 版。
// 导航栏的 Apple/Android 切换在帮助页上会在 /help 与 /android/help 之间跳转（见 PlatformSwitcher）。
export function Help() {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const android = pathname.startsWith('/android')

  return (
    <>
      <PageMeta
        titleKey={android ? 'meta.help.title.android' : 'meta.help.title.apple'}
        descKey="meta.help.desc"
      />
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('help.title')}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('help.subtitle')}</p>
        </div>
      </section>

      {android ? (
        <>
          {/* Android：下载 */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-4">{t('help.android.download.title')}</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {t('help.android.download.content')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href={DOWNLOAD_URLS.android}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {t('android.cta.official')}
                </a>
                <a
                  href={DOWNLOAD_URLS.androidGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-black/10 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {t('android.cta.github')}
                </a>
              </div>
            </div>
          </section>

          {/* Android：播放源设置（一级标题，下含视频源与直播源两个二级标题；
              步骤文案仍复用 android.guide / android.liveGuide 两组 locale 键，与 Android 页同源；
              Android 页的 AndroidGuide 组件本身不动） */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-8">{t('help.android.sources.title')}</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-6">{t('android.guide.title')}</h3>
                  <ol className="space-y-4">
                    {[1, 2, 3, 4].map((n) => (
                      <li
                        key={n}
                        className="flex gap-4 bg-surface border border-black/5 rounded-2xl px-6 py-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                          {n}
                        </span>
                        <p className="text-text-secondary leading-relaxed text-lg break-words">
                          {t(`android.guide.step${n}`)}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6">{t('android.liveGuide.title')}</h3>
                  <ol className="space-y-4">
                    {[1, 2, 3, 4].map((n) => (
                      <li
                        key={n}
                        className="flex gap-4 bg-surface border border-black/5 rounded-2xl px-6 py-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                          {n}
                        </span>
                        <p className="text-text-secondary leading-relaxed text-lg break-words">
                          {t(`android.liveGuide.step${n}`)}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Android：TVBox 订阅与应用内更新 */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.android.tvbox.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.android.tvbox.content')}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.android.update.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.android.update.content')}
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Apple：下载、片源、同步、Pro */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.apple.download.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.apple.download.content')}
                </p>
                <a
                  href={DOWNLOAD_URLS.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {t('cta.ios')}
                </a>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.apple.sources.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.apple.sources.content')}
                </p>
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-text-secondary leading-relaxed text-lg break-words">
                  {[1, 2, 3].map((n) => (
                    <li key={n}>{t(`help.apple.sources.step${n}`)}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.apple.sync.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.apple.sync.content')}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('help.apple.pro.title')}</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {t('help.apple.pro.content')}
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 通用 FAQ（复用首页同一组件） */}
      <FaqSection />

      {/* 联系 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('help.contact.title')}</h2>
          <p className="text-text-secondary text-lg mb-8">{t('help.contact.content')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-black/10 text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              Telegram
            </a>
          </div>
          <Link
            to="/about"
            className="inline-block mt-6 text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            {t('help.contact.about')}
          </Link>
        </div>
      </section>
    </>
  )
}
