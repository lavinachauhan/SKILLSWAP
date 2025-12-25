import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="p-3 bg-white border-t flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded-lg p-2 mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSendClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
