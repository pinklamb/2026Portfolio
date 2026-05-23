import './BottomBox.css'

export default function BottomBox() {
  return (
    <div className="contact-bottom-links">
      <a 
        href="https://github.com/pinklamb" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bottom-link"
      >
        <div className="link-label">CODE</div>
        <div className="link-value"> GITHUB</div>
      </a>

      <a 
        href="https://www.linkedin.com/in/chanelle-legrand-4611bb211" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bottom-link"
      >
        <div className="link-label">NETWORK</div>
        <div className="link-value"> LINKEDIN</div>
      </a>

      <a 
        href="mailto:chanellelegrand59@gmail.com"
        className="bottom-link bottom-link-primary"
      >
        <div className="link-label">EMAIL</div>
        <div className="link-value"> DIRECT</div>
      </a>
    </div>
  )
}