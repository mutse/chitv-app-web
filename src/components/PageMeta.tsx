import { useEffect } from 'react'
import { useTranslation } from '../i18n/useTranslation'

// 客户端路由切换时更新 document.title 与 meta（description / OG / Twitter），
// 跟随当前语言。首屏由预渲染的静态 HTML 提供，SEO 爬虫不受影响。
export function PageMeta({ titleKey, descKey }: { titleKey: string; descKey: string }) {
  const { t } = useTranslation()

  useEffect(() => {
    const title = t(titleKey)
    const desc = t(descKey)
    document.title = title
    const metas: Array<[string, string]> = [
      ['meta[name="description"]', desc],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', desc],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', desc],
    ]
    for (const [selector, value] of metas) {
      const el = document.querySelector(selector) as HTMLMetaElement | null
      if (el) el.setAttribute('content', value)
    }
  }, [t, titleKey, descKey])

  return null
}
