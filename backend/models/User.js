const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
   fname:{
       type:String,
       required:true,
   },
   lname:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   phone:{
       type:String,
       required:true,
   },
   address:{
       type:String,
       required:true,
   },
   password:{
       type:String,
       required:true,
   },
  });

  const User=mongoose.model('user', UserSchema)
  module.exports= User