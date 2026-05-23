export type ProjectStatus =   'live' | 'building' | 'archived'

export interface ProjectLink {
  label: string
  url: string
  primary?: boolean  // If true, gets the salmon-outlined pill
}

export interface Project {
  number: string           
  title: string
  titlePunctuation?: string  // The DC appendage in italic
  subtitle: string         // Italic tagline
  year: string
  status: ProjectStatus
  description: string
  stack: string[]
  role: string
  links: ProjectLink[]
  screenshot?: string     
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Pulse',
    titlePunctuation: '.',
    subtitle: 'a pipeline-risk engine that tells sales teams which deals are quietly dying.',
    year: '2026',
    status: 'live',
    description: 'FastAPI backend scoring every deal 0–100 on five behavioral rules — customer silence, stage stagnation, stale next steps, single threading, and slipped close dates. When a deal hits red, Pulse drafts a re-engagement email through Groq\'s Llama 3.3 endpoint, tuned on the deal\'s specific risk signals.',
    stack: ['FASTAPI | PYTHON 3.10', 'GROQ | LLAMA 3.3 70B', 'RAILWAY | DEPLOYMENT'],
    role: 'FULL-STACK | API DESIGN',
    links: [
      { label: 'LIVE DEMO', url: 'https://pulse-frontend-production-20c1.up.railway.app/', primary: true },
      { label: 'API DOCS', url: 'https://drive.google.com/file/d/1dfdbsvR1v70ebQo8HiAsUxXmF0Dzt-Du/view?usp=drive_link' },
      { label: 'SLIDES', url: 'https://canva.link/24wl110s9ytsx8i' },
      { label: 'GITHUB', url: 'https://github.com/pinklamb/Pulse-backend' },
    ],
  },
  {
    number: '02',
    title: 'SafeRoute',
    titlePunctuation: 'DC',
    subtitle: 'A walking-route engine weighted by crime density.',
    year: '2026',
    status: 'live',
    description: 'Built to answer a small question with a complicated answer: what\'s the safest way to walk home? The app traverses a weighted graph of city blocks, scored against open D.C. crime data, and surfaces multiple route options — each with its own safety rating.',
    stack: ['NODE.JS | EXPRESS', 'GOOGLE MAPS API', 'D.C. OPEN DATA'],
    role: 'FULL-STACK',
    links: [
      { label: 'LIVE DEMO', url: 'https://safe-route-dc-production.up.railway.app/', primary: true },
      { label: 'GITHUB', url: 'https://github.com/pinklamb/Safe-Route-DC' },
    ],
  },
  {
    number: '03',
    title: 'Futures Risk Analysis',
    subtitle: 'A financial Risk engine for futures contracts',
    year: '2026 — ONGOING',
    status: 'building',
    description: 'Decides whether a futures trade is worth taking by combining regime detection, signal scoring, and a similarity-based historical backtest into a single verdict.',
    stack: ['PYTHON | REACT | FASTAPI'],
    role: 'LEAD DEVELOPER',
    links: [
      { label: 'FOLLOW ON GITHUB', url: 'https://github.com/pinklamb/FinTech', primary: true },
    ],
  },
]