const User=require("../models/UserModel.js");

module.exports.getLikedMovies=async(req,res)=>{
    
    try{
        const {email}=req.params;
        const user =await User.findOne({email})
        if(user){
            if(user.likedMovies.length>0){
              return  res.status(200).json({ msg: "success", movies: user.likedMovies })
            }
            else{
              return  res.status(200).json({"msg":"There are no Liked Movies"})
            }
        }
        else{      
           return res.status(404).json("User Does Not exists")
        }
    }catch(err){
        return res.status(404).json("Error in fetching movies")
    }
    
}

module.exports.addToLikedMovies=async(req,res)=>{
    try {
        const{email,data}=req.body;
        const user=await User.findOne({email});
        if(user){
            const {likedMovies}=user;
            const movieAlreadyLiked=likedMovies.find(({id})=>(id===data.id))
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies:[...user.likedMovies,data]
                    },{
                        new:true
                    }
                )
            }
            else{
                return res.status(200).json({msg:"Movie is Already Liked by User"})
            }
        }
        else{
            await User.create({email,likedMovies:[data]})
        }
        
        return res.status(201).json({msg:"Successfully added movie"})
    } catch (error) {
        return res.status(404).json({"msg":"Error in adding Movie"})
    }
}