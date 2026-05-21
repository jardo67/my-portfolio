import './CaseStudy.css'

function CsImage({ src, caption }) {
  return (
    <figure className="cs-image">
      <img src={src} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default function CaseStudy({ project, onClose }) {
  if (project.id !== 'processing-center') return null

  return (
    <div className="cs-page">
      {/* Top bar */}
      <header className="cs-header">
        <button className="cs-back" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to portfolio
        </button>
        <span className="cs-header-label">Ataccama · 2024</span>
      </header>

      <main className="cs-main">

        {/* Hero */}
        <section className="cs-hero">
          <p className="cs-eyebrow">Case Study</p>
          <h1>Processing Center<br />Redesign</h1>
          <p className="cs-hero-sub">
            A complete redesign of workflow visibility — replacing a three-level
            navigation drill-down with a single contextual sidebar, and bringing
            workflow status into the product surfaces where users already work.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Ataccama</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2024</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Product Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">Stakeholder interviews, Usability testing, Figma prototyping</span>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        {/* Discovery */}
        <section className="cs-section">
          <div className="cs-section-label">01 — Discovery</div>
          <h2>The problem hiding in plain sight</h2>
          <div className="cs-two-col">
            <div>
              <p>
                When a user initiates a workflow from a catalog item detail screen,
                they receive zero feedback on that workflow's progress or status.
                The platform provides no visibility from where the action was triggered.
              </p>
              <p>
                To see what's happening, they must navigate away from the catalog item
                and go to the Processing Center — a completely separate area of the
                product. This context switch breaks the flow entirely and forces users
                to hold mental state across two unrelated screens.
              </p>
              <p>
                What felt like a minor friction point turned out to be a systematic
                problem: users regularly lost track of whether workflows had succeeded,
                failed, or were still running — leading to duplicate runs, missed
                errors, and unnecessary support requests.
              </p>
            </div>
            <div className="cs-callout-block">
              <p className="cs-callout-quote">
                "I just don't know what's happening after I click the button. I assume
                it's working and check back later — but sometimes it failed hours ago."
              </p>
              <p className="cs-callout-source">User, stakeholder interview</p>
            </div>
          </div>

          <CsImage
            src="/cs-pc/before-catalog-item.png"
            caption="The catalog item detail screen — no indication of workflow status anywhere in the UI. The only way to check is to navigate to Processing Center via the sidebar."
          />
        </section>

        <div className="cs-divider" />

        {/* Exploration */}
        <section className="cs-section">
          <div className="cs-section-label">02 — Exploration</div>
          <div className="cs-two-col">
            <div>
              <h2>Auditing the existing experience</h2>
              <p>
                During stakeholder interviews and design reviews of the existing
                Processing Center, several structural issues surfaced that went
                beyond the original discovery problem.
              </p>
              <p>
                The information architecture required users to drill through
                three separate levels to reach actionable information about a
                specific job failure. Breadcrumbs at each level were
                misleading — they didn't reflect where the user had come from
                or what hierarchy they were navigating.
              </p>
              <p>
                Job names were duplicated as operation names, making it
                impossible to distinguish between entries in list views. The
                overall structure prioritised database-level organisation
                over the mental model of the people using it.
              </p>
            </div>
            <div className="cs-findings">
              <div className="cs-finding">
                <div className="cs-finding-number">01</div>
                <div>
                  <strong>Broken breadcrumbs</strong>
                  <p>Navigation trail didn't reflect actual drill-down path, disorienting users mid-task.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">02</div>
                <div>
                  <strong>Three-level drill-down</strong>
                  <p>Getting to a failed job required navigating through workflow → job type → job — three page loads.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">03</div>
                <div>
                  <strong>Ambiguous naming</strong>
                  <p>Job names repeated operation names, making lists impossible to scan.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">04</div>
                <div>
                  <strong>No in-context status</strong>
                  <p>Workflow status only visible inside Processing Center — never where the workflow originated.</p>
                </div>
              </div>
            </div>
          </div>

          <CsImage
            src="/cs-pc/before-ia-issues.png"
            caption="The existing Processing Workflows detail — annotated issues identified during stakeholder reviews. Breadcrumbs, naming, and the drill-down hierarchy were all flagged as pain points."
          />
        </section>

        <div className="cs-divider" />

        {/* Success criteria */}
        <section className="cs-section">
          <div className="cs-section-label">03 — Goals</div>
          <h2>How does success look?</h2>
          <div className="cs-goals">
            <div className="cs-goal">
              <span className="cs-goal-num">1</span>
              <div>
                <strong>Faster drill-down into workflows</strong>
                <p>Users should be able to see job-level detail in one step, not three.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">2</span>
              <div>
                <strong>Status visibility in context</strong>
                <p>Workflow status should be visible from wherever the workflow was triggered — not just inside Processing Center.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">3</span>
              <div>
                <strong>Failed workflows clearly surfaced</strong>
                <p>Failures should be impossible to miss — visually distinct, with actionable error detail close at hand.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        {/* Design process */}
        <section className="cs-section">
          <div className="cs-section-label">04 — Design Process</div>
          <div className="cs-two-col">
            <div>
              <h2>Iterating in the open</h2>
              <p>
                I created multiple iterations and user flows in Figma, exploring
                different structural approaches — sidebar patterns, card-based
                layouts, inline expansion, and a completely flat list with
                filtered views.
              </p>
              <p>
                Rather than designing in isolation, I brought early concepts into
                weekly design reviews and tested them directly with stakeholders
                to validate that we were solving the right problems in the right
                way. Each round of feedback sharpened the direction significantly.
              </p>
              <p>
                The sidebar pattern emerged as the clear winner — it preserved
                context, matched existing interaction patterns in the product,
                and allowed progressive disclosure without full page navigation.
              </p>
            </div>
            <div className="cs-process-steps">
              <div className="cs-process-step">
                <span className="cs-process-icon">↗</span>
                <div>
                  <strong>FigJam mapping</strong>
                  <p>Mapped current user flows and identified all the points where context was lost.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◫</span>
                <div>
                  <strong>Multiple sidebar experiments</strong>
                  <p>Explored v1 and v2 approaches with different information hierarchies and action placements.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◎</span>
                <div>
                  <strong>Stakeholder validation</strong>
                  <p>Tested concepts with data engineers and platform owners — the primary users of this tool.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">✓</span>
                <div>
                  <strong>Design system contribution</strong>
                  <p>Sidebar pattern and status indicators contributed back to the shared design system.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        {/* Solution */}
        <section className="cs-section">
          <div className="cs-section-label">05 — The Solution</div>
          <h2>Two changes, one coherent system</h2>

          {/* Solution 1 */}
          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 1</span>
              <h3>Sidebar-based workflow viewer</h3>
            </div>
            <p>
              The three-level drill-down was replaced with a single sidebar panel.
              Selecting any workflow in the Processing Center instantly opens a
              detail sidebar — no page navigation required.
            </p>
            <p>
              The sidebar shows workflow metadata at the top (ID, status, timestamps,
              duration) and a collapsible job type list below. Failed job types are
              visually flagged with a red indicator and a "jobs failed" count,
              making failures immediately visible without any further drilling.
            </p>
            <p>
              When a user wants to dig into a specific failed job, expanding the
              job type reveals the individual job list inline — still within the
              sidebar, still without leaving the workflow list page.
            </p>

            <div className="cs-solution-steps">
              <div className="cs-solution-step">
                <span>1</span>
                <p>User selects workflow from list</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>2</span>
                <p>Sidebar opens with full workflow detail</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>3</span>
                <p>Expand job type to see failed jobs inline</p>
              </div>
            </div>
          </div>

          <div className="cs-image-row">
            <CsImage
              src="/cs-pc/solution-sidebar-open.png"
              caption="Step 1–2: Selecting a workflow opens the detail sidebar instantly, showing metadata and job type overview."
            />
            <CsImage
              src="/cs-pc/solution-sidebar-failures.png"
              caption="Step 2–3: Failed job types are flagged immediately. Expanding reveals the job list inline."
            />
          </div>

          <CsImage
            src="/cs-pc/solution-sidebar-job-detail.png"
            caption="Step 3: Individual job detail — status, timestamps, error message, and IDs — all accessible without leaving the workflow list."
          />

          {/* Solution 2 */}
          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 2</span>
              <h3>In-context workflow status</h3>
            </div>
            <p>
              A status button was added to the catalog item detail page — the exact
              surface where users trigger workflows. It shows a live processing
              indicator while a workflow runs, then transitions to display the
              final status (Completed, Failed, In progress).
            </p>
            <p>
              Clicking the status button opens the same sidebar workflow detail
              panel used in the Processing Center — a consistent interaction
              pattern users already know. They never need to leave the catalog
              item to understand what happened.
            </p>
          </div>

          <div className="cs-image-row">
            <CsImage
              src="/cs-pc/solution-catalog-status-button.png"
              caption="The new status button appears in the catalog item header, showing live progress while the workflow runs."
            />
            <CsImage
              src="/cs-pc/solution-catalog-sidebar.png"
              caption="Clicking the status button opens the familiar sidebar panel — same pattern, different context."
            />
          </div>
        </section>

        <div className="cs-divider" />

        {/* Outcome */}
        <section className="cs-section cs-section-last">
          <div className="cs-section-label">06 — Outcome</div>
          <h2>Diagnostic friction eliminated</h2>
          <p className="cs-outcome-intro">
            The redesign transformed how users interact with processing workflows
            across the platform — removing the need for context switching and making
            error diagnosis a first-class, accessible experience.
          </p>
          <div className="cs-outcomes">
            <div className="cs-outcome-item">
              <strong>3 → 1</strong>
              <p>Navigation levels to reach job-level detail, reduced from three page loads to a single sidebar.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Zero navigation</strong>
              <p>Users can now understand workflow status and diagnose failures without leaving the screen they started on.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>System-wide pattern</strong>
              <p>The sidebar + drill-down pattern was adopted into the design system and reused across the platform.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
