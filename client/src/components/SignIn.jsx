import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";


const SignIn = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
          email: email,
          password: password
        };
        axios.post('http://localhost:8080/user/SignIn', payload)
        .then((res) => {
              setLoading(false);
              toast("Login Successful");
              console.log("Login done", res);
              localStorage.setItem('token', JSON.stringify(res.data.token))
              navigate("/Dashboard")
        })
        .catch((err) => {
          setLoading(false);
          toast("Login Failed");
          console.log("Error while reiteration", err);
        })
  };

  return (
      <div>
        <div className='quicksand bg-[url("./bg-blue.jpg")] flex flex-col gap-10 items-center h-[35rem] w-[25rem] m-auto mt-[15rem] bg-cover'>
          <div className = "w-full p-4 flex flex-col">
                              <Link to='/'><div className='text-white'>
                                              <img src="./backbtn.png" alt="backbtn" className='text-white h-[1rem]' />
                                              <span>Back</span>
                                          </div>
                              </Link>
                              <h1 className='text-[1.5rem] text-white font-[700] mx-auto'>Welcome Back</h1>
                      </div>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-3'>
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
                type = "submit"
                className='h-[3rem] w-[7rem] bg-blue-400 rounded-3xl'>
                {loading ? 'Submitting..' : 'Sign up'}
                </button>
              </div>
            </form>
  
            <div className=' flex flex-col gap-[2rem] justify-center items-center text-gray-300'>
                <div className='flex gap-1.5 h-[2rem] w-[10rem] justify-center items-center m-auto'> <div className='h-0.5 w-16 bg-gray-100'></div> <span>or</span> <div className='h-0.5 w-16 bg-gray-100'></div> </div>
                <p>Don't have an account ?<Link to = "/SignUp"> <span className='text-blue-400 text-[1rem] font-bold'>Sign up</span> </Link></p> 
            </div>     
        </div>    
    </div>
  )
}

export default SignIn
