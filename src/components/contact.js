import React from "react";
import email from "../pictures/email.png"
import phone from "../pictures/phone.png"
import location from "../pictures/location-pin.png"

function Contact() {
    return (
        <div className="flex flex-col bg-yellow-300 justify-center text-center py-10 items-center">
            <p className="montserrat text-5xl font-bold">Contact Me!</p>
            <p className="montserrat text-2xl font-normal mt-10">I am interested to know how my skills and experience align with the needs of your company</p>
            <div>
                <div className='mt-10 flex flex-row items-center space-x-5'>
                    <img src={email} className='h-8 w-8 filter' alt='email' />
                    <p className='text-xl montserrat'>aeroaviation12@gmail.com</p>
                </div>
                <div className='mt-2 flex flex-row items-center space-x-5'>
                    <img src={phone} className='h-8 w-8 filter' alt='phone' />
                    <p className='text-xl montserrat'>(+61) 422 125 295</p>
                </div>
                <div className='mt-2 flex flex-row items-center space-x-5'>
                    <img src={location} className='h-8 w-8 filter' alt='location' />
                    <p className='text-xl montserrat'>Sydney</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;