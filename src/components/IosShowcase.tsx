import { useState } from 'react'
import { Heart, House, ListVideo, Search, Settings, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

const slides = [
  { key: 'home', image: 'screenshots/iphone_home.jpg', icon: House },
  { key: 'search', image: 'screenshots/iphone_search.jpg', icon: Search },
  { key: 'detail', image: 'screenshots/iphone_detail.jpg', icon: ListVideo },
  { key: 'favorites', image: 'screenshots/iphone_favorites.jpg', icon: Heart },
  { key: 'live', image: 'screenshots/iphone_livetv_steings.jpg', icon: Tv },
  { key: 'settings', image: 'screenshots/iphone_settings.jpg', icon: Settings },
] as const

export function IosShowcase({ visible }: { visible: boolean }) {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  return (
    <div className="@container min-w-0 w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map(({ key, image }, index) => (
            <div
              key={key}
              id={`ios-showcase-${key}`}
              aria-hidden={active !== index}
              className="grid w-full shrink-0 grid-cols-1 items-center gap-4 px-3 py-3 @min-[420px]:grid-cols-2 @min-[420px]:gap-6"
            >
              <div className="flex justify-center">
                <img
                  src={visible || active === index ? `/${image}` : undefined}
                  width={1524}
                  height={2792}
                  alt={t(`ios.showcase.${key}.label`)}
                  className="h-[270px] w-auto max-w-full rounded-2xl border border-black/5 object-contain shadow-lg @min-[420px]:h-[340px]"
                  draggable={false}
                />
              </div>
              <div className="text-center @min-[420px]:text-start">
                <h2 className="mb-2 text-xl font-bold @min-[420px]:text-2xl">{t(`ios.showcase.${key}.title`)}</h2>
                <p className="text-text-secondary leading-relaxed">{t(`ios.showcase.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-3 grid grid-cols-3 gap-2 px-2 pb-2 @min-[420px]:grid-cols-6">
        {slides.map(({ key, icon: Icon }, index) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            aria-controls={`ios-showcase-${key}`}
            className="group flex min-w-0 cursor-pointer flex-col items-center gap-1 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className={`flex size-11 items-center justify-center rounded-full border transition-colors ${active === index ? 'bg-primary border-primary text-white shadow-md' : 'bg-surface border-black/10 text-text-secondary group-hover:bg-primary/10 group-hover:text-primary'}`}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className={`max-w-full break-words text-center text-xs ${active === index ? 'text-primary font-semibold' : 'text-text-secondary'}`}>
              {t(`ios.showcase.${key}.label`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
