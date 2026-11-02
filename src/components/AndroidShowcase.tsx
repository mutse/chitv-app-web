import { useState } from 'react'
import { Home, Search, Compass, Heart, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

const slides = [
  { key: 'home', icon: Home },
  { key: 'search', icon: Search },
  { key: 'discover', icon: Compass },
  { key: 'favorites', icon: Heart },
  { key: 'live', icon: Tv },
] as const

export function AndroidShowcase() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  return (
    <section className="py-12 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map(({ key }, index) => (
              <div
                key={key}
                id={`android-showcase-${key}`}
                aria-hidden={active !== index}
                className="grid w-full shrink-0 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div className="flex h-[380px] sm:h-[480px] justify-center px-4 py-4">
                  <img
                    src={`/screenshots/android-${key}.jpg`}
                    alt={t(`android.showcase.${key}.title`)}
                    className="max-h-full max-w-full w-auto object-contain rounded-2xl border border-black/5 shadow-lg"
                    draggable={false}
                  />
                </div>
                <div className="min-h-44 md:min-h-0">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t(`android.showcase.${key}.title`)}</h2>
                  <p className="text-text-secondary leading-relaxed text-lg">{t(`android.showcase.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-2 sm:gap-4">
          {slides.map(({ key, icon: Icon }, index) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === index}
              aria-controls={`android-showcase-${key}`}
              onClick={() => setActive(index)}
              className="group flex min-w-0 flex-col items-center gap-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary cursor-pointer"
            >
              <span className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border transition-colors ${active === index ? 'bg-primary border-primary text-white shadow-md' : 'bg-surface border-black/10 text-text-secondary group-hover:bg-primary/10 group-hover:text-primary'}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className={`text-xs sm:text-sm ${active === index ? 'text-primary font-semibold' : 'text-text-secondary'}`}>
                {t(`android.showcase.${key}.label`)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
