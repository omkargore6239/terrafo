'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Star, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional business team collaboration',
    title: 'Seamless Global Trade',
    subtitle: 'Import/Export Excellence'
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern office workspace and innovation',
    title: 'Innovative Engineering',
    subtitle: 'Technical Solutions'
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional workforce and HR services',
    title: 'Skilled Workforce',
    subtitle: 'HR & Manpower Solutions'
  }
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setIsAnimating(false)
      }, 300)
    }, 4000) // Change slide every 4 seconds
    
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
            >
              <Award className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-blue-200 text-sm font-medium">Terrafo International</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Your Complete</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                  Business Solutions
                </span>
                <br />
                <span className="text-white">Partner</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl"
            >
              From import-export to infrastructure development, we provide comprehensive services 
              that drive your business forward with expertise and reliability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { number: "9+", label: "Services", icon: TrendingUp },
                { number: "500+", label: "Projects", icon: Award },
                { number: "100+", label: "Happy Clients", icon: Star }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-6 h-6 text-blue-300 mr-2 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl lg:text-4xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-blue-200 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Image Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            {/* Main Carousel Container */}
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 z-10"></div>
              
              {/* Image Slides */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scale: currentIndex === index ? 1 : 1.1,
                    filter: isAnimating ? 'blur(4px)' : 'blur(0px)'
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Image Overlay Content */}
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: currentIndex === index ? 1 : 0, y: currentIndex === index ? 0 : 20 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        {image.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: currentIndex === index ? 1 : 0, y: currentIndex === index ? 0 : 20 }}
                        transition={{ delay: 0.5 }}
                        className="text-blue-100"
                      >
                        {image.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
