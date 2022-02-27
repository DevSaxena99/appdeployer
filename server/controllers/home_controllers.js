const Favourite=require('../models/favourite');
const https = require("https");
const http = require("http");

module.exports.favourite=async function(req,res){
  let recent_search= await Favourite.find({});
    return  res.send(recent_search);
}

module.exports.createFavourite= async function(req,res){

  const image = req.body.image;
  const name = req.body.name;
  const desc = req.body.description;

  Favourite.create({
    image: image,
    name: name,
    description: desc,
  });

}

module.exports.editFavourite= async function(req,res){

  const id = req.body.id;
  const cmt = req.body.comment;

  Favourite.findByIdAndUpdate(id,{ $push:{comment:cmt}},(err,prdct)=>{
    if(err)
    {
       console.log(err);
    }
    else
    console.log("updated");
  });

}

module.exports.deleteFavourite= async function(req,res){

  const id = req.body.id;

  await Favourite.deleteOne({ _id: id });

}
