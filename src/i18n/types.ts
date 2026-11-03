export type Locale = 'zh' | 'tw' | 'en' | 'ja'

export interface Translations {
  [key: string]: {
    zh: string
    tw: string
    en: string
    ja: string
  }
}
