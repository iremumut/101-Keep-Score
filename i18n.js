import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import tr from './src/assets/i18n/tr';
import en from './src/assets/i18n/en';

const resources = {
  en,
  tr,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'tr',
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
