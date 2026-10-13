import { Play, Palette, Bookmark, History, Download } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { DOWNLOAD_URLS } from '../config'

export function Android() {
  const { t } = useTranslation()

  const features = [
    { icon: Play, titleKey: 'android.features.player.title', descKey: 'android.features.player.desc' },
    { icon: Palette, titleKey: 'android.features.design.title', descKey: 'android.features.design.desc' },
    { icon: Bookmark, titleKey: 'android.features.bookmarks.title', descKey: 'android.features.bookmarks.desc' },
    { icon: History, titleKey: 'android.features.history.title', descKey: 'android.features.history.desc' },
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
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('android.hero.title')}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('android.hero.subtitle')}</p>
        </div>
      </section>

      {/* Feature Details - Alternating Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1
            return (
              <div
                key={feature.titleKey}
                className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="bg-surface rounded-2xl p-8 border border-black/5 aspect-video flex items-center justify-center">
                    <feature.icon className="w-20 h-20 text-primary/30" />
                  </div>
                </div>
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{t(feature.titleKey)}</h2>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{t(feature.descKey)}</p>
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

      {/* Download CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
            <div className="relative px-8 py-16 sm:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('android.cta.title')}</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">{t('android.cta.subtitle')}</p>
              <a
                href={DOWNLOAD_URLS.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                {t('android.cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
