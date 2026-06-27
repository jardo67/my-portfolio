import { useState, useEffect, useRef } from 'react'
import './App.css'
import CaseStudy from './CaseStudy'

const PASSWORD = 'portfolio2025'

const projects = [
  {
    id: 'data-lineage',
    title: 'Data Lineage',
    company: 'Ataccama',
    year: '2022–present',
    image: '/cs-dl/thumbnail.svg',
    description:
      'Visualisation of graph-based dataflows across enterprise databases, enabling data engineers to perform root cause analysis, impact analysis, and trace data quality issues end-to-end.',
    stat: '25+',
    statLabel: 'enterprise customers onboarded at launch',
    tags: ['Data Visualisation', 'Graph UI', 'B2B SaaS', 'UX Research'],
  },
  {
    id: 'data-stories',
    title: 'Data Stories',
    company: 'Ataccama',
    year: '2023',
    image: '/cs-ds/thumbnail.svg',
    description:
      'End-to-end design of a dashboard and presentation builder with live data — a PowerPoint-like editor enabling non-technical users to create and share insights without engineering support.',
    stat: '0',
    statLabel: 'engineering requests needed to publish insights',
    tags: ['Dashboard Design', 'Editor UX', 'B2B SaaS'],
  },
  {
    id: 'processing-center',
    title: 'Processing Center',
    company: 'Ataccama',
    year: '2024',
    image: '/cs-pc/solution-catalog-sidebar.png',
    description:
      'Redesigned the error discovery experience for platform workflows and jobs — transforming a frustrating diagnostic process into an intuitive, action-oriented interface accessible from anywhere in the platform.',
    stat: '3 → 1',
    statLabel: 'navigation levels to reach job-level detail',
    tags: ['Interaction Design', 'Error Handling', 'Platform UX'],
  },
  {
    id: 'instore-analytics',
    title: 'In-store Analytics',
    company: 'Pygmalios',
    year: '2021–2022',
    image: '/cs-ia/thumbnail.svg',
    description:
      'Mobile-first redesign of an in-store analytics product covering traffic flow, queue management, and customer journey analytics — enabling retail chain managers to act on data from anywhere.',
    stat: '0 → 1',
    statLabel: 'new mobile product from research to final delivery',
    tags: ['Mobile Design', 'Analytics', 'Retail'],
  },
]

// Woman, long center-parted hair, round glasses
const Avatar1 = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M3 34 Q4 18 9 12 Q12 6 17 5 Q22 6 25 12 Q30 18 31 34 Z" fill="#111"/>
    <ellipse cx="17" cy="19" rx="7.5" ry="9" fill="#F5E8D5" stroke="#111" strokeWidth="1"/>
    <path d="M11.5 14.5 Q13.5 13 15.5 14.5" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <path d="M18.5 14.5 Q20.5 13 22.5 14.5" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <circle cx="13.5" cy="18" r="2.3" stroke="#111" strokeWidth="0.9" fill="none"/>
    <circle cx="20.5" cy="18" r="2.3" stroke="#111" strokeWidth="0.9" fill="none"/>
    <line x1="15.8" y1="18" x2="18.2" y2="18" stroke="#111" strokeWidth="0.7"/>
    <circle cx="13.5" cy="18" r="0.9" fill="#111"/>
    <circle cx="20.5" cy="18" r="0.9" fill="#111"/>
    <path d="M14 24 Q17 27 20 24" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
  </svg>
)

// Man, short swept hair
const Avatar2 = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M9 18 Q8 6 17 5 Q26 6 25 14 Q22 11 17 12 Q12 11 9 18 Z" fill="#111"/>
    <ellipse cx="17" cy="20" rx="7.5" ry="9" fill="#EDD5B5" stroke="#111" strokeWidth="1"/>
    <path d="M11.5 16 Q13.5 14.5 15.5 16" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <path d="M18.5 16 Q20.5 14.5 22.5 16" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <circle cx="13.5" cy="19.5" r="1" fill="#111"/>
    <circle cx="20.5" cy="19.5" r="1" fill="#111"/>
    <path d="M14 25 Q17 28 20 25" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
  </svg>
)

