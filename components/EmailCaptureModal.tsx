import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EmailCaptureModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/send-brevo-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error('Failed to send email.');

      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--hushrealm-navy)' }}>
                Get Your Free Guide
              </h2>
              <p className="text-gray-600 mb-6 text-center text-sm">
                Enter your email and we’ll send you the Circulation Optimization Protocol.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <motion.button
                  type="submit"
                  className="w-full hushrealm-gradient text-white py-3 rounded-lg font-semibold shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send My Guide →
                </motion.button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold mb-2 text-green-600">Check your inbox!</h3>
              <p className="text-gray-600 text-sm">
                Your personalized guide has been sent. Please check your email.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmailCaptureModal;
