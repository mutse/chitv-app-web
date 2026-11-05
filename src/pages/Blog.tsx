import { Link, useLocation } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { useTranslation } from '../i18n/useTranslation'

// 博客：与更新日志同款双路由（/blog 与 /android/blog），按导航栏平台切换显示对应版本。
// 暂无文章，先放占位空态 + 更新日志入口；有文章后再按更新日志的卡片列表方式加。
export function Blog() {
  const { t } = useTranslation()
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
          <p className="text-text-secondary leading-relaxed text-lg">{t('blog.empty')}</p>
          <Link
            to={android ? '/android/releases' : '/releases'}
            className="inline-block mt-6 text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            {t('footer.changelog')}
          </Link>
        </div>
      </section>
    </>
  )
}
