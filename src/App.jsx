import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import FeaturesSection from './components/FeaturesSection'
import AppSection from './components/AppSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import en from './i18n/en.json'
import hy from './i18n/hy.json'
import ru from './i18n/ru.json'

const translations = { en, hy, ru }

function App() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Force re-render when language changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [language])

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <HeroSection t={t} />
          <AboutSection t={t} />
          <ProblemSection t={t} />
          <SolutionSection t={t} />
          <FeaturesSection t={t} />
          <AppSection t={t} />
          <ContactSection t={t} />
          <Footer t={t} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App