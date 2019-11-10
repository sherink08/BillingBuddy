'use strict';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var config = require('../controllers/Assets/Config');
var url = config.dbUrl();
exports.RegisterUser = function(req,res)
{
    MongoClient.connect(url, function(err, db) {
        if (err) res.json(err);
        var dbo = db.db(config.dbName());
        var user = req.body;
        dbo.collection("Users").insertOne(user, function(err, resp) {
          if (err) res.json(err);
          console.log("1 document inserted");
          db.close();
          res.json("Success");
        });
      });
}
