const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    data: String,
    contentType: String
  }
}, { timestamps: true });

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category; 