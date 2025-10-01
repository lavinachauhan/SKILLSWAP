import React from 'react'
import { Link } from "react-router-dom";
import Features from './Features';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import NavBar from './NavBar';

const HomePage = () => {
  const homeLinks = [
    {path : "/", label : "Home", type: "link"},
    {path : "#Features", label : "Features", type : "anchor"},
    {path : "#ContactUs", label : "Contact", type : "anchor"},
    {path : "#AboutUs", label : "About Us", type : "anchor"}]
  return (
    // bg-[url("./bg-blue.jpg")]
    <div>
      <NavBar links = {homeLinks}/>

      <div className='quicksand bg-cover bg-center h-full max-w-[1280px] mx-auto p-6'>
  
        {/* hero section */}
        <div className='flex w-full h-[50rem]'>
            {/* left part */}
            <div className='w-[50%] h-full flex flex-col gap-[2.5rem] pl-[8rem] pt-[8rem] slide-in'>
                <h1 className = "text-white text-6xl font-extrabold">
                    Hey there! Swap your skills
                </h1>
                <p className='text-white font-[500] text-3xl'>Exchange your skills and learn something new for free!</p>
                <div className='flex gap-4 text-xl'>
                    <Link to="/SignUp"><div className='h-[4rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>Get Started</div> </Link>
                    <Link to = "/SignIn"><div className='h-[4rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>Login</div></Link>
                </div>
            </div>
            {/* right part */}
            <div className='w-[50%] h-full ml-10 mt-6 up-down'>
                <img src="/herosection(1).png" alt="" className = 'h-[580px] w-[580px]'/>
            </div>
        </div>
          {/* features section */}
          <Features></Features>
          {/* About us section */}
          <Aboutus></Aboutus>

            {/* contactus */}
          <Contactus></Contactus>

      </div>

    </div>
  )
}

export default HomePage
