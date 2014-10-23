var express = require('express'),
    app = express();

//this allows us to tell express how to handle a get request for a particular URL
app.get('/', function(req, res) {
    res.send("hello, world!");
});

//catchall route for all unrouted URLs
app.get('*', function(req, res) {
    res.status(404).send("Page not found");
});

//activate the server and listen for traffic on port 8080
app.listen(8080);
console.log("express server started on port 8080");