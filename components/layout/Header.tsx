'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Spacer to prevent layout shift - responsive height */}
      <div className="h-16 sm:h-18 md:h-20" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20'
            : 'bg-white/40 backdrop-blur-md border-b border-white/10'
          }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
        }}
      >
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo - responsive sizing */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-lg sm:text-xl">F</span>
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fajrsoft
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'testimonials', label: 'Testimonials' },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 font-medium transition-colors hover:text-gray-900 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navHover"
                  />
                </motion.button>
              ))}

              <motion.div
                className="ml-2"
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-sm lg:text-base"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Book Consultation</span>
                  <span className="lg:hidden">Book</span>
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button - minimum 44px touch target */}
            <motion.button
              className="md:hidden p-3 rounded-lg hover:bg-gray-100/50 transition-colors -mr-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation - full width with proper touch targets */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-gray-200/50 backdrop-blur-xl">
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'home', label: 'Home' },
                      { id: 'services', label: 'Services' },
                      { id: 'about', label: 'About' },
                      { id: 'portfolio', label: 'Portfolio' },
                      { id: 'testimonials', label: 'Testimonials' },
                    ].map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left px-4 py-4 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-all font-medium active:bg-gray-200/50"
                        style={{ minHeight: '44px' }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mt-3 px-4"
                    >
                      <Button
                        onClick={() => scrollToSection('contact')}
                        className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 w-full shadow-lg text-base py-6"
                        style={{ minHeight: '44px' }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
