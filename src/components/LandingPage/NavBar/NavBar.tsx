import { useState } from 'react'
import './NavBar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Left side: Status */}
      <div className="navbar-status">
        <span className="status-indicator"></span>
        <span className="status-text">AVAILABLE FOR WORK</span>
      </div>

      {/* Hamburger Toggle Button (Hidden on Desktop) */}
      <button 
        className={`navbar-toggle ${isOpen ? 'is-active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>


      <div className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        
        <a href="#resume" onClick={() => setIsOpen(false)}>RESUME</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </div>

      
      <div className={`navbar-version ${isOpen ? 'is-open' : ''}`}>
      </div>
    </nav>
  )
}

