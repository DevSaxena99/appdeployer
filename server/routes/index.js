const express= require('express');
const router=express.Router();
console.log("router loaded sucessfully");
const homeController=require('../controllers/home_controllers');

router.get("/favourite",homeController.favourite);
router.post("/createFavourite",homeController.createFavourite);
router.post("/editFavourite",homeController.editFavourite);
router.post("/editRating",homeController.editRating);

router.post("/deleteFavourite",homeController.deleteFavourite);

module.exports=router;
