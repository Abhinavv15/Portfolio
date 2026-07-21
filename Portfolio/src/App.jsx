import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import './App.css'

// ── Asset imports ───────────────────────────────────────────
import leetcodeLogo from './assets/LeetCode_logo_rvs.png'
import netlifyLogo  from './assets/Netlify_Logo_0.svg'
import nodeLogo     from './assets/Node.js_logo.png'
import pythonLogo   from './assets/Python-logo.png'
import renderLogo   from './assets/Render logomark - Black.svg'
import githubLogo   from './assets/github-mark.svg'
import cppLogo      from './assets/icons8-c++.svg'
import cssLogo      from './assets/icons8-css3.svg'
import htmlLogo     from './assets/icons8-html5.svg'
import jsLogo       from './assets/icons8-javascript.svg'
import linkedinIcon from './assets/linkedin icon.png'
import gmailIcon    from './assets/icons8-gmail.svg'
import mysqlLogo    from './assets/logo-mysql-170x115.png'
import mongoLogo    from './assets/mongodb logo.svg'
import postmanLogo  from './assets/postman-logo-icon.svg'
import reactLogo    from './assets/react logo.svg'
import tailwindLogo from './assets/tailwindcss-mark.d52e9897.svg'
import vercelLogo   from './assets/vercel-icon-light.svg'
import viteLogo     from './assets/vitejs logo.svg'
import figmaLogo    from './assets/figma logo.png'
import canvaLogo    from './assets/canva logo.svg'

// ── Animation variants ──────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

// ── Static data ─────────────────────────────────────────────
const logos = [
  { src: reactLogo,    alt: 'React'      },
  { src: nodeLogo,     alt: 'Node.js'    },
  { src: jsLogo,       alt: 'JavaScript' },
  { src: htmlLogo,     alt: 'HTML5'      },
  { src: cssLogo,      alt: 'CSS3'       },
  { src: tailwindLogo, alt: 'Tailwind'   },
  { src: mongoLogo,    alt: 'MongoDB'    },
  { src: mysqlLogo,    alt: 'MySQL'      },
  { src: postmanLogo,  alt: 'Postman'    },
  { src: pythonLogo,   alt: 'Python'     },
  { src: cppLogo,      alt: 'C++'        },
  { src: viteLogo,     alt: 'Vite'       },
  { src: netlifyLogo,  alt: 'Netlify'    },
  { src: vercelLogo,   alt: 'Vercel'     },
  { src: renderLogo,   alt: 'Render'     },
  { src: figmaLogo,    alt: 'Figma'      },
  { src: canvaLogo,    alt: 'Canva'      },
  { src: githubLogo,   alt: 'GitHub'     },
  { src: leetcodeLogo, alt: 'LeetCode'   },
]

