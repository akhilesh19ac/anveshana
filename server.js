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

app.get('/', (req,res)=>{
    console.log("user home page");
});

app.listen(port, ()=>{
    console.log(`Server running in port:  ${port}`);
});



