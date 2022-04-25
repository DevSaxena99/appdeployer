const User1=require('../models/user1');
const https = require("https");
const http = require("http");

module.exports.createUser= async function(req,res){

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  User1.create({
    name: name,
    email: email,
    password: password
  });

  console.log("created");

}

module.exports.checkUser= async function(req,res){

  const email = req.body.email;
  const password = req.body.password;

  User1.find({
    email: email,
  },function(err,user) {
    if(err) {
      console.log(err);
    } else {
      if(user[0].password===password){
        console.log(user);
        res.send(user);
      }
    }
  });

}
