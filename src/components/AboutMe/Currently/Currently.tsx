import './Currently.css'

export default function Currently() {
  return (
    <div className="currently">
      <div className="currently-label">— CURRENTLY</div>

      <div className="currently-grid">
        
        {/* Reading */}
        <div className="currently-item">
          <div className="currently-item-label">READING</div>
          <div className="currently-item-title">
            Designing Data-Intensive Applications
          </div>
          <div className="currently-item-meta">Martin Kleppmann</div>
        </div>

        {/* Building */}
        <div className="currently-item">
          <div className="currently-item-label">BUILDING</div>
          <div className="currently-item-title">
            Fintech Focused Project
          </div>
          <div className="currently-item-meta currently-item-meta-accent">
            In progress... 
          </div>
        </div>

        
        <div className="currently-item">
          <div className="currently-item-label">LISTENING TO</div>
          <div className="currently-listening">
            <div className="equalizer" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="currently-item-title">
              Pink + White
            </div>
          </div>
          <div className="currently-item-meta">Frank Ocean</div>
        </div>

      </div>
    </div>
  )
}