const express =  require ("express");

const app = express();

// Handle Auth Middleware for all GET, POST,... requests

app.use("/admin", (req, res, next)=>{
    console.log("Admin auth is getting checked!!");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.send(401).send("Unauthorized request")
    } else {
        next();
    }
});

app.get("/admin/getAllData", (req, res)=> {
    res.send("All Data Sent");
});


app.get("/admin/deleteUser", (req, res) => {
    res.send("All Data deleteUser Sent");
})
// //GET /users => It checks all the app.xxx("matching route") functions
// //GET /users => middleware chain => request handler

// app.get("/", (req, res, next) => {
//     console.log(req.params);
//     // res.send("Response!!");
//     next()
// });

// app.get("/user", [(req, res, next) => {
//     console.log(req.params);
//     // res.send("Response!!");
//     next()
// },
// (req, res, next)=>{
//     // res.send("1nd Response!!")
//     next()
// },
// (req, res, next)=>{
//     // res.send("2nd Response!!")
//     next()
// },
// (req, res, next)=>{
//     // res.send("3nd Response!!")
//     next()
// },
// (req, res, next)=>{
//     // res.send("4nd Response!!")
//     next()
// },
// (req, res, next)=>{
//     res.send("5nd Response!!")
//     next()
// },]
// )

app.listen(7777, ()=>{
    console.log("Server is successfully listion on port 7777...");
    
})