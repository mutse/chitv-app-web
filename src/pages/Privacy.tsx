import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'

const SECTION_COUNT = 7

export function Privacy() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.privacy.title" descKey="meta.privacy.desc" />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('privacy.title')}</span>
          </h1>
          <p className="text-text-secondary text-sm mb-2">{t('privacy.updated')}</p>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl">{t('privacy.intro')}</p>
          <div className="space-y-10">
            {Array.from({ length: SECTION_COUNT }, (_, i) => i + 1).map((n) => (
              <div key={n}>
                <h2 className="text-2xl font-bold mb-4">{t(`privacy.s${n}.title`)}</h2>
                <p className="text-text-secondary leading-relaxed text-lg whitespace-pre-line">
                  {t(`privacy.s${n}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
