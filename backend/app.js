const express=require("express");
const mongoose=require("mongoose");
const app=express();
const userModel =require("./model/database")
const cors=require("cors");


app.use(cors())
app.use(express.json());


async function connectDB(){
    try{
    await mongoose.connect("mongodb://localhost:27017/demodb");}
    catch(error){
        console.log("Mongoose Refused to connect")
    }
}
connectDB();
app.get("/getuser",async (req,res)=>{
    const userdata=await userModel.find();
    res.json({ok:true,data:userdata})
})

app.post("/adduser",async (req,res)=>{
   var newData=req.body;
      var user= new userModel(newData);
   await user.save();
   res.json({
    ok:true,
    result:"Success"
   })

})

app.listen(4000,()=>{
    console.log("http://localhost:4000")
})