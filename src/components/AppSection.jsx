import React from 'react'
import { motion } from 'framer-motion'

const AppSection = ({ t }) => {
  const appFeatures = [
    { icon: "📍", text: "Real-time traffic monitoring" },
    { icon: "🅿️", text: "Smart parking reservations" },
    { icon: "💰", text: "Earn from parking spaces" },
    { icon: "🚗", text: "Optimized route planning" }
  ]

  return (
    <section id="app" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              {t.app.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.app.content}
            </p>

            {/* App Features */}
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-xl">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <span>{t.app.cta}</span>
              <span>→</span>
            </motion.a>
          </div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto w-80">
              {/* Phone body */}
              <div className="bg-gray-900 rounded-[40px] p-4 shadow-2xl">
                {/* Notch */}
                <div className="w-40 h-6 bg-gray-900 rounded-b-2xl mx-auto -mt-2 mb-4"></div>
                
                {/* Screen */}
                <div className="bg-gradient-to-br from-primary-blue to-primary-green rounded-[32px] overflow-hidden h-[500px] relative">
                  
                  {/* App content mockup */}
                  <div className="p-6 text-white h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-lg font-bold">Traffix</div>
                      <div className="text-sm">12:30</div>
                    </div>

                    {/* Map placeholder */}
                    <div className="bg-white/20 rounded-2xl h-48 mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🗺️</div>
                        <div className="text-sm">Live Traffic Map</div>
                      </div>
                    </div>

                    {/* Parking spots */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                        <div>
                          <div className="font-medium">City Center</div>
                          <div className="text-xs opacity-80">5 spots available</div>
                        </div>
                        <button className="bg-white text-primary-blue px-3 py-1 rounded-lg text-sm font-medium">
                          Reserve
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                        <div>
                          <div className="font-medium">Shopping Mall</div>
                          <div className="text-xs opacity-80">12 spots available</div>
                        </div>
                        <button className="bg-white text-primary-blue px-3 py-1 rounded-lg text-sm font-medium">
                          Reserve
                        </button>
                      </div>
                    </div>

                    {/* Bottom navigation */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                      {['🏠', '🗺️', '💰', '👤'].map(icon => (
                        <button key={icon} className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-lg">
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="text-2xl">🚗</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="text-2xl">💰</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppSection