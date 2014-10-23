// this is our driver interface to the db
var MongoClient = require('mongodb').MongoClient;

// Open the connection to the server - this is where the work happens
    // callback function that is called when the connection to the db is made (the db var in the callback function becomes a handle for our connection to the db)
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {

        if(err) throw err;

        // Print the result. 
        // Will print a null if there are no documents in the db.
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success -- executes before the above code because the above has to wait for the callback after fetching the doc from the db
    console.dir("Called findOne!");
});
