// src/app/services/engineering-solutions/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Compass, Users, Settings, Shield,
  Clock, Target, ChevronRight, Star, Award,
  Phone, Cpu, Lightbulb, Wrench
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Engineering Solutions & Services - Terrafo International | Expert Consulting & Implementation',
  description: 'Comprehensive engineering consulting, design, and implementation services. From concept to completion with cutting-edge technology and expert support.',
}

export default function EngineeringSolutionsPage() {
  const coreServices = [
    {
      icon: <Compass className="h-8 w-8" />,
      title: 'Engineering Design & CAD',
      description: 'Complete CAD/CAM design solutions, 3D modeling, prototyping, and comprehensive technical documentation.',
      features: [
        'CAD/CAM Design Services',
        '3D Modeling & Visualization',
        'Rapid Prototyping',
        'Technical Documentation',
        'Engineering Drawings',
        'Design Optimization'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Technical Consultation',
      description: 'Expert advisory services for complex engineering challenges, strategic planning, and technical decision-making.',
      features: [
        'Feasibility Studies',
        'Technical Audits',
        'Risk Assessment',
        'Strategic Planning',
        'Technology Selection',
        'Performance Analysis'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Project Implementation',
      description: 'End-to-end project execution with dedicated project management, quality assurance, and timely delivery.',
      features: [
        'Project Management',
        'Resource Planning',
        'Timeline Management',
        'Budget Control',
        'Quality Assurance',
        'Progress Monitoring'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Control & Testing',
      description: 'Rigorous testing, validation, and compliance ensuring highest engineering standards and performance.',
      features: [
        'Testing & Validation',
        'Standards Compliance',
        'Quality Assurance Systems',
        'Performance Analysis',
        'Certification Support',
        'Compliance Documentation'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Technical Support & Maintenance',
      description: '24/7 technical support, preventive maintenance, and continuous improvement services for ongoing success.',
      features: [
        '24/7 Technical Support',
        'Preventive Maintenance',
        'System Updates',
        'Performance Optimization',
        'Troubleshooting Services',
        'Emergency Response'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'System Integration',
      description: 'Seamless integration of complex systems with existing infrastructure and process automation solutions.',
      features: [
        'Legacy System Integration',
        'API Development',
        'Data Migration Services',
        'Process Automation',
        'Custom Software Solutions',
        'System Optimization'
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Engineering design and technical solutions"
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
              <span className="text-primary-200 text-sm font-semibold">Your Engineering Innovation Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Engineering Solutions
              <span className="block bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-primary-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Tackling your first engineering challenge or scaling technical operations? We're here to help. Our comprehensive engineering 
              solutions are designed to transform complex challenges into innovative results for businesses of all sizes.
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
                Complete Engineering Services
              </h2>
              <p className="text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're developing your first prototype or scaling complex systems, 
                we provide the engineering expertise and technical support you need to innovate and succeed.
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
                      <Lightbulb className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Innovation-Driven Solutions</h3>
                      <p className="text-secondary-600">
                        As a forward-thinking engineering company, we bring fresh perspectives and cutting-edge solutions to every project.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Star className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Competitive Engineering Rates</h3>
                      <p className="text-secondary-600">
                        Professional engineering services at competitive rates with transparent pricing and flexible project terms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Direct Engineering Access</h3>
                      <p className="text-secondary-600">
                        Work directly with our engineering team and project leads for faster iterations and customized solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Wrench className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Quality Engineering Excellence</h3>
                      <p className="text-secondary-600">
                        We're building our reputation through precise engineering and successful project deliveries, one solution at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Engineer Success?</h3>
                <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                  Let's turn your engineering challenges into innovative solutions. Get expert consultation 
                  and competitive rates for all your technical development needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Free engineering consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Transparent project pricing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Dedicated engineering team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Scalable technical solutions</span>
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
