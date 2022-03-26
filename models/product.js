const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  producer: {
    type: Object
  },
  img: {
    data: String,
    contentType: String
  }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;