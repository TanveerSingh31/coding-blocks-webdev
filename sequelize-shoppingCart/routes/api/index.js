
const customerRoute = require("./Customer");
const productRoute = require("./Product");


const express = require('express');

const router = express.Router();


router.use("/users", customerRoute);
router.use("/products", productRoute);











module.exports = router;