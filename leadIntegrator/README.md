# Lead Integrator (Ajeng)

## Deskripsi
Lead Integrator bertugas menggabungkan seluruh data dari berbagai vendor (Vendor A, Vendor B, dan Vendor C) yang memiliki format berbeda-beda.
Folder ini berisi microservice integrator yang bertanggung jawab untuk:
- Membaca data dari masing-masing vendor
- Menyamakan atau menormalisasi struktur data
- Menggabungkan semuanya menjadi satu format standar
- Menyediakan satu endpoint API (/products) yang dapat digunakan aplikasi utama

Service ini berjalan menggunakan Node.js + Express.

---

## File dalam Integrator
- `vendorA.json` - data mentah dari vendor A
- `vendorB.json` - data mentah dari vendor B
- `vendorC.json` - data mentah dari vendor C
- `database.js` - ini memanggil data dari seluruh vendor
- `integrator.js` - proses normalisasi dan penggabungan data
- `server.js` - server API integrator.
- `README.md` - dokumentasi integrator

---

## Alur Integrasi
Proses integrasi ini dilakukan melalui beberapa tahap yaitu:
1. Pengambilan data vendor
Ketiga file JSON (vendorA.json, vendorB.json, vendorC.json) dibaca melalui database.js.
Masing-masing vendor memiliki struktur berbeda:
- Vendor A → format sederhana, harga dalam string
- Vendor B → format modern (camelCase), harga langsung number
- Vendor C → struktur nested (bersarang), harga terdiri dari base_price + tax
2. Normalisasi struktur data
Di dalam integrator.js, setiap vendor diproses untuk:
- Menyamakan nama field
- Mengubah tipe data agar seragam (misal harga menjadi number)
- Menggabungkan field yang tersebar (misal base_price + tax menjadi harga_final)
- Menentukan status berdasarkan stock atau boolean vendor masing-masing

## Struktur Data Vendor B
Semua produk dari 3 vendor ini akan distandarisasi menjadi format:

```json
{
  "id": "string",
  "nama": "string",
  "harga_final": number,
  "status": "string",
  "sumber": "string"
}
