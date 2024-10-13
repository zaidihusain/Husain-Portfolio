import { useState } from 'react'
import Navbar from './Sections/Navbar.jsx';
import Hero from './Sections/Hero.jsx';
import About from './Sections/About.jsx';
import Projects from './Sections/Projects.jsx';
import Contact from './Sections/Contact.jsx';
import Footer from './Sections/Footer.jsx';
import WorkExperience from './Sections/Experience.jsx';




function App() {
 

  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <WorkExperience />
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
