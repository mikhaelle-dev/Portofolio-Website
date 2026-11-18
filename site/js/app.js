/* ==========================================================================
   APP.JS — merender halaman dari js/data.js. Umumnya tidak perlu diubah.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var PAGE = document.body.getAttribute("data-page") || "home";
  var app = document.getElementById("app");

  /* ------------------------------ Helpers ------------------------------ */
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* abaikan */ } }
  };
  var lang = store.get("lang_pref") || S.defaultLang || "id";
  if (lang !== "en" && lang !== "id") lang = "id";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tr(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) return v[lang] != null ? v[lang] : (v.en != null ? v.en : "");
    return v == null ? "" : v;
  }
  function safeUrl(u) {
    u = String(u || "");
    return /^(https?:|mailto:|#|\.{0,2}\/|[\w-]+[\w./-]*$)/i.test(u) ? u : "#";
  }

  /* Markdown mini: ## judul, - daftar, **tebal**, `kode` */
  function md(src) {
    var lines = esc(tr(src)).split("\n"), out = [], list = false;
    function inline(t) { return t.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`(.+?)`/g, "<code>$1</code>"); }
    lines.forEach(function (ln) {
      if (/^\s*-\s+/.test(ln)) {
        if (!list) { out.push("<ul>"); list = true; }
        out.push("<li>" + inline(ln.replace(/^\s*-\s+/, "")) + "</li>");
        return;
      }
      if (list) { out.push("</ul>"); list = false; }
      if (/^##\s+/.test(ln)) out.push("<h3>" + inline(ln.replace(/^##\s+/, "")) + "</h3>");
      else if (ln.trim()) out.push("<p>" + inline(ln) + "</p>");
    });
    if (list) out.push("</ul>");
    return out.join("");
  }

  /* ------------------------------- UI text ------------------------------ */
  var UI = {
    en: {
      home: "Home", projects: "Projects", certificates: "Certificates", about: "About",
      hello: "Hello, I'm", viewProjects: "View projects",
      tech: "Tools & technologies", checkProjects: "Check out my projects",
      certs: "My certifications", seeAll: "See all",
      projectsSub: "A collection of things I have built.", certsSub: "Courses and certifications I have earned.",
      role: "Role", source: "Source", issuer: "Issuer", date: "Date", credId: "Credential ID", skills: "Skills",
      experience: "Experience", education: "Education",
      curriculumVitae: "Curriculum Vitae", cvDescription: "View or download my CV in your preferred language.",
      viewCv: "View", downloadCv: "Download",
      switchToId: "Change language to Indonesian",
      connect: "Let's Connect", email: "email",
      rights: "All rights reserved.", close: "Close", theme: "Toggle theme", darkMode: "Dark mode"
    },
    id: {
      home: "Beranda", projects: "Proyek", certificates: "Sertifikat", about: "Tentang",
      hello: "Halo, aku", viewProjects: "Lihat proyek",
      tech: "Perangkat & teknologi", checkProjects: "Lihat proyekku",
      certs: "Sertifikasiku", seeAll: "Lihat semua",
      projectsSub: "Kumpulan karya yang pernah aku buat.", certsSub: "Kursus dan sertifikasi yang pernah aku raih.",
      role: "Peran", source: "Sumber", issuer: "Penerbit", date: "Tanggal", credId: "ID Kredensial", skills: "Keahlian",
      experience: "Pengalaman", education: "Pendidikan",
      curriculumVitae: "Curriculum Vitae", cvDescription: "Lihat atau unduh CV saya dalam bahasa pilihan.",
      viewCv: "Lihat", downloadCv: "Unduh",
      switchToEn: "Ganti bahasa ke Inggris",
      connect: "Mari Terhubung", email: "email",
      rights: "Hak cipta dilindungi.", close: "Tutup", theme: "Ganti tema", darkMode: "Mode gelap"
    }
  };
  function t(k) { return UI[lang][k] || k; }

  /* ------------------------------- Icons -------------------------------- */
  function svg(inner, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || "") + ">" + inner + "</svg>";
  }
  var ICON = {
    github: svg('<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'),
    instagram: svg('<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>'),
    linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
    moon: svg('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>', ' class="i-moon"'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>', ' class="i-sun"'),
    globe: svg('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>', ' class="lang-globe"'),
    home: svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
    projects: svg('<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>'),
    certificates: svg('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>'),
    about: svg('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    arrow: svg('<path d="M5 12h14M12 5l7 7-7 7"/>'),
    ext: svg('<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),
    arrowUpRight: svg('<path d="M7 17 17 7M7 7h10v10"/>'),
    eye: svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'),
    download: svg('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>')
  };

  var NAV = [
    { id: "home", href: "index.html" },
    { id: "projects", href: "projects.html" },
    { id: "certificates", href: "certificates.html" },
    { id: "about", href: "about.html" }
  ];

  /* ------------------------------ Components ---------------------------- */
  function header() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '" class="' + (n.id === PAGE ? "active" : "") + '">' + t(n.id) + "</a>";
    }).join("");
    return '<header class="site-header"><div class="wrap">' +
      '<a class="logo" href="index.html"><span class="star">✦</span><span>Mikhael</span></a>' +
      '<div class="header-right"><nav class="nav" aria-label="Main">' + links + "</nav>" +
      '<div class="tools">' +
        '<button class="theme-toggle" data-action="theme" aria-label="' + esc(t("theme")) + '"><span class="theme-icon" aria-hidden="true">' + ICON.moon + ICON.sun + '</span><span class="theme-label">' + esc(t("darkMode")) + "</span></button>" +
        '<button type="button" class="lang" data-lang-toggle aria-label="' + esc(t(lang === "en" ? "switchToId" : "switchToEn")) + '">' +
          ICON.globe + "<span>" + lang.toUpperCase() + "</span></button>" +
      "</div></div></div></header>";
  }

  function bottomNav() {
    return '<nav class="bottom-nav" aria-label="Mobile">' + NAV.map(function (n) {
      return '<a href="' + n.href + '" class="' + (n.id === PAGE ? "active" : "") + '">' + ICON[n.id] + "<span>" + t(n.id) + "</span></a>";
    }).join("") + "</nav>";
  }

  function footer() {
    var socials = (S.socials || []).map(function (s) {
      var icon = s.image
        ? '<img src="' + esc(s.image) + '" alt="" aria-hidden="true">'
        : (ICON[s.icon] || ICON.ext);
      if (!s.url) return '<span class="footer-social" aria-hidden="true">' + icon + "</span>";
      return '<a class="footer-social" href="' + esc(safeUrl(s.url)) + '" target="_blank" rel="noopener" aria-label="' + esc(s.label) + '">' + icon + "</a>";
    }).join("");
    return '<footer class="site-footer"><div class="wrap">' +
      '<div class="footer-meta"><a class="footer-brand" href="index.html"><span class="star" aria-hidden="true">✦</span><span>Mikhael</span></a>' +
      '<span class="footer-divider" aria-hidden="true"></span>' +
      '<small>© ' + new Date().getFullYear() + " " + esc(S.name) + ". " + t("rights") + "</small></div>" +
      '<div class="socials">' + socials + "</div>" +
      "</div></footer>";
  }

  function divider(label) { return '<div class="divider reveal"><span class="pill">' + esc(label) + "</span></div>"; }

  function chips(list) {
    return '<div class="chips">' + (list || []).map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>";
  }

  function projectImage(p) {
    var lightMode = !document.documentElement.classList.contains("dark");
    return lightMode && p.imageLight ? p.imageLight : p.image;
  }

  function projectImages(p) {
    var lightMode = !document.documentElement.classList.contains("dark");
    var images = lightMode && p.imagesLight ? p.imagesLight : p.images;
    return images && images.length ? images.slice() : [projectImage(p)];
  }

  function projectCard(p, i) {
    return '<button class="fb reveal" data-open="project" data-i="' + i + '" type="button"><span class="card-arrow" aria-hidden="true">' + ICON.arrowUpRight + "</span><div class=\"front\">" +
      '<div class="thumb"><img src="' + esc(projectImage(p)) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      '<div class="card-body"><h3>' + esc(p.name) + "</h3><p>" + esc(tr(p.description)) + "</p></div>" +
      "</div></button>";
  }

  function certCard(c, i) {
    return '<button class="fb reveal" data-open="cert" data-i="' + i + '" type="button"><span class="card-arrow" aria-hidden="true">' + ICON.arrowUpRight + "</span><div class=\"front\">" +
      '<div class="thumb"><img src="' + esc(c.image) + '" alt="' + esc(c.name) + '" loading="lazy"></div>' +
      '<div class="card-body"><h3>' + esc(c.name) + '</h3><div class="card-meta"><span>' + esc(c.issuer) + "</span>" +
      (tr(c.date) ? "<span>" + esc(tr(c.date)) + "</span>" : "") + "</div></div>" +
      "</div></button>";
  }

  function marquees() {
    var list = S.skills || [], rows = [[], [], []];
    list.forEach(function (n, i) { rows[i % 3].push(n); });
    var accessibleList = list.map(function (item) { return item.name; }).join(", ");
    return '<div class="marquees" role="group" aria-label="' + esc(t("tech")) + '"><span class="sr-only">' + esc(accessibleList) + "</span>" +
      rows.map(function (row, ri) {
      if (!row.length) return "";
      var one = row.map(function (item) {
        return '<span class="badge"><img src="' + esc(item.image) + '" alt="" loading="eager" decoding="async"><span>' + esc(item.name) + "</span></span>";
      }).join("");
      var repeated = one + one;
      return '<div class="marquee ' + (ri === 1 ? "marquee-right" : "marquee-left") + '"><div class="marquee-track" aria-hidden="true">' + repeated + "</div></div>";
    }).join("") + "</div>";
  }

  /* -------------------------------- Pages -------------------------------- */
  function pageHome() {
    var roles = S.roles || [];
    return '<main class="wrap home-page">' +
      '<section class="hero">' +
        '<div class="hero-text reveal">' +
          '<p class="hello">' + t("hello") + "</p>" +
          "<h1>" + esc(S.heroName || S.name) + "</h1>" +
          '<p class="role-line"><span class="rotator" id="rotator">' + esc(roles[0] || "") + "</span></p>" +
          '<p class="lead">' + esc(tr(S.tagline)) + "</p>" +
          (tr(S.location) ? '<p class="meta">📍 ' + esc(tr(S.location)) + "</p>" : "") +
          '<div class="hero-tech"><p class="tech-label">' + t("tech") + "</p>" + marquees() + "</div>" +
          '<div class="hero-cta"><a class="btn btn-primary" href="projects.html">' + t("viewProjects") + " " + ICON.arrow + "</a></div>" +
        "</div>" +
        '<div class="hero-photo reveal"><div class="frame"><img src="' + esc(S.photo) + '" alt="' + esc(S.name) + '"></div><span class="hello-badge" aria-hidden="true">👋</span></div>' +
      "</section>" +

      '<section class="section">' + divider(t("checkProjects")) +
        '<div class="grid cols-3">' + S.projects.slice(0, 3).map(projectCard).join("") + "</div>" +
        '<div class="center"><a class="btn btn-primary" href="projects.html">' + t("seeAll") + " " + ICON.arrow + "</a></div></section>" +

      '<section class="section">' + divider(t("certs")) +
        '<div class="grid cols-3">' + S.certificates.slice(0, 6).map(certCard).join("") + "</div>" +
        '<div class="center"><a class="btn btn-primary" href="certificates.html">' + t("seeAll") + " " + ICON.arrow + "</a></div></section>" +
      "</main>";
  }

  function pageProjects() {
    return '<main class="wrap"><div class="page-title reveal"><h1>' + t("projects") + "</h1><p>" + t("projectsSub") + "</p></div>" +
      '<div class="grid cols-3">' + S.projects.map(projectCard).join("") + "</div></main>";
  }

  function pageCerts() {
    return '<main class="wrap"><div class="page-title reveal"><h1>' + t("certificates") + "</h1><p>" + t("certsSub") + "</p></div>" +
      '<div class="grid cols-3">' + S.certificates.map(certCard).join("") + "</div></main>";
  }

  function timeline(items) {
    return '<ol class="timeline">' + items.map(function (it) {
      return '<li class="t-item reveal"><span class="logo-wrap">' +
        '<img class="timeline-logo" src="' + esc(it.logo) + '" alt="Logo ' + esc(tr(it.org)) + '" width="40" height="40" loading="lazy" decoding="async">' +
        '<span class="logo-fallback" role="img" aria-label="Logo ' + esc(tr(it.org)) + '">' + esc(it.initials) + "</span></span>" +
        '<div class="timeline-content"><p class="timeline-date">' + esc(tr(it.date)) + "</p>" +
        "<h3>" + esc(tr(it.title)) + '</h3><div class="org">' + esc(tr(it.org)) + "</div>" +
        "<p>" + esc(tr(it.desc)) + "</p></div></li>";
    }).join("") + "</ol>";
  }

  function timelineSection(title, items) {
    return items && items.length ?
      '<section class="timeline-section"><h2 class="reveal">' + esc(title) + "</h2>" + timeline(items) + "</section>" : "";
  }

  function pageAbout() {
    var a = S.about;
    var education = timelineSection(t("education"), S.education);
    var experience = timelineSection(t("experience"), S.experience);
    var cv = a.cv ?
      '<section class="cv-section reveal"><h2>' + t("curriculumVitae") + "</h2><p>" + t("cvDescription") + "</p>" +
        '<div class="cv-panel">' +
          '<div class="cv-lang" role="group" aria-label="Curriculum Vitae language">' +
            '<button type="button" data-lang="en" class="' + (lang === "en" ? "on" : "") + '">English</button>' +
            '<button type="button" data-lang="id" class="' + (lang === "id" ? "on" : "") + '">Indonesia</button>' +
          "</div>" +
          '<div class="cv-actions">' +
            '<a class="btn" href="' + esc(a.cv[lang]) + '" target="_blank" rel="noopener noreferrer">' + ICON.eye + esc(t("viewCv")) + "</a>" +
            '<a class="btn btn-primary" href="' + esc(a.cv[lang]) + '" download>' + ICON.download + esc(t("downloadCv")) + "</a>" +
          "</div></div></section>" : "";
    var connect = S.connect ?
      '<section class="connect-section reveal"><h2>' + t("connect") + "</h2><p>" + esc(tr(S.connect.before)) +
        ' <a href="' + esc(safeUrl(S.connect.linkUrl)) + '" target="_blank" rel="noopener noreferrer">' + esc(tr(S.connect.linkLabel)) + "</a>" +
        " " + esc(tr(S.connect.middle)) + ' <a href="mailto:' + esc(S.email) + '">' + t("email") + "</a> " +
        esc(tr(S.connect.after)) + "</p></section>" : "";
    return '<main class="wrap">' +
      '<section class="about-text reveal"><h2>' + esc(tr(a.heading)) + "</h2>" +
        a.paragraphs.map(function (p) { return "<p>" + esc(tr(p)) + "</p>"; }).join("") +
      "</section>" +
      (S.aboutImage ? '<div class="about-banner reveal"><img src="' + esc(S.aboutImage) + '" alt="' + esc(S.name) + '"></div>' : "") +
      (a.shortBio ? '<section class="short-bio reveal"><h3>' + esc(tr(a.shortBio.heading)) + "</h3><p>" + esc(tr(a.shortBio.text)) + "</p></section>" : "") +
      cv + education + experience + connect +
      "</main>";
  }

  /* ------------------------------ Modal state ---------------------------- */
  var modal = { imgs: [], i: 0, alt: "", kind: null, itemIndex: -1 };
  var modalEl, lightEl;

  function ensureOverlays() {
    if (modalEl) return;
    modalEl = document.createElement("div");
    modalEl.className = "overlay";
    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.addEventListener("click", function (e) { if (e.target === modalEl) closeModal(); });
    document.body.appendChild(modalEl);

    lightEl = document.createElement("div");
    lightEl.className = "overlay lightbox";
    lightEl.innerHTML = '<button class="lb-btn lb-close" data-lb="close" aria-label="Close">✕</button>' +
      '<button class="lb-btn lb-prev" data-lb="prev" aria-label="Previous">‹</button><button class="lb-btn lb-next" data-lb="next" aria-label="Next">›</button>' +
      '<span class="lb-count"></span>';
    lightEl.addEventListener("click", function (e) {
      var a = e.target.getAttribute && e.target.getAttribute("data-lb");
      if (a === "prev") stepLight(-1);
      else if (a === "next") stepLight(1);
      else closeLight();
    });
    document.body.appendChild(lightEl);
  }

  function galleryHTML() {
    var main = modal.imgs[modal.i];
    var thumbs = modal.imgs.length > 1 ? '<div class="thumbs">' + modal.imgs.map(function (src, k) {
      return '<button type="button" data-thumb="' + k + '" class="' + (k === modal.i ? "on" : "") + '"><img src="' + esc(src) + '" alt=""></button>';
    }).join("") + "</div>" : "";
    return '<button type="button" class="gallery-main" data-action="zoom" aria-label="Zoom"><img src="' + esc(main) + '" alt=""></button>' + thumbs;
  }

  function fact(label, value) {
    return value ? '<div class="fact"><small>' + esc(label) + "</small><b>" + esc(value) + "</b></div>" : "";
  }

  function actions(buttons) {
    return (buttons || []).length ? '<div class="actions">' + buttons.map(function (b) {
      return '<a class="btn" href="' + esc(safeUrl(b.url)) + '" target="_blank" rel="noopener">' + esc(tr(b.label)) + " " + ICON.ext + "</a>";
    }).join("") + "</div>" : "";
  }

  function openModal(kind, idx) {
    ensureOverlays();
    var item = kind === "project" ? S.projects[idx] : S.certificates[idx];
    if (!item) return;
    modal.kind = kind;
    modal.itemIndex = idx;
    modal.imgs = kind === "project" ? projectImages(item) :
      ((item.images && item.images.length) ? item.images.slice() : [item.image]);
    modal.i = 0;
    modal.alt = item.name;
    var body;
    if (kind === "project") {
      body = "<h2>" + esc(item.name) + '</h2><p class="sub">' + esc(tr(item.description)) + "</p>" +
        '<div class="facts">' + fact(t("role"), tr(item.role)) + fact(t("source"), tr(item.source)) + "</div>" +
        '<div class="prose">' + md(item.content) + "</div>" + chips(item.tech) + actions(item.buttons);
    } else {
      body = "<h2>" + esc(item.name) + '</h2><p class="sub">' + esc(tr(item.description)) + "</p>" +
        '<div class="facts">' + fact(t("issuer"), item.issuer) + fact(t("date"), tr(item.date)) + fact(t("credId"), item.credentialId) + "</div>" +
        '<div class="prose">' + md(item.content) + "</div>" + chips(item.skills) + actions(item.buttons);
    }
    modalEl.innerHTML = '<div class="panel"><button type="button" class="icon-btn close" data-action="close" aria-label="' + esc(t("close")) + '">✕</button>' +
      '<div id="gallery">' + galleryHTML() + "</div>" + body + "</div>";
    modalEl.classList.add("open");
    document.documentElement.classList.add("lock");
    var c = modalEl.querySelector(".close"); if (c) c.focus();
  }

  function closeModal() {
    if (!modalEl) return;
    closeLight();
    modalEl.classList.remove("open");
    document.documentElement.classList.remove("lock");
  }

  function setThumb(k) {
    modal.i = k;
    var g = document.getElementById("gallery");
    if (g) g.innerHTML = galleryHTML();
  }

  function updateProjectImages() {
    document.querySelectorAll('.fb[data-open="project"]').forEach(function (card) {
      var item = S.projects[+card.getAttribute("data-i")];
      var image = card.querySelector(".thumb img");
      if (item && image) image.src = projectImage(item);
    });

    if (!modalEl || !modalEl.classList.contains("open") || modal.kind !== "project") return;
    var item = S.projects[modal.itemIndex];
    if (!item) return;
    modal.imgs = projectImages(item);
    if (modal.i >= modal.imgs.length) modal.i = 0;
    var gallery = document.getElementById("gallery");
    if (gallery) gallery.innerHTML = galleryHTML();
    if (lightEl && lightEl.classList.contains("open")) showLight();
  }

  function showLight() {
    var image = lightEl.querySelector("img");
    if (!image) {
      image = document.createElement("img");
      lightEl.insertBefore(image, lightEl.firstChild);
    }
    image.src = modal.imgs[modal.i];
    image.alt = modal.alt;
    lightEl.querySelector(".lb-count").textContent = (modal.i + 1) + " / " + modal.imgs.length;
    var multi = modal.imgs.length > 1;
    lightEl.querySelector(".lb-prev").style.display = multi ? "" : "none";
    lightEl.querySelector(".lb-next").style.display = multi ? "" : "none";
  }
  function openLight() { showLight(); lightEl.classList.add("open"); }
  function closeLight() { if (lightEl) lightEl.classList.remove("open"); }
  function stepLight(d) {
    var n = modal.imgs.length;
    modal.i = (modal.i + d + n) % n;
    showLight();
    setThumb(modal.i);
  }

  /* ------------------------------ Rendering ------------------------------ */
  var rotTimer = null, io = null, marqueeObserver = null, marqueeVisible = false, themeAnimationTimer = null;

  function render() {
    var y = window.scrollY;
    document.documentElement.lang = lang;
    document.title = S.name + " — " + t(PAGE);
    var body = PAGE === "projects" ? pageProjects() : PAGE === "certificates" ? pageCerts() : PAGE === "about" ? pageAbout() : pageHome();
    app.innerHTML = header() + body + footer() + bottomNav();
    window.scrollTo(0, y);
    updateHeaderScrollState();
    startRotator();
    startReveal();
    startMarqueeMotion();
  }

  function updateHeaderScrollState() {
    var el = document.querySelector(".site-header");
    if (el) el.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function startRotator() {
    clearInterval(rotTimer);
    var el = document.getElementById("rotator"), roles = S.roles || [], i = 0;
    if (!el || roles.length < 2) return;
    rotTimer = setInterval(function () {
      el.classList.add("out");
      setTimeout(function () { i = (i + 1) % roles.length; el.textContent = roles[i]; el.classList.remove("out"); }, 350);
    }, 2600);
  }

  function startReveal() {
    var els = document.querySelectorAll(".reveal");
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function startMarqueeMotion() {
    if (marqueeObserver) marqueeObserver.disconnect();
    marqueeObserver = null;
    marqueeVisible = false;
    var el = document.querySelector(".marquees");
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      marqueeVisible = true;
      el.classList.toggle("is-paused", document.hidden);
      return;
    }
    marqueeObserver = new IntersectionObserver(function (entries) {
      marqueeVisible = entries[0].isIntersecting;
      el.classList.toggle("is-paused", !marqueeVisible || document.hidden);
    }, { rootMargin: "80px 0px" });
    marqueeObserver.observe(el);
  }

  function syncMarqueePlayback() {
    var el = document.querySelector(".marquees");
    if (!el) return;
    if (document.hidden) {
      el.classList.add("is-paused");
      return;
    }
    var rect = el.getBoundingClientRect(), margin = 80;
    marqueeVisible = rect.bottom >= -margin && rect.top <= window.innerHeight + margin &&
      rect.right >= 0 && rect.left <= window.innerWidth;
    el.classList.toggle("is-paused", !marqueeVisible);
  }

  /* ------------------------------- Events -------------------------------- */
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (img && img.classList && img.classList.contains("timeline-logo")) {
      img.parentNode.classList.add("is-missing");
    }
  }, true);

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-open],[data-lang],[data-lang-toggle],[data-action],[data-thumb]") : null;
    if (!el) return;
    if (el.hasAttribute("data-open")) { openModal(el.getAttribute("data-open"), +el.getAttribute("data-i")); return; }
    if (el.hasAttribute("data-lang-toggle")) {
      lang = lang === "en" ? "id" : "en"; store.set("lang_pref", lang);
      render(); return;
    }
    if (el.hasAttribute("data-lang")) {
      lang = el.getAttribute("data-lang"); store.set("lang_pref", lang);
      render(); return;
    }
    if (el.hasAttribute("data-thumb")) { setThumb(+el.getAttribute("data-thumb")); return; }
    var act = el.getAttribute("data-action");
    if (act === "theme") {
      if (themeAnimationTimer) clearTimeout(themeAnimationTimer);
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.classList.add("is-changing");
      var dark = document.documentElement.classList.toggle("dark");
      store.set("dark_mode", dark ? "true" : "false");
      if (reduceMotion) {
        el.classList.remove("is-changing");
      } else {
        themeAnimationTimer = setTimeout(function () {
          el.classList.remove("is-changing");
          themeAnimationTimer = null;
        }, 720);
      }
      updateProjectImages();
    } else if (act === "close") closeModal();
    else if (act === "zoom") openLight();
  });

  document.addEventListener("visibilitychange", syncMarqueePlayback);

  window.addEventListener("scroll", updateHeaderScrollState, { passive: true });

  document.addEventListener("keydown", function (e) {
    var lightOpen = lightEl && lightEl.classList.contains("open");
    if (e.key === "Escape") { if (lightOpen) closeLight(); else closeModal(); }
    else if (lightOpen && e.key === "ArrowLeft") stepLight(-1);
    else if (lightOpen && e.key === "ArrowRight") stepLight(1);
  });

  render();
})();
