import { loadTranslations } from './i18n.js';

const userLang = navigator.language.startsWith('en') ? 'en' : 'de';
loadTranslations(userLang);

window.setLanguage = (lang) => loadTranslations(lang);