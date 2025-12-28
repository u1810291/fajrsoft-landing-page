import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-40"
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 shadow-2xl text-base px-6 py-6 rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}