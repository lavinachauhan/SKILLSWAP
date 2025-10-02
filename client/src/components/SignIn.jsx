import React from 'react'
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div>
        <div className='quicksand bg-[url("./bg-blue.jpg")] flex flex-col justify-around items-center gap-12 h-[60rem] w-[40rem] m-auto mt-[15rem] bg-cover'>
          <div className = "w-full p-4 flex flex-col">
                              <Link to='/'><div className='text-white'>
                                              <img src="./backbtn.png" alt="backbtn" className='text-white h-[1rem]' />
                                              <span>Back</span>
                                          </div>
                              </Link>
                              <h1 className='text-[1.5rem] text-white font-[700] mx-auto'>Welcome Back</h1>
                      </div>
            <div className='flex flex-col gap-3'>
                <input type="text" placeholder = "Email" className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none' />
                <input type="password" placeholder = "Password" className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none' />
            </div>
            <div className=' flex flex-col gap-[2rem] justify-center items-center text-gray-300'>
                <Link to='/Dashboard'><button className='h-[3rem] w-[7rem] bg-blue-400 rounded-3xl'>Log in</button> </Link>
                <div className='flex gap-1.5 h-[2rem] w-[10rem] justify-center items-center m-auto'> <div className='h-0.5 w-16 bg-gray-100'></div> <span>or</span> <div className='h-0.5 w-16 bg-gray-100'></div> </div>
                <p>Don't have an account ?<Link to = "/SignUp"> <span className='text-blue-400 text-[1rem] font-bold'>Sign up</span> </Link></p> 
            </div>     
        </div>    
    </div>
    </div>
  )
}

export default SignIn
