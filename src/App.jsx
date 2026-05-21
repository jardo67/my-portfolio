import { useState, useEffect, useRef } from 'react'
import './App.css'
import CaseStudy from './CaseStudy'

const PASSWORD = 'portfolio2025'

const projects = [
  {
    number: '01',
    title: 'Data Lineage',
    company: 'Ataccama',
    year: '2022–present',
    description:
      'Visualisation of graph-based dataflows across enterprise databases, enabling data engineers to perform root cause analysis, impact analysis, and trace data quality issues end-to-end.',
    outcome:
      "Fastest-adopted module in Ataccama's history — 25 enterprise customers onboarded shortly after launch.",
    tags: ['Data Visualisation', 'Graph UI', 'B2B SaaS', 'UX Research'],
  },
  {
    number: '02',
    title: 'Data Stories',
    company: 'Ataccama',
    year: '2023',
    description:
      'End-to-end design of a dashboard and presentation builder with live data — a PowerPoint-like editor enabling non-technical users to create and share insights without engineering support.',
    outcome:
      'Empowered business stakeholders to self-serve analytics and share insights independently.',
    tags: ['Dashboard Design', 'Editor UX', 'B2B SaaS'],
  },
  {
    id: 'processing-center',
    number: '03',
    title: 'Processing Center',
    company: 'Ataccama',
    year: '2024',
    description:
      'Redesigned the error discovery experience for platform workflows and jobs — transforming a frustrating diagnostic process into an intuitive, action-oriented interface accessible from anywhere in the platform.',
    outcome:
      'Reduced time-to-diagnosis and made error discoverability a first-class experience across the product.',
    tags: ['Interaction Design', 'Error Handling', 'Platform UX'],
  },
  {
    number: '04',
    title: 'In-store Analytics',
    company: 'Pygmalios',
    year: '2021–2022',
    description:
      'Mobile-first redesign of an in-store analytics product covering traffic flow, queue management, and customer journey analytics — enabling retail chain managers to act on data from anywhere.',
    outcome:
      'Full ownership from discovery research through to final UI delivery of a new mobile product.',
    tags: ['Mobile Design', 'Analytics', 'Retail'],
  },
]

function App() {
  const [openProject, setOpenProject] = useState(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef(null)

  function openModal(project) {
    setOpenProject(project)
    setPasswordInput('')
    setError(false)
  }

  function closeModal() {
    setOpenProject(null)
    setPasswordInput('')
    setError(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordInput === PASSWORD) {
      setActiveCaseStudy(openProject)
      closeModal()
    } else {
      setError(true)
      setPasswordInput('')
      inputRef.current?.focus()
    }
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 50)
    } else if (!activeCaseStudy) {
      document.body.style.overflow = ''
    }
  }, [openProject, activeCaseStudy])

  return (
    <>
      <nav>
        <span className="nav-name">Jaro Mlkvy</span>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Hero */}
        <section id="hero">
          <div className="container">
            <p className="hero-label">Product Designer</p>
            <h1 className="hero-heading">
              Designing clarity<br />in complex systems.
            </h1>
            <p className="hero-sub">
              5+ years crafting data-heavy interfaces for B2B SaaS —
              dashboards, analytics tools, and data visualisation.
            </p>
            <div className="hero-meta">
              <span>Nove Zamky, Slovakia</span>
              <span className="hero-dot" />
              <span className="available">
                <span className="available-dot" />
                Open to new opportunities
              </span>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work">
          <div className="container">
            <p className="section-label">Selected Work</p>
            <div className="projects-grid">
              {projects.map((p) => (
                <article
                  key={p.number}
                  className="project-card"
                  onClick={() => openModal(p)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(p)}
                >
                  <div className="project-card-inner">
                    <p className="project-number">{p.number}</p>
                    <div className="project-top">
                      <div className="project-company">
                        <span>{p.company}</span>
                        <span className="project-company-dot" />
                        <span>{p.year}</span>
                      </div>
                      <h2 className="project-title">{p.title}</h2>
                      <p className="project-desc">{p.description}</p>
                    </div>
                    <div className="project-bottom">
                      <p className="project-outcome">{p.outcome}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="container">
            <div className="about-grid">
              <div>
                <p className="about-label">About</p>
                <div className="about-body">
                  <p>
                    I'm a product designer based in Slovakia with 15 years of
                    experience in digital design. For the past 5 years I've
                    focused on complex B2B SaaS — particularly tools where the
                    data is dense, the users are technical, and clarity is
                    everything.
                  </p>
                  <p>
                    I work across the full design process: from user research
                    and journey mapping through to final UI delivery and design
                    system contribution. I'm increasingly integrating AI tools
                    into my workflow to accelerate iteration without losing
                    rigour.
                  </p>
                  <p>
                    Previously at Entain, Pygmalios, Odyzeo, and Mogdesign.
                    Currently at Ataccama.
                  </p>
                </div>
              </div>
              <div className="about-skills">
                <div className="skill-group">
                  <p className="skill-group-label">Skills</p>
                  <ul>
                    {[
                      'UX Research',
                      'Usability Testing',
                      'Interaction Design',
                      'Prototyping',
                      'Wireframing',
                      'Design Systems',
                      'Data Visualisation',
                    ].map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Tools</p>
                  <ul>
                    {[
                      'Figma',
                      'FigJam',
                      'Miro',
                      'PostHog',
                      'Notion',
                      'Claude Code',
                    ].map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="container">
            <p className="contact-label">Contact</p>
            <h2 className="contact-heading">Let's work together.</h2>
            <p className="contact-sub">
              Open to product design roles, freelance projects, or just a good
              conversation about design.
            </p>
            <a href="mailto:jaro.mlkvy@gmail.com" className="cta-link">
              jaro.mlkvy@gmail.com →
            </a>
          </div>
        </section>
      </main>

      {activeCaseStudy && (
        <CaseStudy
          project={activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}

      {openProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ✕
            </button>
            <div className="modal-lock">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <p className="modal-meta">{openProject.company} · {openProject.year}</p>
            <h2 className="modal-title">{openProject.title}</h2>
            <p className="modal-hint">This case study is password protected.</p>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                ref={inputRef}
                type="password"
                className={`modal-input${error ? ' modal-input-error' : ''}`}
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => { setPasswordInput(e.target.value); setError(false) }}
                autoComplete="off"
              />
              {error && <p className="modal-error">Incorrect password. Try again.</p>}
              <button type="submit" className="modal-submit">View case study →</button>
            </form>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Jaro Mlkvy</span>
          <a href="mailto:jaro.mlkvy@gmail.com">jaro.mlkvy@gmail.com</a>
        </div>
      </footer>
    </>
  )
}

export default App
