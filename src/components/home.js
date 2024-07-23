import React, { useEffect } from "react";
import "../index.css"
import mypicture from "../pictures/myPicture.JPG"
import Typewriter from 'typewriter-effect'


function Home() {

    const handleScroll = (y) => {
        window.scrollTo({
            top: y,
            behavior: 'smooth',
        })
    }
    
    return (
        <div className="bg-yellow-300 flex flex-col lg:flex-row items-center justify-around p-4 h-screen">
            <img src={mypicture} className="rounded-full h-64 w-64 lg:h-96 lg:w-96 object-cover border-8 border-white mb-4 lg:mb-0 lg:mr-4"></img>
            <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl mb-4 montserrat">
                    Hi, I'm a Graduate Software Developer
                </p>
                <p className="text-6xl font-bold text-center lg:text-left mb-4 montserrat">
                    <Typewriter 
                    options={{
                        strings: ["Amos", "Developer", "Design"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                </p>
                <p className="text-xl text-center lg:text-left mb-4 montserrat">
                    Based in Sydney, Australia
                </p>
                <div className="flex flex-row space-x-4 mt-10">
                    <button onClick={()=> handleScroll(3350)} className="p-4 px-8 bg-gray-800 text-white font-bold montserrat transition duration-1000 ease-in-out hover:bg-gray-600">View my works</button>
                    <button onClick={()=> handleScroll(7000)} className="p-4 px-8 bg-gray-800 text-white font-bold montserrat transition duration-1000 ease-in-out hover:bg-gray-600">Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default Home;