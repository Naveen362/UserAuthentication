const express=require('express');
const {MongoClient, ObjectId}=require('mongodb');
const jwt=require('jsonwebtoken')
const cors=require('cors');
const collectiondb=require('./model/database')
const app=express();

app.use(cors()); // It is a security feature implemented in webrowsers to allow or restrict access to resources from different origins.
//Handles Cross-Origin Resource Sharing
app.use(express.json());
const route=express.Router();

const secret_key="qwertyuiopqwertyu";
route.post('/login',async (req,res)=>{
    const user=req.body;
    try {
        if (!user.name){
            res.status(400).json({message:"Username IS Empty"})
        }
        else if(!user.password){
            res.status(400).json({message:"Password You entered Wrong"})
        }
        else{
           const collection1= await collectiondb();
           const data=await collection1.findOne(user);
           console.log(data)
           if (!data){
            res.status(400).json({message:"login details not found"});
           }
           else{
            const token=jwt.sign(data,secret_key);
            console.log(token);
            res.status(200).json({message:"Logged in Successfully...",userdata:data,token:token})
           }}
    }
    catch {
        res.status(500).json({message:"Server Side Error "})
    }
})


app.get("/home", (req,res,next)=>{
    const token=req.headers.authorization.slice(7);
    jwt.verify(token,secret_key,(err,decode)=>{
        if (err){
            res.status(400).json({message:"invalid token"})
        }
        else{
            req.user=decode;
            next();
        }
    })
},async (req,res)=>{
    try {
     const userId=req.user;
     console.log(userId)
     const collection= await collectiondb();
     const data=await collection.findOne({_id:new ObjectId(userId._id)});
     res.status(200).json({userdata:data,message:"logged in "});
     console.log(data)
    }
    catch (error){
        console.log("Error",error);
        res.status(500).json({message:"505 err"})
    }
})
app.use('/auth',route);
app.listen(4000,(err)=>{
    if (err){
        console.log("err")
    }
    else{
        console.log("http://localhost:4000")
    }
})
