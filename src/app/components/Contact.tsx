import { motion } from 'motion/react';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const handleCalendlyClick = () => {
    // In a real implementation, this would open Calendly widget
    // For now, we'll show an alert
    alert('Calendly integration placeholder - This would open your Calendly booking widget');
    // Example Calendly integration:
    // window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full shadow-lg"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-semibold text-sm">GET IN TOUCH</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a free consultation and let's discuss how we can help you achieve your goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl mb-6">Let's Talk About Your Project</h3>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need a new website, mobile app, or want to automate your business processes,
              we're here to help. Schedule a free consultation with our team.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, title: 'Email Us', info: 'info@fajrsoft.ae', color: 'from-cyan-500 to-blue-600' },
                { icon: Phone, title: 'Call Us', info: '+971 58 570 4475', color: 'from-blue-500 to-purple-600' },
                { icon: MapPin, title: 'Visit Us', info: 'Dubai, United Arab Emirates', color: 'from-purple-500 to-pink-600' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    x: 10,
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6 px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
            >
              <p className="text-sm text-gray-500 mb-2">Business Hours:</p>
              <p className="text-gray-700">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-700">Friday - Saturday: Closed</p>
            </motion.div>
          </motion.div>

          {/* 3D CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              scale: 1.02,
              rotateY: 5,
            }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <Card className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 border-0 text-white h-full shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3), transparent 50%)',
                  backgroundSize: '200% 200%',
                }}
              />

              <CardContent className="p-8 lg:p-12 flex flex-col justify-center h-full relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-6xl mb-6"
                >
                  📅
                </motion.div>
                <h3 className="text-3xl mb-4">Book Your Free Consultation</h3>
                <p className="text-blue-100 text-lg mb-8">
                  Get expert advice on your project with no obligation. We'll discuss your needs,
                  provide insights, and create a tailored solution for your business.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    '30-minute consultation with our experts',
                    'Custom solution recommendations',
                    'No commitment required'
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Button
                    size="lg"
                    onClick={handleCalendlyClick}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-6 shadow-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-purple-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <span className="relative flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Free Consultation
                    </span>
                  </Button>
                </motion.div>

                <p className="text-blue-100 text-sm text-center mt-6">
                  * Usually responds within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}