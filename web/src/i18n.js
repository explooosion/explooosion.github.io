import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import _ from 'lodash';

import { COOKIE_I18N, getCookie, setCookie } from './utils/Cookie';

// the translations
// (tip move them in a JSON file and import them)
import US from './i18n/enUS';
import TW from './i18n/zhTW';

let lng = getCookie(COOKIE_I18N);
lng = _.isNull(lng) ? setCookie(COOKIE_I18N, 'TW') || 'TW' : lng;

const resources = { US, TW };

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    lng, // get default from cookie

    returnObjects: true, // locale build with object

    keySeparator: false, // we do not use keys in form messages.welcome

    fallbackLng: 'TW',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
