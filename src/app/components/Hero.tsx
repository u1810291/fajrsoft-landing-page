import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotateZ: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
            >
              <span className="text-white text-sm">🏆 7+ Years of Excellence</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl text-white mb-6"
              style={{ 
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              VIP-Level Technology Solutions for{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Your Business
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Transform your business with premium web development, mobile apps, and automation solutions. 
              Professional service you can trust.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 text-lg px-8 py-6 shadow-2xl relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: -1 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 shadow-lg"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>

            {/* 3D Stats Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl"
            >
              {[
                { value: '7+', label: 'Years Experience' },
                { value: '100+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
                >
                  <div className="text-4xl text-white mb-2 font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm"
        >
          <motion.div 
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}