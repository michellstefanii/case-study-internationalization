import en from '../public/locales/en';
import pt from '../public/locales/pt';
import { NextRouter, Router, useRouter } from "next/router"
import { i18n } from '../next-i18next.config';

export const LanguageSelected = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'pt' ? pt : en;
  return t;
}

export const ChangeLanguage = (locale, router) => {
  const path = locale + router.pathname
  router.replace(path, path, { locale })
}

export const DetectLanguage = (router) => {

  let isFoundLanguage = false;
  for (const lang of navigator.languages) {
    for (const locale of i18n.locales) {
      // eslint-disable-next-line no-undef
      if (lang.startsWith(locale)) {
        isFoundLanguage = true;
        if (locale !== 'pt')
          router.replace('/' + locale);
        return;
      }
    }
  }

  if (!isFoundLanguage && navigator.languages.length === 0) {
    router.replace('/');
  } else {
    router.replace('/en');
  }
}