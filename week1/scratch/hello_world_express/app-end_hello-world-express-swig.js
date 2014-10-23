var express = require('express'),
    app = express(),
    cons = require('consolidate'); // wrapper module for templating

//declaring swig at the html template engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

//this allows us to tell express how to handle a get request for a particular URL
app.get('/', function(req, res) {
    //res.send("hello, world!");
    res.render('hello', {'name': 'Swig'});
});

//catchall route for all unrouted URLs
app.get('*', function(req, res) {
    res.status(404).send("Page not found");
});

//activate the server and listen for traffic on port 8080
app.listen(8080);
console.log("express server started on port 8080");