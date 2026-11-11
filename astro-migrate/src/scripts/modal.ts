// =============================================
// MODAL / POPUP LOGIC
// Ported from modal.js → Astro-compatible module
// =============================================

import { translations } from '../data/translations';
import { getThemedImages, themedHighRes, themedSrc } from './theme-images';

type Lang = 'en' | 'id';

function getCurrentLang(): Lang {
  return ((window as any).currentLang || localStorage.getItem('lang') || 'en') as Lang;
}

function t(key: string): string {
  const lang = getCurrentLang();
  return (translations[lang] as any)[key] || key;
}

export function openProjectModal(data: any) {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return;

  const lang = getCurrentLang();
  const {
    title, desc, desc_id, full_desc, full_desc_id,
    img, imgHighRes, category, category_id, year,
    tech, contributions, contributions_id,
    implementation, implementation_id,
    links, credential_id, type,
  } = data;

  const isCertification = type === 'certification' || category === 'Certification';
  const displayDesc = lang === 'id' && desc_id ? desc_id : desc;
  const displayFullDesc = lang === 'id' && full_desc_id ? full_desc_id : full_desc || displayDesc;
  const displayCategory = lang === 'id' && category_id ? category_id : category;
  const displayContributions = lang === 'id' && contributions_id ? contributions_id : contributions;
  const displayImplementation = lang === 'id' && implementation_id ? implementation_id : implementation;
  const displayTech = tech || [data.provider || 'Certificate Provider'];
  const displayCredentialId = credential_id || '-';

  const fallbackContributions: string[] = (translations[lang] as any)['modal.fallbackContributions'] || [];
  const fallbackImplementation: string[] = (translations[lang] as any)['modal.fallbackImplementation'] || [];

  const themed = getThemedImages(data);
  const modalImgSrc = themedSrc(themed);
  const modalHighRes = themedHighRes(themed);

  const certificateBlock = isCertification ? `
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 pt-4">
      <div class="space-y-3 p-6 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
        <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
          <span class="text-[var(--primary)] font-bold">ID</span>
          ${t('modal.credentialId')}
        </h4>
        <p class="text-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">${displayCredentialId}</p>
      </div>
      <div class="space-y-3 p-6 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
        <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
          <span class="text-[var(--primary)] font-bold">≡</span>
          ${t('modal.certificateDescription')}
        </h4>
        <p class="text-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">${displayFullDesc}</p>
      </div>
    </div>
  ` : `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
      <div class="space-y-6">
        <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
          <span class="text-[var(--primary)]">✓</span>
          ${t('modal.contributions')}
        </h4>
        <ul class="space-y-3">
          ${(displayContributions || fallbackContributions).map((item: string) => `
            <li class="flex gap-3 text-on-surface-variant dark:text-gray-300 text-sm">
              <span class="text-[var(--primary)] mt-1">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="space-y-6">
        <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
          <span class="text-[var(--primary)]">⚙</span>
          ${t('modal.implementation')}
        </h4>
        <ul class="space-y-3">
          ${(displayImplementation || fallbackImplementation).map((item: string) => `
            <li class="flex gap-3 text-on-surface-variant dark:text-gray-300 text-sm">
              <span class="text-[var(--primary)] mt-1">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  modalBody.innerHTML = `
    <div class="flex flex-col gap-8 animate-in fade-in zoom-in duration-500">
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 rounded-full bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-widest">${displayCategory || 'Project'}</span>
          <span class="px-3 py-1 rounded-full bg-on-surface text-surface dark:bg-white/10 dark:text-white text-[10px] font-bold uppercase tracking-widest border border-black/10 dark:border-white/10">${year || '2024'}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-on-surface dark:text-white leading-tight">${title}</h2>
        <p class="text-lg text-on-surface-variant dark:text-gray-300 max-w-2xl leading-relaxed">${displayDesc}</p>
      </div>

      <div class="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center p-2">
        <img src="${modalImgSrc}" alt="${title}" class="js-theme-aware-thumb w-full max-h-[55vh] object-contain rounded-2xl cursor-zoom-in"
             data-thumb-dark="${themed.dark}" data-thumb-light="${themed.light}"
             data-highres="${modalHighRes}" data-highres-dark="${themed.highResDark}" data-highres-light="${themed.highResLight}">
      </div>

      ${certificateBlock}

      <div class="space-y-4 pt-4">
        <h4 class="text-on-surface dark:text-white font-bold text-sm uppercase tracking-widest">${t('modal.techUsed')}</h4>
        <div class="flex flex-wrap gap-2">
          ${displayTech.map((tech: string) => `
            <span class="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-on-surface-variant dark:text-gray-200 text-xs font-medium">${tech}</span>
          `).join('')}
        </div>
      </div>

      <div class="flex flex-wrap gap-4 pt-8 border-t border-black/10 dark:border-white/10">
        ${links?.demo ? `
          <a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-2xl bg-on-surface dark:bg-white text-surface dark:text-black font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
            ${t('modal.viewDemo')} <span class="text-sm">↗</span>
          </a>
        ` : ''}
        ${links?.pkt ? `
          <a href="${links.pkt}" download="implementasi jaringan kantor.pkt" class="px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
            ↓ ${t('modal.downloadPkt')}
          </a>
        ` : ''}
        ${!isCertification && !links?.pkt ? `
          <a href="${links?.repo || '#'}" class="px-8 py-4 rounded-2xl bg-black/5 dark:bg-white/10 text-on-surface dark:text-white font-bold text-sm border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
            ${t('modal.repository')} <//>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  // Image lightbox
  const modalImage = modalBody.querySelector('img[data-highres]') as HTMLImageElement | null;
  if (modalImage) {
    modalImage.addEventListener('click', () => createImageLightbox(modalImage.dataset.highres!, modalImage.alt));
  }

  document.body.classList.add('modal-open');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function createImageLightbox(src: string, alt: string) {
  const old = document.getElementById('image-lightbox');
  if (old) old.remove();

  const wrapper = document.createElement('div');
  wrapper.id = 'image-lightbox';
  wrapper.innerHTML = `
    <div class="image-lightbox-overlay"></div>
    <div class="image-lightbox-content" role="dialog" aria-modal="true">
      <button id="image-lightbox-close" class="image-lightbox-close" aria-label="Close image">&times;</button>
      <img src="${src}" alt="${alt || ''}" />
    </div>
  `;
  document.body.appendChild(wrapper);
  document.body.style.overflow = 'hidden';

  function removeLightbox() {
    const el = document.getElementById('image-lightbox');
    if (el) el.remove();
    const modal = document.getElementById('project-modal');
    document.body.style.overflow = modal?.classList.contains('open') ? 'hidden' : '';
    window.removeEventListener('keydown', keyHandler);
  }

  function keyHandler(e: KeyboardEvent) {
    if (e.key === 'Escape') removeLightbox();
  }

  wrapper.querySelector('#image-lightbox-close')?.addEventListener('click', removeLightbox);
  wrapper.querySelector('.image-lightbox-overlay')?.addEventListener('click', removeLightbox);
  window.addEventListener('keydown', keyHandler);
}

export function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

export function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal');
  const overlay = modal?.querySelector('.modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (overlay) overlay.addEventListener('click', closeProjectModal);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjectModal(); });

  // Expose globally for card click handlers
  (window as any).openProjectModal = openProjectModal;
  (window as any).closeProjectModal = closeProjectModal;
}
