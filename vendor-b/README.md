# Vendor B (Nisa) — Distro Modern Banyuwangi

## Deskripsi
Vendor B merupakan penyedia produk fashion khas Banyuwangi seperti kaos dan hoodie.  
Format data menggunakan camelCase, tipe data konsisten (number & boolean), sehingga mudah diolah oleh sistem integrator.

Repository ini berisi layanan API kecil (microservice) yang menyediakan data produk Vendor B.

---

## File dalam Vendor B
- `dataB.json` — data mentah produk Vendor B.
- `server.js` — server API untuk menyediakan data ke integrator.
- `package.json` — konfigurasi server (Node & Express).
- `README.md` — dokumentasi vendor B.

---

## Struktur Data Vendor B
Setiap produk memiliki struktur:

```json
{
  "sku": "string",
  "productName": "string",
  "price": number,
  "isAvailable": boolean
}
