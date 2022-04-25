const express= require('express');
const router=express.Router();
console.log("router loaded sucessfully");
const homeController=require('../controllers/home_controllers');

router.post("/registerUser",homeController.createUser);
router.post("/login/User",homeController.checkUser);

module.exports=router;
