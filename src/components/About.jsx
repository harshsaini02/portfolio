import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Django', icon: '🌿' },
  { name: 'Python', icon: '🐍' },
  { name: 'Android', icon: '🤖' },
  { name: 'Java', icon: '☕' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Razorpay', icon: '💳' },
  { name: 'MySQL', icon: '🗄️' },
];


export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        {/* Left side - visual */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avatar-frame">
            <div className="avatar-placeholder">
              {/* <span className="avatar-initials">YN</span> */}
              <img src="/photo.png" alt="Harsh Saini" className="avatar-photo" />
              <div className="avatar-ring ring-1" />
              <div className="avatar-ring ring-2" />
              <div className="avatar-ring ring-3" />
            </div>
            {/* <div className="avatar-badge">
            <span className="badge-icon">🚀</span>
            <span>1+ Years Freelancing</span>
            </div> */}

          </div>

          {/* Experience cards */}
          {/* <motion.div
            className="exp-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="exp-num">10+</span>
            <span className="exp-text">Projects Completed</span>
          </motion.div> */}

           {/* <motion.div
            className="exp-card exp-card-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="exp-num">∞</span>
            <span className="exp-text">Lines of Code</span>
          </motion.div> */}
        </motion.div>

        {/* Right side - content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="about-title">
            Crafting Digital
            <span className="title-accent"> Experiences</span>
          </h2>

          <p className="about-text">
            I'm a passionate Full Stack Developer with + years of freelance experience 
            building scalable web and mobile applications. 
            I specialize in <strong>React, Node.js, MERN Stack, and Django</strong> 
            to create high-performance, secure, and user-friendly systems. 
            From modern UI design to backend architecture and payment integrations, 
            I turn complex ideas into reliable real-world solutions.

          </p>

          <p className="about-text">
            When I'm not coding, I'm contributing to open source, exploring new 
            technologies, or mentoring junior developers. I believe great software 
            is built by <strong>curious, collaborative people</strong> — and I bring 
            that energy to every project.
          </p>

          <div className="tech-grid">
            <div className="tech-label">My Stack</div>
            <div className="tech-items">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="tech-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.08, borderColor: 'var(--orange)' }}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href="/resume.pdf"
            className="resume-btn"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
           <a href="/resume.pdf" download>
            <span>Download Resume</span>
            <span className="resume-icon">↓</span>
          </a>
                    </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
