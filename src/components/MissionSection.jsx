import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Heart, Target, Users, Award, Lightbulb } from 'lucide-react';

const MissionSection = () => {
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
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6 border border-purple-200">
              <Heart className="w-4 h-4 mr-2" />
              OUR MISSION
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
              Revolutionizing Men's Health Through
              <span className="block hushrealm-gradient-text">Microvascular Science</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're bridging the gap between cutting-edge circulation research and practical health optimization, 
              giving men the tools to reclaim their energy and vitality.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12 border border-purple-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
                    The Problem We're Solving
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Traditional medicine focuses on symptoms, not root causes. While doctors check your blood pressure 
                    and cholesterol, they miss the 40,000 miles of tiny vessels where energy delivery actually happens.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We've developed the first comprehensive assessment that reveals these hidden circulation patterns, 
                    giving you the precise information needed to optimize your energy at the cellular level.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-200">
                    <div className="text-center mb-6">
                      <Microscope className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold" style={{ color: 'var(--hushrealm-navy)' }}>
                        Science + Nature
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Peer-reviewed research</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Natural optimization protocols</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Personalized solutions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Measurable results</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                Our Core Values
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything we do is guided by these fundamental principles
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Scientific Rigor",
                  description: "Every recommendation is backed by peer-reviewed research and clinical validation. We don't guess—we measure, test, and verify.",
                  color: "blue"
                },
                {
                  icon: Target,
                  title: "Precision Personalization",
                  description: "No generic solutions. Our assessments reveal your unique circulation patterns to create protocols tailored specifically for you.",
                  color: "purple"
                },
                {
                  icon: Heart,
                  title: "Holistic Wellness",
                  description: "We address root causes, not just symptoms. True energy optimization requires understanding the interconnected systems in your body.",
                  color: "red"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-200">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                  Our Revolutionary Approach
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  How we're changing the game in men's health optimization
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Comprehensive Assessment",
                      description: "Our 94% accurate evaluation reveals circulation patterns invisible to standard medical tests."
                    },
                    {
                      step: "02",
                      title: "Root Cause Analysis",
                      description: "We identify the specific microvascular bottlenecks limiting your energy delivery."
                    },
                    {
                      step: "03",
                      title: "Personalized Protocol",
                      description: "Receive targeted strategies based on your unique circulation profile and lifestyle."
                    },
                    {
                      step: "04",
                      title: "Ongoing Optimization",
                      description: "Continuous refinement and monitoring to ensure sustained energy improvements."
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 hushrealm-gradient rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--hushrealm-navy)' }}>
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 border border-purple-300">
                    <div className="text-center mb-6">
                      <Lightbulb className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold" style={{ color: 'var(--hushrealm-navy)' }}>
                        The HushRealm Difference
                      </h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        "First-of-its-kind microvascular assessment",
                        "18 months of rigorous development",
                        "Validated across 7,382+ men",
                        "Personalized to your unique biology",
                        "Continuous protocol refinement"
                      ].map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Commitment */}
          <motion.div variants={itemVariants}>
            <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-3xl p-8 lg:p-12">
              <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-6">
                Our Commitment to You
              </h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
                "We believe every man deserves to feel energized, focused, and vital—regardless of age. 
                Our mission is to give you the precise tools and knowledge to optimize your circulation 
                and reclaim the energy that's rightfully yours."
              </p>
              <div className="text-lg font-semibold opacity-90">
                — The HushRealm Team
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

