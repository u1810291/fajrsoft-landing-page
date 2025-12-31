'use client';

import { useCallback, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 overflow-hidden">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 40% 20%, rgba(138, 180, 248, 0.3), transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Floating 3D Elements - simplified on mobile for performance */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          animate={isMobile ? {
            y: [0, -15, 0],
          } : {
            y: [0, -30, 0],
            rotateZ: [0, 5, 0],
          }}
          transition={{
            duration: isMobile ? 6 : 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-5 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-xl md:blur-3xl"
        />
        <motion.div
          animate={isMobile ? {
            y: [0, 20, 0],
          } : {
            y: [0, 40, 0],
            rotateZ: [0, -5, 0],
          }}
          transition={{
            duration: isMobile ? 8 : 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-5 md:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl md:blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
            >
              <span className="text-white text-xs sm:text-sm">🏆 7+ Years of Excellence</span>
            </motion.div>

            {/* Heading - responsive text sizing */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              VIP-Level Technology Solutions for{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Your Business
              </span>
            </motion.h1>

            {/* Description - responsive text sizing */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-5 sm:mb-6 md:mb-8 max-w-2xl leading-relaxed"
            >
              Transform your business with premium web development, mobile apps, and automation solutions.
              Professional service you can trust.
            </motion.p>

            {/* CTA Buttons - stack on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: isMobile ? 0 : 1 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-2xl relative overflow-hidden group"
                  style={{ minHeight: '44px' }}
                >
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateZ: isMobile ? 0 : -1 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg"
                  style={{ minHeight: '44px' }}
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* 3D Stats Cards - responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-2xl"
            >
              {[
                { value: '7+', label: 'Years Experience' },
                { value: '100+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={isMobile ? {
                    scale: 1.05,
                  } : {
                    scale: 1.1,
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 border border-white/20 shadow-xl"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-1 sm:mb-2 font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-200 text-xs sm:text-sm md:text-base leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
