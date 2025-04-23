const express = require("express");
const connectDB = require("./config/datadase.js");
const User = require("./models/user.js");
const { validateSignUpDate } = require("./utils/validtion.js");
const bcrypt = require("bcrypt");
const cookieParser = require ("cookie-parser")
const jwt = require ('jsonwebtoken');
const { userAuth } = require("./middleware/auth2.js");
const app = express();

app.use(express.json());
app.use(cookieParser())
app.post("/signup", async (req, res) => {
  try {
    validateSignUpDate(req);
    const { firstName, lastName, emailId, password, gender, skills, age } =
      req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      gender,
      skills,
      age,
    });
    await user.save();
    res.status(200).send("Successful");
  } catch (error) {
    throw new Error(`Error Saving the user: ${error.message}`);
  }
});

app.post("/login", async (req, res) => {
  try {
    const {emailId, password} = req.body;
    const user = await User.findOne({emailId});
    if (!user) {
      throw new Error ("Email is not Correct")
    } 
    const isPasswordHash = await bcrypt.compare(password, user.password)
    if (isPasswordHash) {
      //create a JWT Token
      const token = await jwt.sign({_id: user._id}, "DEV@Tinderr$123")
      console.log(token);

      //Add the token cookie and send response back to the user
      res.cookie("token", token);
      res.send("Login Successful!")
    } else {
      throw new Error("Invalid credentials")
    }
  } catch (error) {
    res.status(500).send("ERROR : " + error.message)
  }
})

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.cookies;
    res.send(user)
  } catch (error) {
    res.status(500).send("ERROR : " + error.message);
  }
})


// Get
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) {
      res.status(404).send("Not find the User email id");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went Wrong⚠");
  }
});

// patch
app.patch("/api/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    const ALLOWED_UPDATES = [
      "firstName",
      "lastName",
      "emailId",
      "gender",
      "age",
      "about",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not Allowed");
    }

    if (data?.skills.length > 10) {
      throw new Error("Skills cannot  be more than 10");
    }

    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("User Updated Successfully");
  } catch (error) {
    res.status(400).send("Update Failed:" + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database is connected Successfully");
    app.listen(3000, () => {
      console.log("Running PORT in 3000");
    });
  })
  .catch((error) => {
    console.log("Database is not connected", error);
  });
