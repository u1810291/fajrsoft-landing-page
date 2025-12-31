'use client';

import { motion } from 'motion/react';
import { Code, Monitor, Smartphone, Settings, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom, high-performance websites built with cutting-edge technologies. Responsive, fast, and SEO-optimized for maximum impact.',
    features: ['Custom Design', 'SEO Optimized', 'Lightning Fast', 'Fully Responsive'],
    color: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50'
  },
  {
    icon: Monitor,
    title: 'Web Applications',
    description: 'Scalable web applications tailored to your business needs. From dashboards to complex enterprise solutions.',
    features: ['Scalable Architecture', 'Real-time Features', 'Cloud Integration', 'Advanced Security'],
    color: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    features: ['iOS & Android', 'Offline Capability', 'Push Notifications', 'App Store Ready'],
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Settings,
    title: 'Business Process Automation',
    description: 'Streamline operations and boost efficiency with intelligent automation solutions customized for your workflow.',
    features: ['Workflow Automation', 'API Integration', 'Custom Tools', 'Time Saving'],
    color: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50'
  },
  {
    icon: Zap,
    title: 'Website Maintenance',
    description: 'Keep your digital assets running smoothly with our comprehensive maintenance and support services.',
    features: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization', 'Security Patches'],
    color: 'from-orange-500 to-amber-600',
    bgGradient: 'from-orange-50 to-amber-50'
  }
];

export function Services() {
  return (
    <section id="services" className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements - responsive sizing */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 md:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full shadow-lg"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-semibold text-xs sm:text-sm">OUR SERVICES</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent px-4">
            VIP-Level Technology Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive digital services designed to elevate your business to the next level
          </p>
        </motion.div>

        {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className={`h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm relative overflow-hidden group`}>
                {/* Animated gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <CardHeader className="relative z-10 p-4 sm:p-5 md:p-6">
                  <motion.div
                    whileHover={{
                      rotateY: 180,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-4 sm:p-5 md:p-6 pt-0">
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center text-sm sm:text-base text-gray-700 leading-snug"
                      >
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 sm:mr-3 shadow-sm flex-shrink-0`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}