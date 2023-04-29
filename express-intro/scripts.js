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



//                                      path parameters

// "/:city" means that we can enter anything in the url and it will be saved in the city variable
// example => http://localhost:3000/mohali/welcome 

app.get("/:city/:greeting", (req,res)=>{
    let city = req.params.city;
    let greet = req.params.greeting;
    res.send(`${greet} to ${city}`);
})