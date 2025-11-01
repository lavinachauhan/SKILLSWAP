import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const BrowseSkills = () => {
    const links = [
    { path: "/Dashboard", label: "Home" },
    { path: "/skills", label: "Browse Skills" },
    { path: "/Message", label: "Messages" },
    { path: "/profile", label: "Profile" },
    { label: "Logout", onClick: () => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    },
  ];
  const [users, setUsers] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
 
  useEffect(() => {
    const fetchSkills = async () => {
      const header = {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }
        axios.get("http://localhost:8080/user/skills", header)
        .then((res) => {
          setUsers(res.data.users || []);
          console.log(res.data.users);
        })
        .catch((err) => {
          console.log("Error fetching users:", err);
        })
      };
    if(token){
      fetchSkills();
    }
    else{
        console.log("No token found in localStorage");
    }
  }, [token]);

  return (
    <>
      <NavBar links={links} />
           <div className="min-h-screen bg-gray-900 text-white p-10">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Browse Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {!users || users.length === 0 ? (
            <p className="text-center col-span-3">No users found</p>
          ) : (
            users.map((user) => (
              <div
                key={user._id}
                className="p-6 border rounded-2xl bg-gray-800 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">{user?.name}</h2>
                <p className="text-gray-400 mb-4">{user?.about}</p>

                <h3 className="font-semibold">Teaches:</h3>
                <ul className="list-disc list-inside mb-4">
                  {user?.teachSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>

                <h3 className="font-semibold">Wants to Learn:</h3>
                <ul className="list-disc list-inside">
                  {user.learnSkills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BrowseSkills;
