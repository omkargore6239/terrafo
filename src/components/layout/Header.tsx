// src/components/layout/Header.tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight, Grid3X3 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/data/services'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
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
    }, 200)
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
      y: -8,
      scale: 0.96,
      transition: { 
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.png"
                alt="Terrafo International"
                width={220}
                height={80}
                priority
                className="h-auto w-auto max-h-16"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Home Link */}
            <Link href="/">
              <div className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActiveRoute('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}>
                Home
              </div>
            </Link>

            {/* About Link */}
            <Link href="/about">
              <div className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActiveRoute('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}>
                About
              </div>
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isServicesActive() 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}>
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200/60 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-gray-100">
                      <Link 
                        href="/services" 
                        className="group flex items-center justify-between p-2 -m-2 rounded-lg hover:bg-white/70 transition-all duration-200"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                            <Grid3X3 className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">View All Services</h3>
                            <p className="text-xs text-gray-600">Complete service portfolio</p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </div>

                    {/* Services List */}
                    <div className="max-h-80 overflow-y-auto p-2">
                      {services.map((service, index) => (
                        <motion.button
                          key={service.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.2 }}
                          onClick={() => handleServiceClick(service.slug)}
                          className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {service.shortDescription}
                              </p>
                            </div>
                            <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-2 mt-0.5" />
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 p-3 border-t border-gray-100">
                      <p className="text-xs text-gray-600 text-center">
                        Need consultation? 
                        <Link 
                          href="/contact" 
                          className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Contact us →
                        </Link>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Link */}
            <Link href="/contact">
              <div className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActiveRoute('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}>
                Contact
              </div>
            </Link>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.div
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
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
            </button>
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
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200/50"
            >
              <div className="px-4 py-4 space-y-2">
                {/* Mobile Links */}
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActiveRoute('/') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}>
                    Home
                  </div>
                </Link>
                
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <div className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActiveRoute('/about') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}>
                    About
                  </div>
                </Link>
                
                {/* Mobile Services */}
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isServicesActive() 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : 'rotate-0'
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 bg-gray-50 rounded-lg"
                      >
                        <div className="p-2 space-y-1">
                          <Link href="/services" onClick={() => {setIsOpen(false); setIsServicesOpen(false)}}>
                            <div className="flex items-center px-3 py-2.5 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200">
                              <Grid3X3 className="h-4 w-4 mr-2" />
                              View All Services
                              <ArrowRight className="h-3 w-3 ml-auto" />
                            </div>
                          </Link>
                          
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={() => {setIsOpen(false); setIsServicesOpen(false)}}
                              >
                                <div className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200">
                                  {service.title}
                                </div>
                              </Link>
                            ))}
                            
                            {services.length > 6 && (
                              <Link href="/services" onClick={() => {setIsOpen(false); setIsServicesOpen(false)}}>
                                <div className="px-3 py-2 text-xs text-gray-500 hover:text-blue-600 transition-colors">
                                  +{services.length - 6} more services →
                                </div>
                              </Link>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <div className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActiveRoute('/contact') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}>
                    Contact
                  </div>
                </Link>

                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200/50">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <motion.div
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md"
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
