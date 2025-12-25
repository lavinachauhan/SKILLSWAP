import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import MessageInput from "./MessageInput";
import { io } from "socket.io-client";

const ChatWindow = ({ selectedUser, onMessageSent }) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/message/${selectedUser._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessages(res.data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();

    // Initialize socket
    socketRef.current = io("http://localhost:8080");
    const roomId = getRoomId(selectedUser._id);
    socketRef.current.emit("joinRoom", roomId);

    socketRef.current.on("receiveMessage", (message) => {
      setMessages((prev) => {
        const exists = prev.some((m) => m._id === message._id);
        return exists ? prev : [...prev, message];
      });

      const senderId =
        message.senderId === JSON.parse(localStorage.getItem("user"))?._id
          ? message.receiverId
          : message.senderId;
      onMessageSent(senderId);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [selectedUser, token]);

  const handleSend = async (text) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/message/send/${selectedUser._id}`,
        { text },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newMessage = res.data;

      socketRef.current.emit("sendMessage", {
        roomId: getRoomId(selectedUser._id),
        message: newMessage,
      });

      setMessages((prev) => [...prev, newMessage]);
      onMessageSent(selectedUser._id);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const getRoomId = (receiverId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?._id || !receiverId) return "";
    return [user._id, receiverId].sort().join("_");
  };

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a user to start chatting 💬
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900">
      {/* Header */}
      <div className="p-4 border-b bg-white shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">
          {selectedUser.name}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={msg._id || index}
            className={`max-w-[70%] px-3 py-2 rounded-lg break-words ${
              msg.senderId === selectedUser._id
                ? "bg-gray-300 self-start"
                : "bg-blue-600 text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
