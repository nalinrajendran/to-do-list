const bodyParser = require("body-parser");
const express = require("express");
const date = require(__dirname+"/date.js")
const app =  express();
const port = 3000;



var items = [];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){

    
    res.render("list", {dayhere: date(), itemhere : items});

 
});



app.post("/", function(req,res) {
    
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});

app.get("/about", function(req,res){
    res.render("about");
});


app.listen(port, function(){
    console.log("The server is listening on the port 3000.");
});