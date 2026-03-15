import { Link } from 'react-router-dom'
import { Play, Github } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-secondary border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">ChiTV</span>
            </Link>
            <p className="text-text-secondary text-sm">{t('footer.desc')}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-text-secondary hover:text-primary transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-text-secondary hover:text-primary transition-colors duration-300">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-text-secondary hover:text-primary transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/user/chitv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  {t('footer.github')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/5 text-center">
          <p className="text-text-secondary text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
