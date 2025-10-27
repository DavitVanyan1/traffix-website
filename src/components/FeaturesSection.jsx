import React from 'react'
import { motion } from 'framer-motion'

const FeaturesSection = ({ t }) => {
  const features = [
    {
      icon: "🤖",
      title: t.features.items.ai.title,
      description: t.features.items.ai.desc,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🏗️",
      title: t.features.items.scalable.title,
      description: t.features.items.scalable.desc,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🌱",
      title: t.features.items.eco.title,
      description: t.features.items.eco.desc,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📈",
      title: t.features.items.insights.title,
      description: t.features.items.insights.desc,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
            {t.features.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature-specific decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-gradient-to-r from-transparent via-primary-blue/10 to-transparent rounded-full absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-primary rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-100">Reduction in wait times</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Decrease in emissions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities ready for deployment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection