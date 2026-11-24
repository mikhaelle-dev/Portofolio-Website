import SITE from "../data/site.js";

const dictionary = {
  id: { role: "Peran", source: "Sumber", issuer: "Penerbit", date: "Tanggal", credId: "ID Kredensial", skills: "Keahlian", close: "Tutup", open: "Buka detail", prev: "Sebelumnya", next: "Berikutnya" },
  en: { role: "Role", source: "Source", issuer: "Issuer", date: "Date", credId: "Credential ID", skills: "Skills", close: "Close", open: "Open details", prev: "Previous", next: "Next" }
};
const read = (key, fallback = "") => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } };
const write = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
let language = read("lang_pref", "id");
if (!(["id", "en"].includes(language))) language = "id";
let current = null;
let galleryIndex = 0;
let returnFocus = null;
const detail = document.getElementById("detail-modal");
const lightbox = document.getElementById("image-lightbox");

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-id][data-en]").forEach((el) => {
    el.textContent = language === "en" ? el.dataset.en : el.dataset.id;
  });
  const currentLang = document.querySelector("[data-current-lang]");
  if (currentLang) currentLang.textContent = language.toUpperCase();
  const toggle = document.querySelector("[data-lang-toggle]");
  if (toggle) toggle.setAttribute("aria-label", language === "en" ? "Change language to Indonesian" : "Ganti bahasa ke Inggris");
  const theme = document.querySelector(".theme-toggle");
  if (theme) theme.setAttribute("aria-label", language === "en" ? "Toggle theme" : "Ganti tema");
  updateCvLinks();
}

function updateCvLinks() {
  const path = `/${SITE.about.cv[language]}`;
  const view = document.querySelector("[data-cv-view]");
  const download = document.querySelector("[data-cv-download]");
  if (view) { view.href = path; view.textContent = language === "en" ? "View" : "Lihat"; }
  if (download) { download.href = path; download.textContent = language === "en" ? "Download" : "Unduh"; }
  document.querySelectorAll("[data-cv-lang]").forEach((button) => button.classList.toggle("on", button.dataset.cvLang === language));
}

function applyTheme() {
  const dark = document.documentElement.classList.contains("dark");
  document.querySelectorAll(".fb[data-open='project'] .thumb img").forEach((image) => {
    image.src = dark ? image.dataset.darkSrc : image.dataset.lightSrc;
  });
  if (current?.type === "project" && current.imagesLight?.length) {
    current.images = dark ? current.imagesDark : current.imagesLight;
    galleryIndex = Math.min(galleryIndex, current.images.length - 1);
    paintGallery();
  }
}

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function addFact(parent, label, value) {
  if (!value) return;
  const fact = make("div", "fact");
  fact.append(make("small", "", label), make("b", "", value));
  parent.append(fact);
}

function addMarkdown(parent, source) {
  const prose = make("div", "prose");
  let list = null;
  (source || "").split("\n").forEach((line) => {
    const value = line.trim();
    if (!value) return;
    if (value.startsWith("- ")) {
      if (!list) { list = make("ul"); prose.append(list); }
      list.append(make("li", "", value.slice(2)));
    } else {
      list = null;
      if (value.startsWith("## ")) prose.append(make("h3", "", value.slice(3)));
      else prose.append(make("p", "", value));
    }
  });
  if (prose.childElementCount) parent.append(prose);
}

function paintGallery() {
  const gallery = document.getElementById("modal-gallery");
  if (!gallery || !current) return;
  gallery.replaceChildren();
  const main = make("button", "gallery-main");
  main.type = "button";
  main.dataset.action = "zoom";
  main.setAttribute("aria-label", language === "en" ? "Zoom certificate image" : "Perbesar gambar sertifikat");
  const image = document.createElement("img");
  image.src = current.images[galleryIndex];
  image.alt = current.name;
  main.append(image);
  gallery.append(main);
  if (current.images.length > 1) {
    const thumbs = make("div", "thumbs");
    current.images.forEach((src, index) => {
      const button = make("button", index === galleryIndex ? "on" : "");
      button.type = "button";
      button.dataset.galleryIndex = String(index);
      button.setAttribute("aria-label", `${language === "en" ? "Page" : "Halaman"} ${index + 1}`);
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.alt = "";
      button.append(thumb);
      thumbs.append(button);
    });
    gallery.append(thumbs);
  }
}

