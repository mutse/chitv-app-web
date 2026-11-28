import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'
import { AppleShowcase } from './AppleShowcase'

const platforms = [
  { id: 'tvos', label: 'tvOS' },
  { id: 'ios', label: 'iOS' },
] as const

export function ScreenshotCarousel() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)
  const move = (direction: number) => {
    setActive((current) => (current + direction + platforms.length) % platforms.length)
  }

  return (
    <div
      className="relative w-full max-w-2xl min-w-0"
      role="region"
      aria-label={t('hero.screenshots')}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl pointer-events-none" />
      <div className="relative mb-5 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={t('hero.previousScreenshot')}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-text-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {platforms.map(({ id, label }, index) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              aria-label={`${t('hero.screenshots')} · ${label}`}
              className={`flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium transition-colors ${active === index ? 'bg-primary/10 text-text-primary' : 'text-text-secondary hover:bg-black/5'}`}
            >
              <span aria-hidden="true" className={`h-2 w-2 rounded-full ${active === index ? 'bg-primary' : 'bg-black/20'}`} />
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={t('hero.nextScreenshot')}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-text-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl touch-pan-y"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
        onTouchCancel={() => { touchStart.current = null }}
        onTouchEnd={(event) => {
          if (touchStart.current !== null) {
            const distance = event.changedTouches[0].clientX - touchStart.current
            if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1)
          }
          touchStart.current = null
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {platforms.map(({ id }, index) => (
            <div
              key={id}
              className="flex w-full shrink-0 items-center justify-center"
              aria-hidden={active !== index}
              inert={active !== index}
            >
              <AppleShowcase platform={id} visible={active === index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
