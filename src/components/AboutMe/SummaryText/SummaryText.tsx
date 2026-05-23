import './SummaryText.css'

export default function SummaryText() {
  return (
    <div className="summary-text">
      
     
      <div className="summary-section">
        <div className="summary-label"> 01 — BACKGROUND</div>
        <p className="summary-paragraph summary-lead">
          <span className="drop-cap">I</span>'m a software engineer based in Washington, D.C. I found my way to code through a class I almost didn't take, and have been building things ever since.
        </p>
      </div>

     
      <div className="summary-section">
        <div className="summary-label"> 02 — WHAT I DO</div>
        <p className="summary-paragraph">
          I build full-stack applications with a focus on security, usability, and clean architecture. Most of my work lives at the intersection of backend logic and frontend craft — APIs that don't break, interfaces that don't confuse, systems that quietly do what they're supposed to.
        </p>
      </div>

     
      <div className="summary-section">
        <div className="summary-label"> 03 — WHAT I'M LOOKING FOR</div>
        <p className="summary-paragraph">
          Full-stack or backend roles where engineering quality matters and there's room to ship real things. I care about teams that take craft seriously without taking themselves too seriously and places where the work is hard, the people are good, and the product is something I'd actually use.
        </p>
      </div>

    </div>
  )
}