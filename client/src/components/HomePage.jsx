// import React from 'react'
// import { Link } from "react-router-dom";
// import Features from './Features';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import NavBar from './NavBar';

// const HomePage = () => {
//   const homeLinks = [
//     {path : "/", label : "Home", type: "link"},
//     {path : "#Features", label : "Features", type : "anchor"},
//     {path : "#ContactUs", label : "Contact", type : "anchor"},
//     {path : "#AboutUs", label : "About Us", type : "anchor"}]
//   return (
//     <div>
//       <NavBar links = {homeLinks}/>

//       <div className='quicksand bg-cover bg-center h-full max-w-[1280px] mx-auto p-6'>
  
//         {/* hero section */}
//         <div className='flex sm:flex-row flex-col  w-full h-[50rem]'>
//             {/* left part */}
//             <div className='w-[50%] h-full flex flex-col gap-[2.5rem] pl-[8rem] pt-[8rem] slide-in'>
//                 <h1 className = "text-white text-6xl font-extrabold">
//                     Hey there! Swap your skills
//                 </h1>
//                 <p className='text-white flex font-[500] text-3xl'>Exchange your skills and learn something new for free!</p>
//                 <div className='flex gap-4 text-xl'>
//                     <Link to="/SignUp"><div className='h-[4rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>Get Started</div> </Link>
//                     <Link to = "/SignIn"><div className='h-[4rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>Login</div></Link>
//                 </div>
//             </div>
//             {/* right part */}
//             <div className='w-[50%] h-full ml-10 mt-6 up-down sm:opacity-100 opacity-0'>
//                 <img src="/herosection(1).png" alt="" className = 'h-[580px] w-[580px]'/>
//             </div>
//         </div>
//           {/* features section */}
//           <Features></Features>
//           {/* About us section */}
//           <Aboutus></Aboutus>

//             {/* contactus */}
//           <Contactus></Contactus>

//       </div>

//     </div>
//   )
// }

// export default HomePage   

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
    {path : "#AboutUs", label : "About Us", type : "anchor"}
  ];

  return (
    <div>
      <NavBar links={homeLinks} />

      <div className='quicksand bg-cover bg-center h-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8'>
        {/* hero section */}
        <div className='flex flex-col-reverse sm:flex-row items-center justify-between w-full min-h-[35rem] sm:min-h-[45rem]'>
          
          {/* left part */}
          <div className='w-full sm:w-1/2 flex flex-col gap-6 sm:gap-10 sm:pl-[4rem] pt-3 sm:pt-[3rem] text-center sm:text-left slide-in'>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hey there! Swap your skills
            </h1>
            <p className='text-white font-medium text-lg sm:text-2xl md:text-3xl'>
              Exchange your skills and learn something new for free!
            </p>

            <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 text-lg sm:text-xl'>
              <Link to="/SignUp">
                <div className='h-[3.5rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>
                  Get Started
                </div>
              </Link>
              <Link to="/SignIn">
                <div className='h-[3.5rem] w-[8rem] bg-gray-100/80 flex justify-center items-center rounded-[1rem] button'>
                  Login
                </div>
              </Link>
            </div>
          </div>

          {/* right part (image) */}
          <div className='w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0 up-down sm:opacity-100 opacity-100'>
            <img 
              src="/herosection(1).png" 
              alt="Hero section" 
              className='h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px] w-auto max-w-full'
            />
          </div>
        </div>

        {/* sections */}
        <Features />
        <Aboutus />
        <Contactus />
      </div>
    </div>
  )
}

export default HomePage

