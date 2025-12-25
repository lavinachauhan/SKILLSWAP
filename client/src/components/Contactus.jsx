import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-32 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-5xl flex flex-col gap-7" id="ContactUs">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
          Contact Us
        </h1>

        <div className="bg-gray-700/80 rounded-3xl w-full flex flex-col md:flex-row h-auto md:h-[25rem] overflow-hidden">
          {/* Left part: form */}
          <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-4 p-6 md:p-9">
            <div>
              <p className="text-xl sm:text-2xl text-white font-medium">Full Name</p>
              <input
                type="text"
                className="h-10 w-full sm:w-[300px] font-medium bg-gray-300 rounded-md focus:outline-none px-2"
              />
            </div>
            <div>
              <p className="text-xl sm:text-2xl text-white font-medium">E-mail</p>
              <input
                type="email"
                className="h-10 w-full sm:w-[300px] font-medium bg-gray-300 rounded-md focus:outline-none px-2"
              />
            </div>
            <div>
              <p className="text-xl sm:text-2xl text-white font-medium">Message</p>
              <textarea
                rows="4"
                className="w-full sm:w-[300px] font-medium bg-gray-300 rounded-md focus:outline-none px-2 py-1"
              />
            </div>
          </div>

          {/* Right part: socials */}
          <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center p-6 md:p-9 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl text-white font-medium mb-2">
                Social Links
              </h2>
              <a href="#" className="text-lg sm:text-xl text-gray-300 block mb-2">
                skillswap123@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#">
                <img
                  src="./instagram.svg"
                  alt="insta"
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-2xl bg-white p-1"
                />
              </a>
              <a href="#">
                <img
                  src="./linkedin.svg"
                  alt="linkedin"
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-2xl bg-white p-1"
                />
              </a>
              <a href="#">
                <img
                  src="./twitter.svg"
                  alt="twitter"
                  className="h-9 w-9 sm:h-12 sm:w-12 rounded-2xl bg-white p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
