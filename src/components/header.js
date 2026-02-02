import React from "react";
import { useState } from "react";
import "../index.css";
import menu from "../pictures/menu.png"
import amos from "../pictures/Amos.png"
import phone from "../pictures/phone.png"
import closeX from "../pictures/closeX.png"
import github from "../pictures/github.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleScroll = (y) => {
    window.scrollTo({
      top: y,
      behavior:'smooth'
    })
  }

  return (
    <header className="sticky top-0 bg-yellow-300 w-full z-30">
      <nav className="bg-yellow-300">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-10">
          <div className="font-bold ">
            <img src={amos} className="h-7 lg:h-11"></img>
          </div>
          <div className="flex font-bold">
            <div>
              <button onClick={toggleMenu}>
                <img src={menu} className="h-7 w-7 lg:h-9 lg:h-9 invert ml-3"></img>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`popup-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>

      <div className={`popup-content ${isMenuOpen ? 'open' : ''}`}>
        <div className="popup-content-inner">
          <ul className="space-y-8 text-white text-3xl montserrat font-bold">
            <li><button onClick={()=>{handleScroll(0); toggleMenu()} } className="hover:text-yellow-300 transition ease-in-out duration-500">Home</button></li>
            <li><button onClick={()=>document.getElementById("aboutmesection")?.scrollIntoView({behavior: "smooth"})} className="hover:text-yellow-300 transition ease-in-out duration-500">About</button></li>
            <li><button onClick={()=>document.getElementById("resumesection")?.scrollIntoView({behavior: "smooth"})} className="hover:text-yellow-300 transition ease-in-out duration-500">Resume</button></li>
            <li><button onClick={()=>document.getElementById("skillsection")?.scrollIntoView({behavior: "smooth"})} className="hover:text-yellow-300 transition ease-in-out duration-500">Skills</button></li>
            <li><button onClick={()=>document.getElementById("myprojects")?.scrollIntoView({behavior: "smooth"})} className="hover:text-yellow-300 transition ease-in-out duration-500">Projects</button></li>
            <li><button onClick={()=>{handleScroll(8000); toggleMenu()}} className="hover:text-yellow-300 transition ease-in-out duration-500">Contact</button></li>
            <div className="flex flex-row items-center justify-center">
              <a href="https://github.com/zinvolle" target="_blank" rel="noopener noreferrer">
                <img src={github} className="h-10 w-10 invert"></img>
              </a>
            </div>

          </ul>
          <button className="popup-close" onClick={toggleMenu}>
            <img src={closeX} className="h-10 w-10" alt="Close" />
          </button>
        </div>
      </div>

    </header>
  )
}

export default Header;