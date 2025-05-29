//authRoutes.js
const express = require("express");
const router = express.Router();
const { template } = require('../helpers/template.js');
const authForm = require("../controllers/authController.js");


router.get("/",  (req, res) => {
    
    res.status(200).send(template(authForm(req.query)));
});

router.post("/auth", (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.status(400).redirect("/login?error=missing_credentials");
    }
    else if(req.body.username !== process.env.ADMIN_NAME || req.body.password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).redirect("/login?error=wrong_credentials");
    }
    req.session.isAuthenticated = true;
    req.session.username = req.body.username;
    res.status(200).redirect("/admin/products");
});

router.get("/out", (req, res) => {
    req.session.isAuthenticated = false;
    req.session.username = "";
    res.status(200).redirect("/products");
});


module.exports = router;