const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  price: { type: Number, min: 0 , required: true, unique: true }
});

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;
