// src/components/ui/ServiceCard.tsx
'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    slug: string
    shortDescription: string
    features: string[]
    category: string
  }
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      className="h-full group"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 hover:border-blue-300 hover:-translate-y-1 group overflow-hidden">
          
          {/* Header Section */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex flex-col gap-2">
           
              
              
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                <Sparkles className="h-3 w-3 mr-1.5" />
                {service.category}
              </div>
            </div>

            {/* Service Number */}
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 border border-gray-300 rounded-xl text-gray-500 font-bold text-sm group-hover:border-blue-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Content Section */}
          <div className="mb-5">
            {/* Service Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              {service.shortDescription}
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-5">
              {service.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start text-sm text-gray-700">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-blue-200 transition-colors duration-300">
            <div className="flex items-center">
              <span className="text-blue-600 font-semibold text-base group-hover:text-blue-700 transition-colors duration-300">
                Learn More
              </span>
            </div>
            
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
              <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
        </div>
      </Link>
    </motion.div>
  )
}
