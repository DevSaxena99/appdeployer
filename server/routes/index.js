const express= require('express');
const router=express.Router();
console.log("router loaded sucessfully");
const homeController=require('../controllers/home_controllers');

router.get("/favourite",homeController.favourite);
router.post("/createFavourite",homeController.createFavourite);

module.exports=router;
