import './CaseStudy.css'

function CsImage({ src, caption }) {
  return (
    <figure className="cs-image">
      <img src={src} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function ProcessingCenter({ onClose }) {
  return (
    <div className="cs-page">
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

        <section className="cs-section">
          <div className="cs-section-label">05 — The Solution</div>
          <h2>Two changes, one coherent system</h2>

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

function DataLineage({ onClose }) {
  return (
    <div className="cs-page">
      <header className="cs-header">
        <button className="cs-back" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to portfolio
        </button>
        <span className="cs-header-label">Ataccama · 2022–present</span>
      </header>

      <main className="cs-main">

        <section className="cs-hero">
          <p className="cs-eyebrow">Case Study</p>
          <h1>Data Lineage<br />Visualization</h1>
          <p className="cs-hero-sub">
            Visualisation of graph-based dataflows across enterprise databases,
            enabling data engineers to perform root cause analysis, impact analysis,
            and trace data quality issues end-to-end.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Ataccama</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2022–present</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Product Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">User interviews, Competitive analysis, Graph layout testing, Progressive disclosure</span>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">01 — Discovery</div>
          <h2>Navigating data blindly</h2>
          <div className="cs-two-col">
            <div>
              <p>
                Data engineers at enterprise companies manage hundreds of tables,
                pipelines, and transformations — but had no visual way to see where
                data came from or how it had been modified along the way. When a data
                quality issue surfaced in a report, tracing it back to its source
                meant manually reading SQL, checking documentation, and asking
                colleagues who might remember.
              </p>
              <p>
                Lineage maps existed — but they lived in Confluence pages maintained
                by hand. They went stale as soon as anything changed, and they never
                reflected actual data quality status. A diagram might show a healthy
                pipeline that had been silently failing for weeks.
              </p>
              <p>
                Root cause analysis for a single data quality incident could consume
                an entire morning. The problem wasn't the engineers' skill — it was
                the complete absence of tooling that matched how data actually flows.
              </p>
            </div>
            <div className="cs-callout-block">
              <p className="cs-callout-quote">
                "I keep a personal Confluence page with our lineage diagram. I update
                it when I remember. Half the time it's wrong and I don't know it."
              </p>
              <p className="cs-callout-source">Data engineer, discovery interview</p>
            </div>
          </div>

          <CsImage
            src="/cs-dl/before.svg"
            caption="Manual lineage documentation in Confluence — hand-drawn diagrams disconnected from live data quality status, maintained on a best-effort basis."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">02 — Exploration</div>
          <div className="cs-two-col">
            <div>
              <h2>The cognitive load problem</h2>
              <p>
                Interviews and observation sessions revealed a consistent pattern:
                users were forced to hold the entire data model in working memory
                when doing any kind of investigation. There was no single source of
                truth for how tables related to each other across systems.
              </p>
              <p>
                Tracing upstream impact (where does this data come from?) and
                downstream impact (what does a change here break?) required entirely
                different mental models and different tools. Engineers context-switched
                between SQL editors, documentation, and verbal team knowledge constantly.
              </p>
              <p>
                I also benchmarked the competitive landscape. Tools like dbt docs
                and Alation offered basic lineage views, but none integrated data
                quality status at the node level. You could see the graph, but not
                whether any node in it was healthy.
              </p>
            </div>
            <div className="cs-findings">
              <div className="cs-finding">
                <div className="cs-finding-number">01</div>
                <div>
                  <strong>No visual mental model</strong>
                  <p>Engineers had to hold the entire data graph in memory — there was nothing to look at.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">02</div>
                <div>
                  <strong>Upstream vs. downstream blind spots</strong>
                  <p>No way to trace either direction of impact from a single surface.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">03</div>
                <div>
                  <strong>Quality status missing from lineage</strong>
                  <p>Competitive tools showed graph structure but didn't surface data quality alongside it.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">04</div>
                <div>
                  <strong>Stale documentation</strong>
                  <p>Manual Confluence diagrams diverged from reality as pipelines changed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">03 — Goals</div>
          <h2>What we needed to get right</h2>
          <div className="cs-goals">
            <div className="cs-goal">
              <span className="cs-goal-num">1</span>
              <div>
                <strong>Make lineage traversal visual and interactive</strong>
                <p>Engineers should be able to explore the data graph without writing a single query or opening a second tool.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">2</span>
              <div>
                <strong>Show data quality status per node</strong>
                <p>Every table in the graph should carry its current quality score — so a broken pipeline is visible at a glance.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">3</span>
              <div>
                <strong>Support both upstream and downstream analysis</strong>
                <p>Users doing root cause analysis and users doing impact analysis have opposite traversal needs — both must be first-class.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">04 — Design Process</div>
          <div className="cs-two-col">
            <div>
              <h2>Finding the right graph layout</h2>
              <p>
                I started with competitive benchmarking — reviewing dbt docs, Alation,
                Collibra, and Monte Carlo — to understand the space of existing solutions
                and identify where they fell short. None of them solved the quality-status
                integration problem we were targeting.
              </p>
              <p>
                Workshops with data engineers helped me understand how they actually
                think about traversal. The key insight: upstream analysis starts from
                a known bad node and expands outward, while downstream analysis starts
                from a table and asks "what could I break?" These are genuinely
                different interactions, not just direction toggles.
              </p>
              <p>
                I tested two layout algorithms — hierarchical (top-down DAG) and
                force-directed — with real data graphs. Hierarchical won clearly
                because it made directional flow readable without learning any
                graph conventions. Force-directed looked more organic but made it
                harder to understand causality.
              </p>
              <p>
                Progressive disclosure was a key design decision: clicking a node
                shouldn't immediately flood the screen with column-level detail.
                We staged it — overview first, metadata on click, column detail on
                expand — to keep the graph scannable.
              </p>
            </div>
            <div className="cs-process-steps">
              <div className="cs-process-step">
                <span className="cs-process-icon">↗</span>
                <div>
                  <strong>Competitive benchmarking</strong>
                  <p>Reviewed dbt docs, Alation, Collibra, Monte Carlo — mapped gaps in quality-status integration.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◫</span>
                <div>
                  <strong>Engineering workshops</strong>
                  <p>Facilitated sessions with data engineers to map traversal mental models and real incident workflows.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◎</span>
                <div>
                  <strong>Layout algorithm testing</strong>
                  <p>Compared hierarchical vs. force-directed layouts on real customer data — hierarchical won on clarity.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">✓</span>
                <div>
                  <strong>Progressive disclosure prototyping</strong>
                  <p>Defined the three-stage node interaction model and validated it with engineers before development.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">05 — The Solution</div>
          <h2>The data graph, finally visible</h2>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 1</span>
              <h3>Interactive DAG with quality-aware nodes</h3>
            </div>
            <p>
              The core of the solution is an interactive directed acyclic graph —
              rendered in a top-down hierarchical layout that makes dataflow direction
              immediately legible. Every node in the graph represents a table or
              transformation step, and every node is colored by its current data
              quality score: green for healthy, amber for degraded, red for failing.
            </p>
            <p>
              This means an engineer looking at a lineage graph for the first time
              can immediately see where problems exist — without clicking anything.
              The quality dimension is encoded into the structure, not hidden in a panel.
            </p>
            <p>
              Clicking a node opens a metadata panel with source system, record count,
              last updated timestamp, and quality score breakdown. Expanding within
              that panel reveals column-level lineage — which columns feed which,
              and where transformations happen — without leaving the graph view.
            </p>
          </div>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 2</span>
              <h3>Upstream / downstream traversal toggle</h3>
            </div>
            <p>
              A toggle at the top of the graph switches between upstream view
              (trace where this data comes from) and downstream view (see what
              depends on this table). From any selected node, the graph re-renders
              to show only the relevant path — reducing visual noise and making
              the traversal direction explicit.
            </p>
            <p>
              For engineers doing root cause analysis, the upstream path from a
              failing node is highlighted automatically — so the most likely source
              of an issue floats to the top of the investigation. A table name
              search bar allows jumping directly to any node in large graphs,
              with matching nodes highlighted across the visible canvas.
            </p>

            <div className="cs-solution-steps">
              <div className="cs-solution-step">
                <span>1</span>
                <p>Spot failing node by color</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>2</span>
                <p>Toggle upstream to trace cause</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>3</span>
                <p>Click node for column-level detail</p>
              </div>
            </div>
          </div>

          <CsImage
            src="/cs-dl/solution-graph.svg"
            caption="The interactive data lineage graph — nodes colored by quality score, hierarchical layout showing dataflow direction, with upstream traversal active from a selected failing node."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section cs-section-last">
          <div className="cs-section-label">06 — Outcome</div>
          <h2>Root cause analysis in minutes, not hours</h2>
          <p className="cs-outcome-intro">
            Data Lineage shipped as one of the most-requested features in Ataccama's
            roadmap and became a key differentiator in enterprise sales conversations
            — particularly because of the quality-status integration that competing
            tools lacked.
          </p>
          <div className="cs-outcomes">
            <div className="cs-outcome-item">
              <strong>25+ enterprises</strong>
              <p>Enterprise customers onboarded at launch, validating the feature's priority in the product roadmap.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Hours → minutes</strong>
              <p>Root cause analysis time for data quality incidents, based on feedback from early adopter engineering teams.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Design system contribution</strong>
              <p>The node interaction pattern and quality-color system were adopted into the shared component library.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

function DataStories({ onClose }) {
  return (
    <div className="cs-page">
      <header className="cs-header">
        <button className="cs-back" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to portfolio
        </button>
        <span className="cs-header-label">Ataccama · 2023</span>
      </header>

      <main className="cs-main">

        <section className="cs-hero">
          <p className="cs-eyebrow">Case Study</p>
          <h1>Data Stories</h1>
          <p className="cs-hero-sub">
            End-to-end design of a dashboard and presentation builder with live data —
            a PowerPoint-like editor enabling non-technical users to create and share
            insights without engineering support.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Ataccama</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2023</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Product Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">User interviews, Editor paradigm research, Usability testing, Prototype iteration</span>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">01 — Discovery</div>
          <h2>The screenshot-and-email loop</h2>
          <div className="cs-two-col">
            <div>
              <p>
                Business analysts at Ataccama's enterprise customers had access to
                powerful data quality dashboards — but no way to share what they saw
                with the people who needed to act on it. To get a chart into a
                weekly stakeholder meeting, they had to request it from an engineer,
                wait days for it to be built, and then take a screenshot to paste
                into a slide deck.
              </p>
              <p>
                By the time the slide was presented, the numbers were already stale.
                Executives were making decisions based on data that might be a week old.
                And every new insight request started the same cycle again — analyst
                submits ticket, engineer builds chart, analyst screenshots it, meeting
                happens with outdated data.
              </p>
              <p>
                The core problem wasn't technical capability — the platform had the
                data. The problem was that sharing it required engineering involvement
                at every step, and the people closest to the business had no way to
                self-serve.
              </p>
            </div>
            <div className="cs-callout-block">
              <p className="cs-callout-quote">
                "I spend half my Monday recreating slides from last week because
                the screenshots are out of date. I can't just link to the dashboard
                — my stakeholders don't have logins."
              </p>
              <p className="cs-callout-source">Business analyst, discovery interview</p>
            </div>
          </div>

          <CsImage
            src="/cs-ds/before.svg"
            caption="The existing workflow: analyst requests a chart from engineering, receives it days later, screenshots it, pastes it into slides — by which point the data is stale."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">02 — Exploration</div>
          <div className="cs-two-col">
            <div>
              <h2>Quantifying the waste</h2>
              <p>
                Interviews with eight business analysts across different customer
                accounts surfaced a consistent pattern. On average, analysts spent
                around two hours per week recreating data slides — not adding new
                analysis, just updating numbers in existing decks.
              </p>
              <p>
                The trust problem was equally significant. Executives who had been
                shown a stale screenshot once were now asking analysts to confirm
                every number in a meeting, which created its own interruptions and
                delays. Static exports had eroded confidence in the data even when
                the underlying data was perfectly accurate.
              </p>
              <p>
                I mapped the landscape of tools analysts already used — Notion,
                Canva, Google Slides — and tested whether any of them could solve
                the live data problem. None could. They all treated data as content
                to paste in, not as a live connection to maintain. The platform data
                simply couldn't flow into any of these tools without custom integration.
              </p>
            </div>
            <div className="cs-findings">
              <div className="cs-finding">
                <div className="cs-finding-number">01</div>
                <div>
                  <strong>~2 hours/week recreating slides</strong>
                  <p>Analysts spent significant time updating existing decks with current numbers — pure maintenance, no new analysis.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">02</div>
                <div>
                  <strong>Stale data erodes executive trust</strong>
                  <p>Static exports caused stakeholders to question all data, even when it was accurate.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">03</div>
                <div>
                  <strong>No tool connects to live platform data</strong>
                  <p>Existing editors (Notion, Canva, Slides) treat data as content — there's no live binding to platform metrics.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">04</div>
                <div>
                  <strong>Engineering bottleneck blocks self-serve</strong>
                  <p>Every new insight required an engineering request — analysts had no direct route to publishing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">03 — Goals</div>
          <h2>What we set out to build</h2>
          <div className="cs-goals">
            <div className="cs-goal">
              <span className="cs-goal-num">1</span>
              <div>
                <strong>Self-serve insight creation with no code</strong>
                <p>A business analyst with no technical background should be able to build and publish a data story independently.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">2</span>
              <div>
                <strong>Data stays live</strong>
                <p>Charts and metrics in a published story should always reflect current platform values — no manual updates, ever.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">3</span>
              <div>
                <strong>No engineering involvement for publishing</strong>
                <p>From first chart to stakeholder link, the entire flow should require zero engineering requests.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">04 — Design Process</div>
          <div className="cs-two-col">
            <div>
              <h2>Choosing the right editor model</h2>
              <p>
                The first major decision was what kind of editor paradigm to use.
                I studied two dominant approaches in depth: block-based editors
                (Notion, Coda) and canvas-based editors (Miro, Figma). Both have
                real precedent, and both have tradeoffs for a data-heavy use case.
              </p>
              <p>
                Canvas gives more layout freedom but introduces significant cognitive
                load for non-technical users — exact positioning, z-ordering, and
                alignment become problems to solve. Block-based editors constrain
                layout but make the authoring experience much faster and less
                intimidating for someone whose primary skill is analysis, not design.
              </p>
              <p>
                After prototyping both and testing with non-technical participants,
                block-based won decisively. Users found it easier to get started,
                and the constrained layout actually helped them produce more
                consistent-looking output with less effort.
              </p>
              <p>
                I prototyped three distinct approaches to data block binding before
                settling on the model that shipped — testing whether users preferred
                selecting a metric first or selecting a block type first. The metric-first
                flow won because it matched how analysts think: they start from a
                question ("what's the completion rate?") not from a format ("I want a bar chart").
              </p>
            </div>
            <div className="cs-process-steps">
              <div className="cs-process-step">
                <span className="cs-process-icon">↗</span>
                <div>
                  <strong>Editor paradigm research</strong>
                  <p>Studied block-based vs. canvas approaches; prototyped both to compare cognitive load for non-technical users.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◫</span>
                <div>
                  <strong>8 analyst interviews</strong>
                  <p>Uncovered the actual time cost of the status quo and validated the live-data requirement as non-negotiable.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◎</span>
                <div>
                  <strong>3 prototype approaches</strong>
                  <p>Tested different data-binding interaction models — metric-first flow won on usability with non-technical participants.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">✓</span>
                <div>
                  <strong>Self-serve usability testing</strong>
                  <p>Validated that non-technical users could complete the full flow — from blank canvas to shared link — without guidance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">05 — The Solution</div>
          <h2>A live data editor for everyone</h2>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 1</span>
              <h3>Block-based editor with live data binding</h3>
            </div>
            <p>
              Data Stories is a block-based editor where every block can either
              hold rich text or bind to a live data source from the platform. Adding
              a data block opens a metric picker — users select a dimension, apply
              optional filters, choose a chart type, and drop it into their story.
              The block is now live: it will always show current values when the
              page loads.
            </p>
            <p>
              Chart blocks auto-update without any manual intervention. Text blocks
              support @-mentions of live metrics inline, so a sentence like
              "Data quality is currently at [DQ Score]%" will always display the
              real value. The editor feels familiar — drag-and-drop blocks,
              text formatting, image inserts — with data as a first-class content type.
            </p>
            <p>
              A template gallery gives first-time users starting points for common
              story formats: weekly summary, incident report, quality trend. Templates
              use placeholder data blocks that analysts replace with their actual
              metrics — reducing the blank-canvas intimidation factor significantly.
            </p>
          </div>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 2</span>
              <h3>One-click publish with no-login sharing</h3>
            </div>
            <p>
              Publishing a Data Story generates a shareable link that renders the
              story as a read-only page — no Ataccama login required for the viewer.
              Stakeholders open a link in their browser and see charts that reflect
              current data. There's nothing to screenshot, nothing to update,
              nothing to maintain.
            </p>
            <p>
              Permission controls let authors set whether a link is public,
              organization-wide, or invite-only. The publish flow takes three clicks
              from within the editor, and the generated URL is stable — stakeholders
              can bookmark it and return to see updated data on future visits.
            </p>

            <div className="cs-solution-steps">
              <div className="cs-solution-step">
                <span>1</span>
                <p>Add data blocks from metric picker</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>2</span>
                <p>Arrange and annotate with text</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>3</span>
                <p>Publish and share link — data stays live</p>
              </div>
            </div>
          </div>

          <CsImage
            src="/cs-ds/solution-editor.svg"
            caption="The Data Stories block-based editor — live data blocks alongside text, drag-and-drop layout, with the metric picker open and a chart block showing real-time platform values."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section cs-section-last">
          <div className="cs-section-label">06 — Outcome</div>
          <h2>Engineering tickets replaced by self-serve</h2>
          <p className="cs-outcome-intro">
            Data Stories eliminated the engineering bottleneck for insight sharing
            entirely — and surfaced a user persona that hadn't been formally
            represented in the product before: the business consumer of data quality
            information.
          </p>
          <div className="cs-outcomes">
            <div className="cs-outcome-item">
              <strong>0 engineering requests</strong>
              <p>Analysts publish insights without filing a single ticket — from idea to shareable link in minutes.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Minutes, not days</strong>
              <p>Analysts create and share live data stories in the same session — replacing a multi-day request cycle.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>New user persona</strong>
              <p>Data Stories opened the "business consumer" persona in the product — a segment that had no representation in the platform before.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

function InstoreAnalytics({ onClose }) {
  return (
    <div className="cs-page">
      <header className="cs-header">
        <button className="cs-back" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to portfolio
        </button>
        <span className="cs-header-label">Pygmalios · 2021–2022</span>
      </header>

      <main className="cs-main">

        <section className="cs-hero">
          <p className="cs-eyebrow">Case Study</p>
          <h1>In-Store Analytics<br />Mobile</h1>
          <p className="cs-hero-sub">
            Mobile-first redesign of an in-store analytics product covering traffic
            flow, queue management, and customer journey analytics — enabling retail
            chain managers to act on data from anywhere.
          </p>
          <div className="cs-meta-row">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Pygmalios</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Year</span>
              <span className="cs-meta-value">2021–2022</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Product Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Methods</span>
              <span className="cs-meta-value">Field observation, Competitive analysis, Low-fi prototype testing, On-device validation</span>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">01 — Discovery</div>
          <h2>Problems detected hours too late</h2>
          <div className="cs-two-col">
            <div>
              <p>
                Pygmalios had built a powerful web analytics platform for retail
                chains — tracking footfall, queue lengths, conversion rates, and
                customer journey flows in real time. The platform worked. The problem
                was that it only existed on desktop, and the people who needed to
                act on the data were on the shop floor.
              </p>
              <p>
                Store managers didn't sit at a desk. They moved around constantly,
                dealing with staff, customers, and floor operations. By the time
                someone noticed a queue backup or a drop in conversion on the desktop
                dashboard — if they noticed it at all — significant time had passed.
                Queue problems that could have been addressed in minutes were
                sometimes discovered at shift end.
              </p>
              <p>
                Area managers overseeing 10 to 30 stores had it worse. Getting a
                cross-store performance picture meant either opening multiple browser
                tabs or waiting for a weekly report. There was no way to see which
                store needed attention right now.
              </p>
            </div>
            <div className="cs-callout-block">
              <p className="cs-callout-quote">
                "I walk the floor all day. If there's a queue problem I only find
                out when a customer complains — or when I happen to walk past.
                I have no idea what's happening in the other half of the store."
              </p>
              <p className="cs-callout-source">Store manager, field interview</p>
            </div>
          </div>

          <CsImage
            src="/cs-ia/before.svg"
            caption="The desktop-only web product — powerful analytics locked to a screen that store managers couldn't access while managing the floor."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">02 — Exploration</div>
          <div className="cs-two-col">
            <div>
              <h2>Going to where the work actually happens</h2>
              <p>
                I conducted field visits at three retail chain locations — spending
                time with store managers and area managers during active trading hours,
                not in meeting rooms. Watching how managers actually worked revealed
                patterns that interviews alone wouldn't have surfaced.
              </p>
              <p>
                The most striking finding: managers were already using their personal
                phones to manage store performance — texting each other about queue
                situations, sending photos of floor states, creating WhatsApp groups
                for real-time updates. They had self-organised a mobile communication
                layer because no product supported them.
              </p>
              <p>
                Competitive analysis of retail operations tools — Yoobic, Bindy —
                showed that execution and task management tools existed for mobile,
                but nothing gave managers live analytics in a form they could act on.
                The opportunity was clear.
              </p>
            </div>
            <div className="cs-findings">
              <div className="cs-finding">
                <div className="cs-finding-number">01</div>
                <div>
                  <strong>Managers are always mobile</strong>
                  <p>Store and area managers spend their day on the floor — a desktop product is structurally inaccessible to them.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">02</div>
                <div>
                  <strong>Personal phones already filling the gap</strong>
                  <p>Managers had created WhatsApp groups and text chains to communicate store status — improvised mobile tooling.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">03</div>
                <div>
                  <strong>Area managers need portfolio visibility</strong>
                  <p>Managing 10–30 stores with no cross-store view meant relying on weekly reports or phone calls to understand performance.</p>
                </div>
              </div>
              <div className="cs-finding">
                <div className="cs-finding-number">04</div>
                <div>
                  <strong>No mobile analytics product existed</strong>
                  <p>Competitive tools focused on task management, not live analytics — the space was genuinely open.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">03 — Goals</div>
          <h2>Defining the right product scope</h2>
          <div className="cs-goals">
            <div className="cs-goal">
              <span className="cs-goal-num">1</span>
              <div>
                <strong>Mobile-first experience that works on the shop floor</strong>
                <p>The product must be usable while moving — fast to read, large touch targets, minimal input required.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">2</span>
              <div>
                <strong>Surface real-time anomaly alerts</strong>
                <p>Managers shouldn't have to check the app — the app should alert them when something needs attention.</p>
              </div>
            </div>
            <div className="cs-goal">
              <span className="cs-goal-num">3</span>
              <div>
                <strong>Enable store-to-store comparison for area managers</strong>
                <p>Area managers need a portfolio view that surfaces which stores are underperforming right now — not in a weekly report.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">04 — Design Process</div>
          <div className="cs-two-col">
            <div>
              <h2>Testing where it matters — in the store</h2>
              <p>
                I started with field observation rather than desk research, spending
                time at three retail locations during trading hours to understand
                the physical and cognitive context managers operated in. The insight
                that emerged — managers scan quickly, act faster, have zero tolerance
                for anything that requires learning — shaped every design decision.
              </p>
              <p>
                Competitive analysis of Yoobic and Bindy mapped the existing task
                management category and confirmed the gap in live analytics. These
                tools told managers what to do; nothing told them what was actually
                happening in the store right now.
              </p>
              <p>
                Low-fi prototypes were tested on actual iOS devices in-store
                conditions — not in a lab. I deliberately chose lo-fi because in
                field conditions, participants focus on whether the information is
                useful rather than whether the interface looks polished. We went
                through three rounds of iteration before moving to high fidelity.
              </p>
              <p>
                Validation included store managers, area managers, and HQ analytics
                teams — three distinct user types with meaningfully different needs.
                The single-store view and multi-store grid emerged from reconciling
                those three perspectives, not from designing for one and adapting for the others.
              </p>
            </div>
            <div className="cs-process-steps">
              <div className="cs-process-step">
                <span className="cs-process-icon">↗</span>
                <div>
                  <strong>Field observation at 3 retail locations</strong>
                  <p>Spent active trading hours with store and area managers — watching how they actually work, not asking them to recall it.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◫</span>
                <div>
                  <strong>Competitive analysis</strong>
                  <p>Mapped Yoobic and Bindy to understand the task management category and confirm the live analytics gap.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">◎</span>
                <div>
                  <strong>In-store prototype testing</strong>
                  <p>Low-fi prototypes tested on iOS devices in actual retail environments — three rounds before moving to high fidelity.</p>
                </div>
              </div>
              <div className="cs-process-step">
                <span className="cs-process-icon">✓</span>
                <div>
                  <strong>Three-persona validation</strong>
                  <p>Validated with store managers, area managers, and HQ teams — aligning distinct needs into a single product.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-label">05 — The Solution</div>
          <h2>Always-on awareness for the shop floor</h2>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 1</span>
              <h3>Single-store view: real-time at a glance</h3>
            </div>
            <p>
              The store view is designed for a three-second read. At the top:
              live visitor count with a directional arrow showing whether traffic
              is rising or falling. Below: an hourly bar chart for the day so far,
              with the current hour highlighted. Queue status shows current wait
              time and queue length with a traffic-light indicator — green, amber,
              red. Conversion rate sits at the bottom with a comparison to the
              same time last week.
            </p>
            <p>
              The layout was intentionally minimal. Every element had to earn its
              space by being something a manager would act on, not just find
              interesting. During prototyping, we removed several metrics that users
              liked in isolation but couldn't explain what they'd do differently
              as a result of seeing them.
            </p>
          </div>

          <div className="cs-solution-block">
            <div className="cs-solution-header">
              <span className="cs-solution-num">Solution 2</span>
              <h3>Area manager grid and push notifications</h3>
            </div>
            <p>
              Area managers see a grid of store cards — each showing traffic,
              conversion rate, and queue status at a glance. Cards are sortable
              by any metric, so an area manager can immediately surface the lowest-
              performing store in their portfolio. Tapping any card drills into
              the full single-store view.
            </p>
            <p>
              Push notifications fire when a store's queue wait time crosses a
              threshold or when conversion rate drops significantly below its
              daily average. The notification includes the store name, the metric,
              and the current value — enough context to decide whether to act
              without opening the app. Offline caching ensures the last-known
              state is always visible even in low-connectivity back-of-store areas.
            </p>

            <div className="cs-solution-steps">
              <div className="cs-solution-step">
                <span>1</span>
                <p>Alert fires for anomaly in store</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>2</span>
                <p>Open app to see real-time store view</p>
              </div>
              <div className="cs-step-arrow">→</div>
              <div className="cs-solution-step">
                <span>3</span>
                <p>Manager responds while still on the floor</p>
              </div>
            </div>
          </div>

          <CsImage
            src="/cs-ia/solution-mobile.svg"
            caption="The mobile interface — single-store real-time view with live visitor count, hourly traffic chart, queue status indicator, and conversion rate. Designed for a fast scan while managing the floor."
          />
        </section>

        <div className="cs-divider" />

        <section className="cs-section cs-section-last">
          <div className="cs-section-label">06 — Outcome</div>
          <h2>The first mobile product at Pygmalios</h2>
          <p className="cs-outcome-intro">
            The in-store analytics mobile app was Pygmalios' first mobile product —
            a 0-to-1 project that went from field research to final delivery within
            the engagement. It launched with a major retail client and established
            a new product surface that the team continued building on after the project closed.
          </p>
          <div className="cs-outcomes">
            <div className="cs-outcome-item">
              <strong>0 → 1</strong>
              <p>First mobile product at Pygmalios — from research and concept to final delivery, with no prior mobile foundation.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Major retail client at launch</strong>
              <p>Deployed with a key enterprise client at launch, validating the product's value with real store managers from day one.</p>
            </div>
            <div className="cs-outcome-item">
              <strong>Always-on monitoring</strong>
              <p>For the first time, store and area managers had continuous visibility into store performance — not a weekly report.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default function CaseStudy({ project, onClose }) {
  switch (project.id) {
    case 'processing-center':
      return <ProcessingCenter onClose={onClose} />
    case 'data-lineage':
      return <DataLineage onClose={onClose} />
    case 'data-stories':
      return <DataStories onClose={onClose} />
    case 'instore-analytics':
      return <InstoreAnalytics onClose={onClose} />
    default:
      return null
  }
}
