import './RightInfo.css'

export default function RightInfo() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero-right">
      <div className="hero-metadata">
        <div className="metadata-item">
          <span className="metadata-label">BASED IN — </span>
          <span className="metadata-value">WASHINGTON, D.C.</span>
        </div>
        <div className="metadata-scroll" onClick={scrollToProjects}>
          <img src="img/down-arrow.png" className='down-arrow' alt="Scroll Indicator" />
          SCROLL TO COLLECTION
        </div>
      </div>
    </div>
  )
}
