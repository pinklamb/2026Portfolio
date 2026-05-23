import './Header.css'

export default function Header() {
  return (
    <div className="about-header">
      <div className="about-header-text">
        <div className="about-header-label">— CHAPTER II</div>
        <h2 className="about-header-title">
          About <span className="title-italic">the engineer.</span>
        </h2>
      </div>

      <div className="about-header-meta">
        <div>PORTRAIT  BIO</div>
        <div>2026</div>
      </div>
    </div>
  )
}