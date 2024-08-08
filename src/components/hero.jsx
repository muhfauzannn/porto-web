import React from "react"
import logo from '../../public/logo.png'
import githubLogo from '../../public/github.png'
import profilePhoto from '../../public/photo.png'

function CardHero() {
    return(
      <>
       <div className="flex justify-between py-2 px-6 bg-white w-11/12 absolute top-4 left-2/4 -translate-x-2/4 rounded-md items-center transition-all hover:top-7">
            <div className='flex items-center gap-4'>
              <img src={logo} className='h-8'></img>
              <p className='text-lg max-sm:text-base font'>Muhammad Fauzan's Portofolio</p>
            </div>
            <a href='#'>
              <div className='flex items-center gap-2'>
                <img src={githubLogo} className='h-5'></img>
                <p className='text-sm max-sm:hidden'>Visit My Github</p>
              </div>
            </a>
          </div>
      </>
    )
  }
  
  function NameSpin() {
    return (
      <>
          <div className='flex gap-9'>
            <div className="custom-spinner flex overflow-hidden flex-nowrap">
              <p className='font-calora custom-size-font font-medium w-fit whitespace-nowrap'>MUHAMMAD FAUZAN MUHAMMAD FAUZAN</p>
            </div>
            <div className="custom-spinner flex overflow-hidden flex-nowrap">
              <p className='font-calora custom-size-font font-medium w-fit whitespace-nowrap'>MUHAMMAD FAUZAN MUHAMMAD FAUZAN</p>
            </div>
          </div>
      </>
    )
  }
  
  function Hero() {
    return(
      <>
        <div className="w-full h-screen custom-bg bg-repeat fixed top-0 flex items-center -z-10">
          <CardHero />
          <NameSpin />
          
          <div className='absolute bottom-0 w-2/3 max-w-lg max-md:w-8/12 max-sm:w-10/12 left-2/4 -translate-x-2/4'>
            <img src={profilePhoto}></img>
          </div>
  
          <div className="flex justify-between py-2 px-6 w-11/12 absolute bottom-4 left-2/4 -translate-x-2/4 items-center">
  
            <div className='p-2 max-md:p-0 max-md:-translate-x-full'>
              <div className="flex gap-5 max-md:flex-col">
                <a href='https://www.instagram.com/mfauuzaannn/' className='hover:scale-125 transition-all'><i class="fi fi-brands-instagram text-xl"></i></a>
                <a href='https://wa.me/6285155349773/' className='hover:scale-125 transition-all'><i class="fi fi-brands-whatsapp text-xl "></i></a>
                <a href='https://x.com/mineszero14' className='hover:scale-125 transition-all'><i class="fi fi-brands-twitter-alt text-xl"></i></a>
                <a href='https://www.linkedin.com/in/muhammad-fauzan14/' className='hover:scale-125 transition-all'><i class="fi fi-brands-linkedin text-xl"></i></a>
              </div>
            </div>
  
            <div className='flex items-center gap-4 p-2 bg-black rounded-md max-md:hidden'>
              <p className='text-lg font-medium max-sm:text-base text-white'>© 2024</p>
            </div>
  
          </div>
  
        </div>
      </>
    )
  }

  export default Hero