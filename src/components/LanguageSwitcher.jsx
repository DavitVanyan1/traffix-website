import React from 'react'
import { motion } from 'framer-motion'

const LanguageSwitcher = ({ language, setLanguage }) => {
  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'hy', name: 'ՀՅ', flag: '🇦🇲' },
    { code: 'ru', name: 'РУ', flag: '🇷🇺' }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-lg"
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center space-x-2 ${
            language === lang.code
              ? 'bg-gradient-to-r from-primary-blue to-primary-green text-white shadow-md'
              : 'text-gray-600 hover:text-primary-blue hover:bg-gray-100'
          }`}
        >
          <span className="text-base">{lang.flag}</span>
          <span>{lang.name}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}

export default LanguageSwitcher