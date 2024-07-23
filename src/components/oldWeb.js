import '../index.css';
import profileImage from '../pictures/myPicture.JPG'
import code from '../pictures/code.png'
import cpu from '../pictures/cpu.png';
import approved from '../pictures/approved.png'
import linkedin from '../pictures/linkedin.png'
import github from '../pictures/github.png'
import contact from '../pictures/contact.png'
import phone from '../pictures/phone.png'
import email from '../pictures/email.png'
import location from '../pictures/location-pin.png'
import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'React' },
  { name: 'Microsoft .NET (C#)' },
  { name: 'React Native' },
  { name: 'Blockchain' },
  { name: 'SQL & MongoDB' },
  { name: 'AWS and Azure' },
  { name: 'Express' },
  { name: 'Machine Learning' },
  { name: 'Cryptography' }
];

function Navbar({ scrollToRef, aboutRef, projectsRef, skillsRef }) {
  return (
    <nav className="bg-gray-800 text-white py-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-center items-center px-4">
        <div className="flex space-x-20 text-xl">
          <a href="#about" className="hover:text-gray-300" onClick={() => scrollToRef(aboutRef)}>About</a>
          <a href="#projects" className="hover:text-gray-300" onClick={() => scrollToRef(projectsRef)}>Projects</a>
          <a href="#skills" className="hover:text-gray-300" onClick={() => scrollToRef(skillsRef)}>Skills</a>
        </div>
      </div>
    </nav>
  );
}



function OldWeb() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const [animate, setAnimate] = useState(false);

  const scrollToRef = (ref) => {
    const yOffset = -130;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-indigo-700 flex flex-col justify-center items-center pb-48">
      <Navbar scrollToRef={scrollToRef} aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} />
      <section id="About Me" ref={aboutRef} className="container flex justify-center space-x-20">
        <div className="flex items-center">
          <div className="bg-white p-0.5 rounded-full overflow-hidden mt-40">
            <img
              src={profileImage}
              className="rounded-full w-64 h-64 object-cover"
              alt="profileImage"
            />
          </div>
        </div>
        <div className={`flex flex-col justify-center mt-40 transition-transform duration-300`}>
          <p className="text-white text-3xl">Hi, I am</p>
          <p className="text-white text-6xl mt-3">Amos</p>
          <p className="text-white text-2xl mt-3">Graduate Software Developer</p>
          <div className='flex space-x-3 mt-10'>
            <a href='https://github.com/zinvolle'>
              <img src={github} className='h-8 w-8' alt='github'/>
            </a>
            <a href='https://www.linkedin.com/in/amos-ang-3106aa282/'>
              <img src={linkedin} className='h-8 w-8' alt='linkedIn' />
            </a>
          </div>
        </div>
      </section>

      <hr className=" mt-40 border-white my-4 w-96"/>

      <section ref={projectsRef} className='mt-20 flex flex-col justify-center items-center'>
        <img src={code} className='w-20 h-20 filter invert' alt='code' />
        <h1 className='text-white text-6xl'>Projects</h1>
        <p className='text-white text-xl text-center mt-5 text'>
          Here are some projects I've worked on, both during my university studies <br/>
          and as personal initiatives outside of my academic curriculum.
        </p>
        <div className='flex grid grid-cols-2 gap-8'>
          <div className='mt-10'>
            <iframe
              title="YouTube Video Player"
              width="560"  
              height="315"
              src={`https://www.youtube.com/embed/WkCmYnee_5Y`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className='mt-10'>
            <iframe
              title="YouTube Video Player"
              width="560" 
              height="315"
              src={`https://www.youtube.com/embed/G8ryWdm3V68`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className='mt-10'>
            <iframe
              title="YouTube Video Player"
              width="560" 
              height="315"
              src={`https://www.youtube.com/embed/ds_e4VyrauY`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className='mt-10'>
            <iframe
              title="YouTube Video Player"
              width="560" 
              height="315"
              src={`https://www.youtube.com/embed/i15adBS353g`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <hr className=" mt-40 border-white my-4 w-96"/>

      <section id="Skills and Technologies" ref={skillsRef} className='mt-20 flex flex-col justify-center items-center'>
        <img src={cpu} className='w-20 h-20 filter invert' alt='cpu'/>
        <h1 className='text-white text-6xl mt-6'>Skills and Technologies</h1>
        <p className='text-white text-xl text-center mt-5 text'>
          Throughout my studies, I have developed proficiency in a range of skills and technologies.
        </p>
        <div className='grid grid-cols-3 gap-8 mt-8'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-indigo-900 flex flex-row w-96 justify-start items-center p-2 pl-6 pr-6 rounded-lg'>
              <img src={approved} className='h-10 w-10' alt={`${skill.name} icon`} />
              <p className='text-white text-xl ml-2'>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className=" mt-40 border-white my-4 w-96"/>

      <section id='Contact' className='mt-20 flex flex-col justify-center items-center text-white'>
        <img src={contact} className='w-20 h-20 filter invert' alt='contact'/>
          <h1 className='text-white text-6xl mt-6'>Contact Me</h1>
          <div className='mt-10 flex flex-row items-center space-x-5'>
            <img src={email} className='h-8 w-8 filter invert' alt='email'/> 
            <p className='text-xl'>aeroaviation12@gmail.com</p>
          </div>

          <div className='mt-4 flex flex-row items-center space-x-5'>
            <img src={phone} className='h-8 w-8 filter invert' alt='phone'/> 
            <p className='text-xl'>0422125295</p>
          </div>

          <div className='mt-4 flex flex-row items-center space-x-5'>
            <img src={location} className='h-8 w-8 filter invert' alt='location'/> 
            <p className='text-xl'>Sydney, Australia</p>
          </div>

      </section>
    </div>
  );
}

export default OldWeb;
