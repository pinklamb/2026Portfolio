import './RightInfo.css'

export default function RightInfo() {
  return (
    <div className="hero-right">
      <div className="hero-metadata">
        <div className="metadata-item">
          <span className="metadata-label">BASED IN — </span>
          <span className="metadata-value">WASHINGTON, D.C.</span>
        </div>
        <div className="metadata-scroll">
          {/* Changed src path to reference the public root correctly */}
          <img src="/down-arrow.png" className='down-arrow' alt="Scroll Indicator" />
          SCROLL TO COLLECTION
        </div>
      </div>
    </div>
  )
}
