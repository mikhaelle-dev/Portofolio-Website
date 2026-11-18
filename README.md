# Mikhael Rakarenzo — Portfolio

Portofolio ini saat ini dibuat dengan HTML, CSS, dan JavaScript vanilla tanpa
proses build atau dependensi npm. File situs dan asetnya berada di [`site/`](./site/).

## Menjalankan secara lokal

Buka `site/index.html` langsung di browser. Tidak perlu menjalankan `npm install`
atau server development.

## Deployment

Vercel menyajikan file statis dari folder `site/`. Tidak ada perintah instalasi
dependensi atau build yang diperlukan untuk versi saat ini.

## Rencana migrasi ke Astro

Jika nanti ingin bermigrasi ke Astro, halaman HTML dapat diubah menjadi halaman
Astro, aset publik dipindahkan ke struktur yang sesuai, lalu ditambahkan
`package.json` dan konfigurasi build. Setelah itu, perbarui konfigurasi Vercel
agar menjalankan build Astro dan menyajikan folder hasil build. Sampai migrasi
tersebut dilakukan, situs tetap menggunakan versi vanilla di `site/`.
