const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    likedMovie:Array

})

module.exports=mongoose.model("user",userSchema);
