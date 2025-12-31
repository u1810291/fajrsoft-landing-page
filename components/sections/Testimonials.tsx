'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Ahmed Al-Mansoori',
    position: 'CEO, TechRetail Solutions',
    content: 'Fajrsoft transformed our online presence completely. Their web development expertise and attention to detail exceeded our expectations. The VIP-level service is not just a promise—it\'s what they deliver every single day.',
    rating: 5,
    avatar: '🏢'
  },
  {
    name: 'Sarah Abdullah',
    position: 'Operations Director, FastLogistics',
    content: 'The business process automation solution they built for us has saved us countless hours and significantly reduced errors. Their professionalism and technical expertise are truly unmatched.',
    rating: 5,
    avatar: '📦'
  },
  {
    name: 'Mohammed Hassan',
    position: 'Founder, HealthPlus Clinic',
    content: 'We needed a reliable mobile app for our patients, and Fajrsoft delivered beyond our expectations. The app is intuitive, fast, and our patients love it. Highly recommend their services!',
    rating: 5,
    avatar: '🏥'
  },
  {
    name: 'Fatima Al-Rashid',
    position: 'Marketing Manager, Luxe Fashion',
    content: 'Their ongoing website maintenance service gives us peace of mind. Our website is always running perfectly, and any updates are implemented quickly and professionally. True VIP treatment!',
    rating: 5,
    avatar: '👗'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-14 md:py-18 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-2 sm:mb-3 md:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-yellow-100 rounded-full">
            <span className="text-yellow-600 font-semibold text-xs sm:text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 px-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it—hear from businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  {/* Rating */}
                  <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base font-medium">{testimonial.name}</div>
                      <div className="text-gray-600 text-xs sm:text-sm leading-snug">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-14 md:mt-20"
        >
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by leading businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 opacity-60">
            <div className="text-2xl sm:text-3xl">🏢</div>
            <div className="text-2xl sm:text-3xl">🏪</div>
            <div className="text-2xl sm:text-3xl">🏥</div>
            <div className="text-2xl sm:text-3xl">🏭</div>
            <div className="text-2xl sm:text-3xl">🏦</div>
            <div className="text-2xl sm:text-3xl">🛍️</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
