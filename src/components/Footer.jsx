import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-8 h-8 text-purple-400 fill-current" />
              <span className="text-2xl font-bold">HushRealm</span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Revolutionizing men's health through microvascular science. We help men over 35 
              discover and fix the hidden circulation issues that drain their energy and vitality.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>support@hushrealm.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>1-800-HUSHREALM</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Austin, TX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Our Mission', id: 'mission' },
                { label: 'The Science', id: 'problem' },
                { label: 'Free Assessment', id: 'assessment' },
                { label: 'Success Stories', id: 'testimonials' },
                { label: 'Resources', id: 'resources' }
              ].map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <div className="space-y-3">
              {[
                'Energy Assessment',
                'Research Library',
                'Optimization Guides',
                'Case Studies',
                'FAQ',
                'Contact Support'
              ].map((resource) => (
                <motion.a
                  key={resource}
                  href="#"
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {resource}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
              <p className="text-gray-300 leading-relaxed">
                Get the latest research, optimization strategies, and exclusive content 
                delivered to your inbox. Join thousands of men optimizing their energy.
              </p>
            </div>
            <div>
              <div className="flex gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  className="hushrealm-gradient px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-gray-400 text-sm">
                No spam, just valuable insights. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "94% Accurate",
                subtitle: "Assessment validated across 7,382+ men"
              },
              {
                title: "18 Months",
                subtitle: "Rigorous development & testing"
              },
              {
                title: "Peer-Reviewed",
                subtitle: "Science-backed methodology"
              },
              {
                title: "Private & Secure",
                subtitle: "Your data is completely protected"
              }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {indicator.title}
                </div>
                <div className="text-gray-300 text-sm">
                  {indicator.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 HushRealm. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                Disclaimer
              </a>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-gray-500 text-xs leading-relaxed text-center">
            <strong>Disclaimer:</strong> This information is for educational purposes only. 
            Consult your physician before making health changes. Diagnostic results are not medical diagnoses. 
            Individual results may vary. HushRealm products and assessments are not intended to diagnose, 
            treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

