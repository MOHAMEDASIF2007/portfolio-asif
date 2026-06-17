import React from 'react';
import { Calendar, Code2, Cpu } from 'lucide-react';

const StatsPanel = () => {
  const stats = [
    {
      id: 'years',
      label: 'Years Learning',
      value: '3+',
      description: 'Academics & independent software development',
      icon: Calendar,
    },
    {
      id: 'projects',
      label: 'Projects Built',
      value: '10+',
      description: 'Independent backend, MERN, and AI/ML applications',
      icon: Code2,
    },
    {
      id: 'tech',
      label: 'Technologies Used',
      value: '15+',
      description: 'Spring Boot, React, DevOps, and ML stacks',
      icon: Cpu,
    }
  ];

  return (
    <div className="grid-3" style={{ width: '100%' }}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="glass-panel"
            style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--accent-orange)',
                opacity: 0.04,
                filter: 'blur(25px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </span>
              <div
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 107, 53, 0.05)',
                  border: '1px solid rgba(255, 107, 53, 0.1)',
                  color: 'var(--accent-orange)',
                  boxShadow: 'var(--glow-orange)'
                }}
              >
                <Icon size={18} />
              </div>
            </div>

            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px', letterSpacing: '-0.02em' }}>
              {stat.value}
            </h3>
            
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsPanel;
