'use strict';

var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var config = require('./Assets/Config');
var url = config.dbUrl();
var mailer = require('./Assets/MailHelper.js');
const crypto = require('../utilities/Crypto');
var findFlag = false;

exports.CreateRoom = function(req,res)
{
    MongoClient.connect(url, function(err, db)  {
        if(err) throw err;   
        var dbo = db.db(config.dbName());
        dbo.listCollections().toArray(function(err, collections){
            collections.forEach(coll => {
                if(coll.name == "Room"){
                    findFlag = true;
                }
            });
        });         
        console.log(findFlag);   
        if(findFlag){

        }
        else{
            dbo.createCollection("Room");
        }
        
        var room = req.body;
        const rooms = dbo.collection("Room");
        var query = {$or:[{roomName:room.roomName}]};
        rooms.find(query).toArray(function(err,data){
          if(data.length==0)
          {
            rooms.insertOne(room, function(err, resp) {
             if (err) res.json(err);
             db.close();
             res.json("Success");
           });
          }
           else
           {
             db.close();
             res.json("Room already exists with same name!");
           }
        });
        
      });
}

exports.getRooms = function(req,res)
{
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var user = req.body;
    var dbo = db.db(config.dbName());
    var users = dbo.collection("Users");

    users.find({}).toArray(function (err, result) {
       if (err) {
           res.send(err);
       } else {
           res.send(JSON.stringify(result));
       }
    })
    
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
