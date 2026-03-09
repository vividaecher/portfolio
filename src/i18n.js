export async function loadTranslations(lang) {
  const res = await fetch(`${import.meta.env.BASE_URL}locales/${lang}.json`)
  const translations = await res.json()

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    if (translations[key]) {
      el.textContent = translations[key]
    }
  })

  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {

  const key = el.getAttribute("data-i18n-aria-label");

  el.placeholder = translations[key];

});
}