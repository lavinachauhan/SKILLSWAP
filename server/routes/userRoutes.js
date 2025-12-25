const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const secretKey = process.env.secretKey;
const Activity = require("../models/Activity");


//  REGISTER
router.post("/SignUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ status: false, message: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ status: false, message: "Email already registered" });

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    res.status(201).json({ status: true, message: "User registered successfully", user: newUser });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
});

//  LOGIN
router.post("/SignIn", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ status: false, message: "All fields are required" });

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ status: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, secretKey, { expiresIn: "1h" });
    res.status(201).json({ status: true, message: "Login successful", token });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
});

//  DASHBOARD (Protected)
router.post("/Dashboard", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user)
      return res.status(404).json({ status: false, message: "User not found" });

    const userData = {
      id: user._id,
      name: user?.name,
      email: user?.email,
    };

    res.status(200).json({ status: true, message: "Profile Data", data: userData });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
});

//  GET PROFILE (Protected)
router.get("/profile/:id", auth, async (req, res) => {
  try {
      const user = await User.findById(req.params.id)
      .select("-password")
      .populate("followers", "name email")
      .populate("following", "name email");
    if (!user)
      return res.status(404).json({ status: false, message: "User not found" });

    const data = {
      id: user._id,
      name: user.name,
      email: user.email,
      teachSkills: user.teachSkills || [],
      learnSkills: user.learnSkills || [],
      about: user.about || "",
      followersCount: user.followers?.length || 0,
      followingCount: user.following?.length || 0,
    };

    res.status(200).json({ status: true, message: "Profile Data fetched successfully", data });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
});

//  UPDATE PROFILE (Protected)
router.put("/profileupdate", auth, async (req, res) => {
  try {
    const { teachSkills, learnSkills, about } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { teachSkills, learnSkills, about },
      { new: true }
    );

    res.status(200).json({
      status: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

//  GET ALL SKILLS (Protected)
router.get("/skills", auth, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.userId } }).select(
      "name teachSkills learnSkills about followers following"
    );

    res.status(200).json({ status: true, users });
  } catch (error) {
    return res.status(500).json({ status: false, message: "Server Error", error: error.message });
  }
});


router.post("/send-request/:receiverId", auth, async (req, res) => {
  try {
    const senderId = req.userId;
    const { receiverId } = req.params;

    if (senderId === receiverId)
      return res.status(400).json({ message: "You cannot send request to yourself" });

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!receiver) return res.status(404).json({ message: "User not found" });

    // Prevent duplicate requests or existing connection
    if (
        sender.requestsSent.includes(receiverId) ||
        receiver.requestsReceived.includes(senderId)
      ) {
        return res.status(400).json({ message: "Request already sent" });
      }

      if (
        sender.following.includes(receiverId) ||
        receiver.followers.includes(senderId)
      ) {
        return res.status(400).json({ message: "Already connected" });
      }
    sender.requestsSent.push(receiverId);
    receiver.requestsReceived.push(senderId);

    await sender.save();
    await receiver.save();

    await Activity.create({
      user: receiver._id,
      type: "request_received",
      message: `${sender.name} sent you a connection request`,
      from: sender._id
    });

    await Activity.create({
      user: sender._id,
      type: "request_sent",
      message: `You sent a connection request to ${receiver.name}`,
      from: receiver._id
  });
    res.status(200).json({ message: "Friend request sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending request", error: error.message });
  }
});

router.post("/accept-request/:senderId", auth, async (req, res) => {
  try {
    const receiverId = req.userId;
    const { senderId } = req.params;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver)
      return res.status(404).json({ message: "User not found" });

    receiver.requestsReceived = receiver.requestsReceived.filter(
      (id) => id.toString() !== senderId
    );
    sender.requestsSent = sender.requestsSent.filter(
      (id) => id.toString() !== receiverId
    );

    if (!sender.following.includes(receiverId)) sender.following.push(receiverId);
    if (!receiver.followers.includes(senderId)) receiver.followers.push(senderId);

    await sender.save();
    await receiver.save();

    await Activity.create({
      user: sender._id,
      type: "request_accepted",
      message: `${receiver.name} accepted your connection request`,
      from: receiver._id
    });

    await Activity.create({
      user: receiver._id,
      type: "request_accepted",
      message: `You accepted ${sender.name}'s connection request`,
      from: sender._id
    });

    const updatedReceiver = await User.findById(receiverId)
      .select("-password")
      .populate("followers", "name email")
      .populate("following", "name email");

    res.status(200).json({
      status: true,
      message: "Friend request accepted successfully",
      data: updatedReceiver
    });

  } catch (error) {
    console.error("Accept request error:", error);
    res.status(500).json({ message: "Error accepting request", error: error.message });
  }
});



router.get("/requests", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("requestsReceived", "name email");

    res.status(200).json({
      received: user.requestsReceived,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching requests", error: error.message });
  }
});

router.get("/friends", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate("followers", "name email");

    res.status(200).json({
      friends: user.followers,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching friends", error: error.message });
  }
});

router.get("/activities", auth, async (req, res) => {
  try {
    const activities = await Activity.find({ user: req.userId })
      .populate("from", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ status: true, activities });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error fetching activities", error: error.message });
  }
});


module.exports = router;
