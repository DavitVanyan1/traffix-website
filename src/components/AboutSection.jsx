import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = ({ t }) => {
  return (
    <section id="about" className="section-padding relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image/Visual Section */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-primary-blue to-primary-green p-8 rounded-3xl text-white">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏙️</span>
                  </div>
                  <h3 className="text-2xl font-bold">Smart City Innovation</h3>
                  <p className="text-blue-100 mt-2">Born in Armenia, Built for the World</p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "2025", label: "Founded" },
                    { value: "6", label: "Team Members" },
                    { value: "AI", label: "Powered" },
                    { value: "🌍", label: "Global Vision" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-effect rounded-2xl p-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">AI</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">IoT</span>
              </motion.div>
            </motion.div>

            {/* Background Pattern */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary-blue/20 to-primary-green/20 rounded-3xl blur-xl"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fade-in"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue font-semibold text-sm mb-6"
            >
              🚀 About Traffix
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.about.title}
              <span className="block text-3xl md:text-4xl gradient-text mt-2">
                Pioneering Urban Mobility
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t.about.content}
            </p>
            
            <div className="space-y-6">
              {[
                { icon: "🤖", text: "AI-Powered Traffic Optimization" },
                { icon: "🌱", text: "Sustainable Urban Development" },
                { icon: "🚗", text: "Real-time Traffic Management" },
                { icon: "💡", text: "Innovative Citizen Solutions" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-gray-700 font-semibold text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 btn-outline rounded-2xl px-8 py-4 text-lg font-semibold"
            >
              Learn More About Our Mission
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
