<h1 align="center">
food SME app
</h1>

aplikasi untuk UMKM pada katagory makanan

### Tech Stack

<p align="center">
  <!-- Ikon skill -->
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,react,typescript&perline=4" />
  </a> <br />
</p>

- `Nextjs` : Framewor yang di gunakan
- `Typescript` : javascript Type static
- `React.js` : sudah pasti kalau Next.js
- `Tailwindcss` : untuk CSS framework
- `HeroIcons` : icons yang di gunakan di project ini ( web : https://heroicons.com/ )
- `mongoose` : Database Document ( NoSql ) , di sini langsung menggunakan **mongoose** agar ada (ODM) jadi tidak perlu native JSON
- `react-google-map` : untuk Akses google map di folder google map ( command : pnpm add @react-google-maps/api )

### Tools

- **Google Comsole** : untuk managemenr Project seperti API dan lainya
  [fodd SME app by google console](https://console.cloud.google.com/cloud-hub?project=food-sme-app)

### App info

- Api di handle berdasarkan folder Raoute tersendiri di setiap folder Page atau di sub foldernya ( rencananya )
- ambil data dari database , gunakan server componen aja
- signUp terima dan kirm data dalam bentuk JSon
- signIn terima dan kirim data dalam bentuk Body + redirect + flashMessage

### Cookies

> user atau admin menggunakan cookies untuk login dan kredinetial

1. user : username ,
2. admin : adminname

### Main folder || route

- **map** : untuk menampilkna lokasi **Toko** dan **User**

### Route

> semua route ada di folder route

### App Color

| Kategori                    | Nama Warna      | Hex                   | Keterangan                 |
| --------------------------- | --------------- | --------------------- | -------------------------- | ---------------- |
| **Base Theme**              | Icon            | **#3E3E3E**           | Warna icon utama           |
|                             | Background      | **#312F30**           | Warna latar aplikasi       |
|                             | Card            | **#3B3B3B**           | Warna kartu/content        |
|                             | Text            | Icon                  | **#FFFFFF**                | Warna teks utama |
| **Accent Colors**           | Accent Orange   | **#F4A261**           | Hangat, cocok tema makanan |
|                             | Accent Yellow   | **#F6C860**           | Menonjol untuk tombol      |
|                             | Accent Green    | **#6ECB63**           | Fresh & sehat              |
|                             | Accent Red      | **#E76F51**           | Untuk warning/diskon       |
| **Soft Neutral**            | Soft Gray       | **#4A4A4A**           | Divider/border             |
|                             | Soft Dark Gray  | **#2A2A2A**           | Elemen gelap               |
|                             | Muted Brown     | **#5A4E4D**           | Nuansa warm                |
|                             | Warm Gray       | **#6D6767**           | Netral modern              |
| **Food Category Colors**    | Chicken Brown   | **#C17F59**           | Hangat, khas kuliner       |
|                             | Spicy Red       | **#D1495B**           | Bold & spicy               |
|                             | Fresh Green     | **#7FB069**           | Healthy food               |
|                             | Cream Beige     | **#F2E8CF**           | Lembut, kontras terang     |
| **Gradients (Start → End)** | Orange Gradient | **#F4A261 → #E76F51** | Premium orange             |
|                             | Green Gradient  | **#6ECB63 → #2F955C** | Fresh gradient             |
|                             | Gold Gradient   | **#F6C860 → #E0AA3E** | Mewah                      |
| **Status Colors**           | Success         | **#4CAF50**           | Status berhasil            |
|                             | Info            | **#2196F3**           | Informasi                  |
|                             | Warning         | **#FFC107**           | Peringatan                 |
|                             | Error           | **#F44336**           | Kesalahan                  |

> mulai dengan Package manager `pnpm` dan bisa menggunakan Package manaer lain juga
