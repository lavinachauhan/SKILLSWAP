import { Link } from "react-router-dom";
import React from 'react'

const NavBar = () => {
  return (
    <div>
       <nav className='flex justify-evenly pt-6 gap-4 max-w-[1280px] mx-auto quicksand'>
            <div className='font-extrabold text-4xl text-white flex'>
            <a href="#"><img src="" alt="logo" /></a>
            SkillSwap</div>
            <ul className='flex text-2xl justify-between gap-12 text-gray-200 font-[400]'>
                <Link to = "/"> <li><a href="#">Home</a></li></Link>
                <li><a href="#features">Features</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#Aboutus">About us</a></li>            
              </ul>
        </nav>
    </div>
  )
}

export default NavBar


    
    