// src/components/layout/Footer.tsx
'use client'
import Link from 'next/link'
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
  Send,
  Star,
  Award,
  Shield,
  Plus,
  Minus,
  ExternalLink,
  Code,
  Globe
} from 'lucide-react'
import { services } from '@/data/services'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    services: false,
    quickLinks: false,
    contact: false,
    newsletter: false
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
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
    { icon: <Facebook className="h-4 w-4" />, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="h-4 w-4" />, href: '#', name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <Linkedin className="h-4 w-4" />, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <Instagram className="h-4 w-4" />, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' }
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
      value: '+91 12345 67890',
      href: 'tel:+911234567890'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: 'Address',
      value: '123 Business District, City, State 12345',
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
    { icon: <Award className="h-4 w-4" />, label: '500+ Projects', value: 'Completed' },
    { icon: <Star className="h-4 w-4" />, label: '100+ Clients', value: 'Satisfied' },
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
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
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
                            <span className="text-gray-300 group-hover:text-white text-sm font-medium">{service.title}</span>
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
                      className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-blue-600/30 text-gray-300 hover:text-white text-sm font-medium rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
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
          className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Enhanced Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <motion.div 
                  className="flex items-center mb-4 justify-center lg:justify-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <span className="text-white font-bold text-lg sm:text-xl">T</span>
                    </div>
                    <div>
                      <span className="text-xl sm:text-2xl font-bold text-white">Terrafo</span>
                      <span className="text-base sm:text-lg text-blue-400 ml-1">International</span>
                    </div>
                  </div>
                </motion.div>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base text-center lg:text-left">
                  Your trusted partner for comprehensive business solutions across 
                  multiple industries. We deliver excellence with innovation and reliability.
                </p>

                {/* Mobile Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3 mb-4">
                  {quickStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 justify-center lg:justify-start p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-1 bg-blue-500/20 rounded-md">
                        <div className="text-blue-400">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <span className="text-white font-medium text-xs sm:text-sm block">{stat.label}</span>
                        <span className="text-gray-400 text-xs">{stat.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="text-center lg:text-left">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">Follow Us</h4>
                <div className="flex justify-center lg:justify-start space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-2.5 bg-white/10 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 group border border-white/20 hover:border-blue-400/50`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <div className="text-gray-300 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mobile Sections in Correct Order */}
            <div className="block lg:hidden space-y-6">
              {/* 1. Quick Links - First after Services */}
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
                      <div className="grid grid-cols-2 gap-2 p-3 bg-white/5 rounded-xl">
                        {quickLinks.map((link, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link 
                              href={link.href} 
                              className="flex items-center p-2 text-gray-300 hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 group"
                            >
                              <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                              <span className="text-sm font-medium">{link.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* 2. Contact Information - Second */}
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
                                <p className="text-gray-300 text-sm break-words">{contact.value}</p>
                              ) : (
                                <a 
                                  href={contact.href}
                                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm break-words"
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

              {/* 3. Stay Connected - Third */}
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={() => toggleSection('newsletter')}
                  className="w-full flex items-center justify-between p-3 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 mb-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-blue-400">Stay Connected</h3>
                  <motion.div
                    animate={{ rotate: expandedSections.newsletter ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedSections.newsletter ? 
                      <Minus className="h-4 w-4 text-blue-400" /> : 
                      <Plus className="h-4 w-4 text-blue-400" />
                    }
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSections.newsletter && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm rounded-xl border border-blue-400/20">
                        <p className="text-gray-300 text-sm mb-4 text-center">
                          Subscribe to our newsletter for latest updates and exclusive offers.
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                          <div className="relative">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="w-full px-3 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all text-sm"
                              required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <Mail className="h-3 w-3 text-gray-400" />
                            </div>
                          </div>
                          
                          <motion.button
                            type="submit"
                            className="w-full flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Subscribe
                            <Send className="ml-2 h-3 w-3" />
                          </motion.button>
                        </form>

                        <div className="mt-3 pt-3 border-t border-white/10 text-center">
                          <div className="flex items-center justify-center text-xs text-gray-400 space-x-2">
                            <Shield className="h-3 w-3" />
                            <span>Secure & No Spam</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Desktop Layout - Unchanged */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">{link.desc}</div>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

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
                          <p className="text-gray-300">{contact.value}</p>
                        ) : (
                          <a 
                            href={contact.href}
                            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
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

            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Stay Connected</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Subscribe to our newsletter for latest updates, industry insights, and exclusive offers.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe Now
                    <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </form>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>✨ No spam, unsubscribe anytime</span>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-3 w-3" />
                      <span>Secure</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Bottom Bar with Infonoxe Attribution */}
        <div className="border-t border-white/10 bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
            <motion.div 
              className="flex flex-col space-y-4 lg:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Copyright and Links */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0">
                <div className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8">
                  <p className="text-gray-400 text-xs sm:text-sm flex items-center text-center">
                    © 2025 Terrafo International. All rights reserved.
                    <span className="ml-2 text-red-400">❤</span>
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {[
                      { name: 'Privacy Policy', href: '#' },
                      { name: 'Terms of Service', href: '#' },
                      { name: 'Cookie Policy', href: '#' },
                      { name: 'Sitemap', href: '#' }
                    ].map((link, index) => (
                      <Link 
                        key={index}
                        href={link.href} 
                        className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm hover:from-blue-600 hover:to-indigo-600 text-gray-300 hover:text-white rounded-xl border border-blue-400/30 hover:border-blue-400 transition-all duration-300 group mx-auto lg:mx-0"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs sm:text-sm font-medium">Back to Top</span>
                  <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-bounce" />
                </motion.button>
              </div>

              {/* Enhanced Infonoxe Technologies Attribution - Centered Side by Side */}
              <div className="pt-4 border-t border-white/10">
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Left side - Development info */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="p-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-400/30">
                        <Code className="h-4 w-4 text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium">Crafted with</span>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-red-400"
                      >
                        ❤️
                      </motion.div>
                      <span className="text-sm font-medium">by</span>
                    </div>
                  </div>
                  
                  {/* Right side - Company link */}
                  <motion.a
                    href="https://infonoxe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    {/* Main button content */}
                    <div className="relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 hover:from-indigo-600/40 hover:via-purple-600/40 hover:to-blue-600/40 rounded-xl border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 backdrop-blur-sm">
                      
                      {/* Company logo/icon */}
                      <div className="relative">
                        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <Globe className="h-4 w-4 text-white group-hover:animate-pulse" />
                        </div>
                        
                        {/* Sparkle effect */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ 
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      
                      {/* Company name */}
                      <div className="flex flex-col">
                        <span className="text-base font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-indigo-200 transition-all duration-300">
                          Infonoxe Technologies
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Digital Innovation Partners
                        </span>
                      </div>
                      
                      {/* External link icon */}
                      <div className="flex items-center space-x-1">
                        <ExternalLink className="h-4 w-4 text-indigo-400 group-hover:text-white opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        <ArrowRight className="h-3 w-3 text-indigo-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
