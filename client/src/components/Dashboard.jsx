// // import React from "react";
// // import {Link, useNavigate} from 'react-router-dom';
// // import NavBar from "./NavBar";
// // import axios from "axios";
// // import {useEffect, useState} from 'react';

// // const Dashboard = () => {
// //     const navigate = useNavigate();
// //     const dashLinks = [
// //     {path : "/", label : "Home"},
// //     {path : "/skills", label : "Browse Skills"},
// //     {path : "/Message", label : "Messages"},
// //     {path : "/profile", label : "Profile"},
// //     {label : "Logout"}];

// //     const [loading, setLoading] = useState(false);
// //     const [data, setData] = useState('');

// //     const token = JSON.parse(localStorage.getItem('token'))

// //     useEffect(()=> {
// //     const fetchData = async () => {
// //         setLoading(true);
// //         const header = {
// //             headers: {
// //                 Authorization: `Bearer ${token}`
// //             }
// //         }
// //     axios.post('http://localhost:8080/user/Dashboard', {}, header)
// //     .then((res) => {
// //         setLoading(false)
// //         setData(res.data.data)
// //         console.log("User data fetched", res.data.data);
// //         localStorage.setItem("userId",res.data.data.id);
// //     })
// //     .catch((err) => {
// //         setLoading(false)
// //         console.log("Error while fetch data", err)
// //         setLoading(false);
// //     })

// //     const fetchActivities = async () => {
// //   try {
// //     const res = await axios.get("http://localhost:8080/user/activities", header);
// //     setData((prev) => ({ ...prev, activities: res.data.activities }));
// //   } catch (err) {
// //     console.log("Error fetching activities:", err);
// //   }
// // };
// // fetchActivities();

// // };

// //     if(token){
// //         fetchData();
// //     } else{
// //         console.log("No token found in localStorage");
// //     }
// // }, [token]);

// //   const handleLogout = () => {
// //     const confirmLogout = window.confirm("Are you sure you want to logout?");
// //     if (confirmLogout) {
// //       localStorage.removeItem("token");
// //       navigate("/"); // redirect to login
// //     }
// //   };

// //     return (
// // //         <div className='quicksand text-white'>

// // //             <NavBar
// // //                 links={dashLinks.map((link) =>
// // //                 link.label === "Logout"
// // //                 ? { ...link, onClick: handleLogout }
// // //                 : link
// // //             )}
// // //         />  


// // //             <div className="text-white flex flex-col items-center mt-18 mx-auto h-[10rem] w-fit  gap-10" style={{ "--charCount": data?.name?.length || 10 }}>
// // //                     {/* Welcome banner */}
// // //                     <h1 className="text-5xl font-extrabold text">Hi, {data?.name || "Username"}</h1>
// // //                     <p className="text-2xl font-medium">Welcome back to SkillSwap</p>
// // //             </div>

// // //              {/* Quick Links */}
// // //             <div className = 'grid grid-cols-2 grid-rows-4 gap-10 p-6 rounded-3xl h-[100rem] w-[1080px] mx-auto mt-[15rem] bg-gray-500/80'>
// // //                 {/* Profile */}
// // //                 <Link to="/profile">
// // //                     <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
// // //                         <img src="./profile.png" alt="" className = "h-28 w-28"/>
// // //                         <h3 className="font-bold text-4xl">Profile</h3>
// // //                         <p className = 'text-3xl text-center'>View and update your 
// // //                             personal details and skill preferences
// // //                         </p>
// // //                     </div>
// // //                 </Link>
                

// // //                <div>

// // //                 </div>

// // //                 {/* Add skill */}
// // //                 <div>

// // //                 </div>

// // //                 <a href="#">
// // //                     <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
// // //                         <img src="./add.png" alt="" className = "h-28 w-28"/>
// // //                         <h3 className="font-bold text-4xl">Add a Skill</h3>
// // //                         <p className = 'text-[32px] text-center'>Share a skill you can teach and help others learn</p>
// // //                     </div>
// // //                 </a>
// // //                 {/* Browse Skills */}
// // //                  <Link to="/skills">
// // //                     <div className = 'border-transparent  rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
// // //                         <img src="./search.png" alt="" className = "h-28 w-28"/>
// // //                         <h3 className="font-bold text-4xl">Browse Skills</h3>
// // //                         <p className = 'text-3xl text-center'>Explore what others are offering
// // //                             and find the skills you want to learn
// // //                         </p>
// // //                     </div>
// // //                 </Link>

