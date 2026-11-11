export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark');
}

export type ThemedImageSet = {
  dark: string;
  light: string;
  highResDark: string;
  highResLight: string;
};

export function getThemedImages(item: {
  thumb?: string;
  thumbLight?: string;
  img?: string;
  imgHighRes?: string;
  imgHighResLight?: string;
}): ThemedImageSet {
  const dark = item.thumb || item.img || '';
  const light = item.thumbLight || dark;
  const highResDark = item.imgHighRes || dark;
  const highResLight = item.imgHighResLight || item.thumbLight || highResDark;
  return { dark, light, highResDark, highResLight };
}

export function themedSrc(set: ThemedImageSet, dark = isDarkTheme()): string {
  return dark ? set.dark : set.light;
}

export function themedHighRes(set: ThemedImageSet, dark = isDarkTheme()): string {
  return dark ? set.highResDark : set.highResLight;
}

export function refreshThemeAwareImages(): void {
  const dark = isDarkTheme();
  document.querySelectorAll<HTMLImageElement>('img.js-theme-aware-thumb').forEach(img => {
    const d = img.dataset.thumbDark;
    const l = img.dataset.thumbLight || d;
    if (d) img.src = dark ? d : l!;
    if (img.dataset.highresDark) {
      img.dataset.highres = dark
        ? img.dataset.highresDark
        : (img.dataset.highresLight || img.dataset.highresDark);
    }
  });
}
