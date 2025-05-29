//productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js"); 
const { showProducts } = require("../controllers/productController.js");

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(showProducts(products));
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
        res.status(200).send(showProducts(products));

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
        res.status(200).send(showProducts([product]));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});

router.get("/", (req, res) => {
    res.status(200).redirect("/products");
});

module.exports = router;