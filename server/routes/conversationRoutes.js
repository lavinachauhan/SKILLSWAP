// routes/conversationRoutes.js
const express = require("express");
const router = express.Router();
const Conversation = require("../models/Conversation");
const FriendRequest = require("../models/FriendRequest"); // if you have this model; else adapt to your User fields
const auth = require("../middleware/auth");

// Get or create conversation between current user and other user
router.post("/get-or-create", auth, async (req, res) => {
  try {
    const { userId } = req.body; // other user's id
    if (!userId) return res.status(400).json({ status: false, message: "userId required" });

    // Ensure they are connected (accepted request) — you use followers/following in User model
    // We'll check if either user is following the other (you accept connection creates following/follower)
    const User = require("../models/User");
    const me = await User.findById(req.userId);
    const other = await User.findById(userId);
    if (!me || !other) return res.status(404).json({ status: false, message: "User not found" });

    const connected =
      me.following.includes(userId) || me.followers.includes(userId) ||
      other.following.includes(req.userId) || other.followers.includes(req.userId);

    if (!connected) return res.status(403).json({ status: false, message: "Not connected. Accept request first." });

    // find existing conversation
    let conv = await Conversation.findOne({ participants: { $all: [req.userId, userId] } });
    if (conv) return res.status(200).json({ status: true, conversation: conv });

    conv = new Conversation({ participants: [req.userId, userId] });
    await conv.save();
    return res.status(201).json({ status: true, conversation: conv });
  } catch (err) {
    console.error("get-or-create conv err", err);
    return res.status(500).json({ status: false, message: "Server error", error: err.message });
  }
});

// Get all conversations for logged-in user (with lastMessage & participant basic info)
router.get("/my", auth, async (req, res) => {
  try {
    const convs = await Conversation.find({ participants: req.userId })
      .populate("participants", "name email avatar")
      .populate({ path: "lastMessage", populate: { path: "sender", select: "name" } })
      .sort({ updatedAt: -1 });
    return res.status(200).json({ status: true, conversations: convs });
  } catch (err) {
    console.error("get my conv err", err);
    return res.status(500).json({ status: false, message: "Server error", error: err.message });
  }
});

module.exports = router;
