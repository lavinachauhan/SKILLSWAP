import React from 'react'

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-32 px-4 sm:px-6 md:px-10" id="Features">
      {/* heading */}
      <h1 className='text-4xl sm:text-5xl font-extrabold text-white text-center mb-16'>
        Why Choose SkillSwap
      </h1>

      {/* features container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl'>
        
        {/* card 1 */}
        <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center justify-center gap-5 text-gray-200'>
          <img src="./learn.png" alt="" className='h-10 w-10 mx-auto'/>
          <h2 className='font-bold text-xl sm:text-2xl text-center'>Learn Any Skill</h2>
          <p className='text-sm sm:text-base font-medium text-center'>
            Discover skills from people around the world. From coding to cooking, photography to yoga—learn directly from real individuals.
          </p>
        </div>

        {/* card 2 */}
        <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center justify-center gap-5 text-gray-200'>
          <img src="./shareskill.png" alt="" className='h-10 w-10 mx-auto'/>
          <h2 className='font-bold text-xl sm:text-2xl text-center'>Share What You Know</h2>
          <p className='text-sm sm:text-base font-medium text-center'>
            Offer your own skills to others. Whether you’re a professional or just passionate about a hobby, there’s always someone eager to learn.
          </p>
        </div>

        {/* card 3 */}
        <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center justify-center gap-5 text-gray-200'>
          <img src="./connect.png" alt="" className='h-10 w-10 mx-auto'/>
          <h2 className='font-bold text-xl sm:text-2xl text-center'>Connect & Collaborate</h2>
          <p className='text-sm sm:text-base font-medium text-center'>
            Chat with other learners and teachers. Exchange ideas, ask questions, and collaborate on new learning experiences.
          </p>
        </div>

        {/* card 4 */}
        <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center justify-center gap-5 text-gray-200'>
          <img src="./exchange.png" alt="" className='h-10 w-10 mx-auto'/>
          <h2 className='font-bold text-xl sm:text-2xl text-center'>Easy Skill Exchange</h2>
          <p className='text-sm sm:text-base font-medium text-center'>
            No fees, no middlemen—just pure skill sharing. Teach what you know, learn what you want.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Features
