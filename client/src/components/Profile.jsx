import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    teachSkills: "",
    learnSkills: "",
    about: "",
  });

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
  // Fetch profile data
  const fetchProfile = async () => {
     const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
      const userId = localStorage.getItem("userId");
      if(!userId){
        console.log("No userId found in localStorage");
        return;
      }
      axios.get(`http://localhost:8080/user/profile/${userId}`, header)
      .then((res) => {
            if (res.data.status) {
            setUserData(res.data.data);
            console.log("Fetched data:", res.data.data);
            setFormData({
            name: res.data.data.name || "",
            email: res.data.data.email || "",
            teachSkills: Array.isArray(res.data.data.teachSkills)
                ? res.data.data.teachSkills.join(", ")
                : res.data.data.teachSkills || "",
            learnSkills: Array.isArray(res.data.data.learnSkills)
                ? res.data.data.learnSkills.join(", ")
                : res.data.data.learnSkills || "",
            about: res.data.data.about || "",
            });
            setLoading(false);
          }
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setLoading(false);
      })
  };
  if(token){
    fetchProfile();
  } else{
        console.log("No token found in localStorage");
  }
  }, [token]);

  // Handle input change in edit form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (update profile)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("token"));
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
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;

  return (
    <div className="flex flex-col items-center mt-10 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        {!editMode ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>
            <div className="space-y-3 text-lg">
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Teach Skills:</strong> {userData.teachSkills || "—"}
              </p>
              <p>
                <strong>Learn Skills:</strong> {userData.learnSkills || "—"}
              </p>
              <p>
                <strong>About:</strong> {userData.about || "—"}
              </p>
            </div>

            <button
              onClick={() => setEditMode(true)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              Edit Profile
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Teach Skills</label>
                <input
                  type="text"
                  name="teachSkills"
                  value={formData.teachSkills}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Learn Skills</label>
                <input
                  type="text"
                  name="learnSkills"
                  value={formData.learnSkills}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">About</label>
                <textarea
                  name="about"
                  rows="3"
                  value={formData.about}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <div className="flex justify-between gap-4 mt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg font-semibold transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg text-lg font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
