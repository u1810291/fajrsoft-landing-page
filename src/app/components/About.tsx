import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full shadow-lg"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-sm">ABOUT US</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              7+ Years of Excellence in Digital Innovation
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              At <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fajrsoft</span>, we don't just deliver technology solutions—we
              craft exceptional digital experiences that transform businesses. Our VIP-level service approach ensures every client
              receives the attention, quality, and results they deserve.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              With over seven years of proven expertise, we've partnered with local businesses across diverse industries,
              helping them leverage technology to achieve their goals, streamline operations, and stay ahead of the competition.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
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
                  className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`text-3xl mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.icon}</div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
              className="relative rounded-2xl overflow-hidden shadow-2xl"
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
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-2xl">🏆</span>
                </motion.div>
                <div>
                  <div className="text-4xl mb-1 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-bold">7+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}