// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import NavBar from "../components/NavBar";
// import { useNavigate } from "react-router-dom";

// const BrowseSkills = () => {
//   const links = [
//     { path: "/Dashboard", label: "Home" },
//     { path: "/skills", label: "Browse Skills" },
//     { path: "/Message", label: "Messages" },
//     { path: "/profile", label: "Profile" },
//     {
//       label: "Logout",
//       onClick: () => {
//         localStorage.removeItem("token");
//         window.location.href = "/";
//       },
//     },
//   ];

//   const [users, setUsers] = useState([]);
//   const [sendingRequestTo, setSendingRequestTo] = useState(null);
//   const [sentRequestsSet, setSentRequestsSet] = useState(new Set()); // local set of sent requests

//   const token = JSON.parse(localStorage.getItem("token"));

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const header = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const res = await axios.get("http://localhost:8080/user/skills", header);
//         // add a local flag if needed
//         setUsers(res.data.users || []);
//       } catch (err) {
//         console.log("Error fetching users:", err);
//       }
//     };

//     if (token) fetchSkills();
//     else console.log("No token found in localStorage");
//   }, [token]);

//   const handleSendRequest = async (receiverId) => {
//     setSendingRequestTo(receiverId);
//     try {
//       const headers = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const res = await axios.post(
//         `http://localhost:8080/user/send-request/${receiverId}`,
//         {},
//         headers
//       );
//       alert(res.data.message || "Request sent successfully!");
//       // mark locally so UI updates
//       setSentRequestsSet((prev) => new Set(prev).add(receiverId));
//     } catch (error) {
//       console.log("Error sending request:", error);
//       alert(error.response?.data?.message || "Error sending request");
//     } finally {
//       setSendingRequestTo(null);
//     }
//   };

// // inside BrowseSkills component (replace handleMessage)
// const navigate = useNavigate();

// const handleMessage = async (otherUserId) => {
//   try {
//     const headers = { headers: { Authorization: `Bearer ${token}` } };
//     // call get-or-create
//     const res = await axios.post("http://localhost:8080/user/conversations/get-or-create", { userId: otherUserId }, headers);
//     if (res.data && res.data.conversation) {
//       const conv = res.data.conversation;
//       // navigate to chat page
//       navigate(`/chat/${conv._id}`, { state: { conversation: conv } });
//     } else {
//       alert(res.data.message || "Unable to open chat");
//     }
//   } catch (err) {
//     console.error("open chat err", err);
//     alert(err.response?.data?.message || "Error opening chat");
//   }
// };


//   return (
//     <>
//       <NavBar links={links} />
//       <div className="min-h-screen bg-gray-900 text-white p-10">
//         <h1 className="text-4xl font-bold mb-6 text-center">Browse Skills</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {!users || users.length === 0 ? (
//             <p className="text-center col-span-3">No users found</p>
//           ) : (
//             users.map((user) => {
//               const alreadySent = sentRequestsSet.has(user._id) || user.requestedByCurrentUser === true;
//               return (
//                 <div
//                   key={user._id}
//                   className="p-6 border rounded-2xl bg-gray-800 shadow-md"
//                 >
//                   <h2 className="text-2xl font-semibold mb-2">{user?.name}</h2>
//                   <p className="text-gray-400 mb-4">{user?.about}</p>

//                   <h3 className="font-semibold">Teaches:</h3>
//                   <ul className="list-disc list-inside mb-4">
//                     {user?.teachSkills?.length
//                       ? user.teachSkills.map((skill, i) => <li key={i}>{skill}</li>)
//                       : <li>None listed</li>}
//                   </ul>

//                   <h3 className="font-semibold">Wants to Learn:</h3>
//                   <ul className="list-disc list-inside mb-4">
//                     {user?.learnSkills?.length
//                       ? user.learnSkills.map((skill, i) => <li key={i}>{skill}</li>)
//                       : <li>None listed</li>}
//                   </ul>

