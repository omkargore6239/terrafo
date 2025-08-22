// src/app/services/human-resources/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Users, TrendingUp, Award, UserCheck, BookOpen,
  Search, Calculator, MessageSquare, ChevronRight, Star, Shield,
  Phone, Brain, Heart, BarChart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Human Resources Consultancy - Terrafo International | Complete HR Solutions',
  description: 'Professional HR consultancy services including talent acquisition, performance management, workforce optimization, and compliance with comprehensive support.',
}

export default function HumanResourcesPage() {
  const coreServices = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Talent Acquisition',
      description: 'End-to-end recruitment solutions to find and attract top talent for your growing organization.',
      features: [
        'Executive Search Services',
        'Mass Recruitment Campaigns',
        'Technical & Specialized Hiring',
        'Campus Recruitment Programs',
        'Interview Process Design',
        'Candidate Assessment Tools'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Performance Management',
      description: 'Comprehensive systems to monitor, evaluate, and enhance employee performance and productivity.',
      features: [
        'KPI Development & Tracking',
        'Performance Review Systems',
        'Goal Setting Frameworks',
        '360-Degree Feedback Programs',
        'Performance Improvement Plans',
        'Recognition & Reward Systems'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'HR Compliance & Legal',
      description: 'Ensure full compliance with labor laws, regulations, and industry standards to minimize legal risks.',
      features: [
        'Labor Law Compliance',
        'HR Policy Development',
        'Compliance Audit Services',
        'Legal Risk Assessment',
        'Documentation Management',
        'Regulatory Updates'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Training & Development',
      description: 'Comprehensive learning programs to enhance employee skills, capabilities, and career growth.',
      features: [
        'Skills Development Programs',
        'Leadership Training',
        'Technical Skill Enhancement',
        'Soft Skills Development',
        'E-learning Platform Setup',
        'Training Effectiveness Measurement'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Payroll & Benefits Management',
      description: 'Accurate payroll processing with comprehensive benefits administration and tax compliance.',
      features: [
        'Salary Processing & Management',
        'Tax Compliance & Filing',
        'Benefits Administration',
        'Statutory Compliance',
        'Payroll Analytics & Reporting',
        'Employee Self-Service Portals'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Employee Relations & Culture',
      description: 'Foster positive workplace relationships, resolve conflicts, and build strong organizational culture.',
      features: [
        'Conflict Resolution Services',
        'Employee Engagement Programs',
        'Internal Communication Strategy',
        'Culture Development Initiatives',
        'Employee Survey Management',
        'Workplace Mediation'
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
            alt="Professional business team collaboration"
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
              <span className="text-primary-200 text-sm font-semibold">Your People Strategy Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Human Resources
              <span className="block bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-primary-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Building your first team or scaling your workforce? We're here to help. Our comprehensive HR 
              services are designed to attract talent, boost performance, and create positive workplace cultures for growing businesses.
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
                Complete Human Resources Services
              </h2>
              <p className="text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
                Whether you're hiring your first employee or building a complete HR department, 
                we provide the expertise and support you need to build exceptional teams.
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
                      <Brain className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Modern HR Approach</h3>
                      <p className="text-secondary-600">
                        As a growing company, we understand modern workforce challenges and implement innovative HR solutions that work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Star className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Startup-Friendly Pricing</h3>
                      <p className="text-secondary-600">
                        Professional HR services at competitive rates designed for growing businesses and startup budgets.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">Personal HR Guidance</h3>
                      <p className="text-secondary-600">
                        Direct access to HR experts who understand your unique challenges and provide tailored solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-6 mt-1">
                      <Heart className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">People-First Philosophy</h3>
                      <p className="text-secondary-600">
                        We're passionate about building great workplaces where people thrive and businesses grow together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Build Your Dream Team?</h3>
                <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                  Let's create an exceptional workplace together. Get expert HR guidance 
                  and competitive solutions for all your people management needs.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Free HR assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Transparent service pricing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Dedicated HR specialist</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 text-primary-300" />
                    <span className="text-lg">Scalable HR solutions</span>
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
