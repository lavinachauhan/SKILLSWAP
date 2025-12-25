// import React from 'react'
// import axios from "axios";
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const SignUp = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState(``);
//     const [password, setPassword] = useState(``);
//     const [userName, setUserName] = useState(``);
//     const [loading, setLoading] = useState(false);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const payload = {
//         name: userName, 
//         email: email,
//         password: password
//       };
//       axios.post('http://localhost:8080/user/Signup', payload)
//       .then((res) => {
//             setLoading(false);
//             toast("Registration Successful");
//             navigate("/SignIn");
//             console.log("User register", res);
//       })
//       .catch((err) => {
//         setLoading(false);
//         toast("Registration Failed");
//         console.log("Error while reiteration", err);
//       })
//       console.log(payload);
//     };
//   return (
//         <div className='quicksand bg-[url("./bg-blue.jpg")] flex flex-col gap-10 items-center h-[35rem] w-[25rem] m-auto mt-[15rem] bg-cover'>
//           <div className = "w-full p-4 flex flex-col">
//                               <Link to='/'><div className='text-white'>
//                                               <img src="./backbtn.png" alt="backbtn" className='text-white h-[1rem]' />
//                                               <span>Back</span>
//                                           </div>
//                               </Link>
//                               <h1 className='text-[1.5rem] text-white font-[700] mx-auto'>Sign in</h1>
//                       </div>
//             <form onSubmit={handleSubmit}>
//               <div className='flex flex-col gap-3'>
//                 <label htmlFor="userName">Username</label>
//                   <input type="userName"
//                   id = "userName"
//                   value = {userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   required
//                   placeholder = "Username" 
//                   className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
//                   />
//                   <label htmlFor="email">Email</label>
//                   <input type="email"
//                   id = "email"
//                   value = {email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder = "Email" 
//                   className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
//                   />

//                   <label htmlFor="password">Password</label>
//                   <input 
//                   type="password"
//                   id = "password"
//                   value = {password}
//                   onChange = {(e) => setPassword(e.target.value)}
//                   required
//                   placeholder = "Password"
//                   className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
//                   />

//                 <button 
//                 disabled = {loading}
//                 type = "submit"
//                 className='h-[3rem] w-[7rem] bg-blue-400 rounded-3xl disabled:opacity-60'>
//                 {loading ? 'Submitting..' : 'Sign Up'}
//                 </button>
//               </div>
//             </form>
//             <div className=' flex flex-col gap-2.5 justify-center items-center text-gray-300'>
//                 <div className='flex gap-1.5 h-[2rem] w-[10rem] justify-center items-center m-auto'> <div className='h-0.5 w-16 bg-gray-100'></div> <span>or</span> <div className='h-0.5 w-16 bg-gray-100'></div> </div>
//                 <p>Already have an account ?
//                   <Link to = "/SignIn"> <span className='text-blue-400 text-[1rem] font-bold'>Log in</span> </Link></p> 
//             </div>
                          
//         </div>    
//   )
// }

// export default SignUp


import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { name: userName, email, password };

    axios.post('http://localhost:8080/user/Signup', payload)
      .then((res) => {
        setLoading(false);
        toast("Registration Successful");
        navigate("/SignIn");
        console.log("User registered", res);
      })
      .catch((err) => {
        setLoading(false);
        toast("Registration Failed");
        console.log("Error while registration", err);
      });

    console.log(payload);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('./bg-blue.jpg')] bg-cover bg-center quicksand px-4 sm:px-6 md:px-0">
      <div className="flex flex-col gap-8 items-center bg-blue-900/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-lg w-full max-w-[25rem]">

        {/* Header */}
        <div className="w-full flex flex-col">
          <Link to='/'>
            <div className="text-white flex items-center gap-2 hover:underline">
              <img src="./backbtn.png" alt="backbtn" className="h-4 sm:h-5" />
              <span className="text-sm sm:text-base">Back</span>
            </div>
          </Link>

          <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mt-4">
            Sign Up
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full items-center">
          <div className="flex flex-col gap-4 w-full max-w-[18rem]">

            <label htmlFor="userName" className="text-gray-200 text-sm sm:text-base">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Username"
              className="h-[2.5rem] w-full p-4 rounded-3xl bg-gray-200 focus:outline-none text-black placeholder-gray-600"
            />

            <label htmlFor="email" className="text-gray-200 text-sm sm:text-base">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="h-[2.5rem] w-full p-4 rounded-3xl bg-gray-200 focus:outline-none text-black placeholder-gray-600"
            />

            <label htmlFor="password" className="text-gray-200 text-sm sm:text-base">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="h-[2.5rem] w-full p-4 rounded-3xl bg-gray-200 focus:outline-none text-black placeholder-gray-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-[3rem] w-full bg-blue-400 text-white font-semibold rounded-3xl hover:bg-blue-500 transition-all duration-300 disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Sign Up'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="flex flex-col gap-4 justify-center items-center text-gray-300 text-sm sm:text-base">
          <div className="flex items-center gap-2 w-[10rem] justify-center">
            <div className="h-0.5 w-14 sm:w-16 bg-gray-100"></div>
            <span>or</span>
            <div className="h-0.5 w-14 sm:w-16 bg-gray-100"></div>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/SignIn">
              <span className="text-blue-400 font-bold hover:underline">Log in</span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
