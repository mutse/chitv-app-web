import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Play } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileNav } from './MobileNav'

export function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/features', label: t('nav.features') },
    { to: '/about', label: t('nav.about') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-black/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-xl font-bold">ChiTV</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === link.to ? 'text-primary' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
