import './BottomBar.css'

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-item">
        <div className="bottom-bar-label">LANG</div>
        {/* Added requested languages */}
        <div className="bottom-bar-value">REACT · PY · VUE · JAVA</div>
      </div>

      <div className="bottom-bar-item">
        <div className="bottom-bar-label">ROLE</div>
        <div className="bottom-bar-value">FULL-STACK | DEVOPS</div>
      </div>

      <div className="bottom-bar-item">
        <div className="bottom-bar-label">STATUS</div>
        <div className="bottom-bar-value status-highlight">SHIPPING</div>
      </div>

      <div className="bottom-bar-item">
        <div className="bottom-bar-label">YEAR</div>
        <div className="bottom-bar-value">2026</div>
      </div>
    </div>
  )
}
