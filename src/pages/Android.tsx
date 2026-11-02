import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'
import { AndroidShowcase } from '../components/AndroidShowcase'
import { AndroidDownload } from '../components/AndroidDownload'

export function Android() {
  const { t } = useTranslation()

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

      <AndroidShowcase />

    </>
  )
}
