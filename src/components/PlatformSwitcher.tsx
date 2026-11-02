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
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current =
    location.pathname === '/android' || location.pathname === '/android/'
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
        <div
          role="menu"
          className="absolute left-0 top-full mt-2 w-36 rounded-xl border border-black/5 bg-surface p-1.5 shadow-lg"
        >
          {platforms.map((platform) => {
            const isCurrent = platform.label === current
            return (
              <Link
                key={platform.to}
                to={platform.to}
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
      )}
    </div>
  )
}
