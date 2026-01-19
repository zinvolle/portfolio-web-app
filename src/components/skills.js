import React from "react";
import approved from "../pictures/approved.png"

function Skills() {

    const skills = [
        { name: 'React' },
        { name: 'NodeJS' },
        { name: 'SQL Database' },
        { name: 'ExpressJS' },
        { name: 'Active Directory' },
        { name: 'Palo Alto Firewall' },
        { name: 'Office 365' },
        { name: 'Network Security' },
        { name: 'Azure/AWS' }
      ];

    return (
        <div className="mb-20">
            <div className="flex flex-col items-center">
                <p className="bg-yellow-300 p-3 px-6 montserrat font-bold mt-16 text-xl">Skills</p>
                <p className="montserrat text-xl lg:text-3xl font-bold mt-8 mb-10 text-center">Skills I have developed over my university and work</p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center w-3/4">
                    {skills.map((skill)=>(
                      <div className='bg-yellow-300 flex flex-row items-center p-2 rounded-full justify-center'>
                        <p className='montserrat text-l lg:text-xl ml-2 font-bold text-center'>{skill.name}</p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;