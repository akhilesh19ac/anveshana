const exp = require('constants');
const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

app.use(bodyParser.json());

app.get('/api/users', (req,res)=>{
    res.json("hello nodejs");
    console.log("user get call");
    res.json("hey");
});

// app.get('/', (req,res)=>{
//     console.log("user home page");
// });

app.listen(process.env.PORT || port, ()=>{
    console.log(`Server running in port:  ${port}`);
});

app.use(express.static(process.cwd()+'/dist'));

app.get('/*',function(req,res){
    console.log("test inside slash entry in nodejs file" +(process.cwd()+'/dist/sample-proj/index.html'))
    res.sendFile(process.cwd()+'/dist/sample-proj/index.html');
});



