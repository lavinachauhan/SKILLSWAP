// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavBar from "../components/NavBar";

// const Profile = () => {
//   const [userData, setUserData] = useState({});
//   const [pendingRequests, setPendingRequests] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [showFollowers, setShowFollowers] = useState(false);
//   const [showFollowing, setShowFollowing] = useState(false);
//   const [actionLoadingFor, setActionLoadingFor] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     teachSkills: "",
//     learnSkills: "",
//     about: "",
//   });

//   const token = JSON.parse(localStorage.getItem("token"));
//   const userId = localStorage.getItem("userId");

//   const links = [
//     { path: "/Dashboard", label: "Home" },
//     { path: "/skills", label: "Browse Skills" },
//     { path: "/Message", label: "Messages" },
//     { path: "/profile", label: "Profile" },
//     {
//       label: "Logout",
//       onClick: () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("userId");
//         window.location.href = "/";
//       },
//     },
//   ];

//   useEffect(() => {
//     const header = { headers: { Authorization: `Bearer ${token}` } };

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8080/user/profile/${userId}`, header);
//         if (res.data.status) {
//           setUserData(res.data.data);
//           setFormData({
//             name: res.data.data.name || "",
//             email: res.data.data.email || "",
//             teachSkills: Array.isArray(res.data.data.teachSkills) ? res.data.data.teachSkills.join(", ") : res.data.data.teachSkills || "",
//             learnSkills: Array.isArray(res.data.data.learnSkills) ? res.data.data.learnSkills.join(", ") : res.data.data.learnSkills || "",
//             about: res.data.data.about || "",
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       }
//     };

//     const fetchPending = async () => {
//       try {
//         const r = await axios.get("http://localhost:8080/user/requests", header);
//         // backend returns { received: [...] }
//         setPendingRequests(r.data.received || []);
//       } catch (err) {
//         console.error("Error fetching pending requests:", err);
//       }
//     };

//     if (token && userId) {
//       Promise.all([fetchProfile(), fetchPending()]).finally(() => setLoading(false));
//     } else {
//       setLoading(false);
//       console.log("No token or userId found");
//     }
//   }, [token, userId]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.put("http://localhost:8080/user/profileupdate", formData, { headers: { Authorization: `Bearer ${token}` } });
//       if (res.data.status) {
//         alert("Profile updated successfully!");
//         setUserData(res.data.data);
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       alert("Error updating profile");
//     }
//   };

//   // Accept request (calls your existing route)
//   const handleAccept = async (senderId) => {
//     try {
//       setActionLoadingFor(senderId);
//       await axios.post(`http://localhost:8080/user/accept-request/${senderId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
//       // refresh pending + profile
//       const header = { headers: { Authorization: `Bearer ${token}` } };
//       const [profileRes, pendingRes] = await Promise.all([
//         axios.get(`http://localhost:8080/user/profile/${userId}`, header),
//         axios.get("http://localhost:8080/user/requests", header),
//       ]);
//       if (profileRes.data.status) setUserData(profileRes.data.data);
//       setPendingRequests(pendingRes.data.received || []);
//     } catch (err) {
//       console.error("Error accepting request:", err);
//       alert(err.response?.data?.message || "Error accepting request");
//     } finally {
//       setActionLoadingFor(null);
//     }
//   };

//   // Reject request (backend route not present in your file; see note below)
//   const handleReject = async (senderId) => {
//     try {
//       setActionLoadingFor(senderId);
//       // If backend does not implement /reject-request, this will 404.
//       await axios.post(`http://localhost:8080/user/reject-request/${senderId}`, {}, { headers: { Authorization: `Bearer ${token}` } });
//       // refresh pending list
//       const pendingRes = await axios.get("http://localhost:8080/user/requests", { headers: { Authorization: `Bearer ${token}` } });
//       setPendingRequests(pendingRes.data.received || []);
//     } catch (err) {
//       console.error("Error rejecting request:", err);
//       alert(err.response?.data?.message || "Reject endpoint not implemented on backend");
//     } finally {
//       setActionLoadingFor(null);
//     }
//   };

//   if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;

//   return (
//     <>
//       <NavBar links={links} />
//       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
//         <div className="bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-gray-700">
//           {!editMode ? (
//             <>
//               <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>

