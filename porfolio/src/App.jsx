
import './App.css'
import About from './components/About'
import Contact from './components/Contact'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tech from './components/Tech'
import Works from './components/Works'
import { StarsCanvas } from './components/canvas'


function App() {

  return (
    <>
      <div className='relative bg-primary z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}

export default App
