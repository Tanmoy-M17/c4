const express =require("express");
const  connect = require("./configer/db.js");


const userController=require ("./controllers/user.controlers.js"); 
const booksController=require("./controllers/books.controller.js");
const commentsController=require("./controllers/comments.controller.js")
const app=express();

app.use(express.json());

app.use("/users",userController);
app.use("/books",booksController);
app.use("/comments",commentsController)

app.listen(5000,async(req,res)=>{
    try{
        await connect();
        console.log("listening on Port 5000")
    }
    catch(err){
        console.log("Error:",err);
    }
})