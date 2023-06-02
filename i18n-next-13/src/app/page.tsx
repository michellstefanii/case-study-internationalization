'use client'

import { i18n } from '../../i18n-config';
import { useEffect } from 'react';
import { useRouter } from "next/navigation"

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    let isFoundLanguage = false;
    for (const lang of navigator.languages) {
      for (const locale of i18n.locales) {
        if (lang.startsWith(locale)) {
          isFoundLanguage = true;
          router.replace('/' + locale);
          return;
        }
      }
    }

    if (!isFoundLanguage && navigator.languages.length === 0) {
      router.replace('/pt');
    } else {
      router.replace('/en');
    }
  }, [router]);

  return <></>;
};

export default Index;