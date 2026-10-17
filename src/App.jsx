import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Resume from './Components/Resume'
import Services from './Components/Services'
import Skills from './Components/Skill'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
      <Services/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
