import 'server-only';
import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./src/public/locales/en.json').then((module) => module.default),
  pt: () => import('./src/public/locales/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()