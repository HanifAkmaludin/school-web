# 📚 Website Sekolah - SMK Itikurih Hibarna

Proyek ini dibuat sebagai bagian dari **Uji Kompetensi Sertifikasi BNSP Junior Web Programmer**, yang diselenggarakan oleh **Jabar Digital Academy** bekerjasama dengan **Alkademi** dan **Creativemu Academy**.

Website ini bertujuan untuk memberikan informasi mengenai sekolah, kegiatan, berita terbaru, dan menyediakan formulir kontak untuk memudahkan komunikasi dengan pihak sekolah.

---

## 🚀 Fitur Utama
- **Beranda (Home)** → Menampilkan profil singkat sekolah.
- **Tentang Kami (About Us)** → Informasi tentang visi, misi, dan sejarah sekolah.
- **Kegiatan (Activities)** → Dokumentasi kegiatan sekolah.
- **Berita (News)** → Update berita terbaru seputar sekolah.
- **Kontak (Contact)** → Formulir kontak yang langsung terhubung ke backend (PHP/MySQL / NeonDB).

---

## 🛠️ Teknologi yang Digunakan
- **Frontend**
  - HTML, CSS, JavaScript
  - Next.js (React Framework)
  - Tailwind CSS
- **Backend**
  - PHP
  - NextAuth (Authentication)
  - Prisma ORM
  - Node.js
- **Database**
  - MySQL / NeonDB (PostgreSQL-based)
- **Tools**
  - TypeScript
  - ESLint
  - Nodemailer (Email)
  - Bcrypt (Enkripsi Password)

---

## 📂 Struktur Folder

├── public/ # Assets (gambar, icon, dsb)
├── src/ # Source code utama
│ ├── pages/ # Halaman Next.js
│ ├── components/ # Komponen UI
│ ├── styles/ # CSS/Tailwind
│ ├── lib/ # Konfigurasi helper
│ └── prisma/ # Schema database
├── package.json # Dependencies project
├── prisma/schema.prisma
└── README.md

---

## ⚡ Instalasi & Menjalankan Project
1. Clone repository ini:
   ```bash
   git clone https://github.com/username/nama-project.git
   cd nama-project
