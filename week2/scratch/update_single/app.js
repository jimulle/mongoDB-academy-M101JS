var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'assignment' : 'hw1' };

    db.collection('grades').findOne(query, function(err, doc) {
        if(err) throw err;
        if(!doc) {
            console.log('No documents for assignment ' + query.assignment + ' found!');
            return db.close();
        }

        //this operation takes two queries
          //this line sets the unique id from the doument as the id to match with for the second query
        query['_id'] = doc['_id'];
        //same document that was returned in the first query, but not it has the additional 'date_returned' field
        doc['date_returned'] = new Date();

        db.collection('grades').update(query, doc, function(err, updated) {
            if(err) throw err;

            console.dir("Successfully updated " + updated + " document!");

            return db.close();
        });
    });
});
