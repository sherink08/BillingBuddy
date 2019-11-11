'use strict';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var config = require('./Assets/Config');
var url = config.dbUrl();
var mailer = require('./Assets/MailHelper.js');
exports.RegisterUser = function(req,res)
{
    MongoClient.connect(url, function(err, db) {
        if (err) res.json(err);
        var dbo = db.db(config.dbName());
        var user = req.body;
        const users = dbo.collection("Users");
        var query = {$or:[{Email:user.Email},{PhoneNumber:user.PhoneNumber}]};
        users.find(query).toArray(function(err,data){
         if(data.length==0)
         {
          users.insertOne(user, function(err, resp) {
            if (err) res.json(err);
            //mailer.sendMail(user.Email);  ssl issue is there , check back after 
            db.close();
            res.json("Success");
          });
         }
          else
          {
            db.close();
            res.json("Email ID or Password already registered!");
          }
        });
        
      });
}
