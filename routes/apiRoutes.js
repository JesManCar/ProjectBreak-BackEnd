//productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js"); 
const uploadMiddleware  = require('../middlewares/uploadCloudinaryMiddleware.js');
const upload = uploadMiddleware("imgs");
const {authApiMiddleware} = require('../middlewares/authMiddleware.js');

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
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
        res.status(200).send(products);

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
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});

router.get("/", (req, res) => {
    res.status(200).redirect("/api/products");
});

router.post("/create", authApiMiddleware, upload.single("image") , async (req, res) => {
    console.log("Creating product with data:");
    try {
        console.log(req.body)
        const _image = req.file ? req.file.path : "undefined";
        const _product = {
            name: req.body.name,
            description: req.body.description,
            image: _image,
            category: req.body.category,
            size: req.body.size,
            price: req.body.price
        }
        const product = await Product.create(_product);
        res.status(201).send(product);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a Product" });
    }
});

router.get("/edit/:id", authApiMiddleware,upload.single("image"),  async (req, res) => {
    try {
        const _image = req.file ? req.file.path : undefined;
        const _product = {
            name: req.body.name,
            description: req.body.description,
            image: _image,
            category: req.body.category,
            size: req.body.size,
            price: req.body.price
        }
        const product = await Product.findByIdAndUpdate(req.params.id, _product);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the product" });
    }
});

module.exports = router;