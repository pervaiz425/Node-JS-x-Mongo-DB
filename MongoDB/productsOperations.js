const ProductModel = require("./models/productModel");

const createProduct = async (title, price, tags) => {
  console.log("createProduct");
  let product = new ProductModel();
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

const getProducts = async () => {
  console.log("getProducts");
  let products = await ProductModel.find();
  return products;
}

const updateProduct = async (id, title, price, tags) => {
   const product = await ProductModel.findById(id);
   product.title = title;
   product.price = price;
   product.tags = tags;
   await product.save();
   return product;
}

const deleteProduct = async (id) => {
  console.log("deleteProduct");
  let product = await ProductModel.findByIdAndDelete(id);
  return product;
} 

module.exports.createProduct = createProduct;
module.exports.getProducts = getProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;