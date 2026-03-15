import { Hero } from '../components/Hero'
import { FeatureGrid } from '../components/FeatureGrid'
import { CTASection } from '../components/CTASection'
import { useTranslation } from '../i18n/useTranslation'
import { Search, Play, Bookmark } from 'lucide-react'

export function Home() {
  const { t } = useTranslation()

  const previews = [
    { icon: Search, label: t('features.search.title') },
    { icon: Play, label: t('features.hls.title') },
    { icon: Bookmark, label: t('features.bookmarks.title') },
  ]

  return (
    <>
      <Hero />
      <FeatureGrid />

      {/* App Preview Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('preview.title')}</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t('preview.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {previews.map((preview) => (
              <div
                key={preview.label}
                className="bg-surface rounded-xl border border-black/5 overflow-hidden group"
              >
                <div className="aspect-video bg-bg flex items-center justify-center">
                  <div className="text-center">
                    <preview.icon className="w-12 h-12 text-primary/40 mx-auto mb-2 transition-colors duration-300 group-hover:text-primary/70" />
                    <span className="text-sm text-text-secondary">{preview.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
