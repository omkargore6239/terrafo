// src/app/services/manpower-housekeeping/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Users, Sparkles, Shield, Settings,
  Calendar, Monitor, ChevronRight, Star, Award,
  Phone, Clock, Target, UserCheck
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Manpower Supply & Housekeeping - Terrafo International | Professional Staffing Solutions',
  description: 'Comprehensive manpower supply and housekeeping services including skilled workforce, professional cleaning, security, and facility management for commercial and industrial establishments.',
}

export default function ManpowerHousekeepingPage() {
  const coreServices = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Skilled Manpower Supply',
      description: 'Qualified professionals for temporary, permanent, and contract-based employment across all industries.',
      features: [
        'Technical & Administrative Staff',
        'Skilled & Semi-skilled Labor',
        'Management Professionals',
        'Specialized Personnel',
        'Temporary & Permanent Placement',
        'Contract-based Employment'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Professional Cleaning Services',
      description: 'Comprehensive cleaning and sanitization services for all types of commercial and industrial facilities.',
      features: [
        'Deep Cleaning Services',
        'Regular Maintenance Cleaning',
        'Sanitization & Disinfection',
        'Specialized Equipment Cleaning',
        'Window & Facade Cleaning',
        'Post-construction Cleanup'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security Services',
      description: 'Trained security personnel and comprehensive security solutions for complete premises protection.',
      features: [
        'Security Guards & Personnel',
        'Access Control Systems',
        'CCTV Monitoring Services',
        'Emergency Response Teams',
        'Patrol Services',
        'Event Security Management'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Maintenance & Technical Support',
      description: 'Technical maintenance services and facility upkeep by qualified technicians and specialists.',
      features: [
        'Preventive Maintenance',
        'Equipment Servicing',
        'Repair & Troubleshooting',
        'Technical Support Services',
        'Facility Upkeep',
        'Emergency Maintenance'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Flexible Staffing Solutions',
      description: 'Customized staffing solutions with flexible scheduling and workforce scaling options.',
      features: [
        'Flexible Scheduling Options',
        'Workforce Scaling Solutions',
        'Seasonal Staffing',
        'Project-based Teams',
        'On-demand Personnel',
        'Rapid Deployment Services'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Facility Management',
      description: 'Complete facility management services with professional oversight, coordination, and quality control.',
      features: [
        'Operations Management',
        'Vendor Coordination',
        'Quality Control Systems',
        'Performance Monitoring',
        'Service Coordination',
        'Compliance Management'
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
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Professional workforce and facility management"
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
              <span className="text-primary-200 text-sm font-semibold">Your Workforce Solutions Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Manpower & Housekeeping
              <span className="block bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-primary-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Need reliable workforce solutions? We're here to help. Our comprehensive manpower supply and housekeeping 
              services are designed to provide skilled professionals and maintain exceptional facility standards for growing businesses.
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
                Complete Workforce & Facility Services
              </h2>
              <p className="text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're hiring your first team or managing large facilities, 
                we provide the skilled workforce and professional services you need to operate efficiently.
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
                      <UserCheck className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Quality Workforce</h3>
                      <p className="text-secondary-600">
                        As a growing company, we carefully select and train skilled professionals who understand modern workplace standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Star className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Flexible & Affordable</h3>
                      <p className="text-secondary-600">
                        Professional workforce solutions at competitive rates with flexible terms that adapt to your business needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Personal Service Management</h3>
                      <p className="text-secondary-600">
                        Direct communication with our management team for quick solutions and personalized workforce planning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Reliable Service Delivery</h3>
                      <p className="text-secondary-600">
                        We're committed to building lasting partnerships through consistent, reliable service and exceptional workforce quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready for Professional Workforce Solutions?</h3>
                <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                  Let's build your ideal workforce together. Get expert staffing solutions 
                  and comprehensive facility services at competitive rates.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Free workforce assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Flexible staffing solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Dedicated service manager</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Quality service guarantee</span>
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
