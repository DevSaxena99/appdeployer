const mongoose= require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const favouriteSchema= new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:String,
    },
    comment:[{
      type:String,
    }]
},{
    timestamps:true
});

const Favourite=mongoose.model('favourite',favouriteSchema);
module.exports=Favourite;
