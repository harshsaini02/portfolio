import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 88 },
      { name: 'React Native', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 78 },
      { name: 'Django (Python)', level: 80 },
      { name: 'REST APIs', level: 90 }
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
     { name: 'PostgreSQL', level: 88 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'Firebase (Firestore)', level: 80 },
    { name: 'SQLite', level: 78 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Vercel', level: 92 },
      { name: 'AWS (EC2, S3)', level: 78 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD (GitHub Actions)', level: 82 },
      { name: 'Railway Deployment', level: 88 },
    ],
  },
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <motion.span
          className="skill-percent"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="skill-glow" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="skills" ref={ref}>
      {/* BG text decoration */}
      <div className="skills-bg-text">SKILLS</div>

      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">What I Know</div>
          <h2 className="skills-title">
            My <span className="title-accent">Expertise</span>
          </h2>
          <p className="skills-subtitle">
            Battle-tested skills built across dozens of production projects
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIndex * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-card-header">
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{cat.category}</span>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    inView={inView}
                    delay={catIndex * 0.15 + skillIndex * 0.1 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools / tools strip */}
        <motion.div
          className="tools-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        > 
          <span className="tools-label">Also comfortable with:</span>
          {['Git', 'Figma', 'Jest', 'Webpack', 'Nginx', 'Stripe', 'Supabase'].map((tool) => (
            <span key={tool} className="tool-chip">{tool}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
