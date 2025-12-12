const express = require("express");
const cors = require("cors");
const data = require("./vendorC.json");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint utama vendor C
app.get("/products", (req, res) => {
  res.json({
    vendor: "Vendor C",
    total_items: data.length,
    data: data
  });
});

const PORT = 4003;

app.listen(PORT, () => {
  console.log(`Vendor C server running at http://localhost:${PORT}/products`);
});
