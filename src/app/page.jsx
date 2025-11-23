import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="landing-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Dmitrii Kapustin</h1>
            <p className="subtitle">10+ years of experience in IT: design, development, and management. Currently working at IT/AI consulting and my own startups.</p>
          </div>
          <div className="hero-cta">
            <Link className="button-primary" href={'https://t.me/dmitriikapustin'}>Telegram</Link>
          </div>
        </section>

        {/* Visual Section */}
        <section className="visual-section">
          <div className="image-container">
            {/* Placeholder for the large image in Figma */}
            <video
              src="/assets/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
            />
          </div>
        </section>

        {/* Description Section */}
        <section className="description-section">
          <p>
            I am a serial entrepreneur with a proven track record of success in the IT industry. Currently working as an IT/AI consultant and founder of startups.
          </p>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <div className="project-title-row">
                <span className="bullet">•</span>
                <Link href="https://aiacade.me" className="project-link">aiacade.me</Link>
                <span className="separator">:</span>
                <span className="project-description">educational platform in AI tools and skills.</span>
              </div>
            </div>
            <div className="project-item">
              <div className="project-title-row">
                <span className="bullet">•</span>
                <Link href="https://kapustin.team" className="project-link">kapustin.team</Link>
                <span className="separator">:</span>
                <span className="project-description">IT development team for your business: design, product development, marketing and automation.</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section - Full Width */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Projects</h3>
            <ul className="footer-links">
              <li><Link href="https://aiacade.me">aiacade.me</Link></li>
              <li><Link href="https://kapustin.team">kapustin.team</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><Link href="https://www.tbank.ru/business/contractor/legal/324774600583401/">Individual Entrepreneur</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Social</h3>
            <ul className="footer-links">
              <li><Link href="https://t.me/dmitriikapustin">Telegram</Link></li>
              <li><Link href="https://threads.net/@dmitriikapustin">Threads</Link></li>
              <li><Link href="https://youtube.com/@dmitriikapustin">Youtube</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}