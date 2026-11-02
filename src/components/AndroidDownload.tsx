import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Download, Github, Globe } from 'lucide-react'
import { DOWNLOAD_URLS } from '../config'
import { useTranslation } from '../i18n/useTranslation'

export function AndroidDownload() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open])

  const options = [
    { label: t('android.cta.official'), href: DOWNLOAD_URLS.android, icon: Globe },
    { label: t('android.cta.github'), href: DOWNLOAD_URLS.androidGithub, icon: Github },
  ]

  return (
    <div
      ref={containerRef}
      className="relative inline-block text-left"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault()
          setOpen(false)
          buttonRef.current?.focus()
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-7 py-[13px] rounded-full min-w-[158px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        {t('android.cta.button')}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-20 mt-2 w-max min-w-full max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-black/10 bg-bg p-2 shadow-xl"
      >
        {options.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-primary hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"
          >
            <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
