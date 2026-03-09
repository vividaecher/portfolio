import './style.css';
import { loadTranslations } from './i18n.js'

function getInitialLanguage() {

  const savedLang = localStorage.getItem("language")
  if (savedLang) return savedLang

  const browserLang = navigator.language || navigator.userLanguage

  if (browserLang.startsWith("de")) {
    return "de"
  }

  return "en"
}

function setLanguage(lang) {
  localStorage.setItem("language", lang)
  loadTranslations(lang)
}

const initialLang = getInitialLanguage()
loadTranslations(initialLang)

window.setLanguage = setLanguage

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