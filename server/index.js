const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
const cors = require("cors")
const mongoose = require("mongoose");

app.use(cors())
app.use(express.json())

const user = require("./models/user")


  
app.get('/', (req, res)=>{ 
    res.status(200);
    const test = {obj:"Welcome to root URL of Server"}
    res.send(test); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 