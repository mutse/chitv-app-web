import { useState } from 'react'
import { Heart, House, ListVideo, Search, Settings, Tv } from 'lucide-react'
import { useTranslation } from '../i18n/useTranslation'

const slides = [
  { key: 'home', ios: 'iphone_home.jpg', tvos: 'appletv_home.jpg', icon: House },
  { key: 'search', ios: 'iphone_search.jpg', tvos: 'appletv_search.jpg', icon: Search },
  { key: 'detail', ios: 'iphone_detail.jpg', tvos: 'appletv_detail.jpg', icon: ListVideo },
  { key: 'favorites', ios: 'iphone_favorites.jpg', tvos: 'appletv_favorities.jpg', icon: Heart },
  { key: 'live', ios: 'iphone_livetv_steings.jpg', tvos: 'appletv_livetv.jpg', icon: Tv },
  { key: 'settings', ios: 'iphone_settings.jpg', tvos: 'appletv_settings.jpg', icon: Settings },
] as const

export function AppleShowcase({ platform, visible }: { platform: 'ios' | 'tvos'; visible: boolean }) {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const isTv = platform === 'tvos'
  const labelKey = (key: typeof slides[number]['key']) =>
    isTv && key === 'live' ? 'tvos.showcase.live.label' : `ios.showcase.${key}.label`

  return (
    <div className="@container min-w-0 w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const { key } = slide
            const copyKey = `${isTv && key !== 'search' ? 'tvos' : 'ios'}.showcase.${key}`
            return (
              <div
                key={key}
                id={`${platform}-showcase-${key}`}
                aria-hidden={active !== index}
                className={`grid w-full shrink-0 grid-cols-1 items-center gap-4 px-3 py-3 @min-[420px]:gap-6 ${isTv ? '@min-[420px]:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]' : '@min-[420px]:grid-cols-2'}`}
              >
                <div className="flex min-w-0 justify-center">
                  <img
                    src={visible || active === index ? `/screenshots/${slide[platform]}` : undefined}
                    width={isTv ? 2520 : 1524}
                    height={isTv ? 1575 : 2792}
                    alt={t(labelKey(key))}
                    className={`max-w-full rounded-2xl border border-black/5 object-contain shadow-lg ${isTv ? 'h-auto w-full' : 'h-[270px] w-auto @min-[420px]:h-[340px]'}`}
                    loading={isTv && active !== index ? 'lazy' : undefined}
                    draggable={false}
                  />
                </div>
                <div className="text-center @min-[420px]:text-start">
                  <h2 className="mb-2 text-xl font-bold @min-[420px]:text-2xl">{t(`${copyKey}.title`)}</h2>
                  <p className="text-text-secondary leading-relaxed">{t(`${copyKey}.desc`)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="relative mt-3 grid grid-cols-3 gap-2 px-2 pb-2 @min-[420px]:grid-cols-6">
        {slides.map(({ key, icon: Icon }, index) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            aria-controls={`${platform}-showcase-${key}`}
            className="group flex min-w-0 cursor-pointer flex-col items-center gap-1 rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className={`flex size-11 items-center justify-center rounded-full border transition-colors ${active === index ? 'bg-primary border-primary text-white shadow-md' : 'bg-surface border-black/10 text-text-secondary group-hover:bg-primary/10 group-hover:text-primary'}`}>
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className={`max-w-full break-words text-center text-xs ${active === index ? 'text-primary font-semibold' : 'text-text-secondary'}`}>
              {t(labelKey(key))}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
