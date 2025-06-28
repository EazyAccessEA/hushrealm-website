import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Download, ArrowRight, Clock, User } from 'lucide-react';

const ResourcesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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

  const resources = [
    {
      type: "Article",
      title: "The Microcirculation Crisis: Why 73% of Men Over 35 Are Energy-Depleted",
      description: "Discover the hidden circulation patterns that standard medical tests miss and how they impact your daily energy levels.",
      readTime: "8 min read",
      category: "Science",
      icon: BookOpen,
      color: "blue",
      featured: true,
      url: "https://circulation.hushrealm.com/"
    },
    {
      type: "Guide",
      title: "15-Minute Daily Protocol for Circulation Optimization",
      description: "A step-by-step guide to the evidence-based techniques that can restore microvascular function naturally.",
      readTime: "4 min read",
      category: "Protocol",
      icon: Download,
      color: "green"
    },
    {
      type: "Research",
      title: "Peer-Reviewed Studies on Microvascular Health",
      description: "Access the scientific research that forms the foundation of our assessment methodology.",
      readTime: "5 min read",
      category: "Science",
      icon: BookOpen,
      color: "orange"
    },
    {
      type: "Case Study",
      title: "From Fatigue to Vitality: Real Transformation Stories",
      description: "Detailed case studies showing how men optimized their circulation and reclaimed their energy.",
      readTime: "5 min read",
      category: "Results",
      icon: User,
      color: "red"
    },
    {
      type: "Tool",
      title: "Energy Tracking Worksheet",
      description: "Monitor your progress with our comprehensive tracking system designed for circulation optimization.",
      readTime: "Download",
      category: "Tools",
      icon: Download,
      color: "teal"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6 border border-orange-200">
              <BookOpen className="w-4 h-4 mr-2" />
              WELLNESS RESOURCES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
              Expand Your Knowledge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive deeper into the science of energy optimization with our comprehensive library of research, guides, and tools.
            </p>
          </motion.div>

          {/* Featured Resource */}
          <motion.div variants={itemVariants} className="mb-16">
            {resources.filter(resource => resource.featured).map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 border border-blue-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
                        Featured {resource.type}
                      </div>
                      <div className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">
                        {resource.category}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                      {resource.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{resource.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <resource.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{resource.type}</span>
                      </div>
                    </div>
                    <motion.a
                      href={resource.url}
                      className="hushrealm-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read The Full Article
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.a>                  </div>
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <resource.icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold" style={{ color: 'var(--hushrealm-navy)' }}>
                          Key Insights
                        </h4>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Why standard blood tests miss 90% of circulation issues",
                          "The 40,000-mile network that controls your energy",
                          "How age affects microvascular function",
                          "Evidence-based optimization strategies"
                        ].map((insight, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.filter(resource => !resource.featured).map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-200 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center`}>
                    <resource.icon className={`w-6 h-6 text-${resource.color}-600`} />
                  </div>
                  <div className={`px-3 py-1 bg-${resource.color}-100 text-${resource.color}-700 rounded-full text-xs font-semibold`}>
                    {resource.category}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-3 leading-tight" style={{ color: 'var(--hushrealm-navy)' }}>
                  {resource.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">{resource.readTime}</span>
                  </div>
                  <motion.button
                    className={`text-${resource.color}-600 hover:text-${resource.color}-700 font-semibold text-sm flex items-center gap-1 group`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Access {resource.type}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Get Expert Health Tips & Early Access</h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join our community of health-conscious men and receive the latest research, optimization strategies, and exclusive content delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                  <motion.button
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-sm opacity-75">
                  No spam, just smart updates. Unsubscribe anytime.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
                <span>✓ Weekly Research Updates</span>
                <span>✓ Exclusive Protocols</span>
                <span>✓ Early Product Access</span>
                <span>✓ Community Insights</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
