const { addToLikedMovies,getLikedMovies } = require("../controller/UserController");
const express=require("express");
const router=express.Router()

router.post("/add",addToLikedMovies)
router.get("/liked/:email",getLikedMovies)

module.exports=router;