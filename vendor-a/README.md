## Vendor A (Warung Legacy) 

## Deskripsi 
Vendor A (Warung Legacy) merupakan penyedia berbagai produk kebutuhan rumah tangga dan warung, seperti kopi bubuk dan gula aren. Data disusun menggunakan format snake_case agar data konsistendengan sistem lama yang digunakan oleh warung legacy.

Repository ini berasa layanan API kecil (microservice) yang menyediakan data produk Warung Legacy untuk kebutuhan integrasi.

---

## File dalam vendor A 
1. **Data.json** -> data mentah produk warung legacy
2. **server.js** -> server API untuk menyajikan data
3. **package.json** -> konfigurasi pada server(node&Express)
4. **vendor A.postman_collection.json** -> collection postman untuk testing
5. **README.md** -> dokumentasi vendor

---

## Struktur vendor A
format struktur data untuk setiap produk

```json
{
  "kd_produk": "string",
  "nm_brg": "string",
  "hrg": "string",
  "ket_stok": "string"
}

