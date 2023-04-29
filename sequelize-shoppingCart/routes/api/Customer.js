const express = require('express');
const router = express.Router();

const Customer = require("../../db").Customer;

router.get("/", async (req,res)=>{
    // we have to send all the customers as a response back 

    

    const customers = await Customer.findAll();
    
    if(customers.length > 0) {
        res.send({ users: customers});
        
    }
    else{
        res.send(`<h1>No customers in the database right now!</h1>`);
    }
    
});


router.post("/", async (req,res)=>{
    
    // we expect to give name of customer , and create new row in table with that name

    const customer = await Customer.create({
        name: req.body.name
    });

    res.status(201).send(customer);

})





module.exports = router