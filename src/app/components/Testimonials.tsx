import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
            <span className="text-yellow-600 font-semibold text-sm">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear from businesses we've helped succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 text-lg mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.position}</div>
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
          className="mt-20"
        >
          <p className="text-center text-gray-500 mb-8">Trusted by leading businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl">🏢</div>
            <div className="text-3xl">🏪</div>
            <div className="text-3xl">🏥</div>
            <div className="text-3xl">🏭</div>
            <div className="text-3xl">🏦</div>
            <div className="text-3xl">🛍️</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
