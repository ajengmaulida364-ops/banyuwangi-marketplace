const express = require("express");
const cors = require("cors");
const { integrateData } = require("./integrator");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(integrateData());
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000/products");
});