const skillData = [
  { cat: 'Frontend',       tags: ['JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { cat: 'Backend',        tags: ['Node.js', 'Express.js', 'JWT Auth', 'REST API'] },
  { cat: 'Database',       tags: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { cat: 'Cloud & Deploy', tags: ['AWS', 'GCP', 'Render', 'Netlify', 'Vercel'] },
  { cat: 'Languages',      tags: ['Python', 'C++', 'Java'] },
  { cat: 'Tools & Design', tags: ['Git & GitHub', 'Postman', 'Figma', 'Canva', 'Meta Business Suite'] },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/abhinav-v-9496b72b5/', img: linkedinIcon, label: 'LinkedIn' },
  { href: 'https://github.com/Abhinavv15',                     img: githubLogo,   label: 'GitHub' },
  { href: 'https://leetcode.com/u/Abhinavv15/',               img: leetcodeLogo, label: 'LeetCode' },
]

const contactLinks = [
  { href: 'mailto:Abhinavv0215@gmail.com',                     img: gmailIcon,    label: 'Abhinavv0215@gmail.com' },
  { href: 'tel:+916282946966',                                 img: null,         label: '+91 6282946966' },
]

const experiences = [
  {
    id: '01',
    period: 'Sep 2025 – Present',
    role: 'Software Development Engineer',
    company: 'GenCoft Technologies',
    items: [
      'WorldSportsAcademy – Frontend development',
      'QuizWizard – UI redesign',
      'OffShift – Application testing',
      'Bracketoro – Website testing',
      'Brand Flyers – Website testing and Frontend development',
      'Flyers Creation – Designed using Canva and Figma',
      'Gencoft Website – Redesigned the UI',
      'OneKathaAtaTime – Frontend development and serverless functions',
    ],
  },
  {
    id: '02',
    period: 'Aug 2024 – Sep 2025',
    role: 'CSE Program',
    company: 'Kalvium',
    items: ['MERN stack via real-world projects', 'Full-stack apps with React & Node.js', 'Collaborative team learning'],
  },
]

const projects = [
  { title: 'Taktikal',             description: 'A full-stack platform for Sports Coaches — managing schedules, athletes, and analytics.',  tech: ['React', 'Node.js', 'MongoDB'], github: 'https://github.com/kalviumcommunity/S66_Abhinav_Capstone_Taktikal', live: 'https://taktikal.netlify.app/' },
  { title: 'HandScape',            description: 'A gallery where users store and share hand images with full CRUD functionality.',            tech: ['React', 'Node.js', 'MongoDB'], github: 'https://github.com/kalviumcommunity/S66_hand_pic', live: 'https://handscape-o.netlify.app/' },
  { title: 'QuizWizard Redesign',  description: 'Full UI/UX redesign of the QuizWizard platform, prototyped in Figma.',                     tech: ['Figma', 'UI/UX'],              live: 'https://www.figma.com/proto/bIxVZz1Ri5T2SGyFLx0AyM/QuizWizard-Redesign?page-id=0%3A1&node-id=1-2&viewport=409%2C330%2C0.31&t=sBbFYbkKqfz5XfdH-1&scaling=scale-down&content-scaling=fixed' },
  { title: 'World Sports Academy', description: 'Official website for World Sports Academy — responsive, modern frontend.',                  tech: ['React', 'Tailwind', 'Vite'],   live: 'https://wsateam.com/' },
  { title: 'Latin Expressions',    description: 'Redesign and rebuild of the Latin Expressions website with a fresh modern look.',           tech: ['React', 'Vite', 'Frontend'],   live: 'https://latinexpression.netlify.app/' },
  { title: 'One Katha at a Time',  description: 'A premium storytelling & payment platform. Developed the React frontend, Python backend, and Vite build system.', tech: ['React', 'Python', 'Vite'], live: 'https://one-katha.vercel.app/' },
  { title: 'GenCoft Redesign',     description: 'Official website redesign for GenCoft Technologies featuring a sleek modern layout and optimized components.', tech: ['React', 'UI/UX', 'Vite'], live: 'https://gencoft.com/' },
]

// ── Nav ─────────────────────────────────────────────────────
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderBottom: '1px solid rgba(240, 240, 240, 0.8)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'rgba(255, 255, 255, 0.82)',
        }}
      >
        <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)}>Abhinav V</a>
        
        {/* Desktop right section */}
        <div className="nav-right">
          <ul className="nav-links">
            {['Experience', 'Projects'].map(link => (
              <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
          <a
            href="/Abhinav V CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
          >
            <span>View CV</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <button 
          className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </span>
        </button>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mobile-nav-links">
              {['Experience', 'Projects'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Abhinav V CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mobile-cv-link"
                >
                  View CV ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ── Marquee ─────────────────────────────────────────────────
const Marquee = () => (
  <div className="marquee-section">
    <motion.div
      className="marquee-track"
      animate={{ x: [0, -1700] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      {[...logos, ...logos, ...logos].map((logo, i) => (
        <React.Fragment key={i}>
          <div className="marquee-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
          <div className="marquee-sep" />
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

// ── Hero ─────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section className="hero" ref={ref} id="hero">
      <motion.div className="hero-inner" style={{ y }}>

        {/* Left: eyebrow + name + bio + connect */}
        <div className="hero-left">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Software Developer
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Abhinav <em>V</em>
          </motion.h1>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Frontend developer &amp; UI/UX enthusiast with experience in{' '}
            <strong>React, MERN stack &amp; AI automation</strong>. I build responsive,
            user-focused web applications — blending engineering precision with design intuition.
          </motion.p>

          {/* Connect links — horizontal rows */}
          <motion.div
            className="connect-block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <span className="connect-label">Connect</span>
            <div className="connect-row">
              <motion.a
                href="/Abhinav V CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-btn connect-cv-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                📄 View CV / Resume ↗
              </motion.a>
              {socialLinks.map(({ href, img, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="connect-btn"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {img && <img src={img} alt={label} />}
                  {label}
                </motion.a>
              ))}
            </div>
            <div className="connect-row" style={{ marginTop: '0.45rem' }}>
              {contactLinks.map(({ href, img, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="connect-btn"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {img && <img src={img} alt={label} />}
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Technical Skills */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          <div className="hero-skills-title">Technical <em>Skills</em></div>
          <div className="skills-grid">
            {skillData.map(({ cat, tags }) => (
              <div key={cat}>
                <div className="skill-cat-name">{cat}</div>
                <div className="skill-tags">
                  {tags.map(tag => (
                    <motion.span
                      key={tag}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee at the bottom of the hero */}
      <Marquee />
    </section>
  )
}

// ── Project card with smooth hover ───────────────────────────
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
      </div>
      <div className="project-footer">
        <div className="project-tags">
          {project.tech.map(t => <span key={t} className="project-tag">{t}</span>)}
        </div>
        <div className="project-links-row">
          {project.github && (
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
              className="proj-link" whileHover={{ scale: 1.1 }} title="GitHub">
              <img src={githubLogo} alt="GitHub" />
            </motion.a>
          )}
          {project.live && (
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
              className="proj-link" whileHover={{ scale: 1.1 }} title="Live">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Projects Slider Component ─────────────────────────────────
const ProjectsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = []
  for (let i = 0; i < projects.length; i += 2) {
    slides.push(projects.slice(i, i + 2))
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [activeSlide, slides.length, isPaused])

  return (
    <div 
      className="projects-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="projects-slider-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="projects-slider-slide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {slides[activeSlide].map((project, pi) => {
              const globalIdx = slides.slice(0, activeSlide).reduce((s, g) => s + g.length, 0) + pi
              const isSolo = slides[activeSlide].length === 1
              const posClass = isSolo
                ? 'project-card-wrapper-solo'
                : pi === 0 ? 'project-card-wrapper-top' : 'project-card-wrapper-bottom'

              return (
                <div key={project.title} className={posClass}>
                  <ProjectCard project={project} index={globalIdx} />
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="slider-controls">
        <button 
          className="slider-arrow" 
          onClick={() => setActiveSlide(prev => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous Slide"
        >
          ←
        </button>
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          className="slider-arrow" 
          onClick={() => setActiveSlide(prev => (prev + 1) % slides.length)}
          aria-label="Next Slide"
        >
          →
        </button>
      </div>
    </div>
  )
}

// ── Combined Experience & Projects Section ────────────────────
const ExpAndProjectsSection = () => (
  <section className="exp-projects-section" id="experience">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: '-80px' }}
      variants={stagger}
    >
      <motion.div className="section-label" variants={fadeUp}>Experience &amp; Works</motion.div>

      <div className="exp-projects-grid">
        {/* Left Column: Experience */}
        <div>
          <motion.h2 className="col-heading" variants={fadeUp}>
            Works &amp; <em>Learning</em>
          </motion.h2>

          <motion.div className="experience-list" variants={stagger}>
            {experiences.map(exp => (
              <motion.div key={exp.id} className="exp-card" variants={fadeUp}>
                <div className="exp-card-inner">
                  <span className="exp-number">{exp.id}</span>
                  <div>
                    <div className="exp-period">{exp.period}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <ul className="exp-items">
                      {exp.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Projects Slider */}
        <div id="projects">
          <motion.h2 className="col-heading" variants={fadeUp}>
            Projects &amp; <em>Works</em>
          </motion.h2>

          <ProjectsSlider />
        </div>
      </div>
    </motion.div>
  </section>
)

// ── App ──────────────────────────────────────────────────────
const App = () => (
  <div className="app">
    <Nav />
    <main>
      <Hero />
      <ExpAndProjectsSection />
    </main>
  </div>
)

export default App