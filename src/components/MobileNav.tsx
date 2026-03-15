import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

interface MobileNavProps {
  navLinks: { to: string; label: string }[]
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 glass border-b border-black/10 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-black/10">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