//                   <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
//                     <p>Followers: {user.followers?.length || 0}</p>
//                     <p>Following: {user.following?.length || 0}</p>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() => handleSendRequest(user._id)}
//                       disabled={sendingRequestTo === user._id || alreadySent}
//                       className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
//                         alreadySent ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
//                       }`}
//                     >
//                       {sendingRequestTo === user._id ? "Sending..." : (alreadySent ? "Request Sent" : "Send Request")}
//                     </button>

//                     <button
//                       onClick={() => handleMessage(user._id)}
//                       className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold transition"
//                     >
//                       Message
//                     </button>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BrowseSkills;


import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const BrowseSkills = () => {
  const navigate = useNavigate();

  const links = [
    { path: "/Dashboard", label: "Home" },
    { path: "/skills", label: "Browse Skills" },
    { path: "/Message", label: "Messages" },
    { path: "/profile", label: "Profile" },
    {
      label: "Logout",
      onClick: () => {
        localStorage.removeItem("token");
        window.location.href = "/";
      },
    },
  ];

  const [users, setUsers] = useState([]);
  const [sendingRequestTo, setSendingRequestTo] = useState(null);
  const [sentRequestsSet, setSentRequestsSet] = useState(new Set());

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const header = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get("http://localhost:8080/user/skills", header);
        setUsers(res.data.users || []);
      } catch (err) {
        console.log("Error fetching users:", err);
      }
    };

    if (token) fetchSkills();
  }, [token]);

  const handleSendRequest = async (receiverId) => {
    setSendingRequestTo(receiverId);
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(
        `http://localhost:8080/user/send-request/${receiverId}`,
        {},
        headers
      );
      alert(res.data.message || "Request sent successfully!");
      setSentRequestsSet((prev) => new Set(prev).add(receiverId));
    } catch (error) {
      console.log("Error sending request:", error);
      alert(error.response?.data?.message || "Error sending request");
    } finally {
      setSendingRequestTo(null);
    }
  };

  const handleMessage = async (otherUserId) => {
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(
        "http://localhost:8080/user/conversations/get-or-create",
        { userId: otherUserId },
        headers
      );

      if (res.data && res.data.conversation) {
        const conv = res.data.conversation;
        navigate(`/chat/${conv._id}`, { state: { conversation: conv } });
      } else {
        alert(res.data.message || "Unable to open chat");
      }
    } catch (err) {
      console.error("Error opening chat:", err);
      alert(err.response?.data?.message || "Error opening chat");
    }
  };

  return (
    <>
      <NavBar links={links} />

      <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10 quicksand mt-20"   
      style={{
        backgroundImage: 'url("/bg-blue.jpg")', // path to your image in public folder
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Browse Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {!users || users.length === 0 ? (
            <p className="text-center col-span-full">No users found</p>
          ) : (
            users.map((user) => {
              const alreadySent =
                sentRequestsSet.has(user._id) || user.requestedByCurrentUser === true;

              return (
                <div
                  key={user._id}
                  className="flex flex-col justify-between p-6 bg-gray-800/80 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* User Info */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{user?.name}</h2>
                    <p className="text-gray-400 mb-4">{user?.about || "No description"}</p>

                    <h3 className="font-semibold mb-1">Teaches:</h3>
                    <ul className="list-disc list-inside mb-3">
                      {user?.teachSkills?.length
                        ? user.teachSkills.map((skill, i) => <li key={i}>{skill}</li>)
                        : <li>None listed</li>}
                    </ul>

                    <h3 className="font-semibold mb-1">Wants to Learn:</h3>
                    <ul className="list-disc list-inside mb-4">
                      {user?.learnSkills?.length
                        ? user.learnSkills.map((skill, i) => <li key={i}>{skill}</li>)
                        : <li>None listed</li>}
                    </ul>

                    <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                      <p>Followers: {user.followers?.length || 0}</p>
                      <p>Following: {user.following?.length || 0}</p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSendRequest(user._id)}
                      disabled={sendingRequestTo === user._id || alreadySent}
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold text-white transition ${
                        alreadySent
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      {sendingRequestTo === user._id
                        ? "Sending..."
                        : alreadySent
                        ? "Request Sent"
                        : "Send Request"}
                    </button>

                    <button
                      onClick={() => handleMessage(user._id)}
                      className="flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold text-white transition"
                    >
                      Message
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BrowseSkills;
