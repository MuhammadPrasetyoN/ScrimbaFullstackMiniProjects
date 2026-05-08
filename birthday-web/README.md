# 🎉 Birthday Web - Interactive Birthday Greeting Site

Website ucapan ulang tahun interaktif yang menyenangkan dan colorful! Website ini menampilkan ucapan spesial dengan GIF animasi yang muncul saat di-hover.

## ✨ Fitur Utama

- **Header Personalisasi**: Menampilkan nama, foto, umur, dan tanggal ulang tahun
- **Interactive Gifts**: 5 gift sections dengan efek hover yang menampilkan GIF menarik
  - 🥳 How happy I am for you today
  - 😍 How people react when you enter the room
  - 👇 If I had to describe you with ONE word
  - 💪 The only person as badass as you
  - 🥂 This one's for you, my friend
- **Beautiful Design**: Gradient background biru-pink, font yang playful, dan styling modern
- **Responsive Hover Effects**: GIF akan muncul ketika mouse di-hover di atas gift boxes

## 📁 Struktur File

```
birthday-web/
├── index.html           # File HTML utama
├── styles.css           # File styling
├── images/              # Folder berisi gambar dan GIF
│   ├── nick.jpg        # Foto profil
│   ├── gift-cover.jpg  # Cover gift (default)
│   ├── happy.gif       # GIF untuk "happy"
│   ├── hot.gif         # GIF untuk "hot/react"
│   ├── genius.gif      # GIF untuk "genius"
│   ├── badass.gif      # GIF untuk "badass"
│   └── cheers.gif      # GIF untuk "cheers"
└── README.md            # File dokumentasi ini
```

## 🚀 Cara Penggunaan

1. Buka file `index.html` di browser
2. Hover over setiap gift box untuk melihat GIF animasi
3. Klik link di footer untuk mengakses HTML & CSS course dari Scrimba

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling, gradient, hover effects, font customization
- **Google Fonts**: Font "Happy Monkey" dari Google Fonts API

## 💡 Cara Mengkustomisasi

### Mengubah Nama dan Data

Edit bagian header di `index.html`:

```html
<h1>Today is [NAMA]'s birthday 🎉</h1>
<img id="bff-img" src="images/[FOTO].jpg" />
<h2 id="bday-age">[UMUR] years old</h2>
<h4 id="bday-date">[TANGGAL]</h4>
```

### Mengubah Foto

Ganti file `images/nick.jpg` dengan foto Anda sendiri

### Mengubah Warna

Edit `styles.css` dan ubah color codes:

- Gradient background: `background: linear-gradient(#a2d2ff, #EFB0C9);`
- Accent color: `#EFB0C9`
- Text color: `#ffffff`

### Menambah/Mengubah Gift Sections

Duplikasi gift-section div dan ganti dengan pesan dan GIF Anda sendiri

## 📝 Lisensi

Proyek ini dibuat sebagai latihan dari Scrimba HTML & CSS Course.

---

**Dibuat untuk memberikan senyuman pada hari istimewa seseorang! 🎂💝**
