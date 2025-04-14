const express = require ('express');

const connectDB = require('./config/datadase.js')
const User = require ('./models/user.js')

const app = express()

app.use(express.json())

// signup
app.post('/signup', async (req, res) => {
    try {
        const userObj = new User(req.body)
        await userObj.save()
        res.send("Connected successfully")
    } catch (error) {
        console.log(error);
        
    }
})

// Get
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const user = await User.find({emailId:userEmail})
        if (user.length===0) {
            res.status(404).send("Not find the User email id")
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(400).send("Something went Wrong⚠")
    }
})

// patch 
app.patch("/user", async (req, res) => {
    try {
        const userId = req.body.userId
        const data = req.body
        await User.findByIdAndUpdate({_id:userId},data)
        res.send("User Updated Successfully")
    } catch (error) {
        res.send("Something went wrong on update")
        
    }
})


connectDB().then(()=>{
    console.log("Database is connected Successfully");
    app.listen(3000, ()=>{
        console.log("Running PORT in 3000");
    })
}).catch((error)=>{
    console.log("Database is not connected", error);
    
})

