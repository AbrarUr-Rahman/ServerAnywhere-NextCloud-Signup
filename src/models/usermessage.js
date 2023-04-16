const mongoose=require("mongoose");
const validator=require("validator");


const userSchema=mongoose.Schema({
   
   name: String,
    // displayname:String,
    password:String,

    quota:String,
   email:String
    // name:{
    //     type:String,
    //      required:true,
    //     minLength:3
    // },
    // email:{
    //     type:String,
    //      required:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("Invalid email id");
    //         }
    //     }
    // }
    // quota:{
    //     type:String,
    //     required:true
      
    // }
    // message:{
    //     type:String,
    //     required:true,
    //     minLength:3
    // }
})

// collection

const User=mongoose.model("User",userSchema);

module.exports=User;
