const express = require ('express');
const User = require ('./models/user.js')
const app = express();

const connectDB = require ('./config/datadase.js');

app.use(express.json())

// app.post('/signup', async (req, res) => {
//     try {
//         const userObj = new User(req.body); // 🔁 'useObje' ki jagah 'userObj'
//         await userObj.save(); // 🔁 'new user' galat hai, already object bana liya upar
//         res.send("User Added successfully!");
//     } catch (error) {
//         res.status(404).send("Error Saving the user: " + error.message);
//     }
// });

app.get("/details", (req, res) => {
    try {
        res.send("hey");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
});

app.post('/signup', async (req, res) => {
    try {
        const userObj = new User(req.body);
        await userObj.save();
        res.send("User Added Successfully!");
    } catch (error) {
        res.status(404).send("Error Saving the user:" + error.message)
    }
})

app.get('/user', async (req, res) => {
    const userEmail = req.body.emailId;
    
    try {
        const user = await User.find({emailId: userEmail})
        if (user.length===0) {
            res.status(404).send("Not found")
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(400).send("Some thing went wrong!")
    }
})

app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        await User.findByIdAndUpdate({_id:userId}, data)
        res.send("Updated ")
    } catch (error) {
        console.log("Not Update Sorry");
        
    }
})

connectDB().then(()=>{
    console.log("Connected with mongoose");
    app.listen(3000,()=>{
        console.log("Connected In Port 3000");
        
    })
}).catch(()=>{
    console.log("Not connected...");
    
})