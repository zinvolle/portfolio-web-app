import React from "react";
import approved from "../pictures/approved.png"

function Skills() {

    const skills = [
        { name: 'React' },
        { name: 'Microsoft .NET (C#)' },
        { name: 'NodeJS & ExpressJS' },
        { name: 'SQL & MongoDB' },
        { name: 'React Native' },
        { name: 'Blockchain' },
        { name: 'AWS and Azure' },
        { name: 'Machine Learning' },
        { name: 'Cryptography' }
      ];

    return (
        <div className="mb-20">
            <div className="flex flex-col items-center">
                <p className="bg-yellow-300 p-3 px-6 montserrat font-bold mt-16 text-xl">Skills</p>
                <p className="montserrat text-xl lg:text-3xl font-bold mt-8 mb-10 text-center">Skills I have developed over my university and personal projects</p>
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