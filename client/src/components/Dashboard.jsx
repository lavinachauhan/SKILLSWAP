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
        <div className='quicksand bg-[url("./bg-blue.jpg")] bg-cover h-[100%] text-white'>
             <NavBar links = {dashLinks}/>
            <div className="text-white flex flex-col items-center mt-18 mx-auto h-[10rem] w-fit  gap-10">
                    {/* Welcome banner */}
                    <h1 className="text-5xl font-extrabold text">Hi, Username!</h1>
                    <p className="text-2xl font-medium">Welcome back to SkillSwap</p>
            </div>

             {/* Quick Links */}
            <div className = 'grid grid-cols-2 grid-rows-4 gap-10 p-6 rounded-3xl h-[100rem] w-[1080px] mx-auto mt-[15rem] bg-gray-500/80'>
                {/* Profile */}
                <a href="">
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

                <a href="">
                    <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
                        <img src="./add.png" alt="" className = "h-28 w-28"/>
                        <h3 className="font-bold text-4xl">Add a Skill</h3>
                        <p className = 'text-[32px] text-center'>Share a skill you can teach and help others learn</p>
                    </div>
                </a>
                {/* Browse Skills */}
                 <a href="">
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
                <a href="">
                    <div className = 'border-transparent rounded-3xl h-[22rem] flex flex-col items-center justify-center gap-6 quicklinks'>
                        <img src="./message.png" alt="" className = "h-28 w-28"/>
                        <h3 className="font-bold text-4xl">Messages</h3>
                        <p className = 'text-3xl text-center'>Check your conversations and Connectionwith others learners and teachers</p>
                    </div>
                </a>
            
            </div>
            
            {/* Recent Activity */}
            <div>
                <h1>

                </h1>
                <div>

                </div>
            </div>

            {/* Suggested Connection */}
            <div>
                <h1>

                </h1>

                {/* sample user cards */}
                <div>
                    {/* card1 */}
                    <div>

                    </div>

                    {/* card2 */}
                    <div>
                        
                    </div>

                    {/* card3 */}
                    <div>
                        
                    </div>

                    {/* card4 */}
                    <div>
                        
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Dashboard