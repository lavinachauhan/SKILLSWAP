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
        <div className="quicksand">
             <NavBar links = {dashLinks}/>
            <div className="text-white flex flex-col items-center mt-18 mx-auto h-[10rem] w-fit  gap-10">
                    {/* Welcome banner */}
                    <h1 className="text-5xl font-extrabold text">Hi, Username!</h1>
                    <p className="text-2xl font-medium">Welcome back to SkillSwap</p>
            </div>

             {/* Quick Links */}
            <div>
                {/* Profile */}
                <div>

                </div>

                {/* Add skill */}
                <div>


                </div>
                {/* Browse Skills */}
                <div>

                </div>

                {/* Messages */}
                <div>
                    
                </div>
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