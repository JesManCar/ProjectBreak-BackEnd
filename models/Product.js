//Product.js
const mongoose = require('mongoose');

const validSizes = ["XS","S", "M", "L", "XL", "XL"];
const validCategories = ["Camisetas", "Pantalones","Zapatos", "Accesorios"];

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, enum: validCategories, required: true},
    size: {type: String, enum: validSizes, required: true},
    price: {type: Number, required: true},
}, { timestamps: true });

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;
module.exports.validSizes = validSizes;
module.exports.validCategories = validCategories;