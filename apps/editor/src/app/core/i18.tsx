import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
.use(Backend)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  fallbackLng: 'en',
  debug: true,
  backend: {
    loadPath: '/assets/locales/{{lng}}/{{ns}}.json'
  }
});

export default i18n;
