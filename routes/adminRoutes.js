//productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js"); 
const upload = require('../middlewares/uploadCloudinaryMiddleware.js');

const { createProduct, createProductForm, adminShowProducts, adminEditProduct, adminDeleteProduct } = require("../controllers/productController.js");

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(adminShowProducts(products));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the products" });
    }
});

router.get("/products/:cat", async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.cat });
        res.status(200).send(adminShowProducts(products));

    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the products" });
    }
});

router.get("/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(adminShowProducts([product]));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});
router.get("/product/edit/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(adminEditProduct(product));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});
router.put("/edit/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).redirect(`/admin/product/${req.params.id}`);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update the product" });
    }
});

router.get("/new", (req, res) => {
    res.status(200).send(createProductForm());
});

router.post("/create",async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(createProduct(product));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a Product" });
    }
});

router.get("/delete/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(adminDeleteProduct(product));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});
router.delete("/delete/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).redirect("/admin/products");
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete the product" });
    }
});

module.exports = router;