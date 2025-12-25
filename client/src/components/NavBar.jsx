// import { Link } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';

// import React from 'react'

// const NavBar = ({links}) => {
//   return (
//     <div>
//        <nav className='flex justify-evenly pt-6 gap-4 max-w-[1280px] mx-auto quicksand'>
//             <div className='font-extrabold text-4xl text-white flex'>
//             {/* <a href="#"><img src="./skillswap-logo.png" alt="logo" className = 'h-10 w-10' /></a> */}
//             SkillSwap</div>
//             <ul className='flex text-2xl justify-between gap-12 text-gray-200 font-[400]'>
//               {links.map((link) => (

//                     <li key = {link.label}>
//                         {link.onClick ? (
//                         <button onClick={link.onClick}>{link.label}</button>
//                         ) : link.type === "anchor" ? (
//                          <HashLink smooth to={link.path}>{link.label}</HashLink>
//                              ) : (
//                                   <Link to={link.path}>{link.label}</Link>
//                                 )}
//                       </li>
//               ))}
//             </ul>
//         </nav>
//     </div>
//   )
// }

// export default NavBar


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from "lucide-react"; // icons for menu open/close

const NavBar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900/95 quicksand shadow-md">
  <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-5 text-white">
    {/* Logo */}
    <div className="font-extrabold text-3xl sm:text-4xl text-white">
      SkillSwap
    </div>

    {/* Desktop Links */}
    <ul className="hidden md:flex text-2xl gap-12 text-gray-200 font-[400]">
      {links.map((link) => (
        <li key={link.label} className="hover:text-white transition-all duration-300">
          {link.onClick ? (
            <button onClick={link.onClick}>{link.label}</button>
          ) : link.type === "anchor" ? (
            <HashLink smooth to={link.path}>{link.label}</HashLink>
          ) : (
            <Link to={link.path}>{link.label}</Link>
          )}
        </li>
      ))}
    </ul>

    {/* Hamburger */}
    <button className="md:hidden flex items-center text-3xl focus:outline-none" onClick={toggleMenu}>
      {isOpen ? "✖" : "☰"}
    </button>
  </div>

  {/* Mobile Menu */}
  <div className={`md:hidden bg-gray-900/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
    <ul className="flex flex-col items-center gap-6 py-6 text-2xl text-gray-200 font-[400]">
      {links.map((link) => (
        <li key={link.label} onClick={() => setIsOpen(false)} className="hover:text-white transition-all duration-300">
          {link.onClick ? (
            <button onClick={link.onClick}>{link.label}</button>
          ) : link.type === "anchor" ? (
            <HashLink smooth to={link.path}>{link.label}</HashLink>
          ) : (
            <Link to={link.path}>{link.label}</Link>
          )}
        </li>
      ))}
    </ul>
  </div>
</nav>
  )
};

export default NavBar;


    
    