export async function loadTranslations(lang) {
  const res = await fetch(`${import.meta.env.BASE_URL}locales/${lang}.json`)
  const translations = await res.json()

  // TEXT
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    if (translations[key]) {
      el.textContent = translations[key]
    }
  });

  // HREF
  document.querySelectorAll("[data-i18n-href]").forEach(el => {
  const key = el.dataset.i18nHref
  if (translations[key]) {
    el.setAttribute("href", translations[key])
  }

  // ALT
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt
    if (translations[key]) {
      el.setAttribute("alt", translations[key])
    }
  })

  // TITLE
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.dataset.i18nTitle
    if (translations[key]) {
      el.setAttribute("title", translations[key])
    }
  })

  // ARIA
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.dataset.i18nAria
    if (translations[key]) {
      el.setAttribute("aria-label", translations[key])
    }
  })

  // META
  document.querySelectorAll("[data-i18n-meta]").forEach(el => {
    const key = el.dataset.i18nMeta
    if (translations[key]) {
      el.setAttribute("content", translations[key])
    }
  })

})

  // Sprach-Buttons
  const buttons = document.querySelectorAll("[data-i18n^='btn_lang_']");

  // Entferne zuerst die aktive Klasse von allen
  buttons.forEach(btn => btn.classList.remove("active-lang"));

  // Finde den Button für die gewählte Sprache und füge die Klasse hinzu
  const activeBtn = document.querySelector(`[data-i18n="btn_lang_${lang}"]`);
  if (activeBtn) activeBtn.classList.add("active-lang");
}