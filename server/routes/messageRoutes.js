// routes/messageRoutes.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const User = require("../models/User");
const auth = require("../middleware/auth");

// GET messages for a conversation (pagination)
// router.get("/:conversationId", auth, async (req, res) => {
//   try {
//     const { conversationId } = req.params;
//     const conv = await Conversation.findById(conversationId);
//     if (!conv) return res.status(404).json({ status: false, message: "Conversation not found" });

//     // check participant
//     const isParticipant = conv.participants.map(p => p.toString()).includes(req.userId);
//     if (!isParticipant) return res.status(403).json({ status: false, message: "Not a participant" });

//     const page = parseInt(req.query.page || "1");
//     const limit = parseInt(req.query.limit || "50");
//     const skip = (page - 1) * limit;

//     const messages = await Message.find({ conversation: conversationId })
//       .sort({ createdAt: 1 })
//       .skip(skip)
//       .limit(limit)
//       .populate("sender", "name avatar");

//     return res.status(200).json({ status: true, messages });
//   } catch (err) {
//     console.error("fetch messages err", err);
//     return res.status(500).json({ status: false, message: "Server error", error: err.message });
//   }
// });

router.get("/users", auth, async (req, res) => {
  try{
    const loggedInUserId = req.userId;
    const filteredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");
    res.status(200).json(filteredUsers);
  }
  catch(err){
      console.log("Error in getUsersForSidebar: ", err.message);
      res.status(5).json({ error : "Internal server error"});
    
  }
}
)

router.get("/:id", auth, async (req, res) => {
    try{
        const {id : userToChatId}= req.params;
        const senderId = req.userId;
        const messages = await Message.find({
          $or: [
            {senderId : senderId, receiverId : userToChatId},
            {senderId : userToChatId, receiverId : senderId}
          ]
        })
        res.status(200).json(messages)
    }
    catch(err){
        console.log("Error in getUsersForSidebar: ", err.message);
        res.status(500).json({ error : "Internal server error"});
    }

})

router.post('/send/:id', auth, async (req, res) => {
    try{
        const {text, image} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.userId;

        let imageUrl;
        if(image){
          const uploadResponse = await cloudinary.uploader.upload(image);
          imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
          senderId,
          receiverId,
          text,
          image: imageUrl,
        });
        await newMessage.save();
        // todo: realtime functionality goes here => socket.io
        res.status(201).json(newMessage);
    }

    catch(err){
        console.log("Error in getUsersForSidebar: ", err.message);
        res.status(500).json({ error : "Internal server error"});
    }
}) 

module.exports = router;
