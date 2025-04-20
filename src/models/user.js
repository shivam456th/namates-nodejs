const mongoose = require ('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type:"String",
        minLength: 4,
        maxLength: 25,
    },
    lastName: {
        type:"String",
        minLength:5,
        maxLength:10,
    },
    emailId: {
        type:"String",
    },
    password: {
        type:"String",
        default: "Add valid password "
    },
    age: {
        type:Number,
    },
    gender: {
        type:"String",
        enum: ['male', 'female',"other"],
        lowercase: true,
        default: "Add your Gender male, female, other"
    },
    about:{
        type: "String",
    },
    skills: {
        type:[String],
        default: "Add your skills"

    },
},
{
    timestamps: true,
  },
)

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;