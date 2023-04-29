const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/", express.static(__dirname + '/public'));


// these are reference to (route) objects inside these individual files
const apiRoute = require("./routes/api");

// these middlewares define that which routes to use when user tries to access different route
app.use("/api", apiRoute);

app.listen(4000, ()=>{
    console.log("server started on http://localhost:4000");
})