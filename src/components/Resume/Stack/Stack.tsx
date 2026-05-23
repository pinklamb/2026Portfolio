import './Stack.css'

export default function Stack() {
  return (
    <div className="stack">
      <div className="stack-label"> 02 — STACK</div>

      <div className="stack-category">
        <div className="stack-sublabel">DEVOPS &amp; INFRA</div>
        <div className="stack-list">
          AWS  - Terraform - Docker - Linux - Bash - GitHub Actions
        </div>
      </div>

      <div className="stack-category">
        <div className="stack-sublabel">LANGUAGES</div>
        <div className="stack-list">
          Python - TypeScript - JavaScript - Java - C - C++ <br></br> SQL
        </div>
      </div>

      <div className="stack-category">
        <div className="stack-sublabel">BACKEND &amp; FRAMEWORKS</div>
        <div className="stack-list">
          Node.js - FastAPI - REST APIs - React - Vue
        </div>
      </div>

      <div className="stack-category">
        <div className="stack-sublabel">AI &amp; INTEGRATION</div>
        <div className="stack-list">
          Groq - Llama 3.3 - Prompt engineering - LLM API design
        </div>
      </div>

      <div className="stack-interested">
        <div className="interested-label">— INTERESTED IN</div>
        <div className="interested-text">
          Full-stack &amp; <span className="interested-accent">DevOps</span> roles
        </div>
      </div>
    </div>
  )
}