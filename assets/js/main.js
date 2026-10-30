/* Venture Mühendislik — site scripts */
(function () {
  "use strict";

  /* ---------- Icon sprite (inlined so icons also work when opened from disk) ---------- */
  var ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    pin: '<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    users: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="9" r="2.4"/><circle cx="19" cy="9" r="2.4"/><path d="M6.5 20v-1.5A5.5 5.5 0 0 1 12 13a5.5 5.5 0 0 1 5.5 5.5V20"/><path d="M1.5 19v-.8A3.6 3.6 0 0 1 5 14.6c.7 0 1.3.2 1.9.5"/><path d="M22.5 19v-.8a3.6 3.6 0 0 0-3.5-3.6c-.7 0-1.3.2-1.9.5"/>',
    chart: '<path d="M3 21h18"/><rect x="5" y="13" width="3" height="8"/><rect x="10.5" y="8" width="3" height="13"/><rect x="16" y="3" width="3" height="18"/>',
    blueprint: '<path d="M3 5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 7h5v5H7z"/><path d="M7 16h10"/><path d="M15 11h2"/><path d="M14.5 7.5l2.5 0"/><path d="M12 12v4"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    hardhat: '<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 6 6v3"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><rect x="2" y="15" width="20" height="4" rx="1"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    analysis: '<circle cx="10.5" cy="10.5" r="7.5"/><path d="m21 21-5.2-5.2"/><path d="M6.5 12.5 9 9.5l2 2 3-3.5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    clipcheck: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    cliplist: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
    doc: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2v2H8z"/><path d="M8 17.5h2"/><path d="M13 13h3"/><path d="M13 17h3"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    residential: '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M10 22v-4h4v4"/><path d="M8.5 6h1M14.5 6h1M8.5 10h1M14.5 10h1M8.5 14h1M14.5 14h1"/>',
    office: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    hotel: '<rect x="4" y="5" width="16" height="17" rx="1"/><path d="M10 22v-4h4v4"/><path d="M8 9h1M15 9h1M8 13h1M15 13h1M11.5 9h1M11.5 13h1"/><path d="m7 2 .4.8.9.1-.6.6.1.9L7 4l-.8.4.1-.9-.6-.6.9-.1zM12 1.5l.4.8.9.1-.6.6.1.9-.8-.4-.8.4.1-.9-.6-.6.9-.1zM17 2l.4.8.9.1-.6.6.1.9-.8-.4-.8.4.1-.9-.6-.6.9-.1z"/>',
    hospital: '<path d="M12 6v4"/><path d="M10 8h4"/><path d="M14 14h-4"/><path d="M14 18h-4"/><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/><path d="M9 10.5h10M9.5 13h8.5"/>',
    integrated: '<rect x="2" y="6" width="12" height="15"/><path d="M6 21v-4h4v4"/><path d="M5 9.5h2M9 9.5h2M5 13h2M9 13h2"/><path d="M14 10h4v11"/><path d="M20.5 3v14l1 2.5-1 1.5-1-1.5 1-2.5"/><path d="M19.5 6h2"/>',
    send: '<path d="M14.54 21.69a.5.5 0 0 0 .94-.03l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"/><path d="m21.85 2.15-10.94 10.94"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    user: '<circle cx="12" cy="8" r="4.5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    pencil: '<path d="M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>'
  };

  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(ICONS).forEach(function (k) {
    sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + "</symbol>";
  });
  sprite += "</svg>";
  document.body.insertAdjacentHTML("afterbegin", sprite);

  /* ---------- Header: scrolled state + mobile menu ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Projects filter ---------- */
  var filterBar = document.querySelector("[data-filters]");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll(".filter");
    var cards = document.querySelectorAll("[data-category]");
    var empty = document.querySelector(".projects-empty");

    var applyFilter = function (cat) {
      var shown = 0;
      buttons.forEach(function (b) {
        var active = b.dataset.filter === cat;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      cards.forEach(function (card) {
        var match = cat === "tumu" || card.dataset.category === cat;
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    };

    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      applyFilter(btn.dataset.filter);
      if (history.replaceState) {
        var url = btn.dataset.filter === "tumu" ? location.pathname : "?kategori=" + btn.dataset.filter;
        history.replaceState(null, "", url);
      }
    });

    var initial = new URLSearchParams(location.search).get("kategori");
    var valid = Array.prototype.some.call(buttons, function (b) { return b.dataset.filter === initial; });
    applyFilter(valid ? initial : "tumu");
  }

  /* ---------- Contact form (opens the visitor's e-mail app) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form__note");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var d = new FormData(form);
      var subject = d.get("konu") || "Web sitesi iletişim formu";
      var body =
        "Ad Soyad: " + d.get("ad") + "\n" +
        "E-posta: " + d.get("eposta") + "\n" +
        "Telefon: " + (d.get("telefon") || "-") + "\n\n" +
        d.get("mesaj");
      window.location.href =
        "mailto:info@venturemuhendislik.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (note) note.textContent = "Mesajınız e-posta uygulamanızda hazırlandı. Göndermek için e-postayı onaylayın.";
    });
  }
})();
