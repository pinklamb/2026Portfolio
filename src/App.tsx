import { useEffect, useState } from 'react'
import Navbar from './components/LandingPage/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import AboutMe from './components/AboutMe/AboutMe'
import BottomBar from './components//LandingPage/BottomBar/BottomBar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import './App.css'

export default function App() {
  const [isHeroActive, setIsHeroActive] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down more than 150px, flag the bottom bar to fade out
      if (window.scrollY > 150) {
        setIsHeroActive(false)
      } else {
        setIsHeroActive(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  
    <div className="app-container">
      <Navbar />
      
      <section id="hero">
        <LandingPage />
      </section>

      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
        <Contact />
      </section>
      {/* Pass the visibility state as a class wrapper */}
      <div className={`global-bottom-bar ${isHeroActive ? 'visible' : 'hidden'}`}>
        <BottomBar />
      </div>
    </div>
  )
}

