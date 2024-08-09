import { useState } from 'react'
import Hero from './components/hero'
import About from './components/about'
import Project from './components/project'
import Footer from './components/footer'
import dataProject from './components/data'


function App() {
  return (
    <>
      <Hero />
      <About />
      <Project 
        data = {dataProject}
      />
      <Footer />
    </>
  )
};

export default App
