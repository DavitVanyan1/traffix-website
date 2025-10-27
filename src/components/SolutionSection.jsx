import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SolutionSection = ({ t }) => {
  const [currentLight, setCurrentLight] = useState('red')
  const [dataFlow, setDataFlow] = useState(false)

  // Traffic light sequence simulation
  useEffect(() => {
    const sequence = ['red', 'yellow', 'green']
    let currentIndex = 0

    const interval = setInterval(() => {
      setCurrentLight(sequence[currentIndex])
      currentIndex = (currentIndex + 1) % sequence.length
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  // Data flow animation
  useEffect(() => {
    const dataInterval = setInterval(() => {
      setDataFlow(true)
      setTimeout(() => setDataFlow(false), 1000)
    }, 3000)

    return () => clearInterval(dataInterval)
  }, [])

  const steps = [
    {
      icon: "📷",
      title: "Real-time Monitoring",
      description: "High-resolution cameras capture traffic patterns 24/7"
    },
    {
      icon: "🧠",
      title: "AI Analysis",
      description: "Machine learning algorithms process data and predict traffic flow"
    },
    {
      icon: "🔄",
      title: "Adaptive Control",
      description: "Traffic lights adjust timing based on current conditions"
    },
    {
      icon: "📊",
      title: "Performance Insights",
      description: "Continuous optimization through data analysis"
    }
  ]

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            {t.solution.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.solution.content}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Traffic Light Demo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              AI-Powered Traffic Management System
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Left: Traffic Light with Camera */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Camera */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gray-800 p-2 rounded-lg flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs">REC</span>
                    </div>
                    <div className="w-8 h-6 bg-black rounded-t-lg mx-auto relative">
                      <div className="w-6 h-4 bg-blue-500 rounded-sm absolute top-1 left-1"></div>
                      <div className="w-1 h-1 bg-red-500 rounded-full absolute top-1 right-1 animate-pulse"></div>
                    </div>
                  </motion.div>

                  {/* Traffic Light Body */}
                  <div className="bg-gray-800 p-6 rounded-2xl w-32 h-80 flex flex-col items-center justify-between relative shadow-2xl">
                    {/* Red Light */}
                    <div className={`w-16 h-16 rounded-full border-4 ${
                      currentLight === 'red' 
                        ? 'bg-red-500 border-red-600 shadow-lg shadow-red-500/50' 
                        : 'bg-gray-600 border-gray-700'
                    } transition-all duration-500`} />
                    
                    {/* Yellow Light */}
                    <div className={`w-16 h-16 rounded-full border-4 ${
                      currentLight === 'yellow' 
                        ? 'bg-yellow-500 border-yellow-600 shadow-lg shadow-yellow-500/50' 
                        : 'bg-gray-600 border-gray-700'
                    } transition-all duration-500`} />
                    
                    {/* Green Light */}
                    <div className={`w-16 h-16 rounded-full border-4 ${
                      currentLight === 'green' 
                        ? 'bg-green-500 border-green-600 shadow-lg shadow-green-500/50' 
                        : 'bg-gray-600 border-gray-700'
                    } transition-all duration-500`} />
                  </div>

                  {/* Base */}
                  <div className="w-20 h-8 bg-gray-700 rounded-b-lg mx-auto"></div>
                </div>
                <p className="text-gray-600 mt-4 text-center font-semibold">
                  Smart Traffic Light with Camera
                </p>
              </div>

              {/* Center: Data Transmission Animation */}
              <div className="flex flex-col items-center space-y-8">
                {/* Data Flow Animation */}
                <motion.div
                  animate={{ scale: dataFlow ? 1.2 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-32 h-32"
                >
                  {/* Data particles flowing */}
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      animate={{ 
                        x: dataFlow ? [0, 100, 0] : 0,
                        opacity: dataFlow ? [0, 1, 0] : 0
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.3 
                      }}
                      className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-primary-blue to-primary-green rounded-full"
                    />
                  ))}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 border-4 border-dashed border-primary-blue/30 rounded-full"
                    />
                    <div className="absolute w-16 h-16 bg-gradient-to-r from-primary-blue to-primary-green rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      📡
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-lg font-semibold text-gray-700">Real-time Data Flow</div>
                  <div className="text-sm text-gray-500">Camera → AI → Database → Action</div>
                </motion.div>
              </div>

              {/* Right: AI and Database */}
              <div className="flex flex-col items-center space-y-6">
                {/* AI Brain */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl mb-3"
                    >
                      🧠
                    </motion.div>
                    {/* Neural network connections */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-pulse"></div>
                  </div>
                  <div className="font-bold text-gray-900 text-lg">AI Processing</div>
                  <div className="text-sm text-gray-600">Machine Learning Analysis</div>
                </motion.div>

                {/* Database */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-2xl mb-3"
                    >
                      💾
                    </motion.div>
                    {/* Data waves */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400/50 rounded-full animate-pulse"></div>
                  </div>
                  <div className="font-bold text-gray-900 text-lg">Cloud Database</div>
                  <div className="text-sm text-gray-600">Historical & Real-time Data</div>
                </motion.div>
              </div>
            </div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-2xl border border-primary-blue/20"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-blue mb-2">24/7</div>
                  <div className="text-gray-700">Continuous Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-green mb-2">98.5%</div>
                  <div className="text-gray-700">System Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">≤100ms</div>
                  <div className="text-gray-700">Response Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection