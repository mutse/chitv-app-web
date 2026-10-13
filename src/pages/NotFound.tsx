import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { PageMeta } from '../components/PageMeta'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="pt-32 pb-24">
      <PageMeta titleKey="meta.notfound.title" descKey="meta.notfound.desc" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-7xl font-extrabold gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">{t('notfound.title')}</h1>
        <p className="text-text-secondary text-lg mb-8">{t('notfound.desc')}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          {t('notfound.back')}
        </Link>
      </div>
    </section>
  )
}