// Woman, shoulder-length hair
const Avatar3 = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M5 32 Q4 17 10 11 Q13 6 17 5 Q21 6 24 11 Q30 17 29 32 Q24 28 22 23 Q20 28 17 28 Q14 28 12 23 Q10 28 5 32 Z" fill="#111"/>
    <ellipse cx="17" cy="19" rx="7.5" ry="9" fill="#F5E8D5" stroke="#111" strokeWidth="1"/>
    <path d="M11.5 14.5 Q13.5 13 15.5 14.5" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <path d="M18.5 14.5 Q20.5 13 22.5 14.5" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <circle cx="13.5" cy="18" r="1" fill="#111"/>
    <circle cx="20.5" cy="18" r="1" fill="#111"/>
    <path d="M14 24 Q17 27 20 24" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
  </svg>
)

// Man, short hair and full beard
const Avatar4 = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M10 16 Q9 6 17 5 Q25 6 24 16 Q21 12 17 12 Q13 12 10 16 Z" fill="#111"/>
    <ellipse cx="17" cy="19" rx="7.5" ry="9" fill="#F0DCC0" stroke="#111" strokeWidth="1"/>
    <path d="M10 23 Q10 31 17 33 Q24 31 24 23 Q20 26 17 26.5 Q14 26 10 23 Z" fill="#111"/>
    <path d="M11.5 15 Q13.5 13.5 15.5 15" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <path d="M18.5 15 Q20.5 13.5 22.5 15" stroke="#111" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
    <circle cx="13.5" cy="18.5" r="1" fill="#111"/>
    <circle cx="20.5" cy="18.5" r="1" fill="#111"/>
  </svg>
)

const testimonials = [
  {
    name: 'Colleague Name',
    position: 'Senior Product Manager',
    company: 'Ataccama',
    quote: 'This is where their quote about working with you will go. Something specific about your process, communication, or impact on the product.',
    Avatar: Avatar1,
    accent: '#7B6BAE',
  },
  {
    name: 'Colleague Name',
    position: 'Engineering Lead',
    company: 'Ataccama',
    quote: 'A second quote here. Great place to highlight a specific project collaboration or a quality that made the difference in day-to-day work.',
    Avatar: Avatar2,
    accent: '#C4785C',
  },
  {
    name: 'Colleague Name',
    position: 'Product Designer',
    company: 'Pygmalios',
    quote: 'A third perspective — ideally from a different company or role to show range. Can speak to research skills, delivery, or team dynamics.',
    Avatar: Avatar3,
    accent: '#4A8A8A',
  },
  {
    name: 'Colleague Name',
    position: 'Head of Product',
    company: 'Pygmalios',
    quote: 'A fourth quote. Leadership voices tend to speak to strategic thinking, ownership, and long-term impact — great for senior roles.',
    Avatar: Avatar4,
    accent: '#3A6090',
  },
]

