import { localeTags } from '../i18n/types'
import { useLocation } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { useTranslation } from '../i18n/useTranslation'

// 博客：与更新日志同款双路由（/blog 与 /android/blog），按导航栏平台切换显示对应版本。
// 文章按更新日志的卡片列表方式呈现：标题 + 日期 + 正文。
export function Blog() {
  const { t, locale } = useTranslation()
  const { pathname } = useLocation()
  const android = pathname.startsWith('/android')
  const platform = android ? 'Android' : 'Apple'

  return (
    <>
      <PageMeta
        titleKey={android ? 'meta.blog.title.android' : 'meta.blog.title.apple'}
        descKey="meta.blog.desc"
      />
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary font-medium mb-3">{platform}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-text-secondary text-lg mb-12">{t('blog.description')}</p>
          <div className="space-y-8">
            <article className="rounded-2xl border border-black/10 bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="text-2xl font-bold">{t('blog.article.cms.title')}</h2>
                <time dateTime="2026-11-16" className="text-sm text-text-secondary">
                  {new Intl.DateTimeFormat(localeTags[locale], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date('2026-11-16T00:00:00Z'))}
                </time>
              </div>
              <div className="space-y-5 text-text-secondary leading-relaxed">
                <p>{t('blog.article.cms.intro1')}</p>
                <p>{t('blog.article.cms.intro2')}</p>
                <h3 className="text-xl font-bold text-text-primary pt-2">{t('blog.article.cms.h1')}</h3>
                <p>{t('blog.article.cms.p1')}</p>
                <h3 className="text-xl font-bold text-text-primary pt-2">{t('blog.article.cms.h2')}</h3>
                <p>
                  {t('blog.article.cms.p2')}：
                  <code className="text-primary break-all">https://域名/api.php/provide/vod/</code>
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>?ac=list</code></li>
                  <li><code>?ac=detail&amp;wd=关键词</code></li>
                  <li><code>/at/xml/</code></li>
                </ul>
                <p>{t('blog.article.cms.p3')}：</p>
                <pre className="rounded-xl bg-black/85 p-4 text-sm text-white overflow-x-auto leading-relaxed">
{`{
  "code": 1,
  "msg": "数据列表",
  "list": [{
    "vod_name": "片名",
    "vod_play_url": "第1集$https://...m3u8"
  }]
}`}
                </pre>
                <h3 className="text-xl font-bold text-text-primary pt-2">{t('blog.article.cms.h3')}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-black/10">
                        <th className="py-2 pr-4 font-medium"></th>
                        <th className="py-2 pr-4 font-bold text-primary">{t('blog.article.cms.t.col2')}</th>
                        <th className="py-2 font-bold">{t('blog.article.cms.t.col3')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-black/10">
                        <td className="py-2 pr-4 font-medium text-text-primary">{t('blog.article.cms.t.r1')}</td>
                        <td className="py-2 pr-4">{t('blog.article.cms.t.r1a')}</td>
                        <td className="py-2">{t('blog.article.cms.t.r1b')}</td>
                      </tr>
                      <tr className="border-b border-black/10">
                        <td className="py-2 pr-4 font-medium text-text-primary">{t('blog.article.cms.t.r2')}</td>
                        <td className="py-2 pr-4">{t('blog.article.cms.t.r2a')}</td>
                        <td className="py-2">{t('blog.article.cms.t.r2b')}</td>
                      </tr>
                      <tr className="border-b border-black/10">
                        <td className="py-2 pr-4 font-medium text-text-primary">{t('blog.article.cms.t.r3')}</td>
                        <td className="py-2 pr-4">{t('blog.article.cms.t.r3a')}</td>
                        <td className="py-2">{t('blog.article.cms.t.r3b')}</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium text-text-primary">{t('blog.article.cms.t.r4')}</td>
                        <td className="py-2 pr-4">{t('blog.article.cms.t.r4a')} ✓</td>
                        <td className="py-2">{t('blog.article.cms.t.r4b')} ✗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-xl font-bold text-text-primary pt-2">{t('blog.article.cms.h4')}</h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>{t('blog.article.cms.step1')}</li>
                  <li>{t('blog.article.cms.step2')}</li>
                  <li>{t('blog.article.cms.step3')}</li>
                </ol>
                <div className="rounded-xl bg-primary/10 p-4">
                  <p className="font-bold text-text-primary">{t('blog.article.cms.note1')}</p>
                  <p>{t('blog.article.cms.note2')}</p>
                </div>
                <p>{t('blog.article.cms.tutorial')}</p>
                <p className="text-sm">{t('blog.article.cms.disclaimer')}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