// // //                  <div>

// // //                 </div>

// // //                 {/* Messages */}
// // //                 <div>

// // //                 </div>
// // //                 <a href="#">
// // //                     <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-5 quicklinks'>
// // //                         <img src="./message.png" alt="" className = "h-26 w-26"/>
// // //                         <h3 className="font-bold text-4xl">Messages</h3>
// // //                         <p className = 'text-3xl text-center'>Check your conversations and Connection with others learners and teachers</p>
// // //                     </div>
// // //                 </a>
            
// // //             </div>
            

// // // <div className="flex flex-col items-center gap-8 p-6 w-[90%] max-w-[1080px] mx-auto mt-[10rem] bg-gray-500/80 rounded-2xl text-white">
// // //   <h1 className="text-3xl font-bold mb-4">Recent Activity</h1>

// // //   {loading ? (
// // //     <p>Loading activities...</p>
// // //   ) : (
// // //     <div className="w-full space-y-4">
// // //       {Array.isArray(data.activities) && data.activities.length > 0 ? (
// // //         data.activities.map((activity, index) => (
// // //           <div
// // //             key={index}
// // //             className="flex items-center gap-4 bg-gray-700/60 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
// // //           >
// // //             <div className="text-3xl">
// // //               {activity.type === "request_sent" && "📤"}
// // //               {activity.type === "request_received" && "📥"}
// // //               {activity.type === "request_accepted" && "🤝"}
// // //               {activity.type === "profile_updated" && "📝"}
// // //               {!activity.type && "🗓️"}
// // //             </div>

// // //             <div className="flex flex-col flex-1">
// // //               <p className="text-lg font-medium">{activity.message}</p>
// // //               <span className="text-sm text-gray-300">
// // //                 {new Date(activity.createdAt).toLocaleString()}
// // //               </span>
// // //             </div>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p className="text-gray-300 text-center">No recent activities found</p>
// // //       )}
// // //     </div>
// // //   )}
// // // </div>
        
// // //         </div>
// // <div className='quicksand text-white'>

// //   <NavBar
// //       links={dashLinks.map((link) =>
// //       link.label === "Logout"
// //       ? { ...link, onClick: handleLogout }
// //       : link
// //   )}
// //   />  

// //   {/* Welcome banner */}
// //   <div className="text-white flex flex-col items-center mt-10 sm:mt-18 mx-auto h-[10rem] w-fit gap-6 sm:gap-10 px-4 sm:px-0" style={{ "--charCount": data?.name?.length || 10 }}>
// //       <h1 className="text-3xl sm:text-5xl font-extrabold text-center">Hi, {data?.name || "Username"}</h1>
// //       <p className="text-xl sm:text-2xl font-medium text-center">Welcome back to SkillSwap</p>
// //   </div>

// //   {/* Quick Links */}
// //   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-8 sm:grid-rows-4 gap-6 sm:gap-10 p-4 sm:p-6 rounded-3xl w-full max-w-[1080px] mx-auto mt-10 sm:mt-[15rem] bg-gray-500/80'>

// //       {/* Profile */}
// //       <Link to="/profile">
// //           <div className='border-transparent rounded-3xl h-[22rem] sm:h-[22rem] flex flex-col items-center justify-center gap-4 sm:gap-6 quicklinks'>
// //               <img src="./profile.png" alt="" className="h-20 sm:h-28 w-20 sm:w-28"/>
// //               <h3 className="font-bold text-2xl sm:text-4xl text-center">Profile</h3>
// //               <p className='text-base sm:text-3xl text-center px-2 sm:px-0'>View and update your personal details and skill preferences</p>
// //           </div>
// //       </Link>

// //       <div></div> {/* Keep empty div */}
// //       <div></div> {/* Keep empty div */}

// //       {/* Add Skill */}
// //       <a href="#">
// //           <div className='border-transparent rounded-3xl h-[22rem] sm:h-[22rem] flex flex-col items-center justify-center gap-4 sm:gap-6 quicklinks'>
// //               <img src="./add.png" alt="" className="h-20 sm:h-28 w-20 sm:w-28"/>
// //               <h3 className="font-bold text-2xl sm:text-4xl text-center">Add a Skill</h3>
// //               <p className='text-sm sm:text-[32px] text-center px-2 sm:px-0'>Share a skill you can teach and help others learn</p>
// //           </div>
// //       </a>

// //       {/* Browse Skills */}
// //       <Link to="/skills">
// //           <div className='border-transparent rounded-3xl h-[22rem] sm:h-[22rem] flex flex-col items-center justify-center gap-4 sm:gap-6 quicklinks'>
// //               <img src="./search.png" alt="" className="h-20 sm:h-28 w-20 sm:w-28"/>
// //               <h3 className="font-bold text-2xl sm:text-4xl text-center">Browse Skills</h3>
// //               <p className='text-base sm:text-3xl text-center px-2 sm:px-0'>Explore what others are offering and find the skills you want to learn</p>
// //           </div>
// //       </Link>

// //       <div></div> {/* Keep empty div */}
// //       <div></div> {/* Keep empty div */}

// //       {/* Messages */}
// //       <a href="#">
// //           <div className='border-transparent rounded-3xl h-[22rem] sm:h-[22rem] flex flex-col items-center justify-center gap-4 sm:gap-5 quicklinks'>
// //               <img src="./message.png" alt="" className="h-20 sm:h-26 w-20 sm:w-26"/>
// //               <h3 className="font-bold text-2xl sm:text-4xl text-center">Messages</h3>
// //               <p className='text-base sm:text-3xl text-center px-2 sm:px-0'>Check your conversations and connection with other learners and teachers</p>
// //           </div>
// //       </a>

// //   </div>

// //   {/* Recent Activity */}
// //   <div className="flex flex-col items-center gap-6 sm:gap-8 p-4 sm:p-6 w-[90%] max-w-[1080px] mx-auto mt-10 sm:mt-[10rem] bg-gray-500/80 rounded-2xl text-white">
// //     <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Recent Activity</h1>

// //     {loading ? (
// //       <p>Loading activities...</p>
// //     ) : (
// //       <div className="w-full space-y-4">
// //         {Array.isArray(data.activities) && data.activities.length > 0 ? (
// //           data.activities.map((activity, index) => (
// //             <div
// //               key={index}
// //               className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-700/60 p-4 rounded-xl shadow-md hover:bg-gray-700 transition"
// //             >
// //               <div className="text-2xl sm:text-3xl">
// //                 {activity.type === "request_sent" && "📤"}
// //                 {activity.type === "request_received" && "📥"}
// //                 {activity.type === "request_accepted" && "🤝"}
// //                 {activity.type === "profile_updated" && "📝"}
// //                 {!activity.type && "🗓️"}
// //               </div>

// //               <div className="flex flex-col flex-1">
// //                 <p className="text-sm sm:text-lg font-medium">{activity.message}</p>
// //                 <span className="text-xs sm:text-sm text-gray-300">
// //                   {new Date(activity.createdAt).toLocaleString()}
// //                 </span>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-gray-300 text-center">No recent activities found</p>
// //         )}
// //       </div>
// //     )}
// //   </div>
// // </div>

// //     )
// // }

// // export default Dashboard


// import React from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import NavBar from "./NavBar";
// import axios from "axios";
// import { useEffect, useState } from 'react';

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const dashLinks = [
//         { path: "/", label: "Home" },
//         { path: "/skills", label: "Browse Skills" },
//         { path: "/Message", label: "Messages" },
//         { path: "/profile", label: "Profile" },
//         { label: "Logout" }
//     ];

//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState('');

//     const token = JSON.parse(localStorage.getItem('token'))

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const header = {
//                 headers: { Authorization: `Bearer ${token}` }
//             }
//             try {
//                 const res = await axios.post('http://localhost:8080/user/Dashboard', {}, header);
//                 setData(res.data.data);
//                 localStorage.setItem("userId", res.data.data.id);
//             } catch (err) {
//                 console.log("Error while fetching data", err);
//             }
//             try {
//                 const resAct = await axios.get("http://localhost:8080/user/activities", header);
//                 setData((prev) => ({ ...prev, activities: resAct.data.activities }));
//             } catch (err) {
//                 console.log("Error fetching activities:", err);
//             }
//             setLoading(false);
//         };

//         if (token) fetchData();
//         else console.log("No token found in localStorage");
//     }, [token]);

//     const handleLogout = () => {
//         if (window.confirm("Are you sure you want to logout?")) {
//             localStorage.removeItem("token");
//             navigate("/");
//         }
//     };

//     return (
//         <div className='quicksand text-white min-h-screen bg-gray-900'>

//             <NavBar
//                 links={dashLinks.map(link =>
//                     link.label === "Logout" ? { ...link, onClick: handleLogout } : link
//                 )}
//             />

//             {/* Welcome Banner */}
//             <div className="flex flex-col items-center mt-10 gap-4 sm:gap-6 px-4 text-center">
//                 <h1 className="text-3xl sm:text-5xl font-extrabold">Hi, {data?.name || "Username"}</h1>
//                 <p className="text-lg sm:text-2xl font-medium">Welcome back to SkillSwap</p>
//             </div>

//             {/* Quick Links Grid */}
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6 mt-8 sm:mt-12 w-full max-w-[1080px] mx-auto'>

//                 {/* Profile */}
//                 <Link to="/profile">
//                     <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 bg-gray-700 rounded-2xl p-4 hover:bg-gray-600 transition'>
//                         <img src="./profile.png" alt="Profile" className="h-20 sm:h-28 w-20 sm:w-28"/>
//                         <h3 className="font-bold text-2xl sm:text-4xl text-center">Profile</h3>
//                         <p className='text-sm sm:text-base text-center'>View and update your personal details and skill preferences</p>
//                     </div>
//                 </Link>

//                 <div></div> {/* Empty div */}
//                 <div></div> {/* Empty div */}

//                 {/* Add Skill */}
//                 <a href="#">
//                     <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 bg-gray-700 rounded-2xl p-4 hover:bg-gray-600 transition'>
//                         <img src="./add.png" alt="Add Skill" className="h-20 sm:h-28 w-20 sm:w-28"/>
//                         <h3 className="font-bold text-2xl sm:text-4xl text-center">Add a Skill</h3>
//                         <p className='text-sm sm:text-base text-center'>Share a skill you can teach and help others learn</p>
//                     </div>
//                 </a>

//                 {/* Browse Skills */}
//                 <Link to="/skills">
//                     <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 bg-gray-700 rounded-2xl p-4 hover:bg-gray-600 transition'>
//                         <img src="./search.png" alt="Browse Skills" className="h-20 sm:h-28 w-20 sm:w-28"/>
//                         <h3 className="font-bold text-2xl sm:text-4xl text-center">Browse Skills</h3>
//                         <p className='text-sm sm:text-base text-center'>Explore what others are offering and find the skills you want to learn</p>
//                     </div>
//                 </Link>

//                 <div></div> {/* Empty div */}
//                 <div></div> {/* Empty div */}

//                 {/* Messages */}
//                 <a href="#">
//                     <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 bg-gray-700 rounded-2xl p-4 hover:bg-gray-600 transition'>
//                         <img src="./message.png" alt="Messages" className="h-20 sm:h-26 w-20 sm:w-26"/>
//                         <h3 className="font-bold text-2xl sm:text-4xl text-center">Messages</h3>
//                         <p className='text-sm sm:text-base text-center'>Check your conversations and connections with other learners and teachers</p>
//                     </div>
//                 </a>

//             </div>

//             {/* Recent Activity */}
//             <div className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 w-[90%] max-w-[1080px] mx-auto mt-10 bg-gray-700 rounded-2xl">
//                 <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Recent Activity</h1>

//                 {loading ? (
//                     <p className="text-center">Loading activities...</p>
//                 ) : (
//                     <div className="w-full space-y-4">
//                         {Array.isArray(data.activities) && data.activities.length > 0 ? (
//                             data.activities.map((activity, index) => (
//                                 <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-600 p-4 rounded-xl shadow-md hover:bg-gray-500 transition">
//                                     <div className="text-2xl sm:text-3xl">
//                                         {activity.type === "request_sent" && "📤"}
//                                         {activity.type === "request_received" && "📥"}
//                                         {activity.type === "request_accepted" && "🤝"}
//                                         {activity.type === "profile_updated" && "📝"}
//                                         {!activity.type && "🗓️"}
//                                     </div>
//                                     <div className="flex flex-col flex-1">
//                                         <p className="text-sm sm:text-lg font-medium">{activity.message}</p>
//                                         <span className="text-xs sm:text-sm text-gray-300">{new Date(activity.createdAt).toLocaleString()}</span>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="text-gray-300 text-center">No recent activities found</p>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Dashboard;







import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import axios from "axios";
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    const dashLinks = [
        { path: "/Dashboard", label: "Home" },
        { path: "/skills", label: "Browse Skills" },
        { path: "/Message", label: "Messages" },
        { path: "/profile", label: "Profile" },
        { label: "Logout" }
    ];

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');

    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const header = { headers: { Authorization: `Bearer ${token}` } };

            try {
                const res = await axios.post('http://localhost:8080/user/Dashboard', {}, header);
                setData(res.data.data);
                localStorage.setItem("userId", res.data.data.id);
            } catch (err) {
                console.log("Error while fetch data", err);
            } finally {
                setLoading(false);
            }

            try {
                const res = await axios.get("http://localhost:8080/user/activities", header);
                setData(prev => ({ ...prev, activities: res.data.activities }));
            } catch (err) {
                console.log("Error fetching activities:", err);
            }
        };

        if (token) fetchData();
        else console.log("No token found in localStorage");
    }, [token]);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            navigate("/");
        }
    };

    return (
        <div className='quicksand text-white min-h-screen pt-20'>

            <NavBar
                links={dashLinks.map(link =>
                    link.label === "Logout"
                        ? { ...link, onClick: handleLogout }
                        : link
                )}
            />

            {/* Welcome banner */}
            <div className="text-white flex flex-col items-center mt-10 gap-4 sm:gap-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center">Hi, {data?.name || "Username"}</h1>
                <p className="text-xl sm:text-2xl font-medium text-center">Welcome back to SkillSwap</p>
            </div>

          {/* Quick Links Grid */}
<div
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-6 mt-8 sm:mt-12 w-full max-w-[1200px] mx-auto rounded-3xl'
>
    {/* Profile */}
    <Link to="/profile">
        <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gray-800/80 rounded-2xl p-4 flex-1 hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300'>
            <img src="./profile.png" alt="Profile" className="h-16 sm:h-20 w-16 sm:w-20"/>
            <h3 className="font-bold text-xl sm:text-2xl text-center">Profile</h3>
            <p className='text-xs sm:text-sm text-center'>View and update your personal details and skill preferences</p>
        </div>
    </Link>

    {/* Add Skill */}
    <a href="#">
        <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gray-800/80 rounded-2xl p-4 flex-1 hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300'>
            <img src="./add.png" alt="Add Skill" className="h-16 sm:h-20 w-16 sm:w-20"/>
            <h3 className="font-bold text-xl sm:text-2xl text-center">Add a Skill</h3>
            <p className='text-xs sm:text-sm text-center'>Share a skill you can teach and help others learn</p>
        </div>
    </a>

    {/* Browse Skills */}
    <Link to="/skills">
        <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gray-800/80 rounded-2xl p-4 flex-1 hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300'>
            <img src="./search.png" alt="Browse Skills" className="h-16 sm:h-20 w-16 sm:w-20"/>
            <h3 className="font-bold text-xl sm:text-2xl text-center">Browse Skills</h3>
            <p className='text-xs sm:text-sm text-center'>Explore what others are offering and find the skills you want to learn</p>
        </div>
    </Link>

    {/* Messages */}
    <a href="#">
        <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gray-800/80 rounded-2xl p-4 flex-1 hover:bg-gray-700 transform hover:-translate-y-2 transition-all duration-300'>
            <img src="./message.png" alt="Messages" className="h-16 sm:h-20 w-16 sm:w-20"/>
            <h3 className="font-bold text-xl sm:text-2xl text-center">Messages</h3>
            <p className='text-xs sm:text-sm text-center'>Check your conversations and connection with other learners and teachers</p>
        </div>
    </a>
</div>


            {/* Recent Activity */}
            <div className="flex flex-col items-center gap-6 p-4 sm:p-6 w-[90%] max-w-[1200px] mx-auto mt-10 sm:mt-16 bg-gray-500/80 rounded-2xl text-white">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Recent Activity</h1>

                {loading ? (
                    <p className="text-center">Loading activities...</p>
                ) : (
                    <div className="w-full space-y-4">
                        {Array.isArray(data.activities) && data.activities.length > 0 ? (
                            data.activities.map((activity, index) => (
                                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gray-700/60 p-4 rounded-xl shadow-md hover:bg-gray-700 transition">
                                    <div className="text-3xl">{activity.type === "request_sent" ? "📤" : activity.type === "request_received" ? "📥" : activity.type === "request_accepted" ? "🤝" : activity.type === "profile_updated" ? "📝" : "🗓️"}</div>
                                    <div className="flex flex-col flex-1">
                                        <p className="text-lg font-medium">{activity.message}</p>
                                        <span className="text-sm text-gray-300">{new Date(activity.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-300 text-center">No recent activities found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard;