//               {/* Pending Requests */}
//               {pendingRequests.length > 0 && (
//                 <div className="mb-6 bg-gray-700 p-4 rounded-lg">
//                   <h3 className="font-semibold mb-2">Pending Requests</h3>
//                   <div className="space-y-3">
//                     {pendingRequests.map((req) => (
//                       <div key={req._id} className="flex justify-between items-center border-b pb-2">
//                         <div>
//                           <p className="font-semibold">{req.name}</p>
//                           <p className="text-sm text-gray-300">{req.email}</p>
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleAccept(req._id || req._id === undefined ? req._id : req)} // some responses give object id or full user object
//                             disabled={actionLoadingFor === req._id}
//                             className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg"
//                           >
//                             {actionLoadingFor === req._id ? "Accepting..." : "Accept"}
//                           </button>
//                           <button
//                             onClick={() => handleReject(req._id)}
//                             disabled={actionLoadingFor === req._id}
//                             className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
//                           >
//                             {actionLoadingFor === req._id ? "Processing..." : "Reject"}
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-2xl font-semibold">{userData.name}</h2>
//                   <p className="text-gray-300">{userData.email}</p>
//                 </div>
//                 <div className="flex gap-8 text-center mt-4 md:mt-0">
//                   <div>
//                     <p className="text-2xl font-bold text-blue-400">{userData.followersCount || 0}</p>
//                     <p className="text-gray-400">Followers</p>
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-green-400">{userData.followingCount || 0}</p>
//                     <p className="text-gray-400">Following</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="border-t border-gray-700 my-4"></div>

//               <div className="space-y-4 text-lg">
//                 <div>
//                   <h3 className="font-semibold text-blue-400 mb-1">About Me:</h3>
//                   <p className="text-gray-300">{userData.about || "No information provided"}</p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-green-400 mb-1">Teach Skills:</h3>
//                   {userData.teachSkills?.length > 0 ? (
//                     <ul className="list-disc list-inside text-gray-300">
//                       {userData.teachSkills.map((skill, i) => <li key={i}>{skill}</li>)}
//                     </ul>
//                   ) : <p className="text-gray-400">No skills added yet</p>}
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-yellow-400 mb-1">Learn Skills:</h3>
//                   {userData.learnSkills?.length > 0 ? (
//                     <ul className="list-disc list-inside text-gray-300">
//                       {userData.learnSkills.map((skill, i) => <li key={i}>{skill}</li>)}
//                     </ul>
//                   ) : <p className="text-gray-400">No skills added yet</p>}
//                 </div>
//               </div>

//               <button onClick={() => setEditMode(true)} className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition">Edit Profile</button>
//             </>
//           ) : (
//             <>
//               <h2 className="text-3xl font-bold text-center mb-6">Edit Profile</h2>
//               <form onSubmit={handleUpdate} className="space-y-4">
//                 <div>
//                   <label className="block font-semibold mb-1 text-gray-300">Teach Skills</label>
//                   <input type="text" name="teachSkills" value={formData.teachSkills} onChange={handleChange} placeholder="e.g. JavaScript, React" className="w-full border p-2 rounded-lg text-black" />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-1 text-gray-300">Learn Skills</label>
//                   <input type="text" name="learnSkills" value={formData.learnSkills} onChange={handleChange} placeholder="e.g. Node.js, MongoDB" className="w-full border p-2 rounded-lg text-black" />
//                 </div>

//                 <div>
//                   <label className="block font-semibold mb-1 text-gray-300">About</label>
//                   <textarea name="about" rows="3" value={formData.about} onChange={handleChange} placeholder="Write something about yourself..." className="w-full border p-2 rounded-lg text-black" />
//                 </div>

//                 <div className="flex justify-between gap-4 mt-4">
//                   <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg font-semibold transition">Save Changes</button>
//                   <button type="button" onClick={() => setEditMode(false)} className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-lg font-semibold transition">Cancel</button>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>

//         {/* Followers Modal */}
//         {showFollowers && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//             <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-center">Followers</h2>
//               {userData.followers?.length > 0 ? (
//                 <ul className="space-y-2">
//                   {userData.followers.map((follower, idx) => (
//                     <li key={idx} className="border-b pb-2">
//                       <p className="font-semibold">{follower.name}</p>
//                       <p className="text-sm text-gray-600">{follower.email}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : <p className="text-gray-500 text-center">No followers yet</p>}
//               <button onClick={() => setShowFollowers(false)} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition">Close</button>
//             </div>
//           </div>
//         )}

