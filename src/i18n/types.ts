export type Locale = 'zh' | 'tw' | 'en'

export interface Translations {
  [key: string]: {
    zh: string
    tw: string
    en: string
  }
}
