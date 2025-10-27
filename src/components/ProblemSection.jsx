import React from 'react'
import { motion } from 'framer-motion'

const ProblemSection = ({ t }) => {
  const stats = [
    { value: "45+", label: "Minutes wasted daily" },
    { value: "30%", label: "Increased emissions" },
    { value: "$87B", label: "Global economic loss" },
    { value: "65%", label: "Inefficient light timing" }
  ]

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
            {t.problem.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.problem.content}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Problem Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Traditional systems can't adapt to real-time conditions</h3>
            <p className="text-blue-100 mb-6">
              Fixed timers, manual controls, and lack of data integration create inefficient traffic flow
            </p>
            
            {/* Simple traffic animation */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    backgroundColor: ['#EF4444', '#F59E0B', '#10B981']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: item * 0.5 
                  }}
                  className="w-4 h-4 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection