import Navbar from './NavBar/NavBar'
import Background from './Background/Background'
import LeftInfo from './LeftInfo/LeftInfo'
import BottomBar from './BottomBar/BottomBar'
import RightInfo from './RightInfo/RightInfo'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Background />
      

        <LeftInfo />
        <RightInfo />
      
      <BottomBar />
    </div>
  )
}

