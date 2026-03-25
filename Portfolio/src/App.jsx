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
            <motion.div 
               className="company-info"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="about-text company-text">
                Currently working at <a href="https://gencoft.com/" target="_blank" rel="noopener noreferrer" className="company-link">GenCoft Technologies</a>
              </p>
            </motion.div>

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
            PROJECTS AND WORKS
          </motion.h2>
        </motion.div>

        {/* Horizontal Scroll Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <ProjectsGrid />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Grid projects component
const ProjectsGrid = () => {
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
      title: "HandScape",
      description: "Collection's of images of your Hand's can be stored here",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/kalviumcommunity/S66_hand_pic",
      live: "https://handscape-o.netlify.app/",
      color: "rgba(45, 45, 45, 0.3)"
    },
    {
      id: 3,
      title: "QuizWizard Redesign",
      description: "Redesign of quizwizard website UI/UX",
      tech: ["Figma", "UI/UX Design"],
      live: "https://www.figma.com/proto/bIxVZz1Ri5T2SGyFLx0AyM/QuizWizard-Redesign?page-id=0%3A1&node-id=1-2&viewport=409%2C330%2C0.31&t=sBbFYbkKqfz5XfdH-1&scaling=scale-down&content-scaling=fixed",
      color: "rgba(45, 45, 45, 0.3)"
    },
    {
      id: 4,
      title: "World Sports Academy",
      description: "Website built for World Sports Academy",
      tech: ["React", "Web Design", "Tailwind"],
      live: "https://wsateam.com/",
      color: "rgba(45, 45, 45, 0.3)"
    },
    {
      id: 5,
      title: "Latin Expressions",
      description: "Redesign of Latin Expressions website",
      tech: ["React", "Frontend", "Vite"],
      live: "https://radiant-cocada-cc82ca.netlify.app/",
      color: "rgba(45, 45, 45, 0.3)"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="projects-grid-wrapper">
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-grid-card" 
            variants={itemVariants}
            style={{ background: project.color }}
            whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(51, 102, 89, 0.4)" }}
          >
             <div className="project-content">
               <h3>{project.title}</h3>
               <p>{project.description}</p>
               <div className="project-tech-tags">
                 {project.tech.map((tech, index) => (
                   <span key={index} className="tech-tag">{tech}</span>
                 ))}
               </div>
               <div className="project-links">
                 {project.github && (
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
                 )}
                 {project.live && (
                   <motion.a
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="project-link live-link"
                     whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.4)" }}
                     whileTap={{ scale: 0.95 }}
                   >
                     🔗 Live Demo
                   </motion.a>
                 )}
               </div>
             </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default App