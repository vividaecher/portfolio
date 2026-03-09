import './style.css';
import { loadTranslations } from './i18n.js'

function renderSkills() {

  const skills = [
    { key: "skill_html", level: 5, color: "bg-purple-400" },
    { key: "skill_css", level: 5, color: "bg-orange-500" },
    { key: "skill_js", level: 3, color: "bg-gray-300" },
    { key: "skill_frameworks", level: 3, color: "bg-purple-400" },
    { key: "skill_typo3", level: 4, color: "bg-orange-500" },
    { key: "skill_git", level: 4, color: "bg-gray-300" },
    { key: "skill_uiux", level: 4, color: "bg-purple-400" },
    { key: "skill_concept", level: 3, color: "bg-orange-500" },
    { key: "skill_agile", level: 4, color: "bg-gray-300" }
  ];

  const grid = document.getElementById("skillsGrid")

  skills.forEach(skill => {

    let bars = ""

    for (let i = 1; i <= 5; i++) {

      if (i <= skill.level) {
        bars += `<div class="h-2 w-10 ${skill.color}"></div>`
      } else {
        bars += `<div class="h-2 w-10 bg-gray-700"></div>`
      }

    }

    const html = `
      <div>
        <p class="text-white mb-2" data-i18n="${skill.key}"></p>
        <div class="flex gap-1">${bars}</div>
      </div>
    `

    grid.insertAdjacentHTML("beforeend", html)

  })

  // Übersetzungen anwenden
  loadTranslations(window.currentLang)

}

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
  window.currentLang = lang
  loadTranslations(lang)
}

const initialLang = getInitialLanguage()
window.currentLang = initialLang
loadTranslations(initialLang)

window.setLanguage = setLanguage

document.addEventListener("DOMContentLoaded", () => {

  renderSkills()

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