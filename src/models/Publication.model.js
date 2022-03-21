const mongoose= require("mongoose");

const publicationSchema= new mongoose.Schema({

},
{
    versionKey:false,
    timestamps:true
});

const publication=mongoose.model("publication",publicationSchema);
module.exports=publication;