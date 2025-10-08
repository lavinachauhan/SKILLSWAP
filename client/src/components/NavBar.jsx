import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import React from 'react'

const NavBar = ({links}) => {
  return (
    <div>
       <nav className='flex justify-evenly pt-6 gap-4 max-w-[1280px] mx-auto quicksand'>
            <div className='font-extrabold text-4xl text-white flex'>
            {/* <a href="#"><img src="./skillswap-logo.png" alt="logo" className = 'h-10 w-10' /></a> */}
            SkillSwap</div>
            <ul className='flex text-2xl justify-between gap-12 text-gray-200 font-[400]'>
              {links.map((link) => (

                    <li key = {link.label}>
                      {link.type === "anchor" ? (
                         <HashLink smooth to={link.path}>{link.label}</HashLink>
                             ) : (
                                  <Link to={link.path}>{link.label}</Link>
                                )}
                      </li>
              ))}
            </ul>
        </nav>
    </div>
  )
}

export default NavBar


    
    