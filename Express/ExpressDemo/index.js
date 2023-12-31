const express = require("express");
const app = express();
app.use(express.json());
const products = ["Apple", "Banana", "Orange"];

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

//Create
app.post("/api/products", (req, res) => {
  products.push(req.body.name);
  res.send(products);
});

//Read
app.get("/api/products/:index", (req, res) => {
  if(!products[req.params.index]) {
    res.status(400).send("Product not found");
    return;
  }
  res.send(products[req.params.index]);
});

//Update
app.put("/api/products/:index", (req, res) => {
  console.log(req.body);
  products[req.params.index] = req.body.name;
  res.send(products);
});

//Delete
app.delete("/api/products/:index", (req, res) => {
  products.splice(req.params.index, 1);
  res.send(products);
});

app.listen(3000);
