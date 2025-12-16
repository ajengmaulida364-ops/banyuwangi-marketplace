# Banyuwangi Marketplace — UAS Interoperability

Repository ini merupakan proyek UAS Interoperability yang terdiri dari beberapa layanan vendor dan satu layanan integrator.  
Setiap anggota membuat API vendor masing-masing, sementara Lead Integrator menggabungkan seluruh data vendor menjadi satu API terpadu.

Kami tidak melakukan merge ke branch main, karena setiap anggota mengerjakan microservice yang berbeda. Branch main digunakan sebagai dokumentasi utama agar kontribusi tiap anggota tetap terpisah dan jelas. 

Branch **main** hanya berisi dokumentasi umum dan tidak digunakan untuk menulis kode vendor maupun integrator.

---

## Pembagian Tugas & Branch
Anggota 1 Siti Faiqotul Kifiyah (362458302021) sebagai pengembang vendor A
Anggota 2 Nisa Eka Kholifaturrizkiah (362458302018) sebagai pengembang vendor B
Anggota 3 Lilis Thalisa (362458302020)  sebagai pengembang vendor C
Anggota 4 Ajeng Maulida Puspita (362458302012) sebagai Lead Introgrator

---

## Struktur Repository
- main/ → Dokumentasi umum
- vendor-a/ → API Vendor A
- vendor-b/ → API Vendor B
- vendor-c/ → API Vendor C
- leadintegrator-ajeng/ → API Integrator (menggabungkan semua vendor)

---

## Tujuan Project

- Mensimulasikan interoperabilitas antar sistem  
- Setiap vendor memiliki struktur data berbeda  
- Lead Integrator menggabungkan seluruh data menjadi satu format standar  
- Semua anggota bekerja di branch masing-masing 
