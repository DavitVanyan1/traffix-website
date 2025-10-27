import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = ({ language, setLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-green rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/assets/logo.png" 
                  alt="Traffix Logo" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="text-white font-bold text-lg hidden">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent font-poppins">
                Traffix
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'problem', 'solution', 'features', 'app', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-300 relative group"
              >
                {t.nav[item]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-green transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher language={language} setLanguage={setLanguage} />

          {/* Mobile menu button */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform"></div>
            <div className="w-6 h-0.5 bg-gray-700 transition-transform"></div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar