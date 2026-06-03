// --- Tailwind Config (guarded) ---
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                "colors": {
                    "secondary-fixed-dim": "#4be260",
                    "error-container": "#ffdad6",
                    "on-primary-fixed-variant": "#5F7D3E",
                    "on-secondary-fixed-variant": "#005316",
                    "tertiary": "#5c5c5c",
                    "on-error": "#ffffff",
                    "primary": "var(--primary, #8FB060)",
                    "on-secondary": "#ffffff",
                    "primary-fixed-dim": "#C5D7B3",
                    "on-tertiary-fixed-variant": "#474747",
                    "surface-container-highest": "#e4e2e4",
                    "surface": "#fcf8fb",
                    "error": "#ba1a1a",
                    "on-primary-container": "#fefcff",
                    "surface-container-low": "#f6f3f5",
                    "on-surface-variant": "#414755",
                    "on-tertiary-container": "#fefcfc",
                    "on-secondary-fixed": "#002205",
                    "secondary-container": "#68fc76",
                    "background": "#fcf8fb",
                    "on-surface": "#1b1b1d",
                    "on-primary-fixed": "#1e2b0a",
                    "tertiary-fixed": "#e4e2e2",
                    "on-primary": "#ffffff",
                    "primary-fixed": "#DDE9D1",
                    "surface-container": "#f0edef",
                    "inverse-primary": "#C5D7B3",
                    "tertiary-fixed-dim": "#c8c6c6",
                    "outline-variant": "#c1c6d7",
                    "surface-variant": "#e4e2e4",
                    "on-background": "#1b1b1d",
                    "on-tertiary": "#ffffff",
                    "surface-container-high": "#eae7ea",
                    "surface-dim": "#dcd9dc",
                    "on-secondary-container": "#007322",
                    "secondary-fixed": "#6fff7b",
                    "tertiary-container": "#757474",
                    "surface-tint": "#8FB060",
                    "primary-container": "#A9C28B",
                    "surface-bright": "#fcf8fb",
                    "inverse-surface": "#303032",
                    "secondary": "#006e20",
                    "inverse-on-surface": "#f3f0f2",
                    "on-error-container": "#93000a",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary-fixed": "#1b1c1c",
                    "outline": "#717786"
                },
                "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
                },
                "spacing": {
                    "xl": "80px",
                    "container-max": "1200px",
                    "lg": "48px",
                    "sm": "12px",
                    "unit": "8px",
                    "xs": "4px",
                    "md": "24px",
                    "gutter": "24px"
                },
                "fontFamily": {
                    "display-xl": ["Geist"],
                    "label-md": ["Geist"],
                    "headline-lg": ["Geist"],
                    "display-2xl": ["Geist"],
                    "body-lg": ["Inter"],
                    "caption": ["Inter"],
                    "headline-md": ["Geist"],
                    "body-md": ["Inter"]
                },
                "fontSize": {
                    "display-xl": ["56px", { "lineHeight": "1.1", "letterSpacing": "-0.03em", "fontWeight": "600" }],
                    "label-md": ["14px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500" }],
                    "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                    "display-2xl": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
                    "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "300" }],
                    "caption": ["12px", { "lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "400" }],
                    "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "500" }],
                    "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "300" }]
                }
            }
        }
    };
}

// =====================================================
// === GRID BACKGROUND — SCROLL FADE ===
// =====================================================
(function initGridFade() {
    const gridBg = document.getElementById('grid-bg');
    if (!gridBg) return;

    const FADE_START = 80;   // px scrolled before fade begins
    const FADE_END   = 420;  // px scrolled when grid is fully invisible

    function updateGridOpacity() {
        const y = window.scrollY;
        if (y <= FADE_START) {
            gridBg.style.opacity = '1';
        } else if (y >= FADE_END) {
            gridBg.style.opacity = '0';
        } else {
            const ratio = 1 - (y - FADE_START) / (FADE_END - FADE_START);
            gridBg.style.opacity = ratio.toFixed(3);
        }
    }

    window.addEventListener('scroll', updateGridOpacity, { passive: true });
    updateGridOpacity(); // set initial state
})();

