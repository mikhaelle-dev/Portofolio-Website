# Portofolio Mikhael Rakarenzo Mahendra

Situs utama menggunakan Astro dan dirender menjadi HTML statis. Folder `site/` berisi sumber kode dan aset untuk deployment.

## Menjalankan secara lokal

```sh
cd site
npm ci
npm run dev
```

Build dan pratinjau hasil build:

```sh
npm run build
npm run preview
```

Output build lokal berada di `site/dist/`. Konfigurasi Vercel di root memasang dependensi dari lockfile Astro di `site/`, menjalankan build, lalu menerbitkan folder tersebut.

## Mengubah konten

Ubah teks, proyek, sertifikat, pendidikan, dan pengalaman di `site/src/data/site.js`. Komponen halaman berada di `site/src/pages/` dan `site/src/components/`. Aset situs berada di `site/public/assets/`.
