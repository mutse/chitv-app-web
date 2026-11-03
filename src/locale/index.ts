import { zh } from './zh'
import { tw } from './tw'
import { en } from './en'
import { ja } from './ja'
import { fr } from './fr'
import type { Locale, Translations } from '../i18n/types'

const dicts: Record<Locale, Record<string, string>> = { zh, tw, en, ja, fr }

// 开发模式下校验五语 key 对齐，缺失时在控制台告警
if (import.meta.env.DEV) {
  const zhKeys = new Set(Object.keys(zh))
  for (const locale of Object.keys(dicts) as Locale[]) {
    for (const key of Object.keys(dicts[locale])) {
      if (!zhKeys.has(key)) console.warn(`[i18n] ${locale} 有多余的 key: ${key}`)
    }
    for (const key of zhKeys) {
      if (!(key in dicts[locale])) console.warn(`[i18n] ${locale} 缺少 key: ${key}`)
    }
  }
}

export const translations: Translations = {}
for (const key of Object.keys(zh)) {
  translations[key] = {
    zh: zh[key],
    tw: tw[key] ?? zh[key],
    en: en[key] ?? zh[key],
    ja: ja[key] ?? zh[key],
    fr: fr[key] ?? zh[key],
  }
}
