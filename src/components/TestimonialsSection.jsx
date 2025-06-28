import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Calendar } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Mark R.",
      age: 41,
      result: "Energy increased 40%",
      quote: "Finally found what was draining my energy. The assessment pinpointed circulation issues my doctor never mentioned. After following the protocol for 6 weeks, I feel like I'm in my 30s again.",
      avatar: "M",
      rating: 5,
      timeframe: "6 weeks"
    },
    {
      name: "David K.",
      age: 38,
      result: "No more 3 PM crashes",
      quote: "I thought fatigue was just part of getting older. Turns out it was my microcirculation. The personalized recommendations were spot-on. My afternoon energy is completely transformed.",
      avatar: "D",
      rating: 5,
      timeframe: "4 weeks"
    },
    {
      name: "James L.",
      age: 45,
      result: "Better sleep & recovery",
      quote: "The assessment revealed patterns I never noticed. Following the circulation optimization protocol improved not just my energy, but my sleep quality and workout recovery too.",
      avatar: "J",
      rating: 5,
      timeframe: "8 weeks"
    }
  ];

  const stats = [
    {
      number: "94%",
      label: "Assessment Accuracy",
      description: "Validated through 18-month clinical study",
      icon: TrendingUp
    },
    {
      number: "7,382",
      label: "Men Assessed",
      description: "Comprehensive data analysis across age groups",
      icon: Users
    },
    {
      number: "18 Months",
      label: "Development Time",
      description: "Rigorous testing and validation process",
      icon: Calendar
    }
  ];

  return (
    <section id="testimonials" className="py-20 hushrealm-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
              <Star className="w-4 h-4 mr-2" />
              REAL RESULTS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--hushrealm-navy)' }}>
              What Men Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thousands of men have discovered and fixed their hidden energy blockers
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 hushrealm-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg" style={{ color: 'var(--hushrealm-navy)' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">Age {testimonial.age}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-1">
                      {testimonial.result}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.timeframe}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-purple-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                Validated by Science, Proven by Results
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our assessment methodology has been rigorously tested and validated
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold hushrealm-gradient-text mb-2">
                    {stat.number}
                  </div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--hushrealm-navy)' }}>
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Validation */}
            <motion.div
              variants={itemVariants}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl border border-purple-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Peer-Reviewed Research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Clinical Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Ongoing Monitoring</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Success Stories Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--hushrealm-navy)' }}>
                Join the Energy Optimization Revolution
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Don't let hidden circulation issues rob you of your vitality. 
                Discover what thousands of men have already learned about their energy.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-green-700">
                <span>✓ 94% Assessment Accuracy</span>
                <span>✓ Personalized Protocols</span>
                <span>✓ Science-Backed Solutions</span>
                <span>✓ Real, Measurable Results</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

