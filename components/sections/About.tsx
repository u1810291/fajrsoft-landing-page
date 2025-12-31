'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Animated background orbs - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full shadow-lg"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-xs sm:text-sm">ABOUT US</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              7+ Years of Excellence in Digital Innovation
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fajrsoft</span>, we don't just deliver technology solutions—we
              craft exceptional digital experiences that transform businesses. Our VIP-level service approach ensures every client
              receives the attention, quality, and results they deserve.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              With over seven years of proven expertise, we've partnered with local businesses across diverse industries,
              helping them leverage technology to achieve their goals, streamline operations, and stay ahead of the competition.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: '✓', title: 'Premium Quality', desc: 'Every project meets the highest standards of excellence', color: 'from-cyan-500 to-blue-600' },
                { icon: '⚡', title: 'Expert Team', desc: 'Skilled professionals dedicated to your success', color: 'from-purple-500 to-pink-600' },
                { icon: '🎯', title: 'Results-Driven', desc: 'Focused on delivering measurable business outcomes', color: 'from-blue-500 to-purple-600' },
                { icon: '🤝', title: 'VIP Support', desc: 'Personalized attention from start to finish', color: 'from-pink-500 to-rose-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    z: 50,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`text-2xl sm:text-3xl mb-1 sm:mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-snug">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY4NjI5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </motion.div>

            {/* 3D Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 100,
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100"
            >
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-lg sm:text-xl md:text-2xl">🏆</span>
                </motion.div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-0.5 sm:mb-1 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-bold">7+</div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}