function App() {
  const [openProject, setOpenProject] = useState(null)
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
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
    function onScroll() {
      const scrollY = window.scrollY
      setScrolled(scrollY > 60)

      if (scrollY < 50) setActiveSection('')

      const work = document.getElementById('work')
      if (work && !work.classList.contains('work--visible')) {
        const heading = work.querySelector('.work-heading')
        const headingMid = heading
          ? heading.getBoundingClientRect().top + heading.offsetHeight / 2
          : work.getBoundingClientRect().top
        if (headingMid <= window.innerHeight / 2) {
          work.classList.add('work--visible')
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['work', 'about', 'contact']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && window.scrollY > 50) setActiveSection(id) },
        { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
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
      <nav className={scrolled ? 'nav--scrolled' : ''}>
        <button className="nav-name" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>jaromlkvy</button>
        <ul>
          <li><a href="#work" className={activeSection === 'work' ? 'nav-active' : ''} onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>Work</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'nav-active' : ''} onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>About</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'nav-active' : ''} onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Hero */}
        <section id="hero">
          <div className="container">
            <p className="hero-label">Jaro Mlkvy, Product Designer</p>
            <h1 className="hero-heading">
              <span className="hero-line">Designs with care.</span>
              <span className="hero-line">Ships with taste.</span>
            </h1>
            <p className="hero-sub">
              B2B product designer with 15+ years of experience, and a dedicated film nerd.
              Same obsession with pacing, clarity, and not wasting the audience's time.
            </p>
            <button
              className="hero-cta"
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'end' })
              }}
            >
              View case studies →
            </button>
          </div>
        </section>

        {/* Work */}
        <section id="work">
          <div className="container">
            <h2 className="work-heading">A Peek Behind the Process</h2>
            <div className="work-card">
            <div className="projects-grid">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className={`project-card${p.id ? ' project-card--linked' : ''}`}
                  onClick={() => p.id && openModal(p)}
                  role={p.id ? 'button' : undefined}
                  tabIndex={p.id ? 0 : undefined}
                  onKeyDown={(e) => p.id && e.key === 'Enter' && openModal(p)}
                >
                  <div className="project-thumb">
                    {p.image
                      ? <img src={p.image} alt={p.title} />
                      : <div className="project-thumb-placeholder" />}
                  </div>
                  <div className="project-card-inner">
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
                      <div className="project-stat">
                        <span className="project-stat-value">{p.stat}</span>
                        <span className="project-stat-label">{p.statLabel}</span>
                      </div>
                      <div className="project-arrow">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" aria-hidden="true">
                          <path d="M4.5 8V5.5a3 3 0 1 1 6 0V8" stroke="#1C1C1C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="1.5" y="7" width="12" height="9" rx="2" stroke="#1C1C1C" strokeWidth="1.4"/>
                        </svg>
                        <span className="project-arrow-tooltip">Contact me for access</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="container">
            <h2 className="about-heading">About</h2>
            <div className="about-grid">
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

        {/* Testimonials */}
        <section id="testimonials">
          <div className="container">
            <h2 className="testimonials-heading">What coworkers say</h2>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <p className="testimonial-text">{t.quote}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ background: t.accent }}>
                      <t.Avatar />
                    </div>
                    <div className="testimonial-author-info">
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-meta">{t.position} · {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
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
          <span className="footer-made">
            Made with
            {/* Figma */}
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" aria-label="Figma" role="img">
              <path d="M5 0H2.5A2.5 2.5 0 000 2.5A2.5 2.5 0 002.5 5H5z" fill="#F24E1E"/>
              <circle cx="7.5" cy="2.5" r="2.5" fill="#FF7262"/>
              <circle cx="2.5" cy="7.5" r="2.5" fill="#A259FF"/>
              <circle cx="7.5" cy="7.5" r="2.5" fill="#1ABCFE"/>
              <path d="M5 10H2.5A2.5 2.5 0 000 12.5A2.5 2.5 0 002.5 15H5z" fill="#0ACF83"/>
            </svg>
            {/* Claude */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-label="Claude" role="img">
              <circle cx="7.5" cy="7.5" r="2.2" fill="#CC785C"/>
              <line x1="7.5" y1="0.5" x2="7.5" y2="3.5" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="7.5" y1="11.5" x2="7.5" y2="14.5" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="0.5" y1="7.5" x2="3.5" y2="7.5" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="11.5" y1="7.5" x2="14.5" y2="7.5" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="2.4" y1="2.4" x2="4.4" y2="4.4" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="10.6" y1="10.6" x2="12.6" y2="12.6" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="12.6" y1="2.4" x2="10.6" y2="4.4" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
              <line x1="4.4" y1="10.6" x2="2.4" y2="12.6" stroke="#CC785C" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            {/* Adobe Illustrator */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-label="Adobe Illustrator" role="img">
              <rect width="15" height="15" rx="2" fill="#31011E"/>
              <path d="M3.5 11.5L6 5H6.8L9.3 11.5H8.3L7.7 9.8H5.1L4.5 11.5H3.5zM5.4 9H7.4L6.4 6.4L5.4 9z" fill="#FF9A00"/>
              <circle cx="11.5" cy="5.8" r="0.8" fill="#FF9A00"/>
              <line x1="11.5" y1="7.5" x2="11.5" y2="11.5" stroke="#FF9A00" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </footer>

    </>
  )
}

export default App
