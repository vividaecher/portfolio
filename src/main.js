import './style.css';
import { loadTranslations } from './i18n.js'

/* -----------------------------
   SKILLS
----------------------------- */
function renderSkills() {

  const skills = [
    { key: "skill_html", level: 5, color: "bg-[var(--space-violet)]"},
    { key: "skill_css", level: 5, color: "bg-[var(--space-orange)]"},
    { key: "skill_js", level: 3, color: "bg-[var(--space-gray)]"},
    { key: "skill_frameworks", level: 3, color: "bg-[var(--space-violet)]"},
    { key: "skill_typo3", level: 4, color: "bg-[var(--space-orange)]"},
    { key: "skill_git", level: 4, color: "bg-[var(--space-gray)]"},
    { key: "skill_uiux", level: 4, color: "bg-[var(--space-violet)]"},
    { key: "skill_concept", level: 3, color: "bg-[var(--space-orange)]"},
    { key: "skill_agile", level: 4, color: "bg-[var(--space-gray)]"}
  ];

  const grid = document.getElementById("skillsGrid")
  if (grid) {
    skills.forEach(skill => {
      let bars = ""
      for (let i = 1; i <= 5; i++) {
        if (i <= skill.level) {
          bars += `<div class="h-2 w-full lg:w-10 ${skill.color}"></div>`
        } else {
          bars += `<div class="h-2 w-full lg:w-10 ${skill.color} opacity-25"></div>`
        }
      }

      const html = `
        <div>
          <p class="text-white mb-[0.5rem] font-bold" data-i18n="${skill.key}"></p>
          <div class="flex gap-1">${bars}</div>
        </div>
      `
      grid.insertAdjacentHTML("beforeend", html)
    })
  }

  const softSkillsData = [
    { key: "soft_pairing", icon: "satellite_alt", color: "text-[var(--space-violet)]" },
    { key: "soft_team", icon: "diversity_1", color: "text-[var(--space-orange)]" },
    { key: "soft_communication", icon: "mic", color: "text-[var(--space-gray)]" }
  ];

  const softSkills = document.getElementById("softSkills")
  if (softSkills) {
    softSkillsData.forEach(skill => {
      const html = `
        <div class="flex flex-row sm:flex-col items-center gap-2">
          <span class="material-symbols-outlined ${skill.color}">
            ${skill.icon}
          </span>
          <p class="text-white font-bold" data-i18n="${skill.key}"></p>
        </div>
      `;
      softSkills.insertAdjacentHTML("beforeend", html);
    })
  }

  loadTranslations(window.currentLang)
}

/* -----------------------------
   EXPERIENCE GRID
----------------------------- */
function renderExperience() {

  const orbitGridData = [
    { key: "current_job", icon: "satellite_alt", color: "text-purple-400" },
    { key: "soft_team", icon: "diversity_1", color: "text-orange-500" },
    { key: "soft_communication", icon: "mic", color: "text-gray-300" }
  ];

  const orbitGrid = document.getElementById("orbitGrid");
  if (orbitGrid) {
    orbitGridData.forEach(skill => {
      const html = `
        <div class="flex flex-col items-center gap-2">
          <span class="material-symbols-outlined ${skill.color}">
            ${skill.icon}
          </span>
          <span class="text-white font-bold" data-i18n="${skill.key}"></span>
        </div>
      `;
      orbitGrid.insertAdjacentHTML("beforeend", html);
    })
  }

  loadTranslations(window.currentLang)
}

/* -----------------------------
   LANGUAGE SYSTEM
----------------------------- */
function getInitialLanguage() {
  const savedLang = localStorage.getItem("language")
  if (savedLang) return savedLang

  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith("de")) return "de"
  return "en"
}

function setLanguage(lang) {
  localStorage.setItem("language", lang)
  window.currentLang = lang
  document.documentElement.lang = lang
  loadTranslations(lang)
}

const initialLang = getInitialLanguage()
window.currentLang = initialLang
document.documentElement.lang = initialLang
loadTranslations(initialLang)
window.setLanguage = setLanguage

