const translations = {
    'en': {
        'nav.home': 'Home',
        'nav.cert': 'Certificates',
        'nav.project': 'Projects',
        'nav.about': 'About',
        'hero.greeting': "Hello, i'm",
        'hero.name': 'Mikhael Rakarenzo',
        'hero.desc': 'A Network and Web Development enthusiast from Indonesia, currently focus on Network Engineering, Front-End Development, Network Security, and Network Engineer.',
        'hero.tech': 'Technologies I use:',
        'hero.downloadCv': 'Download CV',
        'scroll.down': 'SEE MY CONTRIBUTION',
        'cert.title': 'My Certifications',
        'cert.desc': 'Professional certifications and achievements.',
        'cert.btn': 'View All My Certificates',
        'cert.counter': '10+ Global Certifications',
        'project.title': 'My Projects',
        'project.desc': 'Recent enterprise projects and contributions.',
        'project.btn': 'View All My Projects',
        'project.counter': '12+ Enterprise Projects',
        'about.title': 'About Me',
        'about.desc': 'I am a developer passionate about modern web technologies and user-centric design. With years of experience building scalable applications, I strive to combine minimalist design aesthetics with robust technical performance. My focus is on creating fluid, intuitive experiences that push the boundaries of modern web standards.',
        'contact.title': "Let's Connect",
        'contact.desc': "I'm always open to new collaborations or just a tech discussion.",
        'modal.contributions': 'Key Contributions',
        'modal.implementation': 'Technical Implementation',
        'modal.credentialId': 'Credential ID',
        'modal.certificateDescription': 'Certificate Description',
        'modal.credentialUnavailable': 'Credential ID not available',
        'modal.techUsed': 'Technologies Used',
        'modal.viewDetails': 'View Details',
        'modal.repository': 'Repository',
        'modal.fallbackContributions': [
            "Architected core system features and data handling logic.",
            "Built premium, responsive user interfaces with smooth motion.",
            "Ensured cross-platform compatibility and high performance."
        ],
        'modal.fallbackImplementation': [
            "Environment: Node.js / Browser",
            "Styling: Tailwind CSS & Framer-like CSS",
            "Deployment: Vercel / Cloudflare"
        ],
        'footer.copyright': '© 2026 Mikhael Rakarenzo • Handcrafted with Passion'
    },
    'id': {
        'nav.home': 'Home',
        'nav.cert': 'Sertifikat',
        'nav.project': 'Proyek',
        'nav.about': 'Tentang',
        'hero.greeting': 'Halo, saya',
        'hero.name': 'Mikhael Rakarenzo',
        'hero.desc': 'Seorang antusias Jaringan dan Pengembangan Web dari Indonesia, saat ini fokus pada Rekayasa Jaringan, Pengembangan Front-End, Keamanan Jaringan, dan insinyur Jaringan',
        'hero.tech': 'Teknologi yang saya gunakan:',
        'hero.downloadCv': 'Unduh CV',
        'scroll.down': 'LIHAT KONTRIBUSI SAYA',
        'cert.title': 'Sertifikasi Saya',
        'cert.desc': 'Sertifikasi profesional dan pencapaian saya.',
        'cert.btn': 'Lihat Semua Sertifikat',
        'cert.counter': '10+ Sertifikasi Global',
        'project.title': 'Proyek Saya',
        'project.desc': 'Proyek terbaru dan kontribusi saya.',
        'project.btn': 'Lihat Semua Proyek',
        'project.counter': '12+ Proyek Enterprise',
        'about.title': 'Tentang Saya',
        'about.desc': 'Saya adalah seorang developer yang bersemangat dengan teknologi web modern dan desain yang berpusat pada pengguna. Dengan pengalaman bertahun-tahun membangun aplikasi yang terukur, saya berusaha menggabungkan estetika desain minimalis dengan kinerja teknis yang kuat.',
        'contact.title': 'Mari Terhubung',
        'contact.desc': 'Saya selalu terbuka untuk kolaborasi baru atau sekadar diskusi teknologi.',
        'modal.contributions': 'Kontribusi Utama',
        'modal.implementation': 'Implementasi Teknis',
        'modal.credentialId': 'ID Kredensial',
        'modal.certificateDescription': 'Deskripsi Sertifikat',
        'modal.credentialUnavailable': 'ID Kredensial tidak tersedia',
        'modal.techUsed': 'Teknologi yang Digunakan',
        'modal.viewDetails': 'Lihat Detail',
        'modal.repository': 'Repositori',
        'modal.fallbackContributions': [
            "Merancang fitur sistem inti dan logika penanganan data.",
            "Membangun antarmuka pengguna yang premium dan responsif dengan gerakan halus.",
            "Memastikan kompatibilitas lintas platform dan performa tinggi."
        ],
        'modal.fallbackImplementation': [
            "Lingkungan: Node.js / Browser",
            "Styling: Tailwind CSS & CSS mirip Framer",
            "Deployment: Vercel / Cloudflare"
        ],
        'footer.copyright': '© 2024 Mikhael Rakarenzo • Dibuat dengan Sepenuh Hati'
    }
};

let currentLang = localStorage.getItem('preferred-lang') || 'en';

function updateContent() {
    // Expose current language for CSS responsive tweaks
    document.documentElement.dataset.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang]?.[key]) {
            // Special handling for elements with icons
            if (el.querySelector('.material-symbols-outlined')) {
                const icon = el.querySelector('.material-symbols-outlined').outerHTML;
                el.innerHTML = `${icon} ${translations[currentLang][key]}`;
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });

    // Update language toggle button(s) if it exists (desktop uses #lang-toggle, mobile uses .js-lang-toggle)
    const langToggles = document.querySelectorAll('#lang-toggle, .js-lang-toggle');
    if (langToggles && langToggles.length) {
        langToggles.forEach(langToggle => {
            const langSpan = langToggle.querySelector('span:last-child');
            if (langSpan) langSpan.textContent = currentLang.toUpperCase();
        });
    }

}

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('preferred-lang', currentLang);
    updateContent();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    const langToggles = document.querySelectorAll('#lang-toggle, .js-lang-toggle');
    if (langToggles && langToggles.length) {
        langToggles.forEach(btn => btn.addEventListener('click', toggleLanguage));
    }

});
