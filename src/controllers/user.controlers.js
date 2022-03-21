const express=require("express");
const validator = require('validator');

const User=require("../models/user.model.js")
const router=express.Router();
router.post("/",body("age").not().isEmpty(),
async(req,res)=>{

    try{
        const users=await User.create(req.body);
        return res.status(201).send(users);
    }
    catch(err){
        return res. status(500).send({message:err.message})
    }
    
});
module.exports=router;


