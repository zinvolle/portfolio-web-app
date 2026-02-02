import React from "react";
import '../index.css';
import {motion} from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };


function Resume() {

    return(
        <div id="resumesection" className="bg-neutral-100 pb-20">
            <div className="flex flex-col items-center">
                <p className="bg-yellow-300 p-3 px-6 montserrat font-bold mt-16 text-xl">Resume</p>
                <p className="text-center montserrat text-3xl lg:text-5xl font-bold mt-8 mb-10">My work and education history</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly mt-5">
                <div>
                    <p className="text-3xl montserrat font-bold mb-5 text-center lg:text-left">Education</p>
                    <div className="border-4 border-neutral-100 border-l-yellow-300 border-b-neutral-200 p-8">
                        <p className="text-xl montserrat font-bold">Master's of IT (Computer Science)</p>
                        <p className="text-l montserrat font-medium mt-2 mb-2">Queensland University of Technology | 2022-2024</p>
                        <p className="text-l montserrat">Graduated with Distinction Average</p>
                        <p className="text-l montserrat">GPA: 6/7</p>
                    </div>
                    <div className="border-4 border-neutral-100 border-l-yellow-300 p-8">
                        <p className="text-xl montserrat font-bold">Bachelor's of Science</p>
                        <p className="text-l montserrat font-medium mt-2 mb-2">University of Sydney | 2019-2022</p>
                        <p className="text-l montserrat">Graduated with Distinction Average</p>
                        <p className="text-l montserrat">Dean's List of Academic Excellence</p>
                        <p className="text-l montserrat">Weighted Average Mark: 80</p>
                    </div>
                </div>
                <div>
                    <p className="text-3xl montserrat font-bold mb-5 text-center lg:text-left">Work History</p>
                    <div className="border-4 border-neutral-100 border-l-yellow-300 border-b-neutral-200 p-8">
                        <p className="text-xl montserrat font-bold">Systems Administrator</p>
                        <p className="text-l montserrat font-medium mt-2 mb-2">Nexia Sydney | 10/2024 - 12/2025</p>
                        <p className="text-l montserrat">Administered Active Directory, MS 365, Azure applications and<br/>
                                                        enforcing Group Policy Objects to ensure system security</p>
                        <p className="text-l montserrat">Used Windows Server environments, Laptop Imaging and <br/>
                                                        troubleshooting servers on VM-Ware.</p>
                        <p className="text-l montserrat">Automation with Python, Powershell scripts and APIs</p>
                    </div>
                    <div className="border-4 border-neutral-100 border-l-yellow-300 border-b-neutral-200 p-8">
                        <p className="text-xl montserrat font-bold">Support Developer</p>
                        <p className="text-l montserrat font-medium mt-2 mb-2">Queensland University of Technology | 01/2024 - 06/2024</p>
                        <p className="text-l montserrat">Implemented CI/CD Pipelines</p>
                        <p className="text-l montserrat">Designed and developed security architecture in <br/> 
                                                         encrypting data onto the Ethereum blockchain</p>
                        <p className="text-l montserrat">Developed Express API to perform CRUD operations in MongoDB</p>
                        <p className="text-l montserrat">Developed user-friendly frontend interface </p>
                    </div>
                    <div className="border-4 border-neutral-100 border-l-yellow-300 p-8">
                        <p className="text-xl montserrat font-bold">AI Trainer (Freelance)</p>
                        <p className="text-l montserrat font-medium mt-2 mb-2">Data Annotation | 03/2024 - 06/2025</p>
                        <p className="text-l montserrat">Training LLMs to improve quality of outputs</p>
                        <p className="text-l montserrat">Providing Leetcode style prompts to LLMs and assessing <br/> 
                        the efficiency generated code. </p>
                        <p className="text-l montserrat">Using numpy and pandas libraries for data analysis</p>
                        <p className="text-l montserrat">Writing and responding to SQL queries and JSON data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resume;