const mongoose = require('mongoose');

module.exports.getUserMessageSchema= function(){
    const userMessageSchema=new mongoose.Schema({
        name :{type: String, required:true} , 
        email :{type: String, required:true} ,
        subject :{type: String, required:true} ,
        message :{type: String, required:true} 
    });
    
    const userMessage=mongoose.model("USER_MESSAGE",userMessageSchema);

    return userMessage;
}