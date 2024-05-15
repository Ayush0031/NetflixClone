const { addToLikedMovies } = require("../controller/UserController");
const express=require("express");
const router=express.Router()

router.post("/add",addToLikedMovies)

module.exports=router;