/* -----------------------------
   PROJECT DATA
----------------------------- */
const projects = {
  portfolio: {
    title: "project_portfolio_title",
    image: "./img/projects/detailansicht_portfolio.png",
    alt: "project_details_portfolio_alt",
    description: "project_portfolio_description"
  },
  koelnticket: {
    title: "project_koelnticket_title",
    image: "./img/projects/detailansicht_koelnticket.png",
    alt: "project_details_koelnticket_alt",
    description: "project_koelnticket_description"
  },
  benrathshop: {
    title: "project_benrathshop_title",
    image: "./img/projects/detailansicht_schloss_benrath.png",
    alt: "project_details_benrathshop_alt",
    description: "project_benrathshop_description"
  },
  carta: {
    title: "project_carta_title",
    image: "./img/projects/detailansicht_carta.png",
    alt: "project_details_carta_alt",
    description: "project_carta_description"
  },
  bunttoo: {
    title: "project_bunttoo_title",
    image: "./img/projects/detailansicht_bunttoo.png",
    alt: "project_details_bunttoo_alt",
    description: "project_bunttoo_description"
  },
  domaindepot: {
    title: "project_domaindepot_title",
    image: "./img/projects/detailansicht_domaindepot.png",
    alt: "project_details_domaindepot_alt",
    description: "project_domaindepot_description"
  },
  sipgate_dashboard: {
    title: "project_sipgate_dashboard_title",
    image: "./img/projects/detailansicht_sipgate_dashboard.png",
    alt: "project_details_sipgate_dashboard_alt",
    description: "project_sipgate_dashboard_description"
  },
  sipgate_gmail_extension: {
    title: "project_sipgate_gmail_extension_title",
    image: "./img/projects/detailansicht_sipgate_gmail_extension.png",
    alt: "project_details_sipgate_gmail_extension_alt",
    description: "project_sipgate_gmail_extension_description"
  },
  erstwaehler: {
    title: "project_erstwaehler_title",
    image: "./img/projects/detailansicht_erstwaehler.png",
    alt: "project_details_erstwaehler_alt",
    description: "project_erstwaehler_description"
  },
  duesseldorf_tour: {
    title: "project_duesseldorf_tour_title",
    image: "./img/projects/detailansicht_duesseldorf_tour.png",
    alt: "project_details_duesseldorf_tour_alt",
    description: "project_duesseldorf_tour_description"
  },
  dailyui_festival: {
    title: "project_dailyui_festival_title",
    image: "./img/projects/detailansicht_dailyui_festival.png",
    alt: "project_details_dailyui_festival_alt",
    description: "project_dailyui_festival_description"
  }
};

/* -----------------------------
   PROJECT OVERLAY
----------------------------- */
function initProjectOverlay() {

  const overlay = document.getElementById("projectOverlay");
  const closeOverlay = document.getElementById("closeOverlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayImage = document.getElementById("overlayImage");
  const overlayAlt = document.getElementById("overlayAlt");
  const overlayDescription = document.getElementById("overlayDescription");

  if (!overlay || !closeOverlay || !overlayTitle || !overlayImage || !overlayDescription) return;

  document.querySelectorAll(".open-project").forEach(button => {

    button.addEventListener("click", () => {

  const project = projects[button.dataset.project];
    if (!project) return;

      // Titel übersetzen
      overlayTitle.dataset.i18n = project.title;

      // Beschreibung übersetzen
      overlayDescription.dataset.i18n = project.description;

      // Bild setzen
      overlayImage.src = project.image;

      // Alt-Tag vorbereiten
      overlayImage.dataset.i18nAlt = project.alt;

      // Übersetzung anwenden
      loadTranslations(window.currentLang);

      overlay.classList.add("active");
      document.body.classList.add("overflow-hidden");
    });

  });

  const close = () => {
  overlay.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
};

  closeOverlay.addEventListener("click", close);
  overlay.addEventListener("click", e => { if(e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });

}

/* -----------------------------
   MOBILE NAVIGATION
----------------------------- */
function initMobileMenu(){

  const mobileNav = document.getElementById("mobileNav")
  const openBtn = document.getElementById("openMenu")
  const closeBtn = document.getElementById("closeMenu")

  if (!mobileNav || !openBtn || !closeBtn) return

  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
    document.body.classList.add("overflow-hidden"); // scrollen verhindern
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.classList.remove("overflow-hidden"); // scrollen wieder erlauben
  });
}

/* -----------------------------
   INIT
----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills()
  renderExperience()
  initProjectOverlay()
  initMobileMenu()
});