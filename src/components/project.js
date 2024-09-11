import React from "react";
import { useState } from "react";
import stockspicture from "../pictures/stockspicture.jpg"
import ethereumlogo from "../pictures/ethereum.jpeg"
import stocksmobile from "../pictures/stocksmobile.jpeg"
import travel from "../pictures/travel.jpg"
import closeX from "../pictures/closeX.png"
import dotnet from "../pictures/dotnet.png"
import blazor from "../pictures/blazor-logo.png"

const projects = [
    { id: 0, name: "Stock Market Web App", github:"https://github.com/zinvolle/stock-web-app",picture: stockspicture, youtubeLink: 'https://www.youtube.com/embed/WkCmYnee_5Y', techAndTools: "React, REST API, SQL, Frontend Design", date: '11-10-2023', description: 'Developed a dynamic stock market application that retrieves the latest stock data from an API. The application allows users to search for stocks by their code, visualize stock performance using high-low graphs, and filter results by date for detailed analysis.' },
    { id: 1, name: "Ethereum Blockchain App", picture: ethereumlogo, github: "https://github.com/zinvolle/IFN711-Project" ,youtubeLink: 'https://www.youtube.com/embed/ds_e4VyrauY', techAndTools: "React, Express, MongoDB, NodeJS, Solidity, Smart Contract, Ethereum Blockchain, AWS Services, Public Key Encryption, Digital Signatures", date: '30-06-2024', description: 'To address the challenge of verifying student skills, we developed a solution that leverages the Ethereum blockchain. Using Solidity smart contracts deployed on Ganache, we store student skillsets in an immutable format, ensuring the records are secure and verifiable. We collaborated with universities to upload and maintain skill data on the blockchain. This system allows employers to access and verify these records, confident in the knowledge that the information is tamper-proof. Our project also incorporated advanced security measures, including public key cryptography and digital signatures. These technologies enhance the security and authenticity of the data, ensuring that each record can be verified and that the integrity of the information is maintained. In addition to the backend system, we designed a comprehensive security architecture and developed a user-friendly frontend. This interface enables universities to interact with the blockchain efficiently and manage student data effectively.' },
    { id: 2, name: "Stock Market Mobile App", picture: stocksmobile, youtubeLink: 'https://www.youtube.com/embed/i15adBS353g', techAndTools: "React Native, REST API, SQL, Frontend Design", date: '21-10-2023', description: 'Developed a dynamic mobile stock market application that empowers users to search for stocks using their ticker symbols, view real-time data and trends, and customize their experience by adding stocks to a personalized watchlist. The application also features advanced filtering options, allowing users to explore stocks by various industries and sectors. This comprehensive tool provides an intuitive interface for tracking and managing stock investments on the go.' },
    { id: 3, name: "Travel Agency Web App", picture: travel, youtubeLink: 'https://www.youtube.com/embed/G8ryWdm3V68', techAndTools: "Python, SQLite, Flask, Frontend Design, Algorithms Design", date: '03-02-2023', description: 'Developed "Milton Tours" a commercial tour booking website that allows users to browse and add tours to their shopping cart. Upon checkout, the application securely stores the transaction details in an SQLite database, ensuring seamless and reliable data management.' },
    { id: 4, name: "ASP.NET Web API", picture: dotnet, github: "https://github.com/zinvolle/Sample-Pokemon-Web-API", youtubeLink: 'https://www.youtube.com/embed/_pvW6TUaJF0', techAndTools: 'ASP.NET Web API, .NET Core, SQL, C#', date: '09-07-2024', description: 'Developed a robust Web API from scratch using .NET Core, seamlessly integrating it with a local SQL Server to handle comprehensive CRUD (Create, Read, Update, Delete) operations. This API facilitates efficient data management and interaction, enabling smooth communication between the application and the database for various data-driven functionalities.' },
    { id: 5, name: "Mouse Tracking Trainer", picture: blazor, github: "https://zinvolle.github.io/MouseTrainingP/", techAndTools: "Blazor Web Assembly, C#, .NET Core, CSS", date: '11/09/2024', description: "I created a mouse tracking trainer game where players click on a mole, much like the classic mole games but with a significantly higher difficulty level to offer a greater challenge. This game is not only fun but also designed with a purpose—it helps improve fine motor skills and hand-eye coordination. It can serve as a valuable tool for people undergoing rehabilitation or therapy, particularly those with neurological or psychological conditions such as ADHD, Parkinson’s, or other motor control disorders. The game's adjustable difficulty settings allow it to be tailored to different needs, providing both casual entertainment and therapeutic benefits for users who seek to sharpen their reflexes and coordination."}
]

const text = "Developed a dynamic stock market application that retrieves the latest stock data from an API. <br/> The application allows users to search for stocks by their code, visualize stock performance using <br/> high-low graphs, and filter results by date for detailed analysis."

function Project() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (projectId) => {
        setIsPopupOpen(true);
        setSelectedProject(projects[projectId]);
    }

    const closePopup = (project) => {
        setIsPopupOpen(false);
        setSelectedProject(null);
    }

    return (
        <div className="bg-neutral-100 pb-20">
            <div className="flex flex-col items-center">
                <p className="bg-yellow-300 p-3 px-6 montserrat font-bold mt-16 text-xl">Projects</p>
                <p className="montserrat text-xl lg:text-4xl font-bold mt-8 mb-10">A few of my university and personal projects</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-3/4 gap-4">
                    {projects.map(project => (
                        <button className="relative group" onClick={() => { openPopup(project.id) }}>
                            <img src={project.picture} className="w-full h-96 object-cover"></img>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity 
                         duration-300 text-white"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-white 
                           text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-xl montserrat">{project.name}</div>
                        </button>
                    ))}
                </div>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white p-6 px-20 relative flex flex-col max-w-6xl items-center max-h-screen overflow-y-auto custom-scrollbar pb-20">
                        <button className="absolute top-2 right-2" onClick={closePopup}>
                            <img src={closeX} className="h-10 w-10 invert" alt="Close" />
                        </button>

                        <div className="">
                            <p className="montserrat text-3xl font-bold text-center">{selectedProject.name}</p>
                        </div>
                        {selectedProject.youtubeLink ?
                            <div className='mt-10'>
                                <iframe
                                    title="YouTube Video Player"
                                    width="912"
                                    height="513"
                                    src={selectedProject.youtubeLink}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                            :
                            <div>
                            </div>
                        }

                        <div>
                            <p className="montserrat text-2xl font-bold mt-10">
                                Project Info
                            </p>
                            <p className="montserrat text-xl font-normal mt-2 text-wrap">
                                {selectedProject.description}
                            </p>
                            <p className="montserrat text-xl font-bold mt-5">Technologies and Tools</p>
                            <p className="montserrat text-xl font-normal mt-2">{selectedProject.techAndTools}</p>
                            <p className="montserrat text-xl font-bold mt-5">Date</p>
                            <p className="montserrat text-xl font-normal mt-2">{selectedProject.date}</p>
                            {selectedProject.github ? 
                            <div>
                                <p className="montserrat text-xl font-bold mt-5">Github</p>
                                <a href={selectedProject.github} className="montserrat text-xl font-normal mt-2">{selectedProject.github}</a>
                            </div>
                                :
                                <div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default Project;