const { vendorA_DB, vendorB_DB, vendorC_DB } = require("./database");

function integrateData() {
  const result = [];

  // VENDOR A + DISKON 10%
  vendorA_DB.forEach(item => {
    const hargaNum = parseInt(item.hrg);
    const hargaFinal = hargaNum - (hargaNum * 0.10);

    result.push({
      id: item.kd_produk,
      nama: item.nm_brg,
      harga_final: Math.round(hargaFinal),
      status: item.ket_stok === "ada" ? "Tersedia" : "Habis",
      sumber: "Vendor A"
    });
  });

  // VENDOR B
  vendorB_DB.forEach(item => {
    result.push({
      id: item.sku,
      nama: item.productName,
      harga_final: item.price,
      status: item.isAvailable ? "Tersedia" : "Habis",
      sumber: "Vendor B"
    });
  });

  // VENDOR C + Recommended
  vendorC_DB.forEach(item => {
    let namaProduk = item.details.name;
    const hargaFinal = item.pricing.base_price + item.pricing.tax;

    if (item.details.category === "Food") {
      namaProduk += " (Recommended)";
    }

    result.push({
      id: item.id.toString(),
      nama: namaProduk,
      harga_final: hargaFinal,
      status: item.stock > 0 ? "Tersedia" : "Habis",
      sumber: "Vendor C"
    });
  });

  return result;
}

module.exports = { integrateData };
