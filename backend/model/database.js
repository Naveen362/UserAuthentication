var mongoose=require("mongoose");
//structure of the document
var userSchem=new mongoose.Schema({
    name:{
        type:String,
        default:"any demodb",
        required:true,
    },
    email:String,
    phone:Number,
});

//template of the document

const userModel=mongoose.model("users",userSchem);
module.exports=userModel;