import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refreshSidebar, setRefreshSidebar] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleMessageSent = (userId) => {
    setRefreshSidebar({ userId }); 
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar
        onSelectUser={handleSelectUser}
        refreshSidebar={refreshSidebar} 
      />
      <ChatWindow
        selectedUser={selectedUser}
        onMessageSent={handleMessageSent} 
      />
    </div>
  );
};

export default ChatPage;
