import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-status">
        <span className="status-indicator" aria-label="Available for work"></span>
        <span className="status-text">cl.dev / available for work</span>
      </div>

      <div className="navbar-links">
        <a href="#work">Projects</a>
        <a href="#about">About</a>
        <a href="#writing">Resume</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-version">v3.0.1</div>
    </nav>
  )
}