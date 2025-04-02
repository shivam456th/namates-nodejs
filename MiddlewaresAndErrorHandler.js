const express =  require ("express");

const app = express();

app.get("/user", (req, res, next) => {
    console.log(req.params);
    // res.send("Response!!");
    next()
},
(req, res)=>{
    res.send("2nd Response!!")
});

app.listen(7777, ()=>{
    console.log("Server is successfully listion on port 7777...");
    
})