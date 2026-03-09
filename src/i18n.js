export async function loadTranslations(lang) {
  const res = await fetch(`${import.meta.env.BASE_URL}locales/${lang}.json`)
  const translations = await res.json()

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    if (translations[key]) {
      el.textContent = translations[key]
    }
  });

  // Sprach-Buttons
  const buttons = document.querySelectorAll("[data-i18n^='btn_lang_']");

  // Entferne zuerst die aktive Klasse von allen
  buttons.forEach(btn => btn.classList.remove("active-lang"));

  // Finde den Button für die gewählte Sprache und füge die Klasse hinzu
  const activeBtn = document.querySelector(`[data-i18n="btn_lang_${lang}"]`);
  if (activeBtn) activeBtn.classList.add("active-lang");
}