import { localeTags } from '../i18n/types'
import { useLocation } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { useTranslation } from '../i18n/useTranslation'
import { CHANGELOG_URL } from '../config'

export function Releases() {
  const { t, locale } = useTranslation()
  const { pathname } = useLocation()
  const android = pathname.startsWith('/android')
  const descriptionKey = android ? 'releases.description.android' : 'releases.description.apple'
  // 两页 <title> 各自独立（此前共用 releases.title，标题重复且无品牌后缀）；
  // 可见 H1 仍共用 releases.title，平台由上方的 eyebrow 区分。
  const titleKey = android ? 'releases.title.android' : 'releases.title.apple'
  const platform = android ? 'Android' : 'Apple'

  return (
    <>
      <PageMeta titleKey={titleKey} descKey={descriptionKey} />
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-3">{platform}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('releases.title')}</h1>
          <p className="text-text-secondary text-lg mb-12">{t(descriptionKey)}</p>
          {android ? (
            <div className="space-y-8">
            <article className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-2xl font-bold">v0.1.5</h2>
                <time dateTime="2026-11-05" className="text-sm text-text-secondary">
                  {new Intl.DateTimeFormat(localeTags[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-11-05T00:00:00Z'))}
                </time>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-text-secondary leading-relaxed">
                {[1, 2, 3, 4].map((item) => <li key={item}>{t(`releases.android.015.${item}`)}</li>)}
              </ul>
              <a href={`${CHANGELOG_URL}/tag/v0.1.5`} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-primary underline underline-offset-4">
                {t('releases.source')}
              </a>
            </article>
            <article className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-2xl font-bold">v0.1.4</h2>
                <time dateTime="2026-11-02" className="text-sm text-text-secondary">
                  {new Intl.DateTimeFormat(localeTags[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-11-02T00:00:00Z'))}
                </time>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-text-secondary leading-relaxed">
                {[1, 2, 3, 4].map((item) => <li key={item}>{t(`releases.android.014.${item}`)}</li>)}
              </ul>
              <a href={`${CHANGELOG_URL}/tag/v0.1.4`} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-primary underline underline-offset-4">
                {t('releases.source')}
              </a>
            </article>
            <article className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-2xl font-bold">v0.1.3</h2>
                <time dateTime="2026-11-01" className="text-sm text-text-secondary">
                  {new Intl.DateTimeFormat(localeTags[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-11-01T00:00:00Z'))}
                </time>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-text-secondary leading-relaxed">
                {Array.from({ length: 30 }, (_, index) => index + 1).map((item) => (
                  <li key={item}>{t(`releases.android.013.${item}`)}</li>
                ))}
              </ul>
            </article>
            </div>
          ) : (
            <div className="space-y-8">
            <article className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-2xl font-bold">v1.0</h2>
                <time dateTime="2026-11-03" className="text-sm text-text-secondary">
                  {new Intl.DateTimeFormat(localeTags[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-11-03T00:00:00Z'))}
                </time>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-text-secondary leading-relaxed">
                {[1, 2, 3, 4, 5, 6].map((item) => <li key={item}>{t(`releases.apple.1103.${item}`)}</li>)}
              </ul>
            </article>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
