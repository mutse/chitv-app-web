import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation'
import { CONTACT_EMAIL, GITHUB_URL, TWITTER_URL, TELEGRAM_URL } from '../config'

const linkClassName = 'text-sm text-text-secondary hover:text-primary transition-colors duration-300'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-secondary border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="ChiTV" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">ChiTV</span>
            </Link>
            <p className="text-text-secondary text-sm">{t('footer.desc')}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 self-end lg:ml-auto">
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('footer.support')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`${GITHUB_URL}/releases`} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                    {t('footer.changelog')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className={linkClassName}>{t('footer.privacy')}</Link></li>
                <li><Link to="/terms" className={linkClassName}>{t('footer.terms')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('footer.contact')}</h3>
              <ul className="space-y-2">
                <li><a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>Twitter</a></li>
                <li><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>Telegram</a></li>
                <li><a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClassName} whitespace-nowrap`}>{CONTACT_EMAIL}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/5 text-center">
          <p className="text-text-secondary text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
