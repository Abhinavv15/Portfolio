import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useMotionValue, useMotionValueEvent, animate } from 'framer-motion'
import './App.css'

// Import selected logo assets (removed figma, linkedin, canva, vscode)
import leetcodeLogo from './assets/LeetCode_logo_rvs.png'
import netlifyLogo from './assets/Netlify_Logo_0.svg'
import nodeLogo from './assets/Node.js_logo.png'
import pythonLogo from './assets/Python-logo.png'
import renderLogo from './assets/Render logomark - Black.svg'
import githubLogo from './assets/github-mark.svg'
import cppLogo from './assets/icons8-c++.svg'
import cssLogo from './assets/icons8-css3.svg'
import htmlLogo from './assets/icons8-html5.svg'
import jsLogo from './assets/icons8-javascript.svg'
import linkedinIcon from './assets/linkedin icon.png'
import gmailIcon from './assets/icons8-gmail.svg'
import mysqlLogo from './assets/logo-mysql-170x115.png'
import mongoLogo from './assets/mongodb logo.svg'
import postmanLogo from './assets/postman-logo-icon.svg'
import reactLogo from './assets/react logo.svg'
import tailwindLogo from './assets/tailwindcss-mark.d52e9897.svg'
import vercelLogo from './assets/vercel-icon-light.svg'
import viteLogo from './assets/vitejs logo.svg'



// Simple Clock Component
const SimpleClock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="clock-display">
      <div className="digital-time">
        {time.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}
      </div>
      <div className="date">
        {time.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  )
}

const App = () => {

  // Logo arrays for two rows (removed figma, linkedin, canva, vscode)
  const logos = [
    leetcodeLogo, netlifyLogo, nodeLogo, pythonLogo, renderLogo,
    githubLogo, cppLogo, cssLogo, htmlLogo, jsLogo,
    mysqlLogo, mongoLogo, postmanLogo, reactLogo, tailwindLogo, vercelLogo,
    viteLogo
  ]



  return (
    <div className="app">
      {/* Main Layout Container */}
      <div className="layout-container">
        {/* Left side - Name */}
        <motion.div
          className="name-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="name-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5
            }}
          >
            <h1 className="name-left">ABHINAV V</h1>
            <p className="about-text">
              I’m passionate about developing software solutions and continuously enhancing my skills. 
              I look forward to leveraging my knowledge in real-world applications
              and contributing to innovative projects.
            </p>

            {/* Connect Section */}
            <div className="connect-section">
              <div className="connect-title">CONNECT</div>
              <div className="connect-icons">
                <motion.a
                  href="https://www.linkedin.com/in/abhinav-v-9496b72b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </motion.a>
                <motion.a
                  href="mailto:Abhinavdhanesh15@gmail.com"
                  className="connect-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={gmailIcon} alt="Gmail" />
                </motion.a>
                <motion.a
                  href="https://github.com/Abhinavv15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={githubLogo} alt="GitHub" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Tech Stack Card */}
        <div className="cards-grid">
          {/* Tech Stack Card */}
          <motion.div
            className="grid-card tech-stack-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="tech-stack-content">
              <h2 className="tech-stack-title">TECH STACK</h2>

              <div className="tech-section">
                <h3 className="tech-category">Frontend:</h3>
                <div className="tech-items">
                  <span className="tech-item">React</span>
                  <span className="tech-item">NextJS</span>
                  <span className="tech-item">Tailwindcss</span>
                </div>
              </div>

              <div className="tech-section">
                <h3 className="tech-category">Backend:</h3>
                <div className="tech-items">
                  <span className="tech-item">NodeJS</span>
                  <span className="tech-item">ExpressJS</span>
                  <span className="tech-item">NPM</span>
                </div>
              </div>

              <div className="tech-section">
                <h3 className="tech-category">DB & Services:</h3>
                <div className="tech-items">
                  <span className="tech-item">Postman</span>
                  <span className="tech-item">MongoDB</span>
                  <span className="tech-item">MySQL</span>
                </div>
              </div>

              <div className="tech-section">
                <h3 className="tech-category">Currently Learning:</h3>
                <div className="tech-items">
                  <span className="tech-item learning">Rust</span>
                  <span className="tech-item learning">FastAPI</span>
                </div>
              </div>
            </div>

            {/* Time Section */}
            <div className="time-section">
              <SimpleClock />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section - Overlapping with 2 second delay */}
      <motion.div
        className="projects-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* Scrolling logos - Endless Loop */}
        <motion.div
          className="logos-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="logo-row"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="logo-item"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Title with 3D effect */}
        <motion.div
          className="projects-title-container"
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, type: "spring", delay: 3 }}
        >
          <motion.h2
            className="projects-title-3d"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.3 }}
          >
            PROJECTS
          </motion.h2>
        </motion.div>

        {/* Horizontal Scroll Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <ScrollLinkedProjects />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Scroll-linked horizontal projects component
const ScrollLinkedProjects = () => {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  const projects = [
    {
      id: 1,
      title: "Taktikal",
      description: "A website specifically for Sports Coaches",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kalviumcommunity/S66_Abhinav_Capstone_Taktikal",
      live: "https://taktikal.netlify.app/",
      color: "rgba(45, 45, 45, 0.3)"
    },
    {
      id: 2,
      title: "Handy Pic",
      description: "Collection's of images of your Hand's can be stored here",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kalviumcommunity/S66_hand_pic",
      live: "https://frontend-deploy.handypic.pages.dev/",
      color: "rgba(45, 45, 45, 0.3)"
    },
    {
      id: 3,
      title: "Notes App",
      description: "Work in progress",
      tech: [],
      github: "https://github.com/your-username/project3",
      live: "https://project3-demo.com",
      color: "rgba(45, 45, 45, 0.3)"
    }
  ]

  return (
    <div className="scroll-projects-container">
      <svg className="progress-indicator" width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="progress-bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="progress-indicator-circle"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <motion.div ref={ref} className="projects-scroll-container" style={{ maskImage }}>
        {projects.map((project) => (
          <div key={project.id} className="project-scroll-card" style={{ background: project.color }}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={githubLogo} alt="GitHub" className="link-icon" />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔗 Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// Scroll overflow mask hook
const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      )
    }
  })

  return maskImage
}

export default App