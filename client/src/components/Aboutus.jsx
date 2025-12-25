import React from 'react'

const Aboutus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-10 pt-32" id="AboutUs">
      <h1 className='text-4xl sm:text-5xl font-extrabold text-white text-center mb-12'>
        About SkillSwap
      </h1>

      <p className='text-white font-medium text-lg sm:text-xl md:text-2xl bg-gray-600/80 p-8 sm:p-12 md:p-20 rounded-3xl max-w-4xl text-center'>
        Skillswap was created with one simple idea: everyone has something to teach, and everyone has something to learn.
        <br/><br/>
        Our mission is to build a community where knowledge flows freely. Instead of money, we believe in the power of 
        exchange—sharing skills, experiences, and time.
        <br/><br/>
        Whether you’re here to learn a new skill, teach others what you love, or simply connect with like-minded learners, 
        Skillswap is your place to grow and give back.
      </p>
    </div>
  )
}

export default Aboutus
