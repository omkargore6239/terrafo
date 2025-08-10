// src/components/layout/Header.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/data/services'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const pathname = usePathname()
  const router = useRouter()

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleServicesEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
      setHoveredService(null)
    }, 150)
  }

  const handleServiceClick = (slug: string) => {
    setIsServicesOpen(false)
    setIsOpen(false)
    router.push(`/services/${slug}`)
  }

  const isActiveRoute = (path: string) => {
    return pathname === path
  }

  const isServicesActive = () => {
    return pathname.startsWith('/services')
  }

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.span 
                className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                Terrafo
              </motion.span>
              <span className="text-xl text-gray-700 ml-2 group-hover:text-gray-800 transition-colors">
                International
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home Link */}
            <Link href="/">
              <motion.div
                className={`px-4 py-2 rounded-lg font-medium transition-all relative ${
                  isActiveRoute('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
                {isActiveRoute('/') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>

            {/* About Link */}
            <Link href="/about">
              <motion.div
                className={`px-4 py-2 rounded-lg font-medium transition-all relative ${
                  isActiveRoute('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
                {isActiveRoute('/about') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
            
            {/* Services Dropdown - No Icons, No Scroll */}
            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <motion.button 
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all relative ${
                  isServicesActive() 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
                {isServicesActive() && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{ transformOrigin: 'top left' }}
                  >
                    {/* Dropdown Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-gray-100">
                      <Link 
                        href="/services" 
                        onClick={() => setIsServicesOpen(false)}
                        className="group flex items-center justify-between hover:bg-white/50 rounded-lg p-2 -m-2 transition-all"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            All Services
                          </h3>
                          <p className="text-sm text-gray-600">
                            Explore our complete service portfolio
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </div>

                    {/* Services Grid - No Scroll, Grid Layout */}
                    <div className="p-4 bg-gray-50">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.id}
                            variants={serviceItemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            className={`group rounded-xl transition-all cursor-pointer p-4 ${
                              hoveredService === service.slug 
                                ? 'bg-blue-600 text-white scale-[1.02] shadow-lg' 
                                : 'bg-white hover:bg-blue-50 hover:shadow-md'
                            }`}
                            onMouseEnter={() => setHoveredService(service.slug)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() => handleServiceClick(service.slug)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex flex-col space-y-2">
                              <h4 className={`font-semibold text-sm transition-colors ${
                                hoveredService === service.slug 
                                  ? 'text-white' 
                                  : 'text-gray-900'
                              }`}>
                                {service.title}
                              </h4>
                              <p className={`text-xs transition-colors line-clamp-2 ${
                                hoveredService === service.slug 
                                  ? 'text-blue-100' 
                                  : 'text-gray-600'
                              }`}>
                                {service.shortDescription}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-100 px-4 py-3 border-t border-gray-200">
                      <p className="text-xs text-gray-600 text-center">
                        Need help choosing? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our experts →</Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Link */}
            <Link href="/contact">
              <motion.div
                className={`px-4 py-2 rounded-lg font-medium transition-all relative ${
                  isActiveRoute('/contact') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
                {isActiveRoute('/contact') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <motion.div 
                    className={`block px-3 py-3 rounded-lg font-medium transition-all ${
                      isActiveRoute('/') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Home
                  </motion.div>
                </Link>
                
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <motion.div 
                    className={`block px-3 py-3 rounded-lg font-medium transition-all ${
                      isActiveRoute('/about') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    About
                  </motion.div>
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <motion.button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full px-3 py-3 rounded-lg font-medium transition-all ${
                      isServicesActive() 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Services
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 space-y-1 mt-2">
                          <Link href="/services" onClick={() => {setIsOpen(false); setIsServicesOpen(false)}}>
                            <motion.div 
                              className="block px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all"
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              All Services →
                            </motion.div>
                          </Link>
                          {services.map((service, index) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                              <Link
                                href={`/services/${service.slug}`}
                                onClick={() => {setIsOpen(false); setIsServicesOpen(false)}}
                              >
                                <motion.div 
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                                  whileHover={{ x: 4 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  {service.title}
                                </motion.div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <motion.div 
                    className={`block px-3 py-3 rounded-lg font-medium transition-all ${
                      isActiveRoute('/contact') 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
