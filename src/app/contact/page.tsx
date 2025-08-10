// src/app/contact/page.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInView from '@/components/animations/FadeInView'
import ContactForm from '@/components/sections/ContactForm'
import Image from 'next/image'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, 
  Star, ArrowRight, Shield, Zap, Award, ChevronRight, Headphones
} from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      details: '+91 12345 67890',
      subtitle: 'Mon - Fri, 9AM - 6PM',
      href: 'tel:+911234567890',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'info@terrafointernational.com',
      subtitle: 'Response within 2 hours',
      href: 'mailto:info@terrafointernational.com',
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Office',
      details: '123 Business District',
      subtitle: 'City, State 12345',
      href: '#',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 Support',
      details: 'Live Chat Available',
      subtitle: 'Instant assistance',
      href: '#',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Expert Team',
      description: '10+ years of industry experience'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Trusted Partner',
      description: '500+ successful projects delivered'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast Response',
      description: 'Quick turnaround on all inquiries'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div className="text-white">
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl mr-4">
                    <MessageCircle className="h-8 w-8 text-primary-300" />
                  </div>
                  <span className="text-primary-200 text-lg font-medium">Get In Touch</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Let's Build Your
                  <span className="block bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">
                    Success Story
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
                  Ready to transform your business? Our expert team is here to provide 
                  tailored solutions that drive growth and exceed expectations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#contact-form"
                      className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
                    >
                      Start Conversation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="tel:+911234567890"
                      className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </motion.div>
                </div>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional business consultation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="text-white font-semibold text-lg">Ready to Connect?</div>
                      <div className="text-primary-200 text-sm">Professional consultation available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="py-16 px-4 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <a href={info.href} className="block">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 h-full relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.gradient} opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className={`p-4 ${info.bgColor} rounded-2xl w-fit mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <div className={info.textColor}>
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-secondary-800 font-semibold mb-2">{info.details}</p>
                    <p className="text-secondary-500 text-sm">{info.subtitle}</p>
                    
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="h-5 w-5 text-primary-500" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with ContactForm */}
      <section id="contact-form" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form Component */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <motion.a
                    href="tel:+911234567890"
                    className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-semibold">+91 12345 67890</div>
                      <div className="text-primary-200 text-sm">Call us directly</div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:info@terrafointernational.com"
                    className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-semibold">info@terrafointernational.com</div>
                      <div className="text-primary-200 text-sm">Email us anytime</div>
                    </div>
                  </motion.a>
                  
                  <div className="flex items-start p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <MapPin className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold">123 Business District</div>
                      <div className="text-primary-200 text-sm">City, State 12345</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-3 bg-primary-100 rounded-xl mr-4">
                        <div className="text-primary-600">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary-900 mb-1">{item.title}</h4>
                        <p className="text-secondary-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-primary-600" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-secondary-700">Monday - Friday</span>
                    <span className="font-semibold text-secondary-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-secondary-700">Saturday</span>
                    <span className="font-semibold text-secondary-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-secondary-700">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-2xl">
                  <div className="flex items-center text-primary-600 mb-1">
                    <Headphones className="h-4 w-4 mr-2" />
                    <span className="font-semibold">24/7 Emergency Support</span>
                  </div>
                  <p className="text-secondary-600 text-sm">Available for urgent matters</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
