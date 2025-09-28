import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className = "flex flex-col items-center gap-10  mx-auto mt-[10rem]" id = "Aboutus">
              <h1 className='mx-auto text-4xl font-extrabold text-white'>About SkillSwap</h1>
            <p className='text-white font-medium text-2xl bg-gray-700/80 w-[50rem] p-[5rem] rounded-3xl card'>
                Skillswap was created with one simple idea: everyone has something to teach, and everyone has something to learn.
                <br/>
                <br />
                Our mission is to build a community where knowledge flows freely. Instead of money, we believe in the power of 
                exchange—sharing skills, experiences, and time.
                <br />
                <br />
                Whether you’re here to learn a new skill, teach others what you love, or simply connect with like-minded learners, 
                Skillswap is your place to grow and give back.
            </p>
        </div>
    </div>
  )
}

export default Aboutus
