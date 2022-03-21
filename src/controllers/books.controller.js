const express=require("express");

const Books=require("../models/book.model.js")
const router=express.Router();
router.post("/",async(req,res)=>{

    try{
        const books=await Books.create(req.body);
        return res.status(201).send(books);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
    
});
module.exports=router;