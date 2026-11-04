import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

// 平台切换下拉：仿 mole.fit logo 旁的平台选择器。
// logo 右侧一个无底色/无边框的独立按钮，显示当前平台；展开后两项纯文字，当前项高亮。
const platforms = [
  { to: '/', label: 'Apple' },
  { to: '/android', label: 'Android' },
]

export function PlatformSwitcher() {
  const location = useLocation()
  const isReleases = /\/releases\/?$/.test(location.pathname)
  const isHelp = /\/help\/?$/.test(location.pathname)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current =
    location.pathname.startsWith('/android')
      ? 'Android'
      : 'Apple'

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open ])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`选择平台：${current}`}
        onClick={() => setOpen(true)}
        className="flex items-center gap-0.5 px-2 py-1 text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-primary"
      >
        {current}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        // 注意：这里必须用 pt-2 内边距桥接，不能用 mt-2 外边距——
        // 外边距会在按钮与面板之间留出 8px 不属于任何元素的空隙，
        // 鼠标移过空隙时触发 wrapper 的 onMouseLeave，菜单提前卸载，远处菜单项点不上。
        // 内边距属于容器自身的盒子，鼠标全程都在后代元素内，悬停链路不断。
        <div className="absolute left-0 top-full w-36 pt-2">
          <div
            role="menu"
            className="rounded-xl border border-black/5 bg-surface p-1.5 shadow-lg"
          >
            {platforms.map((platform) => {
              const isCurrent = platform.label === current
              return (
                <Link
                  key={platform.to}
                  to={isReleases ? (platform.label === 'Android' ? '/android/releases' : '/releases') : isHelp ? (platform.label === 'Android' ? '/android/help' : '/help') : platform.to}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition-colors duration-300 ${
                    isCurrent
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-text-secondary hover:bg-black/5 hover:text-primary'
                  }`}
                >
                  {platform.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
