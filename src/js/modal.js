// --- Modal / Popup Logic ---
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const modalOverlay = modal?.querySelector('.modal-overlay');

function openProjectModal(data) {
    if (!modal || !modalBody) return;

    const { title, desc, desc_id, full_desc, full_desc_id, img, category, category_id, year, tech, contributions, contributions_id, implementation, implementation_id, links, credential_id, type } = data;
    const isCertification = type === 'certification' || category === 'Certification' || category_id === 'Sertifikasi';

    const displayDesc = (currentLang === 'id' && desc_id) ? desc_id : desc;
    const displayFullDesc = (currentLang === 'id' && full_desc_id) ? full_desc_id : full_desc || displayDesc;
    const displayCategory = (currentLang === 'id' && category_id) ? category_id : category;
    const displayContributions = (currentLang === 'id' && contributions_id) ? contributions_id : contributions;
    const displayImplementation = (currentLang === 'id' && implementation_id) ? implementation_id : implementation;
    const displayTech = tech || [data.provider || 'Certificate Provider'];
    const displayCredentialId = credential_id ? credential_id : '-';

    const certificateDetailsBlock = isCertification ? `
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 pt-4">
                <div class="space-y-3 p-6 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-xl">badge</span>
                        ${translations[currentLang]['modal.credentialId'] || 'Credential ID'}
                    </h4>
                    <p class="text-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">${displayCredentialId}</p>
                </div>
                <div class="space-y-3 p-6 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-xl">description</span>
                        ${translations[currentLang]['modal.certificateDescription'] || 'Certificate Description'}
                    </h4>
                    <p class="text-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">${displayFullDesc}</p>
                </div>
            </div>
        ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                <div class="space-y-6">
                    <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-xl">verified</span>
                        ${translations[currentLang]['modal.contributions']}
                    </h4>
                    <ul class="space-y-3">
                        ${(displayContributions || translations[currentLang]['modal.fallbackContributions']).map(item => `
                            <li class="flex gap-3 text-on-surface-variant dark:text-gray-300 text-sm">
                                <span class="text-primary mt-1">•</span>
                                <span>${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="space-y-6">
                    <h4 class="text-on-surface dark:text-white font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-xl">settings</span>
                        ${translations[currentLang]['modal.implementation']}
                    </h4>
                    <ul class="space-y-3">
                        ${(displayImplementation || translations[currentLang]['modal.fallbackImplementation']).map(item => `
                            <li class="flex gap-3 text-on-surface-variant dark:text-gray-300 text-sm">
                                <span class="text-primary mt-1">•</span>
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
                    <span class="px-3 py-1 rounded-full bg-primary text-white dark:bg-primary dark:text-white text-[10px] font-bold uppercase tracking-widest border border-primary/20 transition-colors duration-500">${displayCategory || 'Project'}</span>
                    <span class="px-3 py-1 rounded-full bg-on-surface text-surface dark:bg-white/10 dark:text-white text-[10px] font-bold uppercase tracking-widest border border-black/10 dark:border-white/10 transition-colors duration-500">${year || '2024'}</span>
                </div>
                <h2 class="text-3xl md:text-5xl font-bold text-on-surface dark:text-white leading-tight">${title}</h2>
                <p class="text-lg text-on-surface-variant dark:text-gray-300 max-w-2xl leading-relaxed">${displayDesc}</p>
            </div>

            <div class="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black/5 dark:bg-white/5">
                <img src="${img}" alt="${title}" class="w-full aspect-video object-contain">
            </div>

            ${certificateDetailsBlock}

            <div class="space-y-4 pt-4">
                <h4 class="text-on-surface dark:text-white font-bold text-sm uppercase tracking-widest">${translations[currentLang]['modal.techUsed']}</h4>
                <div class="flex flex-wrap gap-2">
                    ${displayTech.map(t => `
                        <span class="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-on-surface-variant dark:text-gray-200 text-xs font-medium">${t}</span>
                    `).join('')}
                </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-8 border-t border-black/10 dark:border-white/10">
                <a href="${links?.demo || '#'}" class="px-8 py-4 rounded-2xl bg-on-surface dark:bg-white text-surface dark:text-black font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                    ${translations[currentLang]['modal.viewDetails']} <span class="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
                ${isCertification ? '' : `
                <a href="${links?.repo || '#'}" class="px-8 py-4 rounded-2xl bg-black/5 dark:bg-white/10 text-on-surface dark:text-white font-bold text-sm border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
                    ${translations[currentLang]['modal.repository']} <span class="material-symbols-outlined text-sm">code</span>
                </a>
                `}
            </div>
        </div>
    `;

    modal.classList.add('open');
    // Biarkan scroll modal saja (ada overflow-y-auto pada container modal).
    // Jangan langsung "hidden" body karena di beberapa device bisa bikin page stuck.
    document.body.style.overflow = '';

    // --- Image lightbox: klik gambar di dalam modal untuk membuka zoom view ---
    function createImageLightbox(src, alt) {
        // Hapus lightbox lama jika ada
        const old = document.getElementById('image-lightbox');
        if (old) old.remove();

        const wrapper = document.createElement('div');
        wrapper.id = 'image-lightbox';
        wrapper.innerHTML = `
            <div class="image-lightbox-overlay"></div>
            <div class="image-lightbox-content" role="dialog" aria-modal="true">
                <button id="image-lightbox-close" class="image-lightbox-close" aria-label="Close image">✕</button>
                <img src="${src}" alt="${alt || ''}" />
            </div>
        `;

        document.body.appendChild(wrapper);
        // Kunci scroll halaman di belakang
        document.body.style.overflow = 'hidden';

        const closeBtn = document.getElementById('image-lightbox-close');
        const overlayEl = wrapper.querySelector('.image-lightbox-overlay');

        function removeLightbox() {
            const el = document.getElementById('image-lightbox');
            if (el) el.remove();
            document.body.style.overflow = '';
            window.removeEventListener('keydown', keyHandler);
        }

        function keyHandler(e) {
            if (e.key === 'Escape') removeLightbox();
        }

        closeBtn?.addEventListener('click', removeLightbox);
        overlayEl?.addEventListener('click', removeLightbox);
        window.addEventListener('keydown', keyHandler);
    }

    // Attach click handler to the image inside modal (jika ada)
    const modalImage = modalBody.querySelector('#modal-body img, #modal-body picture img, #modal-body figure img');
    if (modalImage) {
        modalImage.style.cursor = 'zoom-in';
        modalImage.addEventListener('click', () => createImageLightbox(modalImage.src, modalImage.alt));
    }
}



function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

if (closeModal) closeModal.addEventListener('click', closeProjectModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeProjectModal);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
});
