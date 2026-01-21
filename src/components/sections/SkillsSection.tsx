import './SkillsSection.css'
import { HiDownload } from 'react-icons/hi'
import { downloadFile } from '../../utils/downloadFile'

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Certifications</h2>
        <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages & Frameworks</h3>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Microsoft Power Platform</h3>
          <ul>
            <li>Power Automate</li>
            <li>Power Apps</li>
            <li>SharePoint</li>
            <li>SPFx</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Development & Tooling</h3>
          <ul>
            <li>Git</li>
            <li>Azure DevOps</li>
            <li>Cypress (E2E testing)</li>
            <li>Agile & Scrum</li>
            <li>Technical Documentation</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Certifications & Education</h3>
          <ul>
            <li>
              <span 
                onClick={() => downloadFile('AWS Certified Cloud Practitioner certificate.pdf', 'AWS_Certified_Cloud_Practitioner_Alex_Brown.pdf')} 
                className="cert-download-link"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && downloadFile('AWS Certified Cloud Practitioner certificate.pdf', 'AWS_Certified_Cloud_Practitioner_Alex_Brown.pdf')}
              >
                AWS Certified Cloud Practitioner <HiDownload className="download-icon" />
              </span>
            </li>
            <li>
              <span 
                onClick={() => downloadFile('CompTIA Project+ certificate.pdf', 'CompTIA_Project_Plus_Alex_Brown.pdf')} 
                className="cert-download-link"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && downloadFile('CompTIA Project+ certificate.pdf', 'CompTIA_Project_Plus_Alex_Brown.pdf')}
              >
                CompTIA Project+ <HiDownload className="download-icon" />
              </span>
              </li>
              <li>
                <span 
                  onClick={() => downloadFile('ITIL.pdf', 'ITIL_Foundation_Certification_Alex_Brown.pdf')}
                  className="cert-download-link"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && downloadFile('ITIL.pdf', 'ITIL_Foundation_Certification_Alex_Brown.pdf')}
                >
                  ITIL® Foundation Certification <HiDownload className="download-icon" />
                </span>
              </li>
              <li>Bachelor of Science in Software Engineering, WGU</li>

          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}



