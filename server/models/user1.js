const mongoose= require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const user1Schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const User1=mongoose.model('user1',user1Schema);
module.exports=User1;
