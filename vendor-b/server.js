const express = require("express");
const cors = require("cors");
const data = require("./dataB.json");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint utama vendor B
app.get("/products", (req, res) => {
  res.json({
    vendor: "Vendor B",
    total_items: data.length,
    data: data
  });
});

const PORT = 4002;

app.listen(PORT, () => {
  console.log(`Vendor B server running at http://localhost:${PORT}/products`);
});
