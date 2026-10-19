import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'

const SECTION_COUNT = 7

export function Terms() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta titleKey="meta.terms.title" descKey="meta.terms.desc" />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('terms.title')}</span>
          </h1>
          <p className="text-text-secondary text-sm mb-2">{t('terms.updated')}</p>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl">{t('terms.intro')}</p>
          <div className="space-y-10">
            {Array.from({ length: SECTION_COUNT }, (_, i) => i + 1).map((n) => (
              <div key={n}>
                <h2 className="text-2xl font-bold mb-4">{t(`terms.s${n}.title`)}</h2>
                <p className="text-text-secondary leading-relaxed text-lg whitespace-pre-line">
                  {t(`terms.s${n}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
