//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res) {
  //console.log(request);
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact Me at rohitbhoir@gmail.com");
});

app.get("/about", function(req, res) {
      res.send("<h1> Rohit Bhoir </h1><br>Noob Mean stack developer");
      });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
