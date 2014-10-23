var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true}));
//app.use(app.router);

app.get('/', function(req, res, next) {
    res.render('fruitPicker', { 'fruits' : [ 'apple', 'orange', 'banana', 'peach' ] });
});

app.post('/favorite_fruit', function(req, res, next) {
    var favorite = req.body.fruit;
    if (typeof favorite == 'undefined') {
        next(Error('Please choose a fruit!')); //when express sees this Error() it looks for any previously registered errorHandler and calls it
    }
    else {
        res.send("Your favorite fruit is " + favorite);
    }
});

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error: err.message });
}

app.use(errorHandler);



app.listen(3000);
console.log('Express server listening on port 3000');
