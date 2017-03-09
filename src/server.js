// Load dependencies.
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config");

// boilerplate 
const app = express();

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false}));

// server-side route that directs http routes back to the react app
app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})


// catch all route 
Router.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
})