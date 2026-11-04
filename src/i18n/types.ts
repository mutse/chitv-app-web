export const localeTags = {
  zh: 'zh-CN',
  tw: 'zh-TW',
  en: 'en',
  ja: 'ja',
  fr: 'fr',
  nl: 'nl',
  de: 'de',
} as const

export type Locale = keyof typeof localeTags

export const locales = Object.keys(localeTags) as Locale[]

export type Translations = Record<string, Record<Locale, string>>
