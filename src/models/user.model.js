const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    firstname:{type:String,required:true},
    laststname:{type:String,required:false},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    profile_image:{type:String,required:true}
},
    {
    versionKey:false,
    timestamps:true
    }
)

const User= mongoose.model("user",userSchema);

module.exports=User;