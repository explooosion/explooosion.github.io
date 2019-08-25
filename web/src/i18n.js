import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from 'js-cookie';

// the translations
// (tip move them in a JSON file and import them)
import translationEN from './locales/US.js';
import translationTW from './locales/TW.js';
import translationCN from './locales/CN.js';

const lng = Cookies.get('locale') === undefined ? 'TW' : Cookies.get('locale');

const resources = {
  US: { translation: translationEN },
  TW: { translation: translationTW },
  CN: { translation: translationCN },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng, // get default from cookie
    
    returnObjects: true,

    keySeparator: false, // we do not use keys in form messages.welcome
    fallbackLng: 'TW',

    // debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
