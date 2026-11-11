// Screenshot script — ambil 2 versi thumbnail topology
// dark mode (default) + light mode (force bg terang)
const puppeteer = require('puppeteer');
const path = require('path');

const filePath = path.resolve(__dirname, 'src/assets/project/topologi-kantor.html');
const outDir  = path.resolve(__dirname, 'src/assets/project');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1800, height: 1100, deviceScaleFactor: 2 });

    await page.goto(`file:///${filePath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

    // ── 1. Dark mode (sesuai data-theme di topologi-kantor.html) ──
    await page.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('topologi-theme', 'dark'); } catch (_) {}
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
        path: path.join(outDir, 'topologi_kantor_thumb.webp'),
        type: 'webp', quality: 90, fullPage: false
    });
    console.log('✓ Dark thumb saved');

    // ── 2. Light mode ─────────────────────────────────────────────
    await page.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'light');
        try { localStorage.setItem('topologi-theme', 'light'); } catch (_) {}
    });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
        path: path.join(outDir, 'topologi_kantor_thumb_light.webp'),
        type: 'webp', quality: 90, fullPage: false
    });
    console.log('✓ Light thumb saved');

    const astroOut = path.resolve(__dirname, 'astro-migrate/public/assets/project');
    const fs = require('fs');
    if (fs.existsSync(astroOut)) {
        fs.copyFileSync(
            path.join(outDir, 'topologi_kantor_thumb.webp'),
            path.join(astroOut, 'topologi_kantor_thumb.webp')
        );
        fs.copyFileSync(
            path.join(outDir, 'topologi_kantor_thumb_light.webp'),
            path.join(astroOut, 'topologi_kantor_thumb_light.webp')
        );
        console.log('✓ Copied thumbs to astro-migrate/public');
    }

    await browser.close();
    console.log('Done!');
})();
