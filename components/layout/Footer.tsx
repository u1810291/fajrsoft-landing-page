'use client';

import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Animated background elements - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-10 sm:top-20 right-5 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div>
            <motion.div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4" whileHover={{ scale: 1.05 }}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">F</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Fajrsoft
              </span>
            </motion.div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              VIP-level technology solutions for local businesses. Over 7 years of excellence in digital innovation.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="mailto:info@fajrsoft.ae"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer text-sm sm:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer text-sm sm:text-base"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer text-sm sm:text-base"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer text-sm sm:text-base"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Web Applications</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">Business Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <a
                href="mailto:info@fajrsoft.ae"
                className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>info@fajrsoft.ae</span>
              </a>
              <a
                href="tel:+971585704475"
                className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>+971 58 579 4475</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>Abu Dhabi, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Fajrsoft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white hover:underline transition-all whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white hover:underline transition-all whitespace-nowrap">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
