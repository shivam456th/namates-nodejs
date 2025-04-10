const express = require ('express');

const connectDB = require('./config/datadase.js')
const User = require('./models/user.js');

const app = express();

app.use(express.json())

app.post('/signup',async (req, res)=>{
    const userObj = {
        firstName: "SHi",
        lastName: "th",
        emailId:"shiWWW@gamil.com",
        password:"1234",
        gender:"male",
        age: "30",
        _id:"1234567890"
    }

    const user = new User (userObj)
    await user.save();

    res.send("User added Successfully!")
})

connectDB().then(()=>{
    console.log("connectDB connected Successfully");
    app.listen(8000,()=>{
        console.log("Server is running PORT 8000");
        
    })
}).catch(()=>{
    res.status(500).json({massage:"Not found"})
})