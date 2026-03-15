import { Smartphone, Search, Play, Bookmark, History, Moon } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { FeatureCard } from './FeatureCard'

export function FeatureGrid() {
  const { t } = useTranslation()

  const features = [
    { icon: Smartphone, titleKey: 'features.crossPlatform.title', descKey: 'features.crossPlatform.desc' },
    { icon: Search, titleKey: 'features.search.title', descKey: 'features.search.desc' },
    { icon: Play, titleKey: 'features.hls.title', descKey: 'features.hls.desc' },
    { icon: Bookmark, titleKey: 'features.bookmarks.title', descKey: 'features.bookmarks.desc' },
    { icon: History, titleKey: 'features.history.title', descKey: 'features.history.desc' },
    { icon: Moon, titleKey: 'features.darkMode.title', descKey: 'features.darkMode.desc' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('features.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.titleKey}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
