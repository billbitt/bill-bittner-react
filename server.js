// Load dependencies.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// boilerplate 
var app = express();

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false}));

// server-side route that directs http routes back to the react app
app.get("/*", function(req, res) {
    console.log("serving file: " + __dirname + '/public/index.html')
    res.sendFile(__dirname + '/public/index.html')
})

var PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, function() {
    console.log("Server is running on PORT:", PORT);
})