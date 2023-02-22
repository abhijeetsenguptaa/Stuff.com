const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    image: String,
    price: Number,
    description: String,
    added_by:String
  },
  {
    versionKey: false,
  }
);


const ProductsModel = mongoose.model('products',productsSchema);


module.exports = {ProductsModel}