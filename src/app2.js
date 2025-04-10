const express = require ('express');
const connectDB = require ('./config/datadase.js')
const app = express()

connectDB().then(()=>{
    console.log("Connected with mongoose");
    app.listen(3000,()=>{
        console.log("Connected In Port 3000");
        
    })
}).catch(()=>{
    console.log("Not connected...");
    
})

