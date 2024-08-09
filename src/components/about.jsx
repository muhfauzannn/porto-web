import logo from '/logo.png'
import React from "react"

function About() {
    return(
        <>
            <div className=" bg-black mt-screen flex gap-12 justify-center py-40 px-8 max-md:flex-col">
                <div>
                <h1 className='text-white text-7xl pr-40 max-md:pr-0'>About</h1>
                </div>

                <div className='max-w-2xl flex flex-col gap-8'>
                <p className='text-2xl text-white'>Fauzan <span className='text-base font-extralight'>(HE/HIM)</span> is a student at the University of Indonesia, majoring in Computer Science. I have a deep passion for web development and am currently interested in learning more about software development. I am always eager to explore new technologies and deepen my knowledge in this field.</p>
                
                <div className='flex flex-col gap-4'>
                    <p className='text-1xl text-white'>Nice to see you, if you are interested to work with me you can reach me out.</p>
                    <div className='flex gap-4'>
                    <div className="p-2 bg-gray-900 rounded-md">
                        <img src={logo} className='h-10'></img>
                    </div>

                    <div className='text-white h-full flex flex-col justify-evenly'>
                        <p>Muhammad Fauzan</p>
                        <p className='opacity-60'>University of Indonesia</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default About;