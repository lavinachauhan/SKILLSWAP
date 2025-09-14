import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div  className='quicksand bg-[url("./home-bg.jpg")] bg-cover bg-center h-[100vh] max-w-full overflow-x-hidden'>
        <nav className='flex justify-between p-6 w-full bg-purple-800/20 backdrop-blur-lg shadow-2xl'>
            <div className='font-extrabold text-4xl text-white'>SkillSwap</div>
            <ul className='flex text-2xl justify-between gap-8 text-gray-200'>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Login</li>
            </ul>
        </nav>

        {/* hero section */}
        <div>
            {/* left part */}
            <div>
                <h1>
                    Hey there! Swap your skills
                </h1>
                <p>Exchange your skills and learn something new for free!</p>
                <div>
                    <div>Get Started</div>
                    <div>Login</div>

                </div>
            </div>
            {/* right part */}
            <div>
                <img src="/herosection(1).png" alt="" />
            </div>
        </div>

      </div>

    </div>
  )
}

export default HomePage
