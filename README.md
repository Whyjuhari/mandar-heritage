# Mandar Digital Heritage

**Prototype Arsip Digital Budaya Sulawesi Barat**

---

## Tentang Project

Mandar Digital Heritage adalah prototype website portofolio yang dikembangkan sebagai langkah awal untuk menunjukkan pemanfaatan teknologi digital dalam dokumentasi, pengarsipan, dan penyebarluasan budaya lokal Sulawesi Barat.

Project ini dibuat untuk keperluan pengajuan program pendanaan kebudayaan. Website menampilkan konsep arsip digital dengan fokus pada lima objek budaya utama: Sandeq, Lipa Saqbe Mandar, Saiyyang Pattu'du, Pande Bassi, dan Tradisi Lisan Mandar.

---

## Teknologi

- **React** 19 — library antarmuka pengguna
- **Vite** 8 — build tool dan development server
- **Tailwind CSS** 4 — utility-first CSS framework

Tidak menggunakan backend, database, login, atau API eksternal.

---

## Cara Menjalankan

**Prasyarat:** Node.js versi 18 atau lebih baru.

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

---

## Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── SectionTitle.jsx
│   ├── CultureCard.jsx
│   ├── MapSection.jsx
│   ├── QRSection.jsx
│   ├── DevelopmentPlan.jsx
│   ├── PortfolioEvidence.jsx
│   └── Footer.jsx
├── data/
│   └── cultures.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Catatan

> **Ini adalah prototype portofolio awal.**
>
> Seluruh data dan konten yang ditampilkan merupakan data awal yang belum tervalidasi. Pengembangan lanjutan akan dilakukan melalui riset lapangan, wawancara narasumber lokal, dokumentasi audio-visual, dan validasi bersama pelaku budaya Sulawesi Barat.
