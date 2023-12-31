const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { createProduct, getProducts, deleteProduct, updateProduct} = require("./productsOperations");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/Learning")
  .then(async () => {
    console.log("Connected to MongoDB");
    // let product = await createProduct("DELL", 200, ["FUNNY", "CLASSY"]);
    // console.log(product);
    // let products = await getProducts();
    // console.log(products);
    let product = await updateProduct("659104af6316a9fe58f5eafe", "DELL", 200, ["INTELLIGENT", "CLASSY"]);
    console.log(product);
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(3000);
