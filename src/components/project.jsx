import React from "react"
import condangan from '../../public/condangan.png'
import nodejsLogo from '../../public/nodejs.svg'
import tailwindLogo from '../../public/tailwind.svg'
import figmaLogo from '../../public/figma.svg'
import postgressLogo from '../../public/postgress.svg'
import shurkou from '../../public/shurkou.png'

function Project() {
    return (
      <>
        <div className="flex justify-center bg-white text-black">
          <div className="w-11/12 relative">
  
            <div className="sticky top-0 bg-white">
              <div className="py-8 flex gap-4 items-center">
                <i className="fi fi-br-arrow-turn-down-right text-5xl rotate-90 -scale-y-100"></i>
                <h1 className="text-6xl">Project</h1>
              </div>
              <div className="w-full h-hr bg-black"></div>
            </div>
  
            <div className="flex flex-col py-8 gap-20">
  
              <div className="flex gap-4 max-md:flex-col-reverse border-r-2 border-black border-opacity-50">
                <img className="w-80 h-48 rounded-md" src={condangan} alt="Condangan" />
                <div className="flex flex-col justify-around max-md:gap-2">
                  <h1 className="text-3xl">HIMA IF Condangan - Website</h1>
                  <p className="w-3/4 text-base">Condangan is a website designed as a platform where clients and student freelancers can connect. I contributed as a full-stack developer for this site.</p>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Built With:</p>
                    <div className="flex gap-2 items-center">
                      <img className="h-6" src={nodejsLogo} alt="Node.js" />
                      <img className="h-6" src={tailwindLogo} alt="Tailwind CSS" />
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-4 max-md:flex-col-reverse border-r-2 border-black border-opacity-50">
                <img className="w-80 h-48 rounded-md" src={shurkou} alt="Shurkou Store" />
                <div className="flex flex-col justify-around max-md:gap-2">
                  <h1 className="text-3xl">Shurkou Store - Website (PROGRESS)</h1>
                  <p className="w-3/4 text-base">I contributed as a UI/UX designer and full-stack developer. The site includes subscription services, login and signup features, and payment gateway integration (in progress).</p>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Built With:</p>
                    <div className="flex gap-2 items-center">
                      <img className="h-6" src={figmaLogo} alt="Figma" />
                      <img className="h-6" src={nodejsLogo} alt="Node.js" />
                      <img className="h-6" src={tailwindLogo} alt="Tailwind CSS" />
                      <img className="h-6" src={postgressLogo} alt="PostgreSQL" />
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Project;