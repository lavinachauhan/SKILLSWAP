import React from "react";

const Contactus = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-[70%] mt-[10rem] gap-7 mx-auto " id = "ContactUs">
                <h1 className='text-4xl font-extrabold text-white'>Contact Us</h1>
                <div className="bg-gray-700/80  rounded-3xl w-full flex  h-[25rem] ">
                    {/* left part form */}
                    <div className = 'w-[50%] flex flex-col  justify-evenly gap-2.5 p-9 '>
                        <p className = 'text-2xl text-white font-medium'>Full Name</p>
                        <input type="text" className="h-[25px] w-[300px] font-[500] bg-gray-300 rounded-md focus:outline-none"/>

                        <p className = 'text-2xl text-white font-medium'>E-mail</p>
                        <input type="text"  className="h-[25px] w-[300px] font-[500] bg-gray-300 rounded-md focus:outline-none"/>

                        <p className = 'text-2xl text-white font-medium'>Message</p>
                        <input type="text"  className="h-[25px] w-[300px] font-[500] bg-gray-300 rounded-md focus:outline-none"/>
                    </div>
                    {/* right part socials */}
                    <div className = 'w-[50%] flex flex-col p-9 pt-16 gap-12'>
                        <div>
                                <h2 className = 'text-2xl text-white font-medium'>Social Links</h2>
                                <a href="#" className = "text-xl text-gray-300">skillswap123@gmail.com</a>
                        </div>

                        <div className="flex gap-4">
                            <a href="#"><img src="./instagram.svg" alt="insta" className="bg-white h-9 rounded-2xl" /></a>
                            <a href= "#"><img src="./linkedin.svg" alt="linkedin" className="bg-white h-9 rounded-2xl"/></a>
                            <a href="#"><img src="./twitter.svg" alt="twitter" className="bg-white h-9 rounded-2xl"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Contactus