import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [userName, setUserName] = useState(``);
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        name: userName, 
        email: email,
        password: password
      };
      axios.post('http://localhost:8080/user/Signup', payload)
      .then((res) => {
            setLoading(false);
            toast("Registration Successful");
            console.log("User register", res);
      })
      .catch((err) => {
        setLoading(false);
        toast("Registration Failed");
        console.log("Error while reiteration", err);
      })
      console.log(payload);
    };
  return (
        <div className='quicksand bg-[url("./bg-blue.jpg")] flex flex-col gap-10 items-center h-[35rem] w-[25rem] m-auto mt-[15rem] bg-cover'>
          <div className = "w-full p-4 flex flex-col">
                              <Link to='/'><div className='text-white'>
                                              <img src="./backbtn.png" alt="backbtn" className='text-white h-[1rem]' />
                                              <span>Back</span>
                                          </div>
                              </Link>
                              <h1 className='text-[1.5rem] text-white font-[700] mx-auto'>Sign in</h1>
                      </div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-3'>
                <label htmlFor="userName">Username</label>
                  <input type="userName"
                  id = "userName"
                  value = {userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  placeholder = "Username" 
                  className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
                  />
                  <label htmlFor="email">Email</label>
                  <input type="email"
                  id = "email"
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder = "Email" 
                  className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
                  />

                  <label htmlFor="password">Password</label>
                  <input 
                  type="password"
                  id = "password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                  required
                  placeholder = "Password"
                  className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none'
                  />

                <button 
                disabled = {loading}
                type = "submit"
                className='h-[3rem] w-[7rem] bg-blue-400 rounded-3xl disabled:opacity-60'>
                {loading ? 'Submitting..' : 'Sign Up'}
                </button>
              </div>
            </form>
            <div className=' flex flex-col gap-2.5 justify-center items-center text-gray-300'>
                <div className='flex gap-1.5 h-[2rem] w-[10rem] justify-center items-center m-auto'> <div className='h-0.5 w-16 bg-gray-100'></div> <span>or</span> <div className='h-0.5 w-16 bg-gray-100'></div> </div>
                <p>Already have an account ?
                  <Link to = "/SignIn"> <span className='text-blue-400 text-[1rem] font-bold'>Log in</span> </Link></p> 
            </div>
                          
        </div>    
  )
}

export default SignUp
