(function () {
  document.documentElement.classList.add("js");
  var site = window.SITE || {};

  var I18N = {
    ru: {
      "nav.about": "О нас",
      "bar.call": "Позвонить",
      "bar.book": "Бронь",
      "nav.photos": "Фото",
      "photos.title": "Фотографии",
      "photos.hint": "Нажмите на фото, чтобы увеличить",
      "amenities.wifi.t": "Бесплатный Wi-Fi",
      "amenities.wifi.d": "Оставайтесь на связи во время поездки.",
      "amenities.ac.t": "Кондиционер",
      "amenities.ac.d": "Прохлада в номерах даже в хорезмскую жару.",
      "amenities.kitchen.t": "Общая кухня",
      "amenities.kitchen.d": "Полностью оборудованная кухня и столовая для гостей.",
      "photos.triple": "Трёхместный номер",
      "photos.twin": "Двухместный номер",
      "photos.kitchen": "Общая кухня и столовая",
      "photos.bathroom": "Ванная комната",
      "nav.amenities": "Удобства",
      "nav.contact": "Контакты",
      "hero.eyebrow": "Семейный гостевой дом · Ургенч, Узбекистан",
      "hero.lead": "Тихий семейный гостевой дом в Ургенче — удобная база для поездок в Хиву и по Хорезму.",
      "hero.book": "Забронировать на Booking.com",
      "hero.contact": "Связаться с нами",
      "about.title": "О нас",
      "about.text": "OASIS URGENCH — небольшой гостевой дом, которым управляет наша семья. Мы встречаем гостей Ургенча чистыми уютными номерами и тёплым хорезмским гостеприимством. До древней Хивы — недолгая поездка.",
      "amenities.title": "Что мы предлагаем",
      "amenities.intro": "Всё необходимое для спокойного отдыха.",
      "amenities.rooms.t": "Уютные номера",
      "amenities.rooms.d": "Чистые тихие номера для семей, пар и путешественников.",
      "amenities.host.t": "Семейное гостеприимство",
      "amenities.host.d": "Подскажем дорогу, поделимся советами и поможем спланировать поездку.",
      "amenities.location.t": "Удобное расположение",
      "amenities.location.d": "В Ургенче, рядом с дорогой на Хиву и её историческую Ичан-Калу.",
      "amenities.booking.t": "Простое бронирование",
      "amenities.booking.d": "Бронируйте онлайн через Booking.com или свяжитесь с нами напрямую.",
      "contact.title": "Контакты и адрес",
      "contact.intro": "Свяжитесь с нами, чтобы узнать о свободных номерах или забронировать проживание.",
      "contact.company": "Компания",
      "contact.address": "Адрес",
      "contact.official": "Юридический адрес",
      "contact.phone": "Телефон",
      "contact.email": "Эл. почта",
      "contact.map": "Открыть в Google Картах →",
      "footer.privacy": "Политика конфиденциальности"
    },
    uz: {
      "nav.about": "Biz haqimizda",
      "bar.call": "Qo‘ng‘iroq",
      "bar.book": "Band qilish",
      "nav.photos": "Rasmlar",
      "photos.title": "Rasmlar",
      "photos.hint": "Kattalashtirish uchun rasmni bosing",
      "amenities.wifi.t": "Bepul Wi-Fi",
      "amenities.wifi.d": "Sayohatingiz davomida doim aloqada bo‘ling.",
      "amenities.ac.t": "Konditsioner",
      "amenities.ac.d": "Xorazm yozgi jaziramasida ham salqin xonalar.",
      "amenities.kitchen.t": "Umumiy oshxona",
      "amenities.kitchen.d": "Mehmonlar uchun to‘liq jihozlangan oshxona va ovqatlanish joyi.",
      "photos.triple": "Uch kishilik xona",
      "photos.twin": "Ikki kishilik xona",
      "photos.kitchen": "Umumiy oshxona va ovqatlanish joyi",
      "photos.bathroom": "Hammom",
      "nav.amenities": "Qulayliklar",
      "nav.contact": "Aloqa",
      "hero.eyebrow": "Oilaviy mehmon uyi · Urganch, O‘zbekiston",
      "hero.lead": "Urganchdagi sokin oilaviy mehmon uyi — Xiva va Xorazm bo‘ylab sayohat uchun qulay maskan.",
      "hero.book": "Booking.com orqali band qilish",
      "hero.contact": "Biz bilan bog‘lanish",
      "about.title": "Biz haqimizda",
      "about.text": "OASIS URGENCH — oilamiz boshqaradigan kichik mehmon uyi. Urganchga kelgan mehmonlarni toza, shinam xonalar va Xorazmga xos samimiy mehmondo‘stlik bilan kutib olamiz. Qadimiy Xiva yaqin masofada joylashgan.",
      "amenities.title": "Biz taklif qilamiz",
      "amenities.intro": "Xotirjam dam olish uchun kerakli hamma narsa.",
      "amenities.rooms.t": "Shinam xonalar",
      "amenities.rooms.d": "Oilalar, juftliklar va yolg‘iz sayohatchilar uchun toza, sokin xonalar.",
      "amenities.host.t": "Oilaviy mehmondo‘stlik",
      "amenities.host.d": "Yo‘l ko‘rsatamiz, maslahat beramiz va sayohatingizni rejalashtirishga yordam beramiz.",
      "amenities.location.t": "Qulay joylashuv",
      "amenities.location.d": "Urganchda, Xivaga va uning tarixiy Ichan qal’asiga boradigan yo‘l yaqinida.",
      "amenities.booking.t": "Oson band qilish",
      "amenities.booking.d": "Booking.com orqali onlayn band qiling yoki biz bilan to‘g‘ridan-to‘g‘ri bog‘laning.",
      "contact.title": "Aloqa va manzil",
      "contact.intro": "Bo‘sh xonalar haqida so‘rash yoki joy band qilish uchun biz bilan bog‘laning.",
      "contact.company": "Kompaniya",
      "contact.address": "Manzil",
      "contact.official": "Rasmiy manzil",
      "contact.phone": "Telefon",
      "contact.email": "Elektron pochta",
      "contact.map": "Google Xaritada ochish →",
      "footer.privacy": "Maxfiylik siyosati"
    }
  };

  // Remember the English text already in the page so we can switch back to it.
  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { el.dataset.en = el.textContent; });

  function setLang(lang) {
    var dict = I18N[lang] || {};
    nodes.forEach(function (el) {
      el.textContent = dict[el.dataset.i18n] || el.dataset.en;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved && saved !== "en") setLang(saved);

  // Fill contact details from config.js and hide anything left empty.
  document.querySelectorAll('[data-site="legalName"]').forEach(function (el) {
    if (site.legalName) el.textContent = site.legalName;
  });
  ["address", "addressOfficial"].forEach(function (key) {
    document.querySelectorAll('[data-site="' + key + '"]').forEach(function (el) {
      if (site[key]) el.textContent = site[key];
    });
  });

  var links = {
    phone: site.phone && { href: "tel:" + site.phone.replace(/[^\d+]/g, ""), text: site.phone },
    email: site.email && { href: "mailto:" + site.email, text: site.email },
    telegram: site.telegram && { href: "https://t.me/" + site.telegram.replace(/^@/, ""), text: "@" + site.telegram.replace(/^@/, "") },
    whatsapp: site.whatsapp && { href: "https://wa.me/" + site.whatsapp.replace(/\D/g, ""), text: "+" + site.whatsapp.replace(/\D/g, "") }
  };

  Object.keys(links).forEach(function (key) {
    var link = links[key];
    document.querySelectorAll('[data-site-row="' + key + '"]').forEach(function (el) { el.hidden = !link; });
    if (!link) return;
    document.querySelectorAll('[data-site-link="' + key + '"]').forEach(function (a) {
      a.href = link.href;
      a.textContent = link.text;
    });
  });

  site.phoneLink = links.phone && links.phone.href;
  site.telegramLink = links.telegram && links.telegram.href;

  document.querySelectorAll("[data-site-href]").forEach(function (a) {
    var url = site[a.dataset.siteHref];
    if (url) a.href = url; else a.hidden = true;
  });

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  // Header: transparent over the hero, solid once the page scrolls.
  var header = document.getElementById("header");
  var hero = document.querySelector(".hero");
  function updateHeader() {
    var solid = !hero || window.scrollY > hero.offsetHeight - header.offsetHeight - 40;
    header.classList.toggle("solid", solid);
  }
  if (header) {
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
  }

  // Fade sections in as they scroll into view.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Photo viewer.
  var box = document.getElementById("lightbox");
  var shots = Array.prototype.slice.call(document.querySelectorAll(".shot"));
  if (box && box.showModal && shots.length) {
    var boxImg = box.querySelector("img");
    var boxCaption = box.querySelector(".lb-caption");
    var current = 0;

    function show(i) {
      current = (i + shots.length) % shots.length;
      var img = shots[current].querySelector("img");
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      boxCaption.textContent = shots[current].querySelector("span").textContent + " · " + (current + 1) + "/" + shots.length;
    }

    shots.forEach(function (shot, i) {
      shot.addEventListener("click", function () { show(i); box.showModal(); });
    });
    box.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
    box.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
    box.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });

    var startX = null;
    box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }
})();
