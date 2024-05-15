const express=require("express");
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to DB Successfully")
}).catch((err)=>{
    console.log("error in connecting",err)
})
app.listen(5000,()=>{
    console.log("Server is Listening on port 5000")
})