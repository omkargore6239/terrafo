// src/app/services/manpower-housekeeping/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Users, Sparkles, Shield, Clock, Award,
  Target, Settings, ChevronRight, Star, TrendingUp,
  Calculator, FileText, Phone, UserCheck,
  BarChart, Briefcase, Monitor, Calendar, Eye, Building
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
      icon: <Users className="h-6 w-6" />,
      title: 'Skilled Manpower Supply',
      description: 'Qualified professionals for temporary, permanent, and contract-based employment',
      features: ['Technical Staff', 'Administrative Personnel', 'Skilled Labor', 'Management Positions']
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Professional Cleaning',
      description: 'Comprehensive cleaning and sanitization services for all types of facilities',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization', 'Specialized Cleaning']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security Services',
      description: 'Trained security personnel and comprehensive security solutions for premises protection',
      features: ['Security Guards', 'Access Control', 'CCTV Monitoring', 'Emergency Response']
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Maintenance Support',
      description: 'Technical maintenance services and facility upkeep by qualified technicians',
      features: ['Preventive Maintenance', 'Equipment Servicing', 'Repair Services', 'Technical Support']
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Flexible Staffing',
      description: 'Customized staffing solutions with flexible scheduling and workforce scaling',
      features: ['Temporary Staffing', 'Permanent Placement', 'Contract Staff', 'Seasonal Workers']
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Facility Management',
      description: 'Complete facility management services with professional oversight and coordination',
      features: ['Operations Management', 'Vendor Coordination', 'Quality Control', 'Performance Monitoring']
    }
  ]

  const serviceSpecializations = [
    {
      title: 'Commercial Facilities',
      description: 'Office buildings, retail spaces, and commercial complexes with professional services',
      icon: <Building className="h-8 w-8 text-primary-600" />,
      specialties: ['Office Cleaning', 'Reception Services', 'Administrative Support', 'Facility Coordination']
    },
    {
      title: 'Industrial Operations',
      description: 'Manufacturing plants, warehouses, and industrial facilities with specialized workforce',
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      specialties: ['Production Staff', 'Technical Maintenance', 'Quality Control', 'Safety Management']
    },
    {
      title: 'Healthcare Facilities',
      description: 'Medical facilities requiring specialized cleaning and trained healthcare support staff',
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      specialties: ['Medical Cleaning', 'Healthcare Support', 'Infection Control', 'Patient Services']
    },
    {
      title: 'Educational Institutions',
      description: 'Schools and universities with comprehensive cleaning and support staff services',
      icon: <Users className="h-8 w-8 text-primary-600" />,
      specialties: ['Campus Cleaning', 'Administrative Support', 'Event Staff', 'Maintenance Teams']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Requirements Assessment',
      description: 'Detailed analysis of your staffing and housekeeping requirements',
      duration: '1-2 days',
      deliverables: ['Needs Analysis', 'Service Scope', 'Resource Planning']
    },
    {
      step: '02',
      title: 'Staff Recruitment & Training',
      description: 'Selection and training of qualified personnel based on your specific needs',
      duration: '1-2 weeks',
      deliverables: ['Staff Selection', 'Training Programs', 'Skill Certification']
    },
    {
      step: '03',
      title: 'Service Deployment',
      description: 'Implementation of services with proper supervision and quality control',
      duration: '2-3 days',
      deliverables: ['Service Launch', 'Quality Standards', 'Supervision Setup']
    },
    {
      step: '04',
      title: 'Operations Management',
      description: 'Ongoing service delivery with continuous monitoring and quality assurance',
      duration: 'Ongoing',
      deliverables: ['Daily Operations', 'Performance Monitoring', 'Quality Reports']
    },
    {
      step: '05',
      title: 'Performance Optimization',
      description: 'Regular reviews and improvements to enhance service quality and efficiency',
      duration: 'Monthly',
      deliverables: ['Performance Reviews', 'Service Improvements', 'Client Feedback']
    }
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Skilled Workforce',
      description: 'Trained and certified professionals across all service categories',
      metrics: '1000+ Staff Members'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service availability with emergency response',
      metrics: '99.5% Availability'
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and service standards compliance',
      metrics: '98% Satisfaction'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Optimized staffing solutions reducing operational costs',
      metrics: '25% Cost Savings'
    }
  ]

  const serviceAreas = [
    'Office Administration', 'Technical Support', 'Security Personnel', 'Cleaning Services',
    'Maintenance Teams', 'Reception Services', 'Facility Coordination', 'Event Support',
    'Healthcare Support', 'Industrial Labor', 'Quality Control', 'Safety Management'
  ]

  const technologies = [
    { name: 'Staff Management', category: 'Operations' },
    { name: 'Quality Monitoring', category: 'Control' },
    { name: 'Scheduling Systems', category: 'Planning' },
    { name: 'Training Platforms', category: 'Development' },
    { name: 'Performance Tracking', category: 'Analytics' },
    { name: 'Mobile Apps', category: 'Communication' },
    { name: 'Reporting Tools', category: 'Management' },
    { name: 'Compliance Systems', category: 'Quality' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Professional workforce and facility management"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Staffing Provider</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Manpower Supply &
              <span className="block text-primary-300">Housekeeping Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive manpower supply and professional housekeeping services providing 
              skilled workforce and facility management solutions for all business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Request Staffing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-primary-300 text-white font-semibold rounded-lg hover:bg-primary-700/30 transition-all"
              >
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <div className="text-2xl font-bold text-secondary-900 mb-2">{benefit.metrics}</div>
                  <div className="text-sm text-secondary-600">{benefit.title}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Service Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Skilled manpower and professional staff"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Skilled Manpower</h3>
                  <p className="text-sm">Professional workforce solutions</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional cleaning and housekeeping services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Professional Cleaning</h3>
                  <p className="text-sm">Comprehensive facility care</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Security services and facility management"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Security Services</h3>
                  <p className="text-sm">Reliable protection solutions</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Comprehensive Manpower & Housekeeping Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From skilled manpower supply to professional housekeeping, we provide complete 
                workforce solutions tailored to your business requirements and operational needs.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-primary-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 text-primary-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">{service.title}</h3>
                  </div>
                  <p className="text-secondary-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-secondary-700">
                        <CheckCircle className="h-4 w-4 text-status-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Service Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Service Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers diverse facility types with customized 
                workforce solutions and industry-specific service approaches.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceSpecializations.map((specialization, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="mr-6">{specialization.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">{specialization.title}</h3>
                      <p className="text-secondary-600 mb-4">{specialization.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {specialization.specialties.map((specialty, idx) => (
                      <div key={idx} className="bg-primary-50 rounded-lg px-4 py-2 text-sm text-secondary-700 border border-primary-200">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Excellence Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Professional Workforce Excellence
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Skilled professionals committed to delivering exceptional service and maintaining high standards
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Professional workforce and team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Empowering Your Business with Quality Service</h3>
                  <p className="text-lg">Professional workforce solutions for every industry</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Our Service Implementation Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to staffing and service deployment ensuring quality, 
                efficiency, and seamless integration with your operations.
              </p>
            </div>
          </FadeInView>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-primary-400 h-full"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary-600 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-secondary-900">{step.title}</h3>
                            <div className="text-primary-600 font-medium">{step.duration}</div>
                          </div>
                        </div>
                        <p className="text-secondary-600 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-secondary-800 mb-2">Key Deliverables:</div>
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center text-sm text-secondary-600">
                              <FileText className="h-3 w-3 text-primary-500 mr-2" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Service Areas & Specializations
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all staffing and housekeeping services with 
                specialized expertise across multiple industries and facility types.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-primary-50 rounded-xl p-4 text-center hover:bg-primary-100 transition-all">
                  <div className="text-sm font-semibold text-secondary-900">{area}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Systems */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Management Technologies & Systems
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage advanced management systems and digital tools for efficient 
                workforce coordination and service quality monitoring.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 text-center hover:bg-primary-50 transition-all border border-primary-200">
                  <div className="text-lg font-semibold text-secondary-900 mb-2">{tech.name}</div>
                  <div className="text-sm text-primary-600">{tech.category}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Training & Professional Development
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Continuous training and skill development programs ensuring our workforce 
                  meets the highest professional standards and industry requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <UserCheck className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Skill Certification Programs</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Quality Training Standards</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Performance Enhancement</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional training and development programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/10"></div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Why Choose Terrafo International Manpower Services?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-6 mt-1">{benefit.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{benefit.title}</h3>
                        <p className="text-secondary-600 mb-2">{benefit.description}</p>
                        <div className="text-primary-600 font-semibold">{benefit.metrics}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready for Professional Workforce Solutions?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Get the skilled manpower and comprehensive facility services your 
                  business needs to operate efficiently and professionally.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Service Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Staffing Proposal</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Quality Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Request Staffing Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Professional team and workforce success"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Operations Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Partner with Terrafo International for professional manpower and housekeeping 
              services that elevate your business operations and workplace standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Workforce Solutions
                <Users className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                View Success Stories
                <Eye className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  )
}
