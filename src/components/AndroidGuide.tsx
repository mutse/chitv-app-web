import { useTranslation } from '../i18n/useTranslation'

export function AndroidGuide() {
  const { t } = useTranslation()
  const steps = [
    t('android.guide.step1'),
    t('android.guide.step2'),
    t('android.guide.step3'),
    t('android.guide.step4'),
  ]

  return (
    <section className="pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
          {t('android.guide.title')}
        </h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex gap-4 bg-surface border border-black/5 rounded-2xl px-6 py-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                {index + 1}
              </span>
              <p className="text-text-secondary leading-relaxed text-lg break-words">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
