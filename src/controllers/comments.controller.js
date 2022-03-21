const express=require("express");

const Comments=require("../models/comments.model.js")
const router=express.Router();
router.post("/",async(req,res)=>{

    try{
        const books=await Comments.create(req.body);
        return res.status(201).send(books);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
    
});
module.exports=router;