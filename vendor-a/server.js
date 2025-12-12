const express = require("express");
const cors = require("cors");
const data = require("./vendorA.json");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint utama vendor A
app.get("/products", (req, res) => {
  res.json({
    vendor: "Vendor A",
    total_items: data.length,
    data: data
  });
});

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Vendor A server running at http://localhost:${PORT}/products`);
});