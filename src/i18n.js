import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
    en: {
        translation: {
          'hi':'Hi 👋🏻, I\'m',
          'contact': 'Contact',
          'cv': 'CV',
          'blog': 'Blog',
          'code': 'Code',
          'books': 'Books',
          'links': 'Links',
          // ...more translations for English
        }
      },
      fr: {
        translation: {
          'hi':'Salut 👋🏻, c\'est',
          'contact': 'Contact',
          'cv': 'CV',
          'blog': 'Blog',
          'code': 'Code',
          'books': 'Livres',
          'links': 'Liens',

        }
      },
      // Add more languages here
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
