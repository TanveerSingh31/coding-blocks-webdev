const express = require("express");

const app = express();


//  serves static files to the browser on the home route : "/" 
    
// app.use("/", express.static(`${__dirname}/public`));






app.get("/", (req,res)=>{
    // req.query prints of all the query parameters values in a json format
    console.log(req.query);
    res.send(`hello ${req.query.name}`);
})




app.listen(3000, ()=>{
    console.log("server started");
})