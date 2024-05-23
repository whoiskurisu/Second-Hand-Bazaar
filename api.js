const express = require("express");
const app = express();
const products = require("./data");

app.get("/api/v2/products", (req, res) => {
  res.json(products);
});

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((a) => {
//     const { id, name, status, price } = a;
//     return { id, name, status, price };
//   });
//   res.json(newProducts);
// });

app.listen(5000, () => {
  console.log("listening");
});
