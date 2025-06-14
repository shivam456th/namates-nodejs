const jwt = require ('jsonwebtoken');
// const cookies = require ('cookie-parser')
const User = require ('../models/user');

const userAuth = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) {
            throw new Error("Token is not valid!");
            
        }
        const decodeObj = await jwt.verify(token, "Shivamthapa@123$")
        const {_id} = decodeObj;
        const user = await User.findById(_id);
        if (!user) {
            throw new Error ("User not found");
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send("ERROR : "+error.message)
    }
};

module.exports = {
    userAuth
}