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
    <footer className="bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Fajrsoft</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              VIP-level technology solutions for local businesses. Over 7 years of excellence in digital innovation.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
                className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors">Web Development</li>
              <li className="hover:text-white transition-colors">Web Applications</li>
              <li className="hover:text-white transition-colors">Mobile Apps</li>
              <li className="hover:text-white transition-colors">Business Automation</li>
              <li className="hover:text-white transition-colors">Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>contact@fajrsoft.ae</span>
              </div>
              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-start gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fajrsoft. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white hover:underline transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-white hover:underline transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}