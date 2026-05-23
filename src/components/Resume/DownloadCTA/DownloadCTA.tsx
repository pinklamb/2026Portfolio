import './DownloadCTA.css'

export default function DownloadCTA() {
  return (
    <div className="download-cta">
      <div className="download-text">
        Want the full résumé?
      </div>
      <a 
        href="/documents/CL_RESUME_2026.pdf" 
        download
        className="download-button"
      >
        DOWNLOAD PDF
      </a>
    </div>
  )
}