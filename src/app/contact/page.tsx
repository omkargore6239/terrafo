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
      details: '+91 98227 33222',
      subtitle: 'Mon - Fri, 9AM - 6PM',
      href: 'tel:+919822733222',
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
      details: 'Off 143, jai Ganesh Samrajya',
      subtitle: 'Bhosari, Pune, Maharashtra 411039',
      href: 'https://maps.app.goo.gl/C4RBc1r26oJxH9Kc9',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: 'WhatsApp Chat',
      details: '+91 98227 33222',
      subtitle: 'Instant assistance',
      href: 'https://wa.me/919822733222',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Images */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-16 lg:py-24 overflow-hidden">
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
                
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Let's Build Your
                  <span className="block bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">
                    Success Story
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
                  Ready to transform your business? Our expert team is here to provide 
                  tailored solutions that drive growth and exceed expectations.
                </p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <div className="relative">
                <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
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
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-400/30 rounded-full blur-xl"></div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
                <a 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 h-full relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.gradient} opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <div className={`p-3 lg:p-4 ${info.bgColor} rounded-2xl w-fit mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <div className={info.textColor}>
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-secondary-900 mb-2 lg:mb-3 group-hover:text-primary-600 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-secondary-800 font-semibold mb-1 lg:mb-2 text-sm lg:text-base">{info.details}</p>
                    <p className="text-secondary-500 text-xs lg:text-sm">{info.subtitle}</p>
                    
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
          </FadeInView>

            <ContactForm />
          
        </div>
      </section>

      {/* Google Maps Section with Right-Aligned Get Directions Button */}
      <section className="py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Find us at our convenient location in Bhosari, Pune or get directions using the map below
              </p>
            </div>
          </FadeInView>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"

          >

            <div className="relative h-96 lg:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=ratnaprabha+facility+services&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Terrafo International Office Location - Bhosari, Pune"
              ></iframe>
              
              {/* Get Directions Button - Right Side */}
              <div className="absolute top-4 right-4">
                <motion.a
                  href="https://maps.app.goo.gl/C4RBc1r26oJxH9Kc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 lg:px-6 py-3 bg-white/95 backdrop-blur-sm text-primary-600 font-semibold rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all border border-primary-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-3">Office Address</h4>
                  <p className="text-secondary-600 mb-2">Terrafo International</p>
                  <p className="text-secondary-600 mb-2">1st Floor, jai Ganesh Samrajya</p>
                  <p className="text-secondary-600 mb-2">Off No 143, A wing</p>
                  <p className="text-secondary-600 mb-4">Bhosari, Pune, Maharashtra 411039</p>
                  <div className="flex items-center text-primary-600 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-semibold">+91 98227 33222</span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="font-semibold break-all">info@terrafointernational.com</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-3">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Monday - Friday</span>
                      <span className="font-semibold text-secondary-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Saturday</span>
                      <span className="font-semibold text-secondary-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Sunday</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary-50 rounded-xl">
                    <div className="flex items-center text-primary-600 mb-1">
                      <Headphones className="h-4 w-4 mr-2" />
                      <span className="font-semibold text-sm">24/7 Emergency Support</span>
                    </div>
                    <p className="text-secondary-600 text-sm">Available for urgent matters</p>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-xl">
                    <div className="flex items-center text-green-600 mb-1">
                      <Headphones className="h-4 w-4 mr-2" />
                      <span className="font-semibold text-sm">WhatsApp Support</span>
                    </div>
                    <a 
                      href="https://wa.me/919822733222" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
