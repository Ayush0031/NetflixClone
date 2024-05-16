const { addToLikedMovies,getLikedMovies } = require("../controller/UserController");
const express=require("express");
const router=express.Router()

router.post("/add",addToLikedMovies)
router.post("/get",getLikedMovies)

module.exports=router;