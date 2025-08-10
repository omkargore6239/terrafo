// src/components/ui/ServiceCard.tsx
'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    slug: string
    shortDescription: string
    features: string[]
    category: string
    isPopular?: boolean
  }
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <div className="h-full group">
      <Link href={`/services/${service.slug}`}>
        <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200 hover:-translate-y-1">
          
          {/* Header Section */}
          <div className="relative z-10 flex items-start justify-between mb-6">
            <div className="flex flex-col gap-3">
              {/* Popular Badge */}
              {service.isPopular && (
                <div className="inline-flex items-center px-3 py-1.5 bg-primary-100 border border-primary-200 text-primary-800 text-xs font-bold rounded-full shadow-sm">
                  <Star className="h-3 w-3 mr-1.5 fill-current" />
                  Popular Choice 
                </div>
              )} 
              
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 border border-primary-200 text-sm font-semibold rounded-full shadow-sm">
                <Sparkles className="h-3 w-3 mr-2" />
                {service.category}
              </div>
            </div>

            {/* Service Number */}
            <div className="flex items-center justify-center w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-full text-gray-400 font-bold text-sm group-hover:border-primary-200 group-hover:text-primary-500 transition-all duration-300">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Content Section */}
          <div className="relative z-10">
            {/* Service Title */}
            <h3 className="text-2xl font-bold text-secondary-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-secondary-600 mb-8 leading-relaxed text-base">
              {service.shortDescription}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {service.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-secondary-700 group/item">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-200 transition-colors duration-200">
                    <CheckCircle className="h-3 w-3 text-primary-600" />
                  </div>
                  <span className="group-hover/item:text-secondary-800 transition-colors duration-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative z-10 flex items-center justify-between pt-6 border-t border-gray-150 group-hover:border-primary-200 transition-colors duration-300">
            <div className="flex items-center">
              <span className="text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors duration-300">
                Explore Service
              </span>
              <div className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl shadow-sm group-hover:bg-primary-100 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
              <ArrowRight className="h-5 w-5 text-primary-600 group-hover:text-primary-700 group-hover:translate-x-0.5 transition-all duration-300" />
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </Link>
    </div>
  )
}
