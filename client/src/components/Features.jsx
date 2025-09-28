import React from 'react'

const Features = () => {
  return (
    <div>
       {/* features section */}
        <div className='flex flex-col gap-20 features' id = "features">
              {/* heading */} 
              <h1 className='mx-auto text-4xl font-extrabold text-white'>Why Choose SkillSwap</h1>

              {/* features container */}
              <div className='grid grid-cols-4 gap-7'>
                {/* card 1 */}
                  <div className='bg-gray-500 rounded-3xl p-7 flex flex-col flex-wrap items-center  justify-center gap-5 text-gray-200 card'>
                        <img src="./learn.png" alt="" className='h-10 w-10 mx-auto'/>
                        <h2 className='font-bold text-[20px]'>Learn Any Skill</h2>
                        <p className='text-[16px] font-[600] text-center'>Discover skills from people around the world. From coding to cooking, photography to yoga—learn directly from real individuals.</p>
                  </div>

                  {/* card 2 */}
                  <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center  justify-center gap-5 text-gray-200 card' >
                        <img src="./shareskill.png" alt="" className='h-10 w-10 mx-auto'/>
                        <h2 className='font-bold text-[20px]'>Share What You Know</h2>
                        <p className='text-[16px] font-[600] text-center'>Offer your own skills to others. Whether you’re a professional or just passionate about a hobby, there’s always someone eager to learn.</p>
                  </div>

                  
                  {/* card 3 */}
                  <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center  justify-center gap-5 text-gray-200 card'>
                    <img src="./connect.png" alt="" className='h-10 w-10 mx-auto'/>
                    <h2 className='font-bold text-[20px]'>Connect & Collaborate</h2>
                    <p className='text-[16px] font-[600] text-center'>Chat with other learners and teachers. Exchange ideas, ask questions, and collaborate on new learning experiences.</p>
                  </div>

                  
                  {/* card 4 */}
                  <div className='bg-gray-500 rounded-3xl p-7 flex flex-col items-center  justify-center gap-5 text-gray-200 card'>
                    <img src="./exchange.png" alt="" className='h-10 w-10 mx-auto'/>
                    <h2 className='font-bold text-[22px]'>Easy Skill Exchange</h2>
                    <p className='text-[16px] font-[600] text-center '>No fees, no middlemen—just pure skill sharing. Teach what you know, learn what you want.</p>
                  </div>
              </div>

        </div>
    </div>
  )
}

export default Features
