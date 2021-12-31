const exp = require('constants');
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;
const schema=require('./schema');
var path = require('path');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:Welcome1!@anveshana.p37tu.mongodb.net/anv';

app.use(bodyParser.json());

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server running in port:  ${port}`);
});

//static angular content path
app.use(express.static(process.cwd()+'/dist/anveshana'));

//load angular contents from dist folder
app.get('/',function(req,res){
    console.log("Loading dist folder" )
    res.sendFile('index.html',{root:process.cwd()+'/dist/anveshana'})
});


//connect database
try{
    console.log("Database connected.")
    mongoose.connect(uri);
}catch(e){
    console.log("Error connecting to database: ", e);
}

//define schemas
const userMessage=schema.getUserMessageSchema();


//node API's
app.get('/api/users', (req,res)=>{
    res.json("hello nodejs");
    console.log("user get call");
});


app.post('/api/userMessage', (req,res)=>{
    console.log("usermessage insert called" +req.body)
    userMessage.create(req.body,function(err){
    if(err){
    console.log("err: "+err)
    } else {
      console.log("inserted user message")}
    });
    res.send(req.body);
});


