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
    }
},{
    timestamps:true
});

const Favourite=mongoose.model('favourite',favouriteSchema);
module.exports=Favourite;
