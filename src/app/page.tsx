// src/app/page.tsx
import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import FadeInView from '@/components/animations/FadeInView'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Award, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Terrafo International?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We bring years of expertise and commitment to excellence in every service we provide
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Expert Team",
                description: "Highly skilled professionals with industry expertise"
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600" />,
                title: "Quality Service",
                description: "Committed to delivering excellence in every project"
              },
              {
                icon: <Globe className="h-12 w-12 text-blue-600" />,
                title: "Global Reach",
                description: "International experience with local expertise"
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
                title: "Reliable Partner",
                description: "Trusted by businesses across multiple industries"
              }
            ].map((feature, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
