import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Lock, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const AssessmentSection = () => {
  const [selectedOption, setSelectedOption] = useState(1);

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

  const handleAssessmentClick = () => {
    // This would typically redirect to your actual assessment
    window.open('https://assessment.hushrealm.com', '_blank');
  };

  return (
    <section id="assessment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12 border border-purple-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
                  <Target className="w-4 h-4 mr-2" />
                  FREE ASSESSMENT
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
                  Discover Your Personal Energy Profile
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our 94% accurate assessment reveals your specific circulation patterns 
                  and energy blockers—information your doctor's tests can't provide.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: Target,
                      text: "Identifies your specific energy blockers",
                      color: "purple"
                    },
                    {
                      icon: BarChart3,
                      text: "Personalized optimization protocol",
                      color: "blue"
                    },
                    {
                      icon: Lock,
                      text: "Completely private and secure",
                      color: "green"
                    },
                    {
                      icon: Clock,
                      text: "Results in under 2 minutes",
                      color: "orange"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-8 h-8 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                        <feature.icon className={`w-4 h-4 text-${feature.color}-600`} />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleAssessmentClick}
                  className="w-full lg:w-auto hushrealm-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group mb-6"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Free Energy Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                {/* Social Proof */}
                <div className="text-center lg:text-left">
                  <p className="text-gray-600">
                    <span className="font-bold text-purple-700">7,382 men</span> have used this assessment to optimize their energy
                  </p>
                </div>
              </motion.div>

              {/* Quiz Preview */}
              <motion.div variants={itemVariants} className="lg:pl-8">
                <div className="bg-white rounded-2xl shadow-xl border border-purple-200 overflow-hidden">
                  {/* Quiz Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium opacity-90">Question 1 of 5</span>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        2 min
                      </div>
                    </div>
                    <div className="w-full bg-purple-500 rounded-full h-2">
                      <motion.div
                        className="bg-white h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '20%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Quiz Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
                      How would you describe your energy levels throughout the day?
                    </h4>
                    
                    <div className="space-y-3">
                      {[
                        "Strong and consistent all day",
                        "Good morning, tired afternoon",
                        "Low most of the day",
                        "Unpredictable ups and downs"
                      ].map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedOption(index)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedOption === index
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option}</span>
                            {selectedOption === index && (
                              <CheckCircle className="w-5 h-5 text-purple-600" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Next Button Preview */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedOption !== null ? 1 : 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                          selectedOption !== null
                            ? 'hushrealm-gradient text-white shadow-lg'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={selectedOption === null}
                      >
                        Next Question
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Assessment Benefits */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 grid grid-cols-2 gap-4"
                >
                  {[
                    { label: "Accuracy", value: "94%" },
                    { label: "Completion Time", value: "2 min" },
                    { label: "Men Assessed", value: "7,382" },
                    { label: "Privacy", value: "100%" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border border-purple-100">
                      <div className="text-2xl font-bold hushrealm-gradient-text mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentSection;

