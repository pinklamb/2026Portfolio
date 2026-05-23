import './Education.css'

export default function Education() {
  return (
    <div className="education">
      <div className="education-label"> 01 — EDUCATION</div>

      <div className="education-degree">
        B.S. <span className="degree-italic">Computer Science</span>
      </div>
      <div className="education-school">
        Howard University · 2020 — 2025
      </div>

      <div className="education-sublabel">— RELEVANT COURSEWORK</div>
      <div className="education-coursework">
        Data Structures &amp; Algorithms<br/>
        Operating Systems<br/>
        Database Systems<br/>
        Computer Networks<br/>
        Cloud Computing
      </div>

      <div className="education-sublabel">— CERTIFICATIONS IN PROGRESS</div>
      <div className="education-certs">
        <div className="cert-item">
          <span className="cert-name">AWS Solutions Architect</span>
          <span className="cert-level">Associate</span>
        </div>
        <div className="cert-item">
          <span className="cert-name">HashiCorp Terraform</span>
          <span className="cert-level">Associate</span>
        </div>
      </div>
    </div>
  )
}