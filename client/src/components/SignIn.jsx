import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div>
        <div className='quicksand bg-[url("./background(1).jpg")] flex flex-col justify-center items-center gap-12 h-[30rem] w-[20rem] m-auto mt-6 bg-cover'>
            <div>
                    <h1 className='text-[2rem] text-white font-[700]'>Welcome Back</h1>
            </div>
            <div className='flex flex-col gap-3'>
                <input type="text" placeholder = "Email" className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none' />
                <input type="password" placeholder = "Password" className='h-[2.5rem] w-[15rem] p-6 rounded-3xl  bg-gray-300 focus:outline-none' />
            </div>
            <div className=' flex flex-col gap-[2rem] justify-center items-center text-gray-300'>
                <button className='h-[3rem] w-[7rem] bg-blue-400 rounded-3xl'>Log in</button>
                <div className='flex gap-1.5 h-[2rem] w-[10rem] justify-center items-center m-auto'> <div className='h-0.5 w-16 bg-gray-100'></div> <span>or</span> <div className='h-0.5 w-16 bg-gray-100'></div> </div>
                <p>Don't have an account ?<span className='text-blue-400 text-[1rem] font-bold'>Sign up</span></p> 
            </div>     
        </div>    
    </div>
    </div>
  )
}

export default SignIn
