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
        lowercase:true,
        trim: true,
        default: "Add Email Address skills"
    },
    password: {
        type:"String",
        default: "Add valid password skills"
    },
    age: {
        type:Number,
        min:18,
        max:50,
        default: "Add Age skills"
    },
    gender: {
        type:"String",
        validate(value){
            if (!["male", "female", "other"].includes(value)) {
                throw new Error ("Gender data is not Valid");
            }
        },
        // enum: ['male', 'female'],
        lowercase: true,
        default: "Add your Gender male, female, other"
    },
    skills: {
        type:[String], default: "Add your skills"

    },
},
{
    timestamps: true,
  },
)

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;