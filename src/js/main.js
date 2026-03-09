import { loadTranslations } from './i18n.js';

const userLang = navigator.language.startsWith('en') ? 'en' : 'de';
loadTranslations(userLang);

window.setLanguage = (lang) => loadTranslations(lang);

document.addEventListener("DOMContentLoaded", () => {

  const mobileNav = document.getElementById("mobileNav");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");

  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });

});