const mongoose= require("mongoose");

const bookSchema= new mongoose.Schema({
    likes:{type:Number,default:"0"},
    profile_image:{type:String,required:true},
    content:{type:String,required:true}
  },  
  {
    versionKey:false,
    timestamps:true
    }
)

const Books= mongoose.model("book",bookSchema);

module.exports=Books;