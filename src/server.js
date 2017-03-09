
// boilerplate 



// main routes 



// catch all route 
Router.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});