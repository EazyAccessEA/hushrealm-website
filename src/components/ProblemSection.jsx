import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, X, TrendingDown, Activity, Brain } from 'lucide-react';

const ProblemSection = () => {
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
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-6 border border-red-200">
              <AlertTriangle className="w-4 h-4 mr-2" />
              THE HIDDEN PROBLEM
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
              Why Standard Blood Work Misses the Real Issue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your doctor checks your blood, but energy delivery happens in vessels 200x smaller than what they measure.
            </p>
          </motion.div>

          {/* Comparison Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Standard Blood Tests */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Standard Blood Tests</h3>
              <p className="text-red-700 mb-6 leading-relaxed">
                Measure large vessels and overall blood chemistry
              </p>
              <div className="flex items-center justify-center gap-2 bg-red-100 text-red-700 px-4 py-3 rounded-lg font-semibold">
                <X className="w-5 h-5" />
                Misses 90% of circulation
              </div>
            </div>

            {/* Microcirculation Assessment */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Microcirculation Assessment</h3>
              <p className="text-green-700 mb-6 leading-relaxed">
                Evaluates the tiny vessels that deliver nutrients to cells
              </p>
              <div className="flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-lg font-semibold">
                <CheckCircle className="w-5 h-5" />
                Reveals true energy blockers
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "40%",
                label: "Capillary efficiency lost by age 45",
                icon: TrendingDown,
                color: "red"
              },
              {
                number: "73%",
                label: "Of men have undetected circulation issues",
                icon: AlertTriangle,
                color: "orange"
              },
              {
                number: "15 min",
                label: "Daily protocol can restore flow",
                icon: Activity,
                color: "green"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className="text-4xl font-bold hushrealm-gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* The Hidden Pattern */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12 border border-purple-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                The Hidden Pattern We Discovered
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                After analyzing 7,382 men, we found the same pattern across all age groups and fitness levels
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Eating Enough",
                  subtitle: "But still low energy",
                  icon: "🍎",
                  description: "Proper nutrition but poor cellular delivery"
                },
                {
                  title: "Training Hard",
                  subtitle: "But struggling to recover",
                  icon: "💪",
                  description: "Exercise without adequate circulation support"
                },
                {
                  title: "Sleeping 6-7 Hours",
                  subtitle: "But still foggy by noon",
                  icon: "😴",
                  description: "Rest without proper cellular restoration"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-purple-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--hushrealm-navy)' }}>
                    {item.title}
                  </h4>
                  <p className="text-purple-600 font-semibold mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-purple-200">
                <Brain className="w-5 h-5 text-purple-600 mr-2" />
                <span className="font-semibold text-purple-800">
                  The common denominator: Capillary-level oxygen delivery
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;

