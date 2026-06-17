/* eslint-disable react-refresh/only-export-components */
// General-purpose Lucide icons for fallback
import { 
  Code2, 
  Layers, 
  Smartphone, 
  Workflow, 
  Cpu
} from 'lucide-react';

export const HTML5Icon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
    <path d="M12 5H7.5l.5 5h4v2H9.5L9 15.5l3 1.5 3-1.5.5-5H12V5z" fill="none" />
  </svg>
);

export const CSS3Icon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" />
    <path d="M8.5 7h7l-.5 4h-6l.5 3.5 2.5 1 2.5-1 .3-3h-3.3" />
  </svg>
);

export const JavaScriptIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M15 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-4M15 15v2" />
  </svg>
);

export const ReactIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const TailwindIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 6.5C12 4.5 13.5 3 15.5 3S19 4.5 19 6.5s-1.5 3.5-3.5 3.5c-3.5 0-3.5-3.5-3.5-3.5z" />
    <path d="M5 13.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5-1.5 3.5-3.5 3.5c-3.5 0-3.5-3.5-3.5-3.5z" />
    <path d="M8.5 10c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5c-3.5 0-3.5-3.5-3.5-3.5s0-3.5 3.5-3.5z" />
    <path d="M15.5 3c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5C12 10 12 6.5 12 6.5s0-3.5 3.5-3.5z" />
  </svg>
);

export const BootstrapIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M9 7h4a2.5 2.5 0 0 1 0 5H9V7z" />
    <path d="M9 12h4.5a2.5 2.5 0 0 1 0 5H9v-5z" />
  </svg>
);

export const JavaIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Coffee cup silhouette with stylized steam representing Java */}
    <path d="M6 10h12v7a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-7z" />
    <path d="M18 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
    <path d="M10 2c0 2-2 2-2 4" />
    <path d="M14 2c0 2-2 2-2 4" />
    <path d="M4 22h16" />
  </svg>
);

export const SpringBootIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Leaf shaped icon for Spring */}
    <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.8 9.1 8.7 9.8.7.1 1.3-.4 1.3-1.1V10c0-1.7 1.3-3 3-3h3.8c.7 0 1.2-.6 1.1-1.3C19.1 2.8 15.8 2 12 2z" />
    <path d="M12 22c5.5 0 10-4.5 10-10 0-5-3.8-9.1-8.7-9.8-.7-.1-1.3.4-1.3 1.1V14c0 1.7-1.3 3-3 3H5.2c-.7 0-1.2.6-1.1 1.3C4.9 21.2 8.2 22 12 22z" />
  </svg>
);

export const NodeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Hexagonal Node structure */}
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <path d="M12 2v20" />
    <path d="M3 7l9 5 9-5" />
    <path d="M12 12l9 5" />
    <path d="M12 12L3 17" />
  </svg>
);

export const PythonIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Interlocking snake tracks */}
    <path d="M12 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a5 5 0 0 1 5-5h6z" />
    <path d="M12 22v-8a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5h-6z" />
    <circle cx="5" cy="5" r="0.75" fill="currentColor" />
    <circle cx="19" cy="19" r="0.75" fill="currentColor" />
  </svg>
);

export const MySQLIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Double database cylinder with data query arrow */}
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    <path d="M12 8v8" />
  </svg>
);

export const MongoDBIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* MongoDB leaf shape logo */}
    <path d="M12 2C12 2 9 6 9 12c0 3 1.5 6 3 10 1.5-4 3-7 3-10 0-6-3-10-3-10z" />
    <path d="M12 2v20" />
  </svg>
);

export const DockerIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stylized stack of container blocks on a ship base */}
    <rect x="5" y="4" width="3" height="3" rx="0.5" />
    <rect x="9" y="4" width="3" height="3" rx="0.5" />
    <rect x="13" y="4" width="3" height="3" rx="0.5" />
    <rect x="7" y="8" width="3" height="3" rx="0.5" />
    <rect x="11" y="8" width="3" height="3" rx="0.5" />
    <rect x="15" y="8" width="3" height="3" rx="0.5" />
    <path d="M2 14h20a1 1 0 0 1 1 1c0 3.3-2.7 6-6 6H7c-3.3 0-6-2.7-6-6a1 1 0 0 1 1-1z" />
  </svg>
);

export const KubernetesIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Kubernetes Helm symbol */}
    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v7M4 6l6.5 3.5M4 18l6.5-3.5M12 22v-7M20 18l-6.5-3.5M20 6l-6.5 3.5" />
  </svg>
);

export const GitIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Git node branches */}
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <path d="M6 9v6" />
  </svg>
);

export const LinuxIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tux penguin silhouette */}
    <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.2.5 2.3 1.3 3-.8.8-1.3 1.9-1.3 3.1 0 2 1.5 3.7 3.5 3.9v3.5l1-1 1 1v-3.5c2-.2 3.5-1.9 3.5-3.9 0-1.2-.5-2.3-1.3-3.1.8-.7 1.3-1.8 1.3-3C16.5 4 14.5 2 12 2z" />
    <path d="M9 20s-1 1-3 1M15 20s1 1 3 1" />
  </svg>
);

export const CPlusPlusIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 6.5A5.5 5.5 0 1 0 11 17.5" />
    <path d="M15 12h6M18 9v6" />
    <path d="M21 12h2" /> {/* Small adjustments to form C++ styling */}
  </svg>
);

export const OpenCVIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* 3 interlocking circles of OpenCV */}
    <circle cx="12" cy="7" r="4.5" />
    <circle cx="7" cy="15" r="4.5" />
    <circle cx="17" cy="15" r="4.5" />
  </svg>
);

export const TensorFlowIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Isometric cube outline for TensorFlow */}
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <path d="M12 22V12" />
    <path d="M12 12L3 7M12 12l9-5" />
    <path d="M7.5 4.5l9 5" />
  </svg>
);

export const PostmanIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Rocket launch logo outline */}
    <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5h8c0-2-1-4-2.5-5.5z" />
    <path d="M12 2l4 4-9 9-4-4 9-9z" />
    <path d="M19.5 4.5c1.5-1.5 3.5-2.5 4.5-2.5v8c-2 0-4-1-5.5-2.5z" fill="currentColor" />
    <path d="M9 15l6 6" />
  </svg>
);

// Map skill names to icons
export const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();
  
  if (name.includes('html') || name.includes('css')) return HTML5Icon;
  if (name.includes('react')) return ReactIcon;
  if (name.includes('tailwind')) return TailwindIcon;
  if (name.includes('bootstrap')) return BootstrapIcon;
  
  if (name.includes('spring boot')) return SpringBootIcon;
  if (name.includes('node.js') || name.includes('express')) return NodeIcon;
  if (name === 'java') return JavaIcon;
  if (name === 'python') return PythonIcon;
  
  if (name.includes('mysql') || name === 'sql') return MySQLIcon;
  if (name.includes('mongodb')) return MongoDBIcon;
  
  if (name === 'docker' || name.includes('docker desktop')) return DockerIcon;
  if (name === 'kubernetes') return KubernetesIcon;
  if (name.includes('git') || name.includes('github') || name.includes('eclipse')) return GitIcon;
  if (name.includes('linux')) return LinuxIcon;
  
  if (name.includes('c++')) return CPlusPlusIcon;
  
  if (name.includes('opencv')) return OpenCVIcon;
  if (name.includes('tensorflow')) return TensorFlowIcon;
  
  // High-fidelity fallback categorizations
  if (name.includes('responsive') || name.includes('design')) return Smartphone;
  if (name.includes('api') || name.includes('rest')) return Workflow;
  if (name.includes('containerization')) return Layers;
  if (name.includes('pipeline') || name.includes('ci/cd')) return Workflow;
  if (name.includes('machine learning') || name.includes('ai') || name.includes('pandas') || name.includes('numpy')) return Cpu;
  if (name.includes('vs code') || name.includes('intellij')) return Code2;
  if (name.includes('postman')) return PostmanIcon;
  
  return Code2; // generic fallback
};
