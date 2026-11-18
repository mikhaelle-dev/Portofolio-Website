# Portofolio Mikhael Rakarenzo Mahendra

Portofolio statis berbasis HTML, CSS, dan JavaScript tanpa proses build. Halaman Beranda, Proyek, Sertifikat, dan Tentang mendukung bahasa Indonesia/Inggris serta tema terang/gelap.

## Menjalankan

Buka `index.html` langsung di browser. Tidak perlu server atau instalasi.

## Konten

Ubah teks dan daftar konten di `js/data.js`. Objek teks dengan bentuk `{ en: "...", id: "..." }` tersedia dalam dua bahasa. `heroName` mengatur nama yang ditampilkan pada judul Beranda, sedangkan `name` tetap menjadi nama lengkap. Ikon pada daftar `skills` ditampilkan sebagai marquee tiga baris: baris pertama dan ketiga bergerak ke kiri, sedangkan baris kedua bergerak ke kanan. Gerakan berhenti saat marquee keluar layar, tab disembunyikan, atau pengunjung mengaktifkan pengurangan gerakan. Kartu proyek menampilkan gambar, judul, dan deskripsi ringkas; pilih kartu untuk membuka detail lengkap dan tautan berkas. Kartu sertifikat juga dapat dipilih untuk melihat detail, galeri, dan berkas.

| Lokasi | Isi |
|---|---|
| `assets/images/hero/hero-avatar-cutout.png` | Avatar profil Beranda dengan latar transparan |
| `assets/images/about.jpg` | Foto pada halaman Tentang |
| `assets/images/projects/` | Thumbnail proyek |
| `assets/images/projects/office-network-light.webp` | Versi terang thumbnail topologi |
| `assets/images/certificates/` | Gambar sertifikat dan transkrip |
| `assets/images/badges/` | Ikon perangkat dan teknologi |
| `assets/images/logos/` | Logo pendidikan dan pengalaman |
| `assets/images/social/` | Ikon sosial pada footer |
| `assets/docs/` | PDF sertifikat |
| `assets/projects/` | Diagram topologi dan berkas Cisco Packet Tracer |

Tambah atau ubah item di `js/data.js` dan sesuaikan path asetnya. Proyek dapat memakai `imageLight` dan `imagesLight` untuk menampilkan gambar berbeda saat mode terang. Isi properti `date` pada sertifikat untuk menampilkan tanggal di kartu dan detail. Isi properti `url` pada daftar `socials` untuk mengaktifkan tautan ikon footer. Daftar `education` dan `experience` memakai properti `date`, `title`, `org`, `desc`, `logo`, dan `initials`; `initials` ditampilkan jika berkas logo tidak tersedia. Kontak pada bagian Tentang diatur melalui `connect` dan `email`.

Preferensi bahasa dan tema disimpan di browser (`lang_pref` dan `dark_mode`).
