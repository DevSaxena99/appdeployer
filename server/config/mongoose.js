const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/appDB');
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error while connecting'));
//up and running then print the message.
db.once('open',()=>{
    console.log('connection successfully');
})
