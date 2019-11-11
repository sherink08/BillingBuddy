'use strict';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var config = require('./Assets/Config');
var url = config.dbUrl();
var mailer = require('./Assets/MailHelper.js');
const crypto = require('../utilities/Crypto');

exports.RegisterUser = function(req,res)
{
    MongoClient.connect(url, function(err, db) {
        if (err) res.json(err);
        var dbo = db.db(config.dbName());
        var user = req.body;
        const users = dbo.collection("Users");
        console.log(user.Email+" "+user.phoneNumber);
        var query = {$or:[{Email:user.Email},{phoneNumber:user.phoneNumber}]};
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
exports.login = function(req,res)
{
  var user = req.body;
  MongoClient.connect(url,function(error,db){
    if(error) res.json({error:error});
    else
    {
      var dbo = db.db(config.dbName());
      var query = {$and:[{Email:user.Email},{Password:user.Password}]};
      const users = dbo.collection("Users");
      users.find(query).toArray(function(err,out){
        if(err) res.json({error:err});
        else
        {
          if(out.length==0)
          {
            res.json({error:'User not found'});
            return;
          }
          console.log(req);
          var loggedIn = out[0];
          loggedIn.Password ="";
          loggedIn.Token = crypto.encrypt(loggedIn.Email);
          res.json(loggedIn);
        }
      });
    }
  });
}
exports.crypt =function(req,res)
{
  const encryptedString = cryptr.encrypt('muhsinwazza@gmail.com');
  const decryptedString = cryptr.decrypt(encryptedString);
  console.log(encryptedString); // e7b75a472b65bc4a42e7b3f78833a4d00040beba796062bf7c13d9533b149e5ec3784813dc20348fdf248d28a2982df85b83d1109623bce45f08238f6ea9bd9bb5f406427b2a40f969802635b8907a0a57944f2c12f334bd081d5143a357c173a611e1b64a
  console.log(decryptedString);
  res.json("success");
}
