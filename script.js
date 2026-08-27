:root {
  --bg-dark: #0a0f1d;
  --bg-card: rgba(26, 34, 53, 0.65);
  --bg-hover: rgba(40, 53, 83, 0.8);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent-primary: #818cf8;
  --accent-teal: #2dd4bf;
  --accent-glow: rgba(45, 212, 191, 0.25);
  --border-color: rgba(255, 255, 255, 0.08);
  --font-family: 'Inter', sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.12) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(20, 184, 166, 0.1) 0px, transparent 50%);
  background-attachment: fixed;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 6rem 0;
  border-bottom: 1px solid var(--border-color);
}

.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
  letter-spacing: -0.5px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-teal), var(--accent-primary));
  border-radius: 2px;
}

/* Navigation */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(10, 15, 29, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: var(--transition);
  border-bottom: 1px solid transparent;
}

#navbar.scrolled {
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent-teal);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--accent-teal);
}

.mobile-toggle {
  display: none;
  cursor: pointer;
  color: var(--text-main);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
}

.hero-layout {
  display: flex;
  align-items: center;
  gap: 3.5rem;
}

.hero-avatar-wrapper {
  flex-shrink: 0;
}

.avatar-ring {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-primary));
  box-shadow: 0 0 35px var(--accent-glow);
  transition: var(--transition);
}

.avatar-ring:hover {
  transform: scale(1.03);
  box-shadow: 0 0 50px rgba(45, 212, 191, 0.4);
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--bg-dark);
}

.subtitle {
  color: var(--accent-teal);
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
  display: block;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.8rem;
  letter-spacing: -1px;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.location-badge i {
  width: 16px;
  height: 16px;
  color: var(--accent-teal);
}

.tagline {
  max-width: 600px;
  color: var(--text-muted);
  font-size: 1.15rem;
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.8rem;
  border-radius: 10px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent-teal), #0d9488);
  color: #0f172a;
  box-shadow: 0 4px 20px rgba(45, 212, 191, 0.3);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(45, 212, 191, 0.5);
}

.secondary-btn {
  border: 1px solid var(--border-color);
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.05);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
}

/* About Section */
.about-card {
  padding: 2.5rem;
}

.about-card p {
  margin-bottom: 1rem;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.about-card p strong {
  color: var(--text-main);
}

.education-box {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.education-box i {
  color: var(--accent-teal);
  width: 32px;
  height: 32px;
}

.education-box h4 {
  font-size: 1.1rem;
  font-weight: 700;
}

.education-box p {
  margin-bottom: 0;
  font-size: 0.95rem;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 1.8rem;
  transition: var(--transition);
}

.skill-category:hover {
  transform: translateY(-5px);
  border-color: var(--accent-primary);
}

.skill-category h3 {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-teal);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--text-main);
  font-size: 0.85rem;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.tag:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  background-color: rgba(45, 212, 191, 0.1);
}

/* Timeline */
.timeline {
  position: relative;
  border-left: 2px solid var(--border-color);
  margin-left: 1rem;
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: calc(-2rem - 6px);
  top: 8px;
  width: 10px;
  height: 10px;
  background-color: var(--accent-teal);
  border-radius: 50%;
  box-shadow: 0 0 12px var(--accent-teal);
}

.timeline-content {
  padding: 2rem;
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.role-header h3 {
  font-size: 1.25rem;
  color: var(--text-main);
  font-weight: 700;
}

.date {
  font-size: 0.85rem;
  color: var(--accent-teal);
  font-weight: 600;
}

.company {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-style: italic;
}

.timeline-content ul {
  list-style-type: disc;
  padding-left: 1.2rem;
  color: var(--text-muted);
}

.timeline-content li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-teal);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.project-badge {
  align-self: flex-start;
  font-size: 0.75rem;
  background: rgba(129, 140, 248, 0.15);
  color: var(--accent-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  font-weight: 600;
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.project-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
  font-weight: 700;
}

.project-date {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.project-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-tech span {
  font-size: 0.8rem;
  color: var(--accent-teal);
  background: rgba(45, 212, 191, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

/* Contact Section */
.contact-container {
  text-align: center;
}

.contact-lead {
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: var(--transition);
}

.social-link:hover {
  border-color: var(--accent-teal);
  color: var(--accent-teal);
  transform: translateY(-4px);
}

.resume-accent {
  border-color: rgba(45, 212, 191, 0.3);
  color: var(--accent-teal);
}

/* Footer */
footer {
  text-align: center;
  padding: 2.5rem;
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border-color);
}

/* Mobile Responsiveness */
@media (max-width: 868px) {
  .hero-layout {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .tagline, .location-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta {
    justify-content: center;
  }

  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-dark);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .timeline {
    margin-left: 0;
    padding-left: 1.5rem;
  }

  .timeline-dot {
    left: calc(-1.5rem - 6px);
  }
}
