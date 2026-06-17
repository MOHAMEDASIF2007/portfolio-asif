import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Cpu, Info, CheckCircle2 } from 'lucide-react';
import { GitHub } from './BrandIcons';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Learning Management System',
      subtitle: 'Smart LMS',
      tech: ['Spring Boot', 'Java', 'MySQL', 'JWT', 'REST API'],
      shortDesc: 'A full-featured Learning Management System built using Java Spring Boot and MySQL with authentication, course management, attendance tracking, assignment management, and role-based access control.',
      fullDesc: 'Smart LMS is a robust learning platform built using Java Spring Boot and MySQL database. It supports course pathway creation, secure user authentication via JWT tokens, assignment management, grade books, and integrated student attendance tracking. The application follows clean MVC architecture with transactional layers.',
      features: [
        'Student Dashboard',
        'Faculty Management',
        'Attendance Tracking',
        'Assignments',
        'Authentication'
      ],
      github: 'https://github.com/MOHAMEDASIF2007',
      demo: '#',
      category: 'Java & Spring Boot'
    },
    {
      id: 2,
      title: 'AI Attendance System',
      subtitle: 'AI Attendance',
      tech: ['Python', 'OpenCV', 'TensorFlow'],
      shortDesc: 'An AI-powered attendance management solution that uses facial recognition technology to automate attendance tracking and generate reports.',
      fullDesc: 'An advanced computer vision and deep learning application. The system processes video streams via OpenCV to detect faces, utilizes a trained TensorFlow model to recognize identities against a database of students, and automatically logs timestamps. It features auto-generated reports and real-time detection.',
      features: [
        'Face Recognition',
        'Automatic Attendance',
        'Real-Time Detection',
        'Reporting Dashboard'
      ],
      github: 'https://github.com/MOHAMEDASIF2007',
      demo: '#',
      category: 'Python / Computer Vision'
    },
    {
      id: 3,
      title: 'StubaZaar',
      subtitle: 'StubaZaar Campus Marketplace',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      shortDesc: 'A student marketplace platform where students can buy and sell products through a secure and responsive web application.',
      fullDesc: 'StubaZaar is a campus peer-to-peer marketplace utilizing the MERN stack. It allows verified students to list items, message prospective buyers locally, filter listings by category and condition, and manage wishlists. Built with Express router pipelines and MongoDB storage.',
      features: [
        'Authentication',
        'Marketplace Listings',
        'User Management',
        'Responsive UI'
      ],
      github: 'https://github.com/MOHAMEDASIF2007',
      demo: '#',
      category: 'Full Stack / MERN App'
    },
    {
      id: 4,
      title: 'Job Portal & Recruitment Platform',
      subtitle: 'Job Portal',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Docker'],
      shortDesc: 'A full-stack recruitment platform that connects job seekers and recruiters through a secure role-based system.',
      fullDesc: 'A full-stack recruitment platform that connects job seekers and recruiters through a secure role-based system. Recruiters can post and manage job openings, while candidates can search, apply, upload resumes, and track application status.',
      features: [
        'Role-Based Authentication',
        'Job Posting & Management',
        'Resume Upload System',
        'Application Tracking',
        'Recruiter Dashboard',
        'Responsive UI'
      ],
      github: 'https://github.com/MOHAMEDASIF2007',
      demo: '#',
      category: 'Java & Spring Boot'
    }
  ];

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="glass-panel"
            style={{
              padding: '32px 24px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            {/* Top Border Monochrome Highlight */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'var(--border-glass)'
            }} />

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-white)', background: 'var(--accent-hover)', padding: '4px 12px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                  {project.category}
                </span>
                <span style={{ color: 'var(--accent-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>0{project.id}</span>
              </div>

              <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent-white)', marginBottom: '12px', lineHeight: '1.3' }}>
                {project.title}
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--accent-grey)', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>
                {project.shortDesc}
              </p>
            </div>

            <div>
              {/* Tech Badges List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              {/* Action button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--accent-white)', fontWeight: 600 }}>
                <span>View Details</span>
                <Info size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}>
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '640px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '36px 30px',
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
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--accent-white)',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.borderColor = 'var(--accent-muted)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--accent-grey)'; e.currentTarget.style.borderColor = 'var(--border-glass)'; }}
              >
                <X size={16} />
              </button>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-white)', background: 'var(--accent-hover)', padding: '4px 10px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                    {selectedProject.category}
                  </span>
                  <span style={{ color: 'var(--accent-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>Project 0{selectedProject.id}</span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', lineHeight: '1.2' }}>
                  {selectedProject.title}
                </h3>

                {/* Tech badging */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-badge" style={{ fontSize: '0.78rem', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>

                <div style={{ borderBottom: '1px solid var(--border-glass)', marginBottom: '24px' }} />

                <div style={{ marginBottom: '24px' }}>
                  <h5 style={{ color: 'var(--accent-white)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <Cpu size={14} /> Description
                  </h5>
                  <p style={{ fontSize: '0.92rem', color: 'var(--accent-grey)', lineHeight: '1.6' }}>
                    {selectedProject.fullDesc}
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h5 style={{ color: 'var(--accent-white)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <CheckCircle2 size={14} /> Key Features
                  </h5>
                  <ul style={{ listStyle: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--accent-grey)' }}>
                        <span style={{ color: 'var(--accent-white)', fontWeight: 'bold', fontSize: '1rem', lineHeight: '1' }}>•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Repository and live links */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ flexGrow: 1, justifyContent: 'center' }}
                  >
                    <GitHub size={18} />
                    <span>View Repository</span>
                  </a>
                  {selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                      style={{ flexGrow: 1, justifyContent: 'center' }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demonstration</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
