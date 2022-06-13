const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')

const registerUser = asyncHandler (async(req,res)=>{
   const {name,email,password,pic} = req.body;
   const userExists = await User.findOne({email})
   const user = await User.create({
     name, email, password, pic
   });

   if(userExists){
       res.status(400)
       throw new Error("user already exists")
   }
   
   if(user){
      res.status(201).json({
          _id:user._id,
          name:user.name,
          email:user.email,
          pic : user.pic,
          isAdmin:user.isAdmin
      }) 
   }else{
       res.status(400)
       throw new Error("Error occured")
   }

   res.json({
       name,email
   })
})

module.exports = {registerUser}