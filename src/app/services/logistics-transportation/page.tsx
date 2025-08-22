// src/app/services/logistics-transportation/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Truck, Package, Warehouse, Route,
  BarChart, Navigation, ChevronRight, Star, Award,
  Phone, Clock, Target, Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Logistics & Transportation - Terrafo International | Complete Supply Chain Solutions',
  description: 'Comprehensive logistics and transportation management solutions including fleet management, warehousing, supply chain optimization, and last-mile delivery services.',
}

export default function LogisticsTransportationPage() {
  const coreServices = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Fleet Management & Transportation',
      description: 'Modern fleet solutions with GPS tracking, route optimization, and comprehensive vehicle management services.',
      features: [
        'GPS Tracking & Monitoring',
        'Route Optimization',
        'Vehicle Maintenance Management',
        'Driver Management & Training',
        'Fuel Management Systems',
        'Performance Analytics'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art warehousing facilities with inventory management, security, and distribution services.',
      features: [
        'Secure Storage Facilities',
        'Inventory Control Systems',
        'Climate-Controlled Storage',
        '24/7 Security Monitoring',
        'Loading & Unloading Services',
        'Distribution Management'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain management with cost reduction, efficiency improvements, and vendor coordination.',
      features: [
        'Process Optimization',
        'Cost Reduction Strategies',
        'Vendor Management',
        'Quality Control Systems',
        'Performance Monitoring',
        'Compliance Management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Last-Mile Delivery Services',
      description: 'Efficient last-mile delivery solutions with real-time tracking and flexible scheduling options.',
      features: [
        'Express Delivery Options',
        'Real-time Tracking',
        'Customer Notifications',
        'Flexible Scheduling',
        'Proof of Delivery',
        'Returns Management'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Inventory Management',
      description: 'Advanced inventory control systems with automated tracking, reporting, and demand forecasting.',
      features: [
        'Automated Tracking Systems',
        'Stock Level Management',
        'Demand Forecasting',
        'Reporting & Analytics',
        'Order Management',
        'Reorder Point Optimization'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: 'Freight Forwarding',
      description: 'International freight forwarding services with customs clearance, documentation, and insurance coverage.',
      features: [
        'International Shipping',
        'Customs Clearance',
        'Documentation Services',
        'Insurance Coverage',
        'Multi-modal Transportation',
        'Trade Compliance'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Logistics and transportation operations"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-primary-300/20 rounded-full animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-primary-200 mr-3" />
              <span className="text-primary-200 text-sm font-semibold">Your Logistics Solutions Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Logistics & Transportation
              <span className="block bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-primary-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Need efficient logistics solutions? We're here to help. Our comprehensive transportation and supply chain 
              services are designed to streamline operations, reduce costs, and improve delivery performance for growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-primary-800 font-bold rounded-xl hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-10 py-5 border border-primary-300 text-white font-bold rounded-xl hover:bg-primary-700/50 transition-all backdrop-blur-sm"
              >
                Our Services
                <ChevronRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-20">
              <div className="inline-block bg-primary-100 rounded-full px-6 py-2 mb-8">
                <span className="text-primary-700 font-semibold text-sm">COMPREHENSIVE SOLUTIONS</span>
              </div>
              <h2 className="text-5xl font-bold text-secondary-900 mb-8">
                Complete Logistics & Transportation Services
              </h2>
              <p className="text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're shipping your first package or managing complex supply chains, 
                we provide the logistics expertise and transportation solutions you need to deliver success.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <FadeInView key={index} delay={index * 0.15}>
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary-100 group overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-center mb-8 relative z-10">
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-2xl mr-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900">{service.title}</h3>
                  </div>
                  <p className="text-secondary-600 mb-8 text-lg leading-relaxed relative z-10">{service.description}</p>
                  <div className="space-y-3 relative z-10">
                    <div className="text-sm font-semibold text-secondary-800 mb-4">What's Included:</div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-secondary-700">
                        <CheckCircle className="h-4 w-4 text-status-success mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-primary-100 relative z-10">
                    <Link 
                      href="/contact" 
                      className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:translate-x-2 transition-transform"
                    >
                      Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Why Partner with Terrafo International?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Target className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Smart Logistics Solutions</h3>
                      <p className="text-secondary-600">
                        As a modern logistics company, we use advanced technology and data-driven approaches for optimal efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Star className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Competitive Transportation Rates</h3>
                      <p className="text-secondary-600">
                        Get professional logistics services at competitive rates with transparent pricing and flexible payment options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Direct Logistics Support</h3>
                      <p className="text-secondary-600">
                        Work directly with our logistics coordinators for real-time updates and personalized shipping solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Reliable Delivery Performance</h3>
                      <p className="text-secondary-600">
                        We're building our reputation through consistent, on-time deliveries and exceptional customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Streamline Your Logistics?</h3>
                <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                  Let's optimize your supply chain together. Get expert logistics solutions 
                  and competitive transportation rates for all your shipping needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Free logistics assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Transparent shipping rates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Dedicated logistics coordinator</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Scalable delivery solutions</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all transform hover:scale-105"
                  >
                    Get Free Quote
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                  <Link
                    href="tel:+1234567890"
                    className="flex-1 inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </Link>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  )
}
