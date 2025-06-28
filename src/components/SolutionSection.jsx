import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Brain, Dumbbell, Moon, ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="solution" className="py-20 hushrealm-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 border border-green-200">
                <CheckCircle className="w-4 h-4 mr-2" />
                THE BREAKTHROUGH
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
                Microvascular Health: The Missing Piece
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                After analyzing 7,382 men, we discovered the pattern: energy decline 
                isn't about age—it's about microcirculation. The good news? This system 
                can be optimized with precision protocols.
              </p>

              {/* Benefits */}
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: Zap,
                    title: "Sustained Energy",
                    description: "No more 3 PM crashes or morning fatigue",
                    color: "yellow"
                  },
                  {
                    icon: Brain,
                    title: "Mental Clarity",
                    description: "Sharp focus that lasts all day",
                    color: "blue"
                  },
                  {
                    icon: Dumbbell,
                    title: "Physical Performance",
                    description: "Better workouts and faster recovery",
                    color: "red"
                  },
                  {
                    icon: Moon,
                    title: "Quality Sleep",
                    description: "Deeper rest and natural wake cycles",
                    color: "purple"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-purple-100"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--hushrealm-navy)' }}>
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Comparison */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Before */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                <h4 className="text-xl font-bold text-red-800 mb-6 text-center">
                  Before Optimization
                </h4>
                <div className="space-y-4 mb-6">
                  {[1, 2, 3].map((vessel) => (
                    <div key={vessel} className="flex items-center gap-4">
                      <div className="text-sm text-gray-600 w-16">Vessel {vessel}</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            vessel === 1 ? 'bg-red-500 w-1/4' :
                            vessel === 2 ? 'bg-orange-500 w-1/2' :
                            'bg-red-600 w-1/3'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: vessel === 1 ? '25%' : vessel === 2 ? '50%' : '33%' }}
                          transition={{ duration: 1, delay: vessel * 0.2 }}
                        />
                      </div>
                      <div className="text-sm text-red-600 font-medium">
                        {vessel === 1 ? '25%' : vessel === 2 ? '50%' : '33%'} flow
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-red-700 font-medium">
                  Restricted flow, energy bottlenecks
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 hushrealm-gradient rounded-full flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
                </motion.div>
              </div>

              {/* After */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-6 text-center">
                  After Optimization
                </h4>
                <div className="space-y-4 mb-6">
                  {[1, 2, 3].map((vessel) => (
                    <div key={vessel} className="flex items-center gap-4">
                      <div className="text-sm text-gray-600 w-16">Vessel {vessel}</div>
                      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full flow-animation"
                          initial={{ width: 0 }}
                          whileInView={{ width: '95%' }}
                          transition={{ duration: 1, delay: vessel * 0.2 }}
                        />
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        95% flow
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-green-700 font-medium">
                  Optimal delivery, sustained energy
                </p>
              </div>
            </motion.div>
          </div>

          {/* Research Validation */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                What the Research Confirms
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Peer-reviewed studies validate our approach to microvascular optimization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: "40%",
                  description: "Men over 35 lose up to 40% of their capillary efficiency",
                  source: "Journal of Applied Physiology"
                },
                {
                  stat: "90%",
                  description: "Of circulation issues are invisible in standard blood tests",
                  source: "Microcirculation Research"
                },
                {
                  stat: "15 min",
                  description: "Daily protocols can restore optimal microvascular function",
                  source: "Clinical Studies"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold hushrealm-gradient-text mb-3">
                    {item.stat}
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-purple-600 font-medium">
                    {item.source}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;

