import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const ROLES = [
  'Full Stack Developer (MERN & Django)',
  'Android Application Developer',
  'React & Node.js Developer',
  'Payment Gateway Integration Specialist'
];


function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
      return;
    }
    const speed = deleting ? 50 : 80;
    const timeout = setTimeout(() => {
      setSubIndex(s => s + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}
      <span className={`cursor-blink ${blink ? 'visible' : ''}`}>|</span>
    </span>
  );
}

// Floating geometric shapes
function FloatingShape({ style, className }) {
  return <div className={`float-shape ${className}`} style={style} />;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated background grid */}
      <div className="hero-grid" />

      {/* Floating shapes that react to mouse */}
      <div
        className="shapes-layer"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
          transition: 'transform 0.4s ease',
        }}
      >
        <FloatingShape className="shape-1" />
        <FloatingShape className="shape-2" />
        <FloatingShape className="shape-3" />
        <FloatingShape className="shape-4" />
        <FloatingShape className="shape-5" />
      </div>

      {/* Radial glow */}
      <div
        className="hero-glow"
        style={{
          left: `calc(50% + ${mousePos.x * 120}px)`,
          top: `calc(50% + ${mousePos.y * 120}px)`,
        }}
      />

      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="tag-dot" />
          Available for hire
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="title-line">HI, I'M</span>
          <span className="title-name">HARSH SAINI</span>
        </motion.h1>
 
        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <Typewriter words={ROLES} />
        </motion.div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          I build scalable <span className="highlight">React & Node.js</span> web applications 
          and robust <span className="highlight">Android apps</span>. 
          Specializing in <span className="highlight">MERN Stack development</span>, 
          secure payment integrations, and transforming complex ideas into 
          <span className="highlight">high-performance, real-world solutions</span>.

        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <button className="btn-primary" onClick={scrollToProjects}>
            View My Work
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary" onClick={scrollToContact}>
            Let's Talk
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {[
            { num: '10+', label: 'Projects Built' },
            { num: '1+', label: 'Years as Freelance Developer' },
            { num: '5+', label: 'Happy Clients' },
          ].map(({ num, label }) => (
            <div key={label} className="stat">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}