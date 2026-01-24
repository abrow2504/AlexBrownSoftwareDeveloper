import InsightPage from './InsightPage'

function AIDocumentationInsightsPage() {
  return (
    <InsightPage
      insightTitle="AI-Assisted Runbooks for Power Automate Solutions"
      insightOverview="Let the robots draft your manuals, then you polish. This keeps documentation fast without losing accuracy or voice."
      category="Documentation Automation"
      customContent={(
        <>
          <section className="insight-section">
            <h2>Intro</h2>
            <p>
              Do you have a solution with a ton of Power Automate flows… and you&apos;re the only one who
              knows what they do? Maybe you have a quick one-off project that has been sitting around
              without proper documentation? Is drafting a user manual your own personal torture?
            </p>
            <p>
              Let the robots write it for you! (…or at least start a decently detailed draft you can work
              with)
            </p>
            <p>
              This is a good tool for standing up a draft that would normally take hours – it will not be
              perfect by any means but it sure can save you a lot of time and effort when all you have to do
              is play editor. Of course similar things could be done for non-Power-Automate solutions, but
              this is what I&apos;ve been using to clean up our automation workflows.
            </p>
            <p>
            </p>
          </section>

          <section className="insight-section">
            <h2>Requirements</h2>
            <ul>
              <li>GitHub Copilot license</li>
              <li>VS Code (or any IDE with a Copilot extension)</li>
              <li>A Solution package export</li>
            </ul>
          </section>

          <section className="insight-section">
            <h2>How-To</h2>
            <ol>
              <li>
                <strong>STEP 1: Download your package.</strong> Export and download your Solution package.
              </li>
              <li>
                <strong>STEP 2: Prep workspace.</strong> Create a workspace in VS Code for all those JSON files.
              </li>
              <li>
                <strong>STEP 3: Gather context.</strong> Collect SharePoint links, diagrams, screenshots, and any
                user actions not captured in your flows. First draft vibes—just gather what you can.
              </li>
              <li>
                <strong>STEP 4: Prompt.</strong> Pick your output format (HTML for Word paste, Markdown for repos)
                and prompt GitHub Copilot Agent mode. Try the generic prompt below to get started.
              </li>
              <li>
                <strong>STEP 5: Refine.</strong> Skim from each user&apos;s perspective and ask Copilot to clarify or
                fix anything off.
              </li>
              <li>
                <strong>STEP 6: Clean it up.</strong> Manually tweak language, align terminology (e.g., SharePoint
                item vs. MS Form), and cut fluff.
              </li>
              <li>
                <strong>STEP 7: Verify.</strong> Get another set of eyes to confirm it&apos;s accurate and complete.
              </li>
              <li>
                <strong>STEP 8: Maintain.</strong> Update the doc as flows evolve. Treat it as the living source of
                truth.
              </li>
            </ol>
          </section>

          <section className="insight-section">
            <h2>Generic Prompt Example</h2>
            <p>
              Goal: Generate a comprehensive user and operations manual for my Power Automate solution using the
              JSON export files for all flows plus any supporting materials (flowcharts, notes, reference links).
            </p>
            <h3>Instructions</h3>
            <ol>
              <li>Analyze the Power Automate JSONs to identify flows, names, purposes, triggers.</li>
              <li>Map key actions, data connections, dependencies, and implied roles/responsibilities.</li>
              <li>Create a clear, user-oriented manual in the chosen format, covering technical and procedural info.</li>
            </ol>

            <h3>Required Sections</h3>
            <ul>
              <li>Overview: what the solution does and the business process it supports; key goals/outcomes.</li>
              <li>Roles &amp; Responsibilities: requestor, approver, admin, IT support; required permissions/access.</li>
              <li>
                Process Walkthrough: step-by-step from each role&apos;s perspective; which flow handles each step; link or
                describe a flowchart if available.
              </li>
              <li>
                Flow Summaries (per flow): name/purpose, trigger, key actions, inputs/outputs, role interactions,
                error handling/notifications.
              </li>
              <li>
                Maintenance &amp; Administration: who maintains, how to edit/re-enable, verify connectors/permissions,
                common failure points and recovery steps.
              </li>
              <li>Troubleshooting &amp; Edge Cases: common user issues, where to check run history/logs.</li>
              <li>References: URLs, Power Automate docs, internal resources.</li>
            </ul>

            <h3>Formatting &amp; Style</h3>
            <p>
              Write in clear, accessible language for business users with moderate technical knowledge. Use the chosen
              format (HTML/Markdown) with headings, tables, and callouts for clarity. Infer and describe user roles and
              interactions based on workflow logic.
            </p>

            <h3>Deliverable</h3>
            <p>
              Output a single file (e.g., USER_MANUAL.md) that can serve as both a user guide and a reference for
              administrators.
            </p>
          </section>
        </>
      )}
    />
  )
}

export default AIDocumentationInsightsPage