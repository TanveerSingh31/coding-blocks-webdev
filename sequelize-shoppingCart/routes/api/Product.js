const express = require('express');
const router = express.Router();

const Product = require("../../db").Product;

router.get("/", async (req,res)=>{
    
    try{
        const products = await Product.findAll();
        res.status(200).send(products);

    } catch(err) {
        res.status(400).send("could not get products");
    }

});

router.post("/", async (req,res)=>{

    if(isNaN(req.body.price)){
        return res.send("Price is not a valid number");
    }
    
    try{
        // object destructuring 
        let { name, description, price, manufacturer} = req.body;
        const product = await Product.create({
            name: name,
            description: description,
            price: price,
            manufacturer: manufacturer
        });

        res.status(201).send(product);
    }
    catch (err) {
        res.status(401).send("not able to publish products!");
    }
})


module.exports = router