//         {/* Following Modal */}
//         {showFollowing && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//             <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4 text-center">Following</h2>
//               {userData.following?.length > 0 ? (
//                 <ul className="space-y-2">
//                   {userData.following.map((follow, idx) => (
//                     <li key={idx} className="border-b pb-2">
//                       <p className="font-semibold">{follow.name}</p>
//                       <p className="text-sm text-gray-600">{follow.email}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : <p className="text-gray-500 text-center">Not following anyone</p>}
//               <button onClick={() => setShowFollowing(false)} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition">Close</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [pendingRequests, setPendingRequests] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [actionLoadingFor, setActionLoadingFor] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teachSkills: "",
    learnSkills: "",
    about: "",
  });

  const token = JSON.parse(localStorage.getItem("token"));
  const userId = localStorage.getItem("userId");

  const links = [
    { path: "/Dashboard", label: "Home" },
    { path: "/skills", label: "Browse Skills" },
    { path: "/Message", label: "Messages" },
    { path: "/profile", label: "Profile" },
    {
      label: "Logout",
      onClick: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "/";
      },
    },
  ];

  useEffect(() => {
    const header = { headers: { Authorization: `Bearer ${token}` } };

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/user/profile/${userId}`, header);
        if (res.data.status) {
          setUserData(res.data.data);
          setFormData({
            name: res.data.data.name || "",
            email: res.data.data.email || "",
            teachSkills: Array.isArray(res.data.data.teachSkills) ? res.data.data.teachSkills.join(", ") : res.data.data.teachSkills || "",
            learnSkills: Array.isArray(res.data.data.learnSkills) ? res.data.data.learnSkills.join(", ") : res.data.data.learnSkills || "",
            about: res.data.data.about || "",
          });
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    const fetchPending = async () => {
      try {
        const r = await axios.get("http://localhost:8080/user/requests", header);
        setPendingRequests(r.data.received || []);
      } catch (err) {
        console.error("Error fetching pending requests:", err);
      }
    };

    if (token && userId) {
      Promise.all([fetchProfile(), fetchPending()]).finally(() => setLoading(false));
    } else {
      setLoading(false);
      console.log("No token or userId found");
    }
  }, [token, userId]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:8080/user/profileupdate",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.status) {
        alert("Profile updated successfully!");
        setUserData(res.data.data);
        setEditMode(false);
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Error updating profile");
    }
  };

  const handleAccept = async (senderId) => {
    try {
      setActionLoadingFor(senderId);
      await axios.post(
        `http://localhost:8080/user/accept-request/${senderId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const header = { headers: { Authorization: `Bearer ${token}` } };
      const [profileRes, pendingRes] = await Promise.all([
        axios.get(`http://localhost:8080/user/profile/${userId}`, header),
        axios.get("http://localhost:8080/user/requests", header),
      ]);
      if (profileRes.data.status) setUserData(profileRes.data.data);
      setPendingRequests(pendingRes.data.received || []);
    } catch (err) {
      console.error("Error accepting request:", err);
      alert(err.response?.data?.message || "Error accepting request");
    } finally {
      setActionLoadingFor(null);
    }
  };

  const handleReject = async (senderId) => {
    try {
      setActionLoadingFor(senderId);
      await axios.post(
        `http://localhost:8080/user/reject-request/${senderId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const pendingRes = await axios.get("http://localhost:8080/user/requests", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingRequests(pendingRes.data.received || []);
    } catch (err) {
      console.error("Error rejecting request:", err);
      alert(err.response?.data?.message || "Reject endpoint not implemented on backend");
    } finally {
      setActionLoadingFor(null);
    }
  };

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;

  return (
    <>
      <NavBar links={links} />
      <div
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-10 mt-20" // <-- pt-24 add kiya
      style={{
        backgroundImage: 'url("/bg-blue.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
>

        <div className="bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-3xl border border-gray-700">

          {!editMode ? (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">My Profile</h1>

              {pendingRequests.length > 0 && (
                <div className="mb-4 sm:mb-6 bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Pending Requests</h3>
                  <div className="space-y-3">
                    {pendingRequests.map((req) => (
                      <div key={req._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2">
                        <div className="mb-2 sm:mb-0">
                          <p className="font-semibold">{req.name}</p>
                          <p className="text-sm text-gray-300">{req.email}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAccept(req._id)}
                            disabled={actionLoadingFor === req._id}
                            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg text-sm sm:text-base"
                          >
                            {actionLoadingFor === req._id ? "Accepting..." : "Accept"}
                          </button>
                          <button
                            onClick={() => handleReject(req._id)}
                            disabled={actionLoadingFor === req._id}
                            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm sm:text-base"
                          >
                            {actionLoadingFor === req._id ? "Processing..." : "Reject"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 md:gap-0">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{userData.name}</h2>
                  <p className="text-gray-300">{userData.email}</p>
                </div>
                <div className="flex gap-4 text-center mt-4 md:mt-0">
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">{userData.followersCount || 0}</p>
                    <p className="text-gray-400 text-sm sm:text-base">Followers</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">{userData.followingCount || 0}</p>
                    <p className="text-gray-400 text-sm sm:text-base">Following</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 my-4"></div>

              <div className="space-y-4 text-sm sm:text-base md:text-lg">
                <div>
                  <h3 className="font-semibold text-blue-400 mb-1">About Me:</h3>
                  <p className="text-gray-300">{userData.about || "No information provided"}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-400 mb-1">Teach Skills:</h3>
                  {userData.teachSkills?.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-300">
                      {userData.teachSkills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                  ) : <p className="text-gray-400">No skills added yet</p>}
                </div>

                <div>
                  <h3 className="font-semibold text-yellow-400 mb-1">Learn Skills:</h3>
                  {userData.learnSkills?.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-300">
                      {userData.learnSkills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                  ) : <p className="text-gray-400">No skills added yet</p>}
                </div>
              </div>

              <button
                onClick={() => setEditMode(true)}
                className="mt-6 sm:mt-8 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition"
              >
                Edit Profile
              </button>

            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">Edit Profile</h2>
              <form onSubmit={handleUpdate} className="space-y-4 quicksand">
                <div>
                  <label className="block font-semibold mb-1 text-gray-300">Teach Skills</label>
                  <input type="text" name="teachSkills" value={formData.teachSkills} onChange={handleChange} placeholder="e.g. JavaScript, React" className="w-full border p-2 rounded-lg text-grey" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-300">Learn Skills</label>
                  <input type="text" name="learnSkills" value={formData.learnSkills} onChange={handleChange} placeholder="e.g. Node.js, MongoDB" className="w-full border p-2 rounded-lgt text-grey" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-300">About</label>
                  <textarea name="about" rows="3" value={formData.about} onChange={handleChange} placeholder="Write something about yourself..." className="w-full border p-2 rounded-lg text-grey" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-4">
                  <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-base sm:text-lg font-semibold transition">Save Changes</button>
                  <button type="button" onClick={() => setEditMode(false)} className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-base sm:text-lg font-semibold transition">Cancel</button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Followers & Following modals are already centered; add responsive widths */}
        {showFollowers && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm sm:max-w-md shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Followers</h2>
              {userData.followers?.length > 0 ? (
                <ul className="space-y-2">
                  {userData.followers.map((follower, idx) => (
                    <li key={idx} className="border-b pb-2">
                      <p className="font-semibold">{follower.name}</p>
                      <p className="text-sm text-gray-600">{follower.email}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-gray-500 text-center">No followers yet</p>}
              <button onClick={() => setShowFollowers(false)} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition">Close</button>
            </div>
          </div>
        )}

        {showFollowing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm sm:max-w-md shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Following</h2>
              {userData.following?.length > 0 ? (
                <ul className="space-y-2">
                  {userData.following.map((follow, idx) => (
                    <li key={idx} className="border-b pb-2">
                      <p className="font-semibold">{follow.name}</p>
                      <p className="text-sm text-gray-600">{follow.email}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-gray-500 text-center">Not following anyone</p>}
              <button onClick={() => setShowFollowing(false)} className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition">Close</button>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Profile;
