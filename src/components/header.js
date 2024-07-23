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
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-3xl font-bold ">
            <img src={amos} className="h-11"></img>
          </div>
          <div className="flex text-2xl font-bold">
            <img src={phone} className="h-9 w-9 mr-1"></img>
            <div>
              <p>(61) 422 125 295</p>
            </div>
            <div>
              <button onClick={toggleMenu}>
                <img src={menu} className="h-9 w-9 invert ml-3"></img>
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
            <li><button onClick={()=>{handleScroll(800); toggleMenu()}} className="hover:text-yellow-300 transition ease-in-out duration-500">About</button></li>
            <li><button onClick={()=>{handleScroll(1600); toggleMenu()}} className="hover:text-yellow-300 transition ease-in-out duration-500">Resume</button></li>
            <li><button onClick={()=>{handleScroll(2800); toggleMenu()}} className="hover:text-yellow-300 transition ease-in-out duration-500">Skills</button></li>
            <li><button onClick={()=>{handleScroll(3350); toggleMenu()}} className="hover:text-yellow-300 transition ease-in-out duration-500">Projects</button></li>
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