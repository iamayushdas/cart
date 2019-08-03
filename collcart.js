// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");





const app = express();
app.use(express.static(__dirname));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});



app.listen(8001, function(){
  console.log("server started at port 8001");
});
