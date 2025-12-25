// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ChatSidebar = ({ onSelectUser, refreshSidebar }) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = JSON.parse(localStorage.getItem("token"));

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("http://localhost:8080/message/users", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (Array.isArray(res.data)) {
//           setUsers(res.data);
//         } else if (Array.isArray(res.data.users)) {
//           setUsers(res.data.users);
//         } else {
//           setUsers([]);
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, [token]);

//   useEffect(() => {
//     if (refreshSidebar?.userId) {
//       setUsers((prevUsers) => {
//         const idx = prevUsers.findIndex((u) => u._id === refreshSidebar.userId);
//         if (idx === -1) return prevUsers;
//         const updated = [...prevUsers];
//         const [moved] = updated.splice(idx, 1);
//         updated.unshift(moved);
//         return updated;
//       });
//     }
//   }, [refreshSidebar]);

//   if (loading) {
//     return <div className="p-4">Loading chats...</div>;
//   }

//   return (
//     <div className="w-1/4 bg-white border-r overflow-y-auto">
//       <h2 className="p-4 text-lg font-semibold border-b">Chats</h2>

//       {users.length > 0 ? (
//         users.map((user) => (
//           <div
//             key={user._id}
//             className="p-4 hover:bg-gray-100 cursor-pointer border-b"
//             onClick={() => onSelectUser(user)}
//           >
//             <p className="font-medium">{user.name}</p>
//             <p className="text-sm text-gray-500">{user.email}</p>
//           </div>
//         ))
//       ) : (
//         <p className="p-4 text-gray-500">No users found</p>
//       )}
//     </div>
//   );
// };

// export default ChatSidebar;

import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatSidebar = ({ onSelectUser, refreshSidebar }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/message/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(res.data)) {
          setUsers(res.data);
        } else if (Array.isArray(res.data.users)) {
          setUsers(res.data.users);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  // Move the recently interacted user to top
  useEffect(() => {
    if (refreshSidebar?.userId) {
      setUsers((prevUsers) => {
        const idx = prevUsers.findIndex((u) => u._id === refreshSidebar.userId);
        if (idx === -1) return prevUsers;
        const updated = [...prevUsers];
        const [moved] = updated.splice(idx, 1);
        updated.unshift(moved);
        return updated;
      });
    }
  }, [refreshSidebar]);

  if (loading) {
    return (
      <div className="p-4 text-gray-400">Loading chats...</div>
    );
  }

  return (
    <div className="w-full md:w-1/4 bg-gray-900 text-white border-r border-gray-700 overflow-y-auto h-screen">
      <h2 className="p-4 text-lg font-semibold border-b border-gray-700">Chats</h2>

      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col p-4 hover:bg-gray-800 cursor-pointer transition rounded-lg m-2"
            onClick={() => onSelectUser(user)}
          >
            <p className="font-medium text-white">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        ))
      ) : (
        <p className="p-4 text-gray-400">No users found</p>
      )}
    </div>
  );
};

export default ChatSidebar;
