import ResumeHeader from './ResumeHeader/ResumeHeader'
import Education from './Education/Education'
import Stack from './Stack/Stack'
import DownloadCTA from './DownloadCTA/DownloadCTA'
import './Resume.css'

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <ResumeHeader />

      <div className="resume-grid">
        <Education />
        <div className="resume-right-column">
          <Stack />
          <DownloadCTA />
        </div>
      </div>
    </section>
  )
}