'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

const projects = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with payment integration and inventory management',
    image: '/images/case-studies/ecommerce-hero.jpg',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    category: 'Mobile Development',
    description: 'Secure banking application with real-time transactions and biometric authentication',
    image: '/images/case-studies/mobile-banking-hero.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    slug: 'business-dashboard',
    title: 'Business Dashboard',
    category: 'Web Application',
    description: 'Advanced analytics dashboard with real-time data visualization and reporting',
    image: '/images/case-studies/business-dashboard-hero.jpg',
    color: 'from-blue-500 to-purple-500'
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation System',
    category: 'Business Automation',
    description: 'Custom automation solution reducing manual work by 70% and increasing efficiency',
    image: '/images/case-studies/workflow-automation-hero.jpg',
    color: 'from-orange-500 to-rose-500'
  }
];

export function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="portfolio" className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.1, 1],
          } : {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: isMobile ? 15 : 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 sm:top-40 right-5 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          animate={isMobile ? {
            scale: [1, 1.15, 1],
          } : {
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 sm:bottom-40 left-5 sm:left-20 w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl sm:blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full shadow-lg"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-semibold text-xs sm:text-sm">PORTFOLIO</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent px-4">
            Our Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore some of our recent projects that showcase our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link href={`/case-study/${project.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={isMobile ? {
                  y: -5,
                  scale: 1.01,
                } : {
                  y: -15,
                  rotateX: 10,
                  rotateY: 5,
                  scale: 1.03,
                }}
                style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d', perspective: isMobile ? 'none' : 1000 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <div className="aspect-video overflow-hidden relative bg-gray-100">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 mix-blend-multiply`} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 sm:opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.div
                      className={`text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-1 sm:mb-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 inline-block rounded-full`}
                    >
                      {project.category}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 font-bold">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-200 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* 3D floating arrow - simplified on mobile */}
                  <motion.div
                    className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl"
                    whileHover={isMobile ? { scale: 1.05 } : { rotate: 45, scale: 1.1 }}
                    style={{ transformStyle: isMobile ? 'flat' : 'preserve-3d' }}
                  >
                    <svg className={`w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 md:mt-12 px-4"
        >
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Want to see more? Let's discuss your project in a free consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}