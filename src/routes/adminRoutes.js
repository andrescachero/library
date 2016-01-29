var express = require('express');
var mongodb = require('mongodb').MongoClient;

var adminRouter = express.Router();

var books = [
    {title: 'Inferno', author: 'Dan Brown'},
    {title: 'Codigo Da Vinci', author: 'Dan Brown'}
];

var route = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });
    return adminRouter;
};

module.exports = route;