import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Download, 
  Menu, 
  X, 
  Code,
  GraduationCap,
  School
} from 'lucide-react';

import { GitHub, LinkedIn } from './components/BrandIcons';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';
import ContactForm from './components/ContactForm';

// Profile picture path
import profileImg from './assets/asif_port_transparent.png';

// Tech stack logo imports
import {
  ReactIcon, NextIcon, JavaScriptIcon, TypeScriptIcon, HTML5Icon, CSS3Icon, TailwindIcon, BootstrapIcon,
  JavaIcon, SpringBootIcon, NodeIcon, ExpressIcon, RESTIcon, JWTIcon,
  MySQLIcon, MongoDBIcon, PostgresIcon,
  DockerIcon, KubernetesIcon, GitIcon, GitHubIcon, CICDIcon, LinuxIcon,
  PythonIcon, TFIcon, OpenCVIcon, ScikitIcon
} from './components/TechStackIcons';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Background grid mouse tracking glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section observer to update navigation active state
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'projects', 'tech-stack', 'experience', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const techStack = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: ReactIcon },
        { name: 'Next.js', icon: NextIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'Bootstrap', icon: BootstrapIcon }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Java', icon: JavaIcon },
        { name: 'Spring Boot', icon: SpringBootIcon },
        { name: 'Node.js', icon: NodeIcon },
        { name: 'Express.js', icon: ExpressIcon },
        { name: 'REST APIs', icon: RESTIcon },
        { name: 'JWT Authentication', icon: JWTIcon }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: MySQLIcon },
        { name: 'MongoDB', icon: MongoDBIcon }
      ]
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'Docker', icon: DockerIcon },
        { name: 'Kubernetes', icon: KubernetesIcon },
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'CI/CD', icon: CICDIcon },
        { name: 'Linux', icon: LinuxIcon }
      ]
    }
  ];

  // Framer Motion animation definitions
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <>
      {/* Background decoration elements */}
      <div className="grid-bg" />
      <div className="ambient-glow" />

      {/* Sticky Navigation Bar */}
      <header className="navbar">
        <div className="navbar-container">
          <a onClick={() => scrollTo('home')} className="navbar-logo" style={{ cursor: 'pointer' }}>
            <div className="navbar-logo-dot" />
            <span>Mohamed Asif</span>
          </a>

          {/* Desktop Nav */}
          <div className="nav-links-wrapper">
            <nav className="nav-links">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'tech-stack', label: 'Tech Stack' },
                { id: 'experience', label: 'Experience' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id} style={{ listStyle: 'none' }}>
                  <a 
                    onClick={() => scrollTo(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </nav>

            <a 
              href="/asif_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 16px', fontSize: '0.85rem', marginLeft: '16px', textDecoration: 'none' }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav-overlay"
          >
            <nav className="nav-links">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'tech-stack', label: 'Tech Stack' },
                { id: 'experience', label: 'Experience' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a 
              href="/asif_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="hero-section section-container">
        <div className="hero-grid">
          {/* Left Hero Side */}
          <div className="hero-left">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-label"
            >
              AVAILABLE FOR INTERNSHIPS & FREELANCE
            </motion.span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-name"
              >
                Mohamed Asif
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-sub"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-desc"
            >
              I build scalable backend systems, modern web applications, and robust APIs using Java Spring Boot, MERN Stack, and cloud technologies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-actions"
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                <span>View Projects</span>
              </button>
              <a 
                href="/asif_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-secondary">
                <span>Contact Me</span>
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-socials"
            >
              <a 
                href="https://github.com/MOHAMEDASIF2007" 
                target="_blank" 
                rel="noreferrer" 
                className="hero-social-link"
                title="GitHub"
              >
                <GitHub size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-asif-i-a7b401311/" 
                target="_blank" 
                rel="noreferrer" 
                className="hero-social-link"
                title="LinkedIn"
              >
                <LinkedIn size={22} />
              </a>
              <a href="mailto:mohamedasif.i2007@gmail.com" className="hero-social-link" title="Email">
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right Hero Side (Enlarged Profile Image ~45% width) */}
          <div className="hero-right">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <div className="portrait-glow-back" />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="framed-portrait-container"
              >
                <img 
                  src={profileImg} 
                  alt="Mohamed Asif" 
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Text-only layout, image completely removed) */}
      <section id="about" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <div className="about-grid-text">
          {/* Left side bio */}
          <motion.div {...fadeInLeft} className="about-left-text">
            <h3 className="section-title" style={{ marginBottom: '24px' }}>About Me</h3>
            <div className="about-me-text">
              <p>
                Full Stack Developer specializing in Java Spring Boot, MERN Stack, REST APIs, and database architecture.
              </p>
              <p>
                Experienced in designing scalable backend systems, cloud deployment integration, and modern web applications.
              </p>
              <p>
                Passionate about software engineering, cloud technologies, and solving real-world business problems.
              </p>
            </div>
          </motion.div>

          {/* Right side highlights */}
          <motion.div {...fadeInRight} className="about-right-text">
            <h4 className="highlights-title">Key Highlights</h4>
            <ul className="highlights-list">
              <li className="highlight-item">Full Stack Development</li>
              <li className="highlight-item">Java Spring Boot</li>
              <li className="highlight-item">MERN Stack</li>
              <li className="highlight-item">Docker & Kubernetes</li>
              <li className="highlight-item">REST API Development</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Education</motion.h3>
        
        <div className="timeline">
          {/* Milestone 1: B.Tech */}
          <motion.div {...fadeInLeft} className="timeline-item">
            <div className="timeline-icon-dot">
              <GraduationCap size={16} />
            </div>
            <div className="glass-panel timeline-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">Bachelor of Technology (B.Tech)</h4>
                  <div className="timeline-company">Sri Eshwar College of Engineering</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-muted)', marginTop: '2px' }}>
                    Coimbatore, Tamil Nadu
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-duration">2024 – 2028</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-white)', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--border-glass)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    Currently Pursuing
                  </span>
                </div>
              </div>
              
              <p style={{ fontSize: '0.92rem', color: 'var(--accent-grey)', lineHeight: '1.6', marginBottom: '16px' }}>
                Currently pursuing a Bachelor of Technology in Information Technology with a strong focus on Full Stack Development, Software Engineering, Java Spring Boot, MERN Stack, Artificial Intelligence, Cloud Computing, DevOps, and Database Systems.
              </p>

              <div className="education-subjects">
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-white)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Relevant Subjects
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="tech-badge">Data Structures & Algorithms</span>
                  <span className="tech-badge">Object-Oriented Programming</span>
                  <span className="tech-badge">Database Management Systems</span>
                  <span className="tech-badge">Software Engineering</span>
                  <span className="tech-badge">Web Development</span>
                  <span className="tech-badge">Artificial Intelligence</span>
                  <span className="tech-badge">Cloud Computing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Milestone 2: 12th Grade */}
          <motion.div {...fadeInLeft} transition={{ delay: 0.1 }} className="timeline-item">
            <div className="timeline-icon-dot">
              <School size={16} />
            </div>
            <div className="glass-panel timeline-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">Higher Secondary Education (12th Grade)</h4>
                  <div className="timeline-company">Sree Adharsh Matriculation Higher Secondary School</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-duration">2022 – 2024</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-white)', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--border-glass)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    Percentage: 76%
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--accent-grey)', lineHeight: '1.6' }}>
                Completed Higher Secondary Education with a focus on Mathematics, Physics, Chemistry, and Computer Science while developing strong analytical and problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Milestone 3: 10th Grade */}
          <motion.div {...fadeInLeft} transition={{ delay: 0.2 }} className="timeline-item">
            <div className="timeline-icon-dot">
              <School size={16} />
            </div>
            <div className="glass-panel timeline-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">Secondary School Education (10th Grade)</h4>
                  <div className="timeline-company">Sree Adharsh Matriculation Higher Secondary School</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-duration">2021 – 2022</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: 'var(--accent-white)', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid var(--border-glass)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    Percentage: 80.8%
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--accent-grey)', lineHeight: '1.6' }}>
                Completed Secondary School Education with consistent academic performance and a strong foundation in mathematics, science, and logical reasoning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Featured Projects</motion.h3>
        <motion.div {...fadeInUp}>
          <ProjectCard />
        </motion.div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Technology Stack</motion.h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {techStack.map((category, catIdx) => (
            <motion.div 
              key={catIdx} 
              {...fadeInUp}
              transition={{ delay: catIdx * 0.1 }}
              className="tech-stack-category"
            >
              <h4 className="tech-category-title">{category.category}</h4>
              <div className="tech-grid">
                {category.items.map((tech, techIdx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div 
                      key={techIdx} 
                      className="glass-panel tech-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="tech-icon-container">
                        <Icon size={32} />
                      </div>
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Experience</motion.h3>
        
        <div className="timeline">
          <motion.div {...fadeInLeft} className="timeline-item">
            <div className="timeline-dot" />
            <div className="glass-panel timeline-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">Full Stack Developer & Software Engineering Focus</h4>
                  <div className="timeline-company">Personal Projects & Academic Stacks</div>
                </div>
                <span className="timeline-duration">2025 - Present</span>
              </div>
              <ul className="timeline-achievements">
                <li>Designed and developed clean architectures and secure database pathways for web applications.</li>
                <li>Created highly modular REST API endpoints using Java Spring Boot and Node.js.</li>
                <li>Integrated responsive visual designs using React.js and custom vanilla modules.</li>
                <li>Designed normalized SQL schema maps and scalable MongoDB collection layouts for academic marketplaces and portals.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeInLeft} className="timeline-item">
            <div className="timeline-dot" />
            <div className="glass-panel timeline-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">DevOps & Cloud-Native Architect</h4>
                  <div className="timeline-company">Containerization & Deployment Practice</div>
                </div>
                <span className="timeline-duration">2026 - Present</span>
              </div>
              <ul className="timeline-achievements">
                <li>Orchestrated multi-container applications locally using Docker Compose environment configurations.</li>
                <li>Configured local single-node Kubernetes cluster pods to replicate enterprise microservices deployments.</li>
                <li>Wrote functional automation scripts and compiled pipeline configurations using GitHub Actions triggers.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Certifications</motion.h3>
        <motion.div {...fadeInUp}>
          <CertificationCard />
        </motion.div>
      </section>


      {/* CONTACT SECTION */}
      <section id="contact" className="section-container" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <motion.h3 {...fadeInUp} className="section-title">Contact</motion.h3>
        
        <div className="contact-grid">
          {/* Info Side */}
          <motion.div {...fadeInLeft} className="contact-info">
            <div className="contact-heading-box">
              <h3>Let's Build Something Amazing Together</h3>
              <p style={{ color: 'var(--accent-grey)', fontSize: '0.98rem', lineHeight: '1.6' }}>
                I'm currently open to internships, freelance opportunities, collaborations, and software development projects.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:mohamedasif.i2007@gmail.com" className="glass-panel contact-link-card">
                <div className="contact-link-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="contact-link-label">Email Address</div>
                  <div className="contact-link-val">mohamedasif.i2007@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/mohamed-asif-i-a7b401311/" 
                target="_blank" 
                rel="noreferrer"
                className="glass-panel contact-link-card"
              >
                <div className="contact-link-icon">
                  <LinkedIn size={18} />
                </div>
                <div>
                  <div className="contact-link-label">LinkedIn Profile</div>
                  <div className="contact-link-val">mohamed-asif-i-a7b401311</div>
                </div>
              </a>

              <a 
                href="https://github.com/MOHAMEDASIF2007" 
                target="_blank" 
                rel="noreferrer"
                className="glass-panel contact-link-card"
              >
                <div className="contact-link-icon">
                  <GitHub size={18} />
                </div>
                <div>
                  <div className="contact-link-label">GitHub Account</div>
                  <div className="contact-link-val">MOHAMEDASIF2007</div>
                </div>
              </a>

              {/* General socials only */}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div {...fadeInRight} className="glass-panel contact-form-card">
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <a onClick={() => scrollTo('home')} className="footer-logo" style={{ cursor: 'pointer' }}>
            <div className="navbar-logo-dot" />
            <span>Mohamed Asif</span>
          </a>
          <p style={{ color: 'var(--accent-grey)', fontSize: '0.9rem', marginTop: '-10px' }}>Full Stack Developer</p>

          <div className="footer-socials">
            <a 
              href="https://github.com/MOHAMEDASIF2007" 
              target="_blank" 
              rel="noreferrer"
              className="footer-social-link"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-asif-i-a7b401311/" 
              target="_blank" 
              rel="noreferrer"
              className="footer-social-link"
            >
              LinkedIn
            </a>
            <a href="mailto:mohamedasif.i2007@gmail.com" className="footer-social-link">
              Email
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Mohamed Asif. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* DETAILED RESUME LIGHT MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <motion.div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '650px',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '30px 40px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.02)'
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  zIndex: 1,
                  transition: 'var(--transition-smooth)',
                  color: 'var(--accent-grey)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = 'var(--accent-muted)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--accent-grey)'; e.currentTarget.style.borderColor = 'var(--border-glass)'; }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Code size={20} style={{ color: 'var(--accent-grey)' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>MOHAMED_ASIF_RESUME.pdf</h4>
              </div>

              {/* Mock Resume Document Layout */}
              <div className="glass-panel" style={{ background: 'var(--bg-darker)', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-glass)', fontSize: '0.82rem', color: 'var(--accent-grey)', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'var(--font-mono)' }}>
                <div>
                  <h5 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'var(--font-sans)', marginBottom: '4px' }}>Mohamed Asif</h5>
                  <div>Tamil Nadu, India | mohamedasif.i2007@gmail.com</div>
                  <div>LinkedIn: linkedin.com/in/mohamedasif | GitHub: github.com/MOHAMEDASIF2007</div>
                </div>

                <div style={{ borderBottom: '1px solid var(--border-glass)' }} />

                <div>
                  <div style={{ color: 'var(--accent-grey)', fontWeight: 'bold', marginBottom: '6px' }}>SUMMARY</div>
                  <p style={{ fontFamily: 'var(--font-sans)', lineHeight: '1.4' }}>Motivated Full Stack Developer with experience developing web applications, backend systems, and modern web apps. Strong problem solver seeking software engineering roles and internships.</p>
                </div>

                <div>
                  <div style={{ color: 'var(--accent-grey)', fontWeight: 'bold', marginBottom: '6px' }}>TECHNICAL STACKS</div>
                  <div>Frontend: JavaScript, React.js, Tailwind CSS, Bootstrap, Next.js, TypeScript</div>
                  <div>Backend: Java, Spring Boot, Node.js, Express.js, REST APIs, JWT</div>
                  <div>Databases: MySQL, MongoDB</div>
                  <div>DevOps & Cloud: Docker, Kubernetes, Git, GitHub, Linux, CI/CD</div>
                </div>

                <div>
                  <div style={{ color: 'var(--accent-grey)', fontWeight: 'bold', marginBottom: '6px' }}>EXPERIENCE</div>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>Independent Projects & Developer Focus</div>
                  <div style={{ fontSize: '0.75rem', marginBottom: '4px' }}>2024 - Present</div>
                  <ul style={{ paddingLeft: '14px', margin: 0, fontFamily: 'var(--font-sans)', lineHeight: '1.4' }}>
                    <li>Engineered backend systems using Java Spring Boot and MySQL databases.</li>
                    <li>Developed responsive interactive frontend layouts utilizing React.js templates.</li>
                    <li>Configured local container environments (Docker compose pods) to test microservices integration.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ color: 'var(--accent-grey)', fontWeight: 'bold', marginBottom: '6px' }}>EDUCATION</div>
                  <div style={{ color: '#fff', fontWeight: 'bold' }}>B.Tech / B.Sc IT Student</div>
                  <div>Major in Information Technology</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
