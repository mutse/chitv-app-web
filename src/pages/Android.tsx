import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'
import { AndroidDownload } from '../components/AndroidDownload'

export function Android() {
  const { t } = useTranslation()

  // 真机海报：竖版截图 + 海报 slogan 文案（图片本身含中文 slogan，三语页面共用）
  const showcases = [
    { image: '/screenshots/android-home.jpg', titleKey: 'android.showcase.home.title', descKey: 'android.showcase.home.desc' },
    { image: '/screenshots/android-search.jpg', titleKey: 'android.showcase.search.title', descKey: 'android.showcase.search.desc' },
    { image: '/screenshots/android-discover.jpg', titleKey: 'android.showcase.discover.title', descKey: 'android.showcase.discover.desc' },
    { image: '/screenshots/android-favorites.jpg', titleKey: 'android.showcase.favorites.title', descKey: 'android.showcase.favorites.desc' },
    { image: '/screenshots/android-episodes.jpg', titleKey: 'android.showcase.episodes.title', descKey: 'android.showcase.episodes.desc' },
    { image: '/screenshots/android-live.jpg', titleKey: 'android.showcase.live.title', descKey: 'android.showcase.live.desc' },
  ]

  const techBadges = [
    { name: 'Flutter', color: 'bg-blue-500/10 text-blue-600' },
    { name: 'Dart', color: 'bg-primary/10 text-primary' },
    { name: 'HLS', color: 'bg-purple-500/10 text-purple-600' },
    { name: 'Riverpod', color: 'bg-amber-500/10 text-amber-600' },
    { name: 'Hive', color: 'bg-rose-500/10 text-rose-600' },
    { name: 'Dio', color: 'bg-green-500/10 text-green-600' },
    { name: 'Material 3', color: 'bg-indigo-500/10 text-indigo-600' },
  ]

  return (
    <>
      <PageMeta titleKey="meta.android.title" descKey="meta.android.desc" />
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('android.hero.desc')}</p>
          <div className="mt-8">
            <AndroidDownload />
          </div>
        </div>
      </section>

      {/* Showcase - Alternating Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {showcases.map((showcase, index) => {
            const isReversed = index % 2 === 1
            return (
              <div
                key={showcase.titleKey}
                className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Poster */}
                <div className="flex-1 w-full flex justify-center">
                  <img
                    src={showcase.image}
                    alt={t(showcase.titleKey)}
                    loading="lazy"
                    className="w-full max-w-[280px] rounded-2xl border border-black/5 shadow-lg"
                  />
                </div>
                {/* Text */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{t(showcase.titleKey)}</h2>
                  <p className="text-text-secondary leading-relaxed">{t(showcase.descKey)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tech Highlights */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('android.tech.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">{t('android.tech.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${badge.color} transition-transform duration-300 hover:scale-105`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
