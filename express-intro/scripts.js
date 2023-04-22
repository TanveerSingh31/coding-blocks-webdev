const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log("server started on http://localhost:3000");
})


app.get("/", (req,res)=>{
    res.send(`<h1>Hello world@</h1>`);
})

app.get("/greet", (req,res)=>{
    // prints out the queries in the url 
    //console.log(req.query);

    let person = req.query.person;

    res.send("good morning " + person);
})