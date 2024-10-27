import Hero from './components/hero'
import About from './components/about'
import Project from './components/project'
import Footer from './components/footer'
import dataProject from './components/data'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Muhammad Fauzan Portofolio</title>
      </Helmet>
      <Hero />
      <About />
      <Project data={dataProject} />
      <Footer />
    </>
  )
}

export default App
