export async function loadTranslations(lang = 'de') {
  try {
    // Festen Pfad nutzen
    const res = await fetch('dist/locales/' + lang + '.json'); 
    const translations = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) el.textContent = translations[key];
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && translations['hero_title']) {
      titleEl.textContent = `${translations['hero_title']} Vivi`;
    }
  } catch (err) {
    console.error("Translations could not be loaded:", err);
  }
}