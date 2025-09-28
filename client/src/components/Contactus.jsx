import React from "react";

const Contactus = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-[70%] mt-[10rem] gap-7 mx-auto">
                <h1 className='text-4xl font-extrabold text-white'>Contact Us</h1>
                <div className="bg-gray-700/80  rounded-3xl w-full flex  h-[25rem]">
                    {/* left part form */}
                    <div className = 'w-[50%] flex flex-col  justify-evenly gap-2.5 p-9 '>
                        <p>Full Name</p>
                        <input type="text" className="h-[10px] w-[300px] bg-white"/>

                        <p>E-mail</p>
                        <input type="text" className="h-[10px] w-[300px] bg-white" />

                        <p>Message</p>
                        <input type="text" className="h-[10px] w-[300px] bg-white"/>
                    </div>
                    {/* right part socials */}
                    <div className = 'w-[50%] flex flex-col  justify-around p-9'>
                        <h2>Social Links</h2>
                        <a href=""></a>
                        <div className="flex gap-4">
                            <a href=""><img src="" alt="insta" /></a>
                            <a href=""><img src="" alt="linkedin" /></a>
                            <a href=""><img src="" alt="twitter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Contactus