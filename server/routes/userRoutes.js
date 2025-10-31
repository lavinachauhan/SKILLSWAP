const express = require("express"); 
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secretKey = "lkadeuwf!@#$%6ioeyr12347865347858921e";

// Register
router.post("/Signup", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email ||!password) return res.status(400).json({status: false, message: "All files are require"})
    
        const existingUser = await User.findOne({email});
        if(existingUser){
           return res.status(400).json({status: false, message: "Email Already registered"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password : hashPassword});
        await newUser.save();
        res.status(201).json({ status: true, message: "User registered successfully", user: newUser });
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 

// Login
router.post("/SignIn", async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email ||!password) return res.status(400).json({status: false, message: "All files are require"})
            
        const user = await User.findOne({email})
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).json({status: true, message : "Invalid Credentials"})
        }
        
        const token = jwt.sign({id: user._id, email : user.email}, secretKey, {expiresIn: "1hr"})
        res.status(201).json({ status: true, message: "Login successfully", token : token});
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 

// dashboard
router.post("/Dashboard", async (req, res) => {
    try{
        const token = req.headers?.authorization?.split(' ')[1];
        if(!token) return res.status(400).json({ status: false, message: "Access Denied"});
        jwt.verify(token, secretKey, async (err, decode) => {
            const user = await User.findById(decode?.id);
            if(!user) return res.status(400).json({ status: false, message: "Invalid Token"});
            const userData = {
                id: user?.id,
                name: user?.name,
                email: user?.email
            }
            return res.status(201).json({ status: true, message: "Profile Data", data: userData});
        })
    }
    catch(error){
        return res.status(400).json({status: false, message: "Something went wrong", error: error.message})
    }
}) 

// Get Profile Details
router.get("/profile/:id", async (req, res) => {
  try {
    const token = req.headers?.authorization?.split(' ')[1];
    if (!token)
      return res.status(400).json({ status: false, message: "Access Denied" });

    jwt.verify(token, secretKey, async (err, decode) => {
      if (err)
        return res.status(400).json({ status: false, message: "Invalid Token" });

      // Use req.params.id instead of decode.id
      const userId = req.params.id || decode.id;

      const user = await User.findById(userId).select("-password");
      if (!user)
        return res.status(404).json({ status: false, message: "User not found" });

      res.status(200).json({
        status: true,
        message: "Profile Data fetched successfully",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          teachSkills: user.teachSkills || [],
          learnSkills: user.learnSkills || [],
          about: user.about || ""
        },
      });
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});


// Get Profile Details
// router.get("/profile/:id", async (req, res) => {
//   try {
//     const token = req.headers?.authorization?.split(' ')[1];
//     if (!token)
//       return res.status(400).json({ status: false, message: "Access Denied" });

//     jwt.verify(token, secretKey, async (err, decode) => {
//       if (err)
//         return res.status(400).json({ status: false, message: "Invalid Token" });

//       const user = await User.findById(decode.id).select("-password"); // exclude password
//       if (!user)
//         return res.status(404).json({ status: false, message: "User not found" });

//         const userData = {
//             id: user._id,
//             name: user.name,
//             email: user.email,
//             teachSkills: user.teachSkills || [],
//             learnSkills: user.learnSkills || [],
//             about: user.about || ""
//         };

//       res.status(200).json({ status: true, message: "Profile Data", data: userData });
//     });
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ status: false, message: "Something went wrong", error: error.message });
//   }
// });


// update profile route
router.put("/profileupdate", async(req, res) => {
    const {teachSkills, learnSkills, about} = req.body;
    try{
        const token = req.headers?.authorization?.split(" ")[1];
        if(!token) return res.status(400).json({status : false, message : "Access Denied"});

        jwt.verify(token, secretKey, async(err, decode) => {
            if(err) return res.status(400).json({ message: "Invalid Token" });

            const updatedUser = await User.findByIdAndUpdate(
                decode.id, 
                {teachSkills, learnSkills, about}, 
                {new : true});

                res.status(200).json({ status : true, 
                    message : "Profile updated successfully",
                    data : updatedUser});
        });
    }
    catch(error){
            return res.status(400).json({status : false,
                message : "Something went wrong", 
                error : error.message});
    }
});

router.get("/skills", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    jwt.verify(token, secretKey, async (err, decode) => {
      if (err) return res.status(400).json({ message: "Invalid Token" });

      const loggedInUserId = decode.userId;
      const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
        "name teachSkills learnSkills about"
      );

      res.json({ status: true, users });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;