const { addToLikedMovies,getLikedMovies, removeFromLikedMovies } = require("../controller/UserController");
const express=require("express");
const router=express.Router()

router.post("/add",addToLikedMovies)
router.get("/liked/:email",getLikedMovies)
router.put("/delete",removeFromLikedMovies)

module.exports=router;