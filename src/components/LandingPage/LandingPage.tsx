import Background from './Background/Background'
import LeftInfo from './LeftInfo/LeftInfo'
import RightInfo from './RightInfo/RightInfo'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <Background />
        
        <div className="hero-grid">
          <LeftInfo />
          <RightInfo />
        </div>
      </div>
    </div>
  )
}



