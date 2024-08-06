import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function CardHero() {
  return(
    <>
     <div className="flex justify-between py-2 px-6 bg-white w-11/12 absolute top-4 left-2/4 -translate-x-2/4 rounded-md items-center transition-all hover:top-7">
          <div className='flex items-center gap-4'>
            <img src='src/assets/logo.png' className='h-8'></img>
            <p className='text-lg font-medium max-sm:text-base'>Muhammad Fauzan's Portofolio</p>
          </div>
          <a href='#'>
            <div className='flex items-center gap-2'>
              <img src='src/assets/github.png' className='h-5'></img>
              <p className='text-sm max-sm:hidden'>Visit My Github</p>
            </div>
          </a>
        </div>
    </>
  )
}

function Hero() {
  return(
    <>
      <div className="w-full h-screen custom-bg bg-repeat fixed top-0">
        <CardHero />
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Hero />
    </>
  )
}

export default App
