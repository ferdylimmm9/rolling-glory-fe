# Local Enviroment, Tech Specs, Requirements, Details

Aplikasi ini dapat diakses melalui tautan berikut: [Rolling Glory FE](https://rolling-glory-fe.vercel.app/).
![Alt Text](https://rolling-glory-fe.vercel.app/seo-result.png)
![Alt Text](https://rolling-glory-fe.vercel.app/lighthouse-result.png)


## Local Environment

cara menjalankan aplikasi secara local:

1. **Instal Node.js (versi 20)**: Pastikan Node.js versi 20 sudah terpasang di komputer Anda.
2. **Instal PNPM**: PNPM digunakan sebagai pengelola paket Node.
3. **pnpm install**: untuk meng-install depedencies yang diperlukan
Gunakan perintah berikut:

   ```bash
   pnpm install
   ```

4. **pnpm dev**: Menjalankan proyek dalam mode **development** dengan menggunakan `Turbopack`. Ini memungkinkan Anda melihat perubahan secara langsung saat melakukan pengembangan. Gunakan perintah berikut:

   ```bash
   pnpm dev
   ```

   **Script**:
   
   ```json
   "dev": "next dev --turbopack"
   ```

5. **pnpm build**: Membangun proyek untuk **produksi**. Script ini juga akan menjalankan `sitemap-generator` terlebih dahulu untuk menghasilkan sitemap secara otomatis sebelum proses build. Gunakan perintah berikut:

   ```bash
   pnpm build
   ```

   **Script**:

   ```json
   "build": "node ./scripts/sitemap-generator.js && next build"
   ```

6. **pnpm start**: Menjalankan server Next.js untuk **produksi** setelah proyek dibangun menggunakan perintah `pnpm build`. Gunakan perintah berikut:

   ```bash
   pnpm start
   ```

   **Script**:

   ```json
   "start": "next start"
   ```

## Additional Script

- **pnpm lint**: Memeriksa kode untuk memastikan sesuai dengan standar linting yang telah ditentukan oleh Next.js. Gunakan perintah berikut:

  ```bash
  pnpm lint
  ```

  **Script**:

  ```json
  "lint": "next lint"
  ```

- **pnpm sitemap-generator**: Menjalankan skrip khusus untuk menghasilkan sitemap secara otomatis. Gunakan perintah berikut jika hanya ingin menjalankan `sitemap-generator` tanpa melakukan build:

  ```bash
  pnpm sitemap-generator
  ```

  **Script**:

  ```json
  "sitemap-generator": "node ./scripts/sitemap-generator.js"
  ```


## Tech Specs

Proyek ini menggunakan teknologi-teknologi berikut untuk implementasinya:

1. **ReactJS**: Dipilih karena dukungan komunitas yang besar, sehingga memudahkan pencarian sumber daya dan library yang banyak digunakan.
2. **Next.js**: Dipilih karena memiliki kemampuan server-side rendering (SSR) yang memudahkan pembangunan website yang SEO-friendly. Next.js juga merupakan salah satu framework React yang populer.
3. **Axios**: Digunakan sebagai klien HTTP untuk pengambilan data dari API, karena memberikan penanganan error yang lebih baik untuk status HTTP `4xx` dan `5xx` dibandingkan `fetch` API bawaan.
4. **TypeScript**: Digunakan untuk memudahkan keamanan tipe data dan validasi data selama pengembangan.
5. **React Query**: Berfungsi sebagai alat manajemen state asinkron untuk menyimpan atau caching respons API di sisi klien.
6. **next-pwa**: Diintegrasikan untuk mengelola dan menghasilkan skrip service worker dalam mendukung kemampuan Progressive Web App (PWA).

## Study Case (a)

Sebelum memulai pengembangan, informasi berikut sangat penting:

1. **Fitur dan Fungsi Spesifik**: Jelaskan fitur dan fungsi spesifik yang diharapkan dari library 3rd party yang akan digunakan.
2. **Batasan atau Kendala Teknis**: Pahami batasan teknis terkait library atau modul proyek.
3. **Timeline dan Milestone**: Dapatkan rincian timeline untuk milestone dan progress check untuk memastikan pembaruan tepat waktu.
4. **Best Practices Integrasi**: Pahami standar dan best practices integrasi yang sudah digunakan oleh tim.

## Study Case (b)

Jika terjadi kesulitan atau ketidakpastian selama pengembangan:

1. **Project Manager**: Hubungi Project Manager untuk membahas dampak pada timeline dan kesepakatan terkait penyesuaian yang diperlukan.
2. **Tech Lead**: Hubungi Tech Lead untuk mendapatkan panduan teknis atau saran tentang penyesuaian yang diperlukan.
3. **Anggota Tim Senior**: Jika perlu, konsultasikan dengan anggota tim senior yang familiar dengan modul proyek yang terdampak.

## Requirements

Berikut ini adalah tugas-tugas yang diperlukan dalam proyek, dengan status penyelesaiannya:

1. **Mengimplementasikan Desain menjadi Halaman Web Fungsional** ✅
2. **Membuat Halaman Daftar Produk** ✅
3. **Mengambil Data dari API yang Telah Disediakan** ✅
4. **Membuat Komponen Bintang Rating** ✅
5. **Membuat Komponen Catatan Stok** ✅
6. **Membuat Komponen Ikon Spesial** ✅
7. **Mengimplementasikan Fitur Pengurutan** ✅
   - Urutkan Berdasarkan Terbaru (berdasarkan ID) ✅
   - Urutkan Berdasarkan Ulasan (berdasarkan rating) ✅
8. **Mengimplementasikan Fitur Penyaringan** ✅
   - Produk dengan Rating > 4 ✅
   - Produk Tersedia ✅
   - Produk dengan Rating > 4 & Produk Tersedia (Bonus) ✅
9. **Mengimplementasikan Manajemen Wishlist** (Tambah/Hapus) ✅
10. **Mengembangkan Tampilan Responsif untuk Browser Seluler** ❌
11. **Mengimplementasikan Meta Tags untuk SEO** di Halaman Detail Produk, sehingga dapat menampilkan thumbnail saat link dibagikan ✅
12. **Mengimplementasikan Fitur PWA** sehingga halaman dapat diakses ke layar beranda jika diakses melalui ponsel ✅
13. **Deployment** deployment tidak dapat dilakukan dengan akun bitbucket, sebagai gantinya deployment dilakukan dengan akun gitlab ✅

## Detail 

1. **Manajemen SEO**: Library `next-seo` digunakan untuk mengelola aspek yang terkait dengan SEO.
2. **Server-Side Rendering**: SSR diterapkan pada halaman detail produk untuk menghasilkan halaman HTML lengkap demi meningkatkan SEO.
3. **Cache Control**: Dikustomisasi di `next.config.js` untuk mengurangi workload server saat web dimuat ulang.
4. **Pembuatan Sitemap**: Skrip khusus dibuat untuk menghasilkan sitemap secara otomatis selama proses build untuk membantu bot mesin pencari menemukan halaman melalui tautan internal.
