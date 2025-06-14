//productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js"); 
const uploadMiddleware  = require('../middlewares/uploadCloudinaryMiddleware.js');
const upload = uploadMiddleware("imgs");

const { createProduct, createProductForm, adminShowProducts, adminEditProduct, adminDeleteProduct, adminListProducts} = require("../controllers/productController.js");

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(adminShowProducts(products, "Productos"));
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get the products" });
    }
});

router.get("/", (req, res) => {
    res.status(200).redirect("/admin/products");
});
router.get("/list", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(adminListProducts(products, "Productos"));
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
        res.status(200).send(adminShowProducts(products, req.params.cat));

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
router.put("/edit/:id", upload.single("image"), async (req, res) => {
    try {
        const _product = {
            name: req.body.name,
            description: req.body.description,
            image: req.file.path,
            category: req.body.category,
            size: req.body.size,
            price: req.body.price
        }
        const product = await Product.findByIdAndUpdate(req.params.id, _product);
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

router.post("/create", upload.single("image") , async (req, res) => {
    //console.log("Received request", req.body);
    //console.log("Received file:", req.file);
    try {
        //console.log("Received product data:", req.body);
        const _product = {
            name: req.body.name,
            description: req.body.description,
            image: req.file.path,
            category: req.body.category,
            size: req.body.size,
            price: req.body.price
        }

        const product = await Product.create(_product);
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