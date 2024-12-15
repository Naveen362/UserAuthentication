const express=require('express');
const {MongoClient}=require('mongodb');
const jwt=require('jsonwebtoken')
const cors=require('cors');
const collectiondb=require('./model/database')
const app=express();

app.use(cors()); // It is a security feature implemented in webrowsers to allow or restrict access to resources from different origins.
//Handles Cross-Origin Resource Sharing
app.use(express.json());
const route=express.Router();

const secret_key="qwertyuiopqwertyu";
route.get('/login',async (req,res)=>{
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
           if (!data){
            res.status(400).json({message:"login details not found register with new account"});
           }
           else{
            const token=jwt.sign(user,secret_key);
            console.log(token);
            res.status(200).json({message:"Logged in Successfully...",userdata:data,token:token})
           }}
    }
    catch {
        res.status(500).json({message:"Server Side Error "})
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