document.addEventListener('DOMContentLoaded', () => {
    // --- Render Functions (Homepage Limited View) ---
    const projectGrid = document.getElementById('project-grid');
    const certGrid = document.getElementById('cert-grid');

    function renderGrids() {
        if (projectGrid) {
            projectGrid.innerHTML = '';
            // Only show first 6 on homepage
            projData.slice(0, 6).forEach(p => {
                const displayDesc = (typeof currentLang !== 'undefined' && currentLang === 'id' && p.desc_id) ? p.desc_id : p.desc;
                const displayCategory = (typeof currentLang !== 'undefined' && currentLang === 'id' && p.category_id) ? p.category_id : p.category;

                const card = document.createElement('div');
                card.className = "card-outline liquid-glass card-layered rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb,143,176,96),0.15)] group cursor-pointer p-4 flex flex-col";
                card.innerHTML = `
                    <div class="rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] p-1">
                        <img alt="${p.title}"
                             class="w-full h-full object-cover rounded-[1.75rem] group-hover:scale-105 transition-transform duration-700"
                             src="${p.img}"
                             loading="lazy" decoding="async" fetchpriority="low">
                    </div>
                    <div class="px-2 pb-2 flex-1 flex flex-col">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-xl text-on-surface dark:text-white leading-tight group-hover:text-primary transition-colors origin-left">${p.title}</h3>
                            <span class="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                        </div>
                        <p class="font-medium text-sm text-on-surface-variant dark:text-gray-400 line-clamp-2 leading-relaxed">${displayDesc}</p>
                        <div class="mt-auto pt-4 flex justify-between items-center text-[10px] font-bold text-on-surface-variant dark:text-gray-500 uppercase tracking-widest border-t border-black/5 dark:border-white/5">
                            <span class="truncate w-2/3">${displayCategory}</span>
                            <span>${p.year}</span>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openProjectModal(p));
                projectGrid.appendChild(card);
            });
        }

        if (certGrid) {
            certGrid.innerHTML = '';
            // Only show first 6 on homepage
            certData.slice(0, 6).forEach(cert => {
                const displayDesc = (typeof currentLang !== 'undefined' && currentLang === 'id' && cert.desc_id) ? cert.desc_id : cert.desc;

                const card = document.createElement('div');
                card.className = "card-outline liquid-glass card-layered rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb,143,176,96),0.1)] flex flex-col group cursor-pointer p-4";
                card.innerHTML = `
                    <div class="rounded-[2rem] overflow-hidden mb-6 aspect-[4/3] p-1">
                        <img src="${cert.img}"
                             class="w-full h-full object-contain rounded-[1.75rem] opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 transition-transform duration-700"
                             loading="lazy" decoding="async" fetchpriority="low">
                    </div>
                    <div class="px-2 pb-2 flex-1 flex flex-col">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-xl text-on-surface dark:text-white leading-tight group-hover:text-primary transition-colors origin-left">${cert.title}</h3>
                            <span class="material-symbols-outlined text-primary text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                        </div>
                        <p class="font-medium text-sm text-on-surface-variant dark:text-gray-400 line-clamp-2 leading-relaxed">${displayDesc}</p>
                        <div class="mt-auto pt-4 flex justify-between items-center text-[10px] font-bold text-on-surface-variant dark:text-gray-500 uppercase tracking-widest border-t border-black/5 dark:border-white/5">
                            <span class="truncate w-2/3">${cert.provider}</span>
                            <span>${cert.date}</span>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => openProjectModal({
                    ...cert,
                    category: 'Certification',
                    category_id: 'Sertifikasi',
                    year: cert.date,
                    tech: [cert.provider, 'Credential verified']
                }));
                certGrid.appendChild(card);
            });
        }
    }

    renderGrids();
    document.addEventListener('languageChanged', renderGrids);

    // --- Theme Logic (desktop + mobile consistent) ---
    const html = document.documentElement;
    const themeToggles = document.querySelectorAll('.js-theme-toggle');
    const themeIcons = document.querySelectorAll('#theme-icon, .js-theme-icon, .js-lang-icon');

    function getSavedTheme() {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') return 'dark';
        if (saved === 'light') return 'light';
        return null;
    }

    function applyTheme(isDark) {
        html.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Update all possible icons (desktop uses #theme-icon, mobile uses .js-theme-icon)
        themeIcons.forEach(icon => {
            if (!icon) return;
            const darkSrc = icon.dataset.darkSrc || 'src/assets/dark_mode_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg';
            const lightSrc = icon.dataset.lightSrc || 'src/assets/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';

            if (icon.tagName === 'IMG') {
                icon.src = isDark ? darkSrc : lightSrc;
            } else {
                icon.textContent = isDark ? 'dark_mode' : 'light_mode';
            }

            // animate only if the icon is inside an element like desktop/mobile toggle
            icon.classList.remove('icon-anim-rise-sun', 'icon-anim-rise-moon');
            void icon.offsetWidth;
            icon.classList.add(isDark ? 'icon-anim-rise-moon' : 'icon-anim-rise-sun');
        });
    }

    // Initialize theme once (do NOT force remove('dark') like before)
    (function initTheme() {
        const saved = getSavedTheme();
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = saved ? saved === 'dark' : !!prefersDark;
        applyTheme(shouldBeDark);
    })();

    if (themeToggles && themeToggles.length) {
        themeToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const goingDark = !html.classList.contains('dark');
                applyTheme(goingDark);
            });
        });
    }


    // --- Premium Liquid Glass Navbar Active State ---
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');

    const navBackdrop = document.getElementById('nav-backdrop');
    const navPill = document.getElementById('main-nav');

    function moveBackdrop(element) {
        if (!element || !navBackdrop || !navPill) return;
        const rect = element.getBoundingClientRect();
        const parentRect = navPill.getBoundingClientRect();
        navBackdrop.style.opacity = '1';
        navBackdrop.style.width = `${rect.width}px`;
        navBackdrop.style.height = `${rect.height}px`;
        navBackdrop.style.transform = `translateX(${rect.left - parentRect.left - 16}px)`;
    }

    let isClickScrolling = false;
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        if (isClickScrolling) return;
        const sections = ['hero', 'proyek', 'sertifikat', 'tentang'];
        let current = '';
        sections.forEach(section => {
            const el = document.getElementById(section);
            if (el && el.getBoundingClientRect().top <= 150) current = section;
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === current || (current === 'hero' && href === 'hero')) {
                navLinks.forEach(l => l.classList.remove('active-nav'));
                link.classList.add('active-nav');
                moveBackdrop(link);
            }
        });

        // Mobile bottom nav active state (no backdrop slider)
        if (mobileNavLinks && mobileNavLinks.length) {
            mobileNavLinks.forEach(item => {
                const href = item.getAttribute('href').replace('#', '');
                const shouldActive = href === current || (current === 'hero' && href === 'hero');
                item.classList.toggle('active', shouldActive);
            });
        }
    });


    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            isClickScrolling = true;
            clearTimeout(scrollTimeout);
            navLinks.forEach(l => l.classList.remove('active-nav'));
            link.classList.add('active-nav');
            moveBackdrop(link);
            scrollTimeout = setTimeout(() => isClickScrolling = false, 800);
        });
    });

    // Mobile bottom nav click active state
    if (mobileNavLinks && mobileNavLinks.length) {
        mobileNavLinks.forEach(item => {
            item.addEventListener('click', () => {
                isClickScrolling = true;
                clearTimeout(scrollTimeout);
                mobileNavLinks.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                scrollTimeout = setTimeout(() => isClickScrolling = false, 800);
            });
        });
    }


    setTimeout(() => {
        const activeNav = document.querySelector('.active-nav');
        if (activeNav) moveBackdrop(activeNav);
    }, 100);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));

    // --- Profile Parallax Effect (avoid layout thrash) ---
    const profileCard = document.querySelector('.profile-card');
    const container = document.querySelector('.profile-container');
    if (container && profileCard) {
        let rect = null;
        let rafId = null;
        let pendingEvt = null;

        const recalc = () => {
            rect = container.getBoundingClientRect();
        };

        recalc();
        window.addEventListener('resize', recalc, { passive: true });

        const apply = () => {
            rafId = null;
            if (!rect || !pendingEvt) return;
            const e = pendingEvt;
            pendingEvt = null;

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            profileCard.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`;
        };

        container.addEventListener('mousemove', (e) => {
            pendingEvt = e;
            if (rafId) return;
            rafId = window.requestAnimationFrame(apply);
        }, { passive: true });

        container.addEventListener('mouseleave', () => {
            pendingEvt = null;
            if (rafId) window.cancelAnimationFrame(rafId);
            rafId = null;
            profileCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        }, { passive: true });
    }


    // --- Theme Color Switcher Logic ---
    const colorBtns = document.querySelectorAll('.theme-color-btn');
    const root = document.documentElement;

    // Load saved color
    const savedColor = localStorage.getItem('theme-color');
    if (savedColor) {
        root.style.setProperty('--primary', savedColor);
    }

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            root.style.setProperty('--primary', color);
            localStorage.setItem('theme-color', color);

            // Add a little pop animation
            btn.classList.add('scale-150');
            setTimeout(() => btn.classList.remove('scale-150'), 200);
        });
    });
});
