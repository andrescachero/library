var express = require('express');
var mongodb = require('mongodb').MongoClient;

var bookRouter = express.Router();

var route = function (nav) {

    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (err, results) {
                    res.render('bookListView', {
                        title: 'Hello world!',
                        nav: nav,
                        books: results
                    });
                });
            });

        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Hello world!',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};

module.exports = route;