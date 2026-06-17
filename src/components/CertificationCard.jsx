import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

// Import certificates
import mernPdf from '../assets/MOHAMED ASIF I intern mern.pdf';
import dsaPdf from '../assets/dsa certificate.pdf';
import oraclePdf from '../assets/oracle batch 1.pdf';
import dbmsSqlPdf from '../assets/DBMS CERTIFICATE SQL.pdf';
import dbmsCodechefPdf from '../assets/DBMS CODECHEF.pdf';
import pythonPdf from '../assets/python certification.pdf';

const CertificationCard = () => {
  const certifications = [
    {
      title: 'Mern Stack Internship',
      issuer: 'iGenuine Learning',
      date: 'Earned 2025',
      id: 'IGL-MS-1225',
      file: mernPdf
    },
    {
      title: 'Mastering Data Structures & Algorithms using C and C++',
      issuer: 'Udemy (Instructor: Abdul Bari)',
      date: 'Earned 2025',
      id: 'UC-3e1e046f',
      file: dsaPdf
    },
    {
      title: 'Oracle Java Foundations',
      issuer: 'Oracle Student Learning',
      date: 'Earned 2025',
      id: 'OR-JF-202509',
      file: oraclePdf
    },
    {
      title: 'SQL For Beginners',
      issuer: 'Udemy (Instructor: Sujithkumar MA)',
      date: 'Earned 2025',
      id: 'UC-e7fff73f',
      file: dbmsSqlPdf
    },
    {
      title: 'Top DBMS Interview Questions',
      issuer: 'CodeChef',
      date: 'Earned 2025',
      id: 'CC-EB9F3F8',
      file: dbmsCodechefPdf
    },
    {
      title: 'Python Programming Masterclass',
      issuer: 'Udemy (Makeintern)',
      date: 'Earned 2025',
      id: 'UC-fec1fb4a',
      file: pythonPdf
    }
  ];

  return (
    <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="glass-panel"
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '220px'
          }}
        >
          {/* Subtle monochrome border edge */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--border-glass)'
          }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                background: 'var(--accent-hover)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--accent-white)'
              }}>
                <Award size={20} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-white)', fontSize: '0.75rem', fontWeight: 500 }}>
                <ShieldCheck size={14} />
                <span>Verified</span>
              </div>
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-white)', marginBottom: '6px', lineHeight: '1.3' }}>
              {cert.title}
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-grey)', marginBottom: '4px' }}>
              {cert.issuer}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--accent-muted)' }}>
              {cert.date}
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border-glass)', marginTop: '20px', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-muted)' }}>
              ID: {cert.id}
            </span>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-white)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'var(--transition-smooth)'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span>Validate</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationCard;
