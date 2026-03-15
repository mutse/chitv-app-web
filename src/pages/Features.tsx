import { Search, Play, Bookmark, History, Smartphone, Shield } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

export function Features() {
  const { t } = useTranslation()

  const features = [
    { icon: Search, titleKey: 'features.detail.search.title', descKey: 'features.detail.search.desc' },
    { icon: Play, titleKey: 'features.detail.player.title', descKey: 'features.detail.player.desc' },
    { icon: Bookmark, titleKey: 'features.detail.bookmarks.title', descKey: 'features.detail.bookmarks.desc' },
    { icon: History, titleKey: 'features.detail.history.title', descKey: 'features.detail.history.desc' },
    { icon: Smartphone, titleKey: 'features.detail.crossPlatform.title', descKey: 'features.detail.crossPlatform.desc' },
    { icon: Shield, titleKey: 'features.detail.auth.title', descKey: 'features.detail.auth.desc' },
  ]

  const techBadges = [
    { name: 'SwiftUI', color: 'bg-blue-500/10 text-blue-600' },
    { name: 'HLS', color: 'bg-primary/10 text-primary' },
    { name: 'Riverpod', color: 'bg-purple-500/10 text-purple-600' },
    { name: 'Hive DB', color: 'bg-amber-500/10 text-amber-600' },
    { name: 'Dio', color: 'bg-rose-500/10 text-rose-600' },
    { name: 'Material 3', color: 'bg-green-500/10 text-green-600' },
    { name: 'Video Player', color: 'bg-indigo-500/10 text-indigo-600' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('features.page.title')}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('features.page.subtitle')}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('features.tech.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">{t('features.tech.subtitle')}</p>
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
