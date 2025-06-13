const { validSizes, validCategories } = require('../models/Product.js');
const { calculateImageUrl } = require('../helpers/calculateImageUrl.js');


function productTemplate (product){     
    return `<div class="product">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Size: ${product.size}</p>
        <p>Price: ${product.price}€</p>
        <img src="${calculateImageUrl(product.image)}" alt="${product.description}" />
        <a class="button" href="/product/${product._id}">View</a>
    </div>
`};

function adminProductTemplate (product){ 
    return `<div class="product">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Size: ${product.size}</p>
        <p>Price: ${product.price}€</p>
        <img src="${calculateImageUrl(product.image)}" alt="${product.description}" />
        <div class="product-actions">
        <a href="/admin/product/${product._id}">View</a>
        <a href="/admin/product/edit/${product._id}">Edit</a>
        <a href="/admin/delete/${product._id}">Delete</a>
        </div>
    </div>
`}

function adminProductTemplateList(product){

    return `<tr class="product-list-item">
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.category}</td>
        <td>${product.size}</td>
        <td>${product.price}€</td>
        <td><img src="${calculateImageUrl(product.image)}" alt="${product.description}" /></td>
        <td>
            <a class="button" href="/admin/product/${product._id}">View</a>
            <a class="button" href="/admin/product/edit/${product._id}">Edit</a>
            <a class="button" href="/admin/delete/${product._id}">Delete</a>
        </td>
        </tr>
        `
}

function adminEditProductTemplate (product){
    return `<h1>Edit Product</h1>
        <form action="/admin/edit/${product._id}?_method=PUT" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${product.name}" required>
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" value="${product.description}" required>
            <label for="image">Image URL:</label>
            <input type="text" id="image" name="image" value="${product.image}" required>
            <label for="category">Category:</label>
            <select id="category" name="category" required>
                ${validCategories.map(cat => `<option value="${cat}" ${cat === product.category ? 'selected' : ''}>${cat}</option>`).join('')}
            </select>
            <select id="size" name="size" required>
                ${validSizes.map(size => `<option value="${size}" ${size === product.size ? 'selected' : ''}>${size}</option>`).join('')}
            </select>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" value="${product.price}" required step=".01">
            <button type="submit">Update Product</button>
        </form>`;
}


module.exports = { productTemplate, adminProductTemplate, adminEditProductTemplate, adminProductTemplateList};