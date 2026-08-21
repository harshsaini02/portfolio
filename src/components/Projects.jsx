import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Projects.css';

const CATEGORIES = ['All', 'Web App', 'Mobile App', 'API / Backend', 'Open Source'];

const projects = [
  {
    id: 1,
    title: 'Collage Fee Management(CFM)',
    category: 'Web App',
    desc: 'Built a multi-college Fee Management System using Django, Python, and MySQL with role-based access control, automated fee processing, secure CRUD operations, and SMTP-based email receipt notifications.',
    tech: ['Django', 'python', 'SMTP Email Bootstrap ', 'MySQL'],
    color: '#FF6B00',
    emoji: '📋',
    live: '#',
    github: '#',
  },
  {
    
  id: 2,
  title: 'Enterprise Saving Circle App',
  category: 'Mobile App',
  desc: 'Android-based saving circle app with multi-role authentication, real-time Firebase sync, and Razorpay subscription payments.',
  tech: ['Java', 'XML', 'Firebase', 'Razorpay SDK', 'Material Design'],
  color: '#FF8C00',
  emoji: '💰',
  live: '#',
  github: '#'

  },
{
  id: 3,
  title: 'Dairy Management App',
  category: 'Mobile App',
  desc: 'Android-based dairy management app for milk delivery tracking, payment management, real-time Firebase integration, user dashboards, and automated monthly reports.',
  tech: ['Java', 'XML', 'Android Studio', 'Firebase', 'Data Structures'],
  color: '#CC5500',
  emoji: '🥛',
  live: '#',
  github: '#',
},


 {
  id: 4,
  title: 'Personal Portfolio Website',
  category: 'Frontend Project',
  desc: 'Responsive personal portfolio website showcasing my technical skills, projects, experience, and company links with a modern UI design.',
  tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  color: '#FF6B00',
  emoji: '🌐',
  live: '#',
  github: '#',
},


 {
  id: 5,
  title: 'POS Billing System',
  category: 'Web App',
  desc: 'Mobile-responsive Point of Sale system with dual barcode scanning (hardware + camera), GST-compliant invoicing, automated tax calculations, inventory management, and reporting dashboard.',
  tech: ['Python', 'Django', 'Bootstrap', 'JavaScript'],
  color: '#FF8C00',
  emoji: '🧾',
  live: '#',
  github: '#',
},
{
  id: 6,
  title: 'ChiChat Application',
  category: 'Mobile App',
  desc: 'Real-time chat application with group messaging, media sharing, Firebase integration, and optimized UI for 30% faster performance.',
  tech: ['Java', 'XML', 'Android Studio', 'Firebase', 'Data Structures & Algorithms'],
  color: '#CC5500',
  emoji: '💬',
  live: '#',
  github: '#',
},

{
  id: 7,
  title: 'NOVA – AI Chatbot',
  category: 'AI / LLM',
  desc: 'LLM-powered chatbot built with the Gemini API, featuring an LLM-agnostic architecture designed to progress from basic conversation to RAG-based document Q&A and AI agents.',
  tech: ['Gemini API', 'Django REST Framework', 'React (Vite)', 'LLM Integration', 'RAG (in progress)'],
  color: '#2E74B5',
  emoji: '🤖',
  live: '#',
  github: '#',
}

];

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="card-top">
        <div className="card-emoji" style={{ background: `${project.color}18` }}>
          {project.emoji}
        </div>
        <div className="card-category">{project.category}</div>
      </div>

      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>

      <div className="card-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="card-links"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <a href={project.live} className="card-link-btn primary" target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
            <a href={project.github} className="card-link-btn secondary" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="card-border-glow" style={{ '--glow-color': project.color }} />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-bg-text">WORK</div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Selected Work</div>
          <h2 className="projects-title">
            Featured <span className="title-accent">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A curated selection of my best work across different domains
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="filter-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com/harshsaini02" target="_blank" rel="noreferrer" className="more-projects-btn">
            See All Projects on GitHub
            <span className="btn-icon">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
