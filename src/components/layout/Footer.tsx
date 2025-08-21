// src/components/layout/Footer.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ChevronUp,
  Star,
  Award,
  Shield,
  Plus,
  Minus
} from 'lucide-react'
import { services } from '@/data/services'
import { useState } from 'react'

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    services: false,
    quickLinks: false,
    contact: false
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const expandVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  }

  const socialLinks = [
    { 
      icon: <Facebook className="h-4 w-4" />, 
      href: 'https://www.facebook.com/terrafointernational', 
      name: 'Facebook', 
      color: 'hover:bg-blue-600' 
    },
    { 
      icon: <Twitter className="h-4 w-4" />, 
      href: 'https://twitter.com/terrafo_intl', 
      name: 'Twitter', 
      color: 'hover:bg-sky-500' 
    },
    { 
      icon: <Linkedin className="h-4 w-4" />, 
      href: 'https://www.linkedin.com/company/terrafo-international', 
      name: 'LinkedIn', 
      color: 'hover:bg-blue-700' 
    },
    { 
      icon: <Instagram className="h-4 w-4" />, 
      href: 'https://www.instagram.com/terrafointernational', 
      name: 'Instagram', 
      color: 'hover:bg-pink-600' 
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      label: 'Email',
      value: 'info@terrafointernational.com',
      href: 'mailto:info@terrafointernational.com'
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: 'Phone',
      value: '+91 98227 33222',
      href: 'tel:+919822733222'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: 'Address',
      value: '1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari, Pune, Maharashtra 411039',
      href: '#'
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: 'Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: '#'
    }
  ]

  const quickStats = [
    { icon: <Award className="h-4 w-4" />, label: 'Projects', value: 'Completed' },
    { icon: <Star className="h-4 w-4" />, label: 'Clients', value: 'Satisfied' },
    { icon: <Shield className="h-4 w-4" />, label: '24/7 Support', value: 'Available' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/', desc: 'Back to homepage' },
    { name: 'About Us', href: '/about', desc: 'Learn about our company' },
    { name: 'All Services', href: '/services', desc: 'Explore our services' },
    { name: 'Contact', href: '/contact', desc: 'Get in touch with us' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Mobile Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {/* Mobile Expandable Services */}
            <div className="block lg:hidden">
              <motion.button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
                  <span className="text-blue-400 font-semibold">Our Complete Service Portfolio</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedSections.services ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="h-4 w-4 text-blue-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {expandedSections.services && (
                  <motion.div
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden mt-3"
                  >
                    <div className="grid grid-cols-1 gap-2 p-3 bg-white/5 rounded-xl">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link 
                            href={`/services/${service.slug}`}
                            className="flex items-center p-2 bg-white/10 hover:bg-blue-600/30 rounded-lg transition-all duration-300 group"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:animate-pulse" />
                            <span className="text-gray-400 group-hover:text-white text-sm font-medium">{service.title}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Services Display */}
            <div className="hidden lg:block">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Our Complete Service Portfolio</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-blue-600/30 text-gray-400 hover:text-white text-sm font-medium rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 group-hover:animate-pulse" />
                      <span className="whitespace-nowrap">{service.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Enhanced Company Info with Logo - Social Links Removed */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-8">
                <motion.div 
                  className="flex items-center mb-6 justify-center lg:justify-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/logo1.png"
                    alt="Terrafo International"
                    width={240}
                    height={100}
                    priority
                    className="h-auto w-auto max-h-24"
                  />
                </motion.div>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base text-center lg:text-left">
                  Your trusted partner for comprehensive business solutions across 
                  multiple industries. We deliver excellence with innovation and reliability.
                </p>

                {/* Mobile Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 mb-6">
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 justify-center lg:justify-start p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-1.5 bg-blue-500/20 rounded-md">
                        <div className="text-blue-400">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <span className="text-white font-medium text-sm block">{stat.label}</span>
                        <span className="text-gray-400 text-xs">{stat.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Sections */}
            <div className="block lg:hidden space-y-6">
              {/* Quick Links with Social Media */}
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={() => toggleSection('quickLinks')}
                  className="w-full flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 mb-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
                  <motion.div
                    animate={{ rotate: expandedSections.quickLinks ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedSections.quickLinks ? 
                      <Minus className="h-4 w-4 text-blue-400" /> : 
                      <Plus className="h-4 w-4 text-blue-400" />
                    }
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSections.quickLinks && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="p-3 bg-white/5 rounded-xl space-y-4">
                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-2">
                          {quickLinks.map((link, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                href={link.href} 
                                className="flex items-center p-2 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 group"
                              >
                                <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <span className="text-sm font-medium">{link.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        {/* Follow Us Social Links */}
                        <div className="border-t border-white/10 pt-4">
                          <h4 className="text-sm font-semibold text-blue-400 mb-3 text-center">Follow Us</h4>
                          <div className="flex justify-center space-x-2">
                            {socialLinks.map((social, index) => (
                              <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 bg-white/10 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 group border border-white/20 hover:border-blue-400/50`}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                              >
                                <div className="text-gray-400 group-hover:text-white transition-colors">
                                  {social.icon}
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={() => toggleSection('contact')}
                  className="w-full flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 mb-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-blue-400">Contact Information</h3>
                  <motion.div
                    animate={{ rotate: expandedSections.contact ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedSections.contact ? 
                      <Minus className="h-4 w-4 text-blue-400" /> : 
                      <Plus className="h-4 w-4 text-blue-400" />
                    }
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSections.contact && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 p-3 bg-white/5 rounded-xl">
                        {contactInfo.map((contact, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="p-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg border border-blue-400/30 flex-shrink-0">
                              <div className="text-blue-400">
                                {contact.icon}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-400 text-xs font-medium mb-1">{contact.label}</p>
                              {contact.href.startsWith('#') ? (
                                <p className="text-gray-400 text-sm break-words">{contact.value}</p>
                              ) : (
                                <a 
                                  href={contact.href}
                                  className="text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm break-words"
                                >
                                  {contact.value}
                                </a>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Desktop Quick Links with Social Media */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h3>
              <ul className="space-y-4 mb-8">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-400">{link.desc}</div>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Follow Us Social Links - Desktop */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-base font-semibold text-blue-400 mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 group border border-white/20 hover:border-blue-400/50`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Desktop Contact Information */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                        <div className="text-blue-400">
                          {contact.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm font-medium mb-1">{contact.label}</p>
                        {contact.href.startsWith('#') ? (
                          <p className="text-gray-400">{contact.value}</p>
                        ) : (
                          <a 
                            href={contact.href}
                            className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Simplified Bottom Bar */}
        <div className="border-t border-white/10 bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div 
              className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Copyright */}
              <div className="flex-1 lg:flex-none">
                <p className="text-gray-400 text-sm text-center lg:text-left">
                  © 2025 Terrafo International. All rights reserved.
                </p>
              </div>
              
              {/* Centered Attribution */}
              <div className="flex-1 lg:flex lg:justify-center">
                <p className="text-gray-400 text-sm text-center lg:text-left">
                  Crafted with ❤️ by{' '}
                  <a
                    href="https://infonoxe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
                  >
                    Infonoxe Technologies
                  </a>
                </p>
              </div>

              {/* Back to Top Button */}
              <div className="flex-1 lg:flex-none lg:flex lg:justify-end">
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm hover:from-blue-600 hover:to-indigo-600 text-gray-400 hover:text-white rounded-xl border border-blue-400/30 hover:border-blue-400 transition-all duration-300 group mx-auto lg:mx-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">Back to Top</span>
                  <ChevronUp className="h-4 w-4 group-hover:animate-bounce" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
