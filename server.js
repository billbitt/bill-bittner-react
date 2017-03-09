const express = require("express");
const path = require("path");
const app = express();

// boilerplate 
app.use(express.static("./build"));

// catch all route 
app.get("*", function(req, res){
    console.log("routing to ./build/index.html")
    res.sendFile(path.join(__dirname, "./build", "index.html"));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, function(){
    console.log("listening on port:", PORT)
});