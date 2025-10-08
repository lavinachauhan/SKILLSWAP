import React from "react";
import {Link} from 'react-router-dom';
import NavBar from "./NavBar";

const Dashboard = () => {
    const dashLinks = [
    {path : "/LogInHome", label : "Home"},
    {path : "/skills", label : "Browse Skills"},
    {path : "/Message", label : "Messages"},
    {path : "/profile", label : "Profile"},
    {path : "/", label : "Logout"}]
    return (
        <div className='quicksand text-white'>
             <NavBar links = {dashLinks}/>
            <div className="text-white flex flex-col items-center mt-18 mx-auto h-[10rem] w-fit  gap-10">
                    {/* Welcome banner */}
                    <h1 className="text-5xl font-extrabold text">Hi, Username!</h1>
                    <p className="text-2xl font-medium">Welcome back to SkillSwap</p>
            </div>

             {/* Quick Links */}
            <div className = 'grid grid-cols-2 grid-rows-4 gap-10 p-6 rounded-3xl h-[100rem] w-[1080px] mx-auto mt-[15rem] bg-gray-500/80'>
                {/* Profile */}
                <a href="#">
                    <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
                        <img src="./profile.png" alt="" className = "h-28 w-28"/>
                        <h3 className="font-bold text-4xl">Profile</h3>
                        <p className = 'text-3xl text-center'>View and update your 
                            personal details and skill preferences
                        </p>
                    </div>
                </a>
                

               <div>

                </div>

                {/* Add skill */}
                <div>

                </div>

                <a href="#">
                    <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
                        <img src="./add.png" alt="" className = "h-28 w-28"/>
                        <h3 className="font-bold text-4xl">Add a Skill</h3>
                        <p className = 'text-[32px] text-center'>Share a skill you can teach and help others learn</p>
                    </div>
                </a>
                {/* Browse Skills */}
                 <a href="#">
                    <div className = 'border-transparent  rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
                        <img src="./search.png" alt="" className = "h-28 w-28"/>
                        <h3 className="font-bold text-4xl">Browse Skills</h3>
                        <p className = 'text-3xl text-center'>Explore what others are offering
                            and find the skills you want to learn
                        </p>
                    </div>
                </a>

                 <div>

                </div>

                {/* Messages */}
                <div>

                </div>
                <a href="#">
                    <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-5 quicklinks'>
                        <img src="./message.png" alt="" className = "h-26 w-26"/>
                        <h3 className="font-bold text-4xl">Messages</h3>
                        <p className = 'text-3xl text-center'>Check your conversations and Connection with others learners and teachers</p>
                    </div>
                </a>
            
            </div>
            

            {/* Recent Activity */}
        <div className="flex flex-col items-center gap-8 p-6 w-[90%] max-w-[1080px] mx-auto mt-[10rem]  bg-gray-500/80 rounded-2xl text-white">
            <h1 className="text-3xl font-bold mb-4">Recent Activity</h1>

            <ul className="list-disc list-inside text-lg space-y-2 text-gray-100">
                <li>Priya requested to learn Guitar from you.</li>
                <li>You added "Python Basics" as a teaching skill.</li>
                <li>You accepted Rohit's connection request.</li>
                <li>Aarav gave you a 5-star review for Web Development.</li>
            </ul>
        </div>



            {/* Suggested Connection */}
            <div className = 'flex flex-col items-center  gap-12 p-4 rounded-4xl w-[700px] mx-auto mt-[15rem] bg-gray-500/80'>
                <h1 className = 'text-3xl font-bold'>
                    Suggested Connections
                </h1>

                {/* sample user cards */}
                <div className = 'flex flex-col gap-10'>
                    {/* card1 */}
                    <div className = 'flex justify-evenly items-center gap-10'>
                        {/* left part */}
                        <img src="./sampleProfile.jpg" alt="userImg" className="h-20 w-20 rounded-[60px]" />
                        <div>
                            <p className="font-bold text-2xl">Meera Kapoor</p>
                            <p className = 'text-2xl '>Graphic Design</p>
                        </div>
                        {/* right part */}
                        <button className="h-10 w-34 font-bold text-2xl rounded-4xl flex items-center justify-center bg-white/80">Connect</button>
                    </div>

                    {/* card2 */}
                    <div className = 'flex justify-evenly items-center gap-10'>
                        {/* left part */}
                        <img src="./sampleProfile.jpg" alt="userImg" className="h-20 w-20 rounded-[60px]" />
                        <div>
                            <p className="font-bold text-2xl">Meera Kapoor</p>
                            <p className = 'text-2xl '>Graphic Design</p>
                        </div>
                        {/* right part */}
                        <button className="h-10 w-34 font-bold text-2xl rounded-4xl flex items-center justify-center bg-white/80">Connect</button>
                    </div>

                    {/* card3 */}
                     <div className = 'flex justify-evenly items-center gap-10'>
                        {/* left part */}
                        <img src="./sampleProfile.jpg" alt="userImg" className="h-20 w-20 rounded-[60px]" />
                        <div>
                            <p className="font-bold text-2xl">Meera Kapoor</p>
                            <p className = 'text-2xl '>Graphic Design</p>
                        </div>
                        {/* right part */}
                        <button className="h-10 w-34 font-bold text-2xl rounded-4xl flex items-center justify-center bg-white/80">Connect</button>
                    </div>

                    {/* card4 */}
                    <div className = 'flex justify-evenly items-center gap-10'>
                        {/* left part */}
                        <img src="./sampleProfile.jpg" alt="userImg" className="h-20 w-20 rounded-[60px]" />
                        <div>
                            <p className="font-bold text-2xl">Meera Kapoor</p>
                            <p className = 'text-2xl '>Graphic Design</p>
                        </div>
                        {/* right part */}
                        <button className="h-10 w-34 font-bold text-2xl rounded-4xl flex items-center justify-center bg-white/80">Connect</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard