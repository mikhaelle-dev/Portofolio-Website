// Thumbnail / preview images that differ between light and dark site theme
(function (global) {
    function isDarkTheme() {
        return document.documentElement.classList.contains('dark');
    }

    function getThemedImages(item) {
        const dark = item.thumb || item.img || '';
        const light = item.thumbLight || dark;
        const highResDark = item.imgHighRes || dark;
        const highResLight = item.imgHighResLight || item.thumbLight || highResDark;
        return { dark, light, highResDark, highResLight };
    }

    function themedSrc(set, dark) {
        const useDark = dark !== undefined ? dark : isDarkTheme();
        return useDark ? set.dark : set.light;
    }

    function themedHighRes(set, dark) {
        const useDark = dark !== undefined ? dark : isDarkTheme();
        return useDark ? (set.highResDark || set.dark) : (set.highResLight || set.light);
    }

    function refreshThemeAwareImages() {
        const dark = isDarkTheme();
        document.querySelectorAll('img.js-theme-aware-thumb').forEach(function (img) {
            const d = img.dataset.thumbDark;
            const l = img.dataset.thumbLight || d;
            if (d) img.src = dark ? d : l;
            if (img.dataset.highresDark) {
                img.dataset.highres = dark
                    ? img.dataset.highresDark
                    : (img.dataset.highresLight || img.dataset.highresDark);
            }
        });
    }

    global.isDarkTheme = isDarkTheme;
    global.getThemedImages = getThemedImages;
    global.themedSrc = themedSrc;
    global.themedHighRes = themedHighRes;
    global.refreshThemeAwareImages = refreshThemeAwareImages;
})(typeof window !== 'undefined' ? window : globalThis);
