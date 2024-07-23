import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Project from "./components/project";
import Contact from"./components/contact";
import OldWeb from './components/oldWeb';
import './index.css'


function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;