// src/app/services/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'
import { Metadata } from 'next'



export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive business solutions designed to drive your success
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInView key={service.id} delay={index * 0.1}>
                <ServiceCard service={service} index={index} />
              </FadeInView>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
