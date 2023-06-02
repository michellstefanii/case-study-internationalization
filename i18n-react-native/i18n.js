import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './locales/en';
import pt from './locales/pt';

const i18n = new I18n();

i18n.store({
  en,
  pt,
});

let locale = Localization.locale;
if (locale === 'pt-BR') {
  locale = 'pt';
}

i18n.locale = locale;

i18n.setLocale = function setLocale(newLocale) {
  i18n.locale = newLocale;
};

export default i18n;
