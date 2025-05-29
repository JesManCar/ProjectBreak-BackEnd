//productController.js
const { template } = require('../helpers/template.js');
const { productTemplate, adminProductTemplate, adminEditProductTemplate } = require('../helpers/productTemplate.js');
const { validSizes, validCategories } = require('../models/Product.js');

function createProductForm() {
    console.log("Creating product form");
    let  form = `<h1>Create Product</h1>
        <form action="/admin/create" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" required>
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image" required>
            <label for="category">Category:</label>
            <select id="category" name="category" required>`
    form += validCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    form += `</select>
    <select id="size" name="size" required>`
    form += validSizes.map(size => `<option value="${size}">${size}</option>`).join('');
    form += `</select><label for="price">Price:</label>
            <input type="number" id="price" name="price" required step=".01">
            <button type="submit">Create Product</button>
            </form>`
    return template(form,true);
}

function showProducts(products) {
    console.log("Displaying products");
    return template(products.map(product => 
    productTemplate(product)).join(''));
}

function createProduct(product) {
    console.log("Creating product with data:");
    console.log(product);
    return template(productTemplate(product),true);
}

function adminShowProducts(products) {
    console.log("Displaying admin products");
    return template(products.map(product => 
    adminProductTemplate(product)).join(''),true);
}

function adminEditProduct(product){
    console.log("Editing product with data:");
    console.log(product);
    return template(adminEditProductTemplate(product),true);
}

function adminDeleteProduct(product) {
    console.log("Deleting product with data:");
    console.log(product);
    return template(`
        <h3>Product ${product.name} will be deleted</h3>
        <form action="/admin/delete/${product._id}?_method=DELETE" method="POST">
            <button type="submit">Confirm Deletion</button>
        `, true);
}

module.exports = {
    createProduct,
    showProducts,
    createProductForm,
    adminShowProducts,
    adminEditProduct,
    adminDeleteProduct
};