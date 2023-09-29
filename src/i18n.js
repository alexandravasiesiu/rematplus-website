import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import I18NextXhrBackend from "i18next-xhr-backend";

import roTranslation from './locales/ro.json';
import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';

i18n
  .use(I18NextXhrBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        ro: {translation: roTranslation},
        en: {translation: enTranslation},
        de: {translation: deTranslation},
    },
    lng: 'ro',
    fallbackLng: 'ro',
    iterpolation: {
        escapeValue: false,
    },
  });

export default i18n;
