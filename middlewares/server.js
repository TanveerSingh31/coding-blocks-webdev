const express = require("express");

const app = express();


//  serves static files to the browser on the home route : "/" 
    
app.use(express.static(`${__dirname}/public`));

// bunch of middlewares

function m1 (req,res,next) {
    console.log("middleware 1");
    next();
}
function m2 (req,res,next) {
    console.log("middleware 1");
    next();
}
function m3 (req,res,next) {
    console.log("middleware 1");
    next();
}

/* middlewares are functions that executed when a request comes to the server
    after the middleware has completed its execution 
    either "next()" or "res.send()" is to be called to complete req,res cycle
    next() calls the next middleware in line
    res.send() sends response to the browser back */


// 1st parameter is path to which request comes 
// all other paramters after it are middlewares , that will execute sequentially

app.get("/hello", m1, m2, m3, (req,res)=>{
    // req.query prints of all the query parameters values in a json format
    console.log(req.query);
    res.send(`hello ${req.query.name}`);
})




app.listen(3000, ()=>{
    console.log("server started");
})