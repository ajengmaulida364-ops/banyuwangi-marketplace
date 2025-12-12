# Vendor C (lilis) — (Kuliner dan Minuman Banyuwangi)

## Deskripsi
Vendor C menyediakan berbagai produk kuliner dan minuman khas Banyuwangi, seperti Nasi Tempong dan Es Kuwut.
Format data menggunakan nested object, dengan pemisahan jelas antara informasi produk, jarga, dan stok.
Struktur ini memudahkan proses integrasi karena setiap bagian data tersusun rapi dan terkelompok.

Repository ini berisi layanan API kecil (microservice) yang menyediakan data produk Vendor C.

---

## File dalam Vendor C
- **vendorC.json** — data mentah produk Vendor C
- **server.js** — server API untuk menyediakan data ke integrator
- **package.json** — konfigurasi server (Node & Express)
- **Vendor C.postman_collection.json** — collection Postman vendor C
- **README.md** — dokumentasi vendor C

---

## Struktur Data Vendor C

Format data untuk setiap produk:

```json
  {
  "id": number,
  "details": {
    "name": "string",
    "category": "string"
  },
  "pricing": {
    "base_price": number,
    "tax": number
  },
  "stock": number
}

