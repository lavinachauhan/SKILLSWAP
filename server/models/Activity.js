const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  type: {
    type: String,
    enum: ["request_sent", "request_received", "request_accepted", "profile_updated"],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Activity", activitySchema);