function openDetail(button) {
  try { current = JSON.parse(button.dataset.item); } catch { return; }
  if (!current) return;
  returnFocus = button;
  galleryIndex = 0;
  const panel = make("div", "panel");
  const close = make("button", "icon-btn close", "×");
  close.type = "button";
  close.dataset.action = "close";
  close.setAttribute("aria-label", dictionary[language].close);
  panel.append(close);
  panel.append(make("div", "", ""));
  panel.lastElementChild.id = "modal-gallery";
  const heading = make("h2", "", current.name);
  panel.append(heading);
  const description = typeof current.description === "object" ? current.description[language] : current.description;
  panel.append(make("p", "sub", description));
  detail.replaceChildren(panel);
  paintGallery();

  const facts = make("div", "facts");
  const localized = (value) => typeof value === "object" && value !== null ? value[language] : value;
  if (current.type === "project") {
    if (current.role) addFact(facts, dictionary[language].role, localized(current.role));
    if (current.source) addFact(facts, dictionary[language].source, localized(current.source));
  } else if (current.issuer) addFact(facts, dictionary[language].issuer, current.issuer);
  if (current.date) addFact(facts, dictionary[language].date, current.date);
  if (current.credentialId) addFact(facts, dictionary[language].credId, current.credentialId);
  if (facts.childElementCount) panel.append(facts);
  addMarkdown(panel, typeof current.content === "object" ? current.content[language] : current.content);

  const tags = current.skills || current.tech || [];
  if (tags.length) {
    const chips = make("div", "chips");
    tags.forEach((tag) => chips.append(make("span", "chip", tag)));
    panel.append(chips);
  }
  if (current.buttons?.length) {
    const actions = make("div", "actions");
    current.buttons.forEach((action) => {
      const link = make("a", "btn", `${typeof action.label === "object" ? action.label[language] : action.label} ↗`);
      link.href = action.url.startsWith("assets/") ? `/${action.url}` : action.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      actions.append(link);
    });
    panel.append(actions);
  }
  detail.classList.add("open");
  document.documentElement.classList.add("lock");
  close.focus();
}

function closeDetail() {
  detail.classList.remove("open");
  lightbox.classList.remove("open");
  document.documentElement.classList.remove("lock");
  if (returnFocus?.isConnected) returnFocus.focus();
}

function showLightbox() {
  if (!current) return;
  let image = lightbox.querySelector("img");
  if (!image) { image = document.createElement("img"); lightbox.prepend(image); }
  image.src = current.images[galleryIndex];
  image.alt = current.name;
  lightbox.querySelector(".lb-count").textContent = `${galleryIndex + 1} / ${current.images.length}`;
  const multi = current.images.length > 1;
  lightbox.querySelector(".lb-prev").hidden = !multi;
  lightbox.querySelector(".lb-next").hidden = !multi;
  lightbox.classList.add("open");
}

function stepGallery(delta) {
  if (!current?.images?.length) return;
  galleryIndex = (galleryIndex + delta + current.images.length) % current.images.length;
  paintGallery();
  if (lightbox.classList.contains("open")) showLightbox();
}

function setLanguage(next) {
  language = next;
  write("lang_pref", language);
  applyLanguage();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-open],[data-action],[data-lang-toggle],[data-cv-lang],[data-gallery-index],[data-lb]");
  if (!target) return;
  if (target.dataset.open) { openDetail(target); return; }
  if (target.dataset.langToggle !== undefined) { setLanguage(language === "en" ? "id" : "en"); return; }
  if (target.dataset.cvLang) { setLanguage(target.dataset.cvLang); return; }
  if (target.dataset.galleryIndex != null) { galleryIndex = Number(target.dataset.galleryIndex); paintGallery(); return; }
  if (target.dataset.lb === "close") { lightbox.classList.remove("open"); return; }
  if (target.dataset.lb === "prev") { stepGallery(-1); return; }
  if (target.dataset.lb === "next") { stepGallery(1); return; }
  if (target.dataset.action === "close") { closeDetail(); return; }
  if (target.dataset.action === "zoom") { showLightbox(); return; }
  if (target.dataset.action === "theme") {
    const dark = document.documentElement.classList.toggle("dark");
    write("dark_mode", dark ? "true" : "false");
    applyTheme();
  }
});

detail.addEventListener("click", (event) => { if (event.target === detail) closeDetail(); });
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.classList.remove("open"); });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("open")) lightbox.classList.remove("open");
    else if (detail.classList.contains("open")) closeDetail();
  }
  if (lightbox.classList.contains("open") && event.key === "ArrowLeft") stepGallery(-1);
  if (lightbox.classList.contains("open") && event.key === "ArrowRight") stepGallery(1);
});

const role = document.querySelector("[data-roles]");
if (role) {
  const roles = JSON.parse(role.dataset.roles);
  let index = 0;
  window.setInterval(() => { role.classList.add("out"); window.setTimeout(() => { index = (index + 1) % roles.length; role.textContent = roles[index]; role.classList.remove("out"); }, 350); }, 2600);
}

let revealObserver;
function observeReveals() {
  revealObserver?.disconnect();
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("in")); return; }
  revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  items.forEach((item) => revealObserver.observe(item));
}

const marquee = document.querySelector(".marquees");
if (marquee && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => marquee.classList.toggle("is-paused", !entry.isIntersecting || document.hidden), { rootMargin: "80px 0px" });
  observer.observe(marquee);
  document.addEventListener("visibilitychange", () => marquee.classList.toggle("is-paused", document.hidden));
}
window.addEventListener("scroll", () => document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });

applyLanguage();
applyTheme();
observeReveals();
