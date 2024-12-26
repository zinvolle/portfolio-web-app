import React from "react";
import {motion} from 'framer-motion';
import { useState, useEffect } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const elementPosition = document.getElementById('about-me').offsetTop +50;
      
            if (scrollPosition > elementPosition) {
              setIsVisible(true);
            }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, [])

    return (
        <div className="pb-20">
            <div className="flex flex-col items-center">
                <p className="bg-yellow-300 p-3 px-6 montserrat font-bold mt-20 text-xl">About Me</p>
                <p className="montserrat text-5xl lg:text-6xl font-bold mt-8">Know Me More</p>
            </div>
            <motion.div
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={fadeInUp}
                transition={{ duration: 2 }}
            >
            <div className="flex flex-col lg:flex-row justify-evenly mt-6 mb-6">
                <div>
                    <p id= 'about-me' className="montserrat text-3xl text-center lg:text-left">Hi, I'm Amos Ang</p>
                    <p className="montserrat text-xl mt-4 text-center lg:text-left md:mb-4 sm:mb-4">I am a graduate of Queensland University of Technology (QUT) <br/>
                        with a Master's degree in Computer Science, passionate in technology. <br/>
                        My expertise lies in crafting innovative solutions through programming <br/>
                        to drive efficiency and solve complex challenges.</p>
                </div>
          

                <div className="items-center flex flex-col text-center">
                    <div className="flex items-center justify-center bg-yellow-300 rounded-full h-24 w-24">
                        <p className="montserrat text-8xl font-medium">1</p>
                    </div>
                    <p id= 'about-me' className="montserrat text-2xl mt-3">Year of experience</p>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default About;