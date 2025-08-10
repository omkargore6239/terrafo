// src/app/services/facilities-management/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Building2, Wrench, Shield, Zap, Phone, 
  Users, Clock, Target, Settings, ChevronRight, Star, Award,
  Calculator, FileText, Monitor, MapPin, AlertTriangle, Cog,
  Eye, Lock, Thermometer, Activity, Calendar, TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Integrated Facilities Management - Terrafo International | Complete Facility Services',
  description: 'Comprehensive facility management and maintenance services including security, utilities, space optimization, and emergency response with 24/7 support.',
}

export default function FacilitiesManagementPage() {
  const coreServices = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Preventive Maintenance',
      description: 'Proactive maintenance programs to prevent equipment failures and extend asset life',
      features: ['Scheduled Inspections', 'Equipment Servicing', 'Predictive Analytics', 'Maintenance Records']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Security Management',
      description: 'Comprehensive security systems and protocols to protect your facilities and assets',
      features: ['Access Control', 'CCTV Monitoring', 'Security Personnel', 'Incident Response']
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Utilities Management',
      description: 'Efficient management of power, water, HVAC, and other critical building systems',
      features: ['Energy Optimization', 'HVAC Management', 'Water Systems', 'Power Distribution']
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Space Planning',
      description: 'Strategic space utilization and layout optimization for maximum efficiency',
      features: ['Space Allocation', 'Layout Design', 'Occupancy Planning', 'Move Management']
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Emergency Response',
      description: '24/7 emergency response services with rapid deployment and crisis management',
      features: ['Emergency Protocols', 'Crisis Management', 'Rapid Response', 'Recovery Planning']
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Smart Building Systems',
      description: 'IoT-enabled building automation and monitoring for intelligent facility management',
      features: ['IoT Sensors', 'Automated Controls', 'Real-time Monitoring', 'Data Analytics']
    }
  ]

  const facilityTypes = [
    {
      title: 'Corporate Offices',
      description: 'Professional office environments with focus on productivity and employee comfort',
      icon: <Building2 className="h-8 w-8 text-primary-600" />,
      specialties: ['Workspace Management', 'Meeting Facilities', 'Employee Amenities', 'Technology Infrastructure']
    },
    {
      title: 'Manufacturing Facilities',
      description: 'Industrial facilities requiring specialized maintenance and safety protocols',
      icon: <Cog className="h-8 w-8 text-primary-600" />,
      specialties: ['Equipment Maintenance', 'Safety Compliance', 'Production Support', 'Quality Control']
    },
    {
      title: 'Healthcare Facilities',
      description: 'Medical facilities with stringent hygiene and regulatory compliance requirements',
      icon: <Activity className="h-8 w-8 text-primary-600" />,
      specialties: ['Medical Equipment', 'Sterile Environments', 'Emergency Systems', 'Compliance Management']
    },
    {
      title: 'Educational Institutions',
      description: 'Schools and universities requiring safe, conducive learning environments',
      icon: <Users className="h-8 w-8 text-primary-600" />,
      specialties: ['Campus Management', 'Student Safety', 'Learning Environments', 'Event Support']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Facility Assessment',
      description: 'Comprehensive evaluation of current facility conditions and requirements',
      duration: '1-2 weeks',
      deliverables: ['Facility Audit Report', 'Asset Inventory', 'Condition Assessment']
    },
    {
      step: '02',
      title: 'Service Planning',
      description: 'Development of customized facility management plan and service schedule',
      duration: '1-2 weeks',
      deliverables: ['Management Plan', 'Service Schedule', 'Budget Proposal']
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deployment of facility management services and systems integration',
      duration: '2-4 weeks',
      deliverables: ['System Setup', 'Staff Training', 'Process Documentation']
    },
    {
      step: '04',
      title: 'Operations Management',
      description: 'Ongoing facility operations with continuous monitoring and optimization',
      duration: 'Ongoing',
      deliverables: ['Daily Operations', 'Performance Reports', 'Maintenance Logs']
    },
    {
      step: '05',
      title: 'Continuous Improvement',
      description: 'Regular reviews and optimizations to enhance efficiency and reduce costs',
      duration: 'Quarterly',
      deliverables: ['Performance Reviews', 'Optimization Reports', 'Cost Analysis']
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Reduce operational costs through optimized resource management',
      metrics: '30% Cost Reduction'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and emergency response services',
      metrics: '99.9% Uptime'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Security Assurance',
      description: 'Comprehensive security measures protecting assets and personnel',
      metrics: '100% Compliance'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Performance Excellence',
      description: 'Optimized facility performance through data-driven management',
      metrics: '95% Efficiency Rate'
    }
  ]

  const serviceAreas = [
    'Mechanical Systems', 'Electrical Systems', 'HVAC Management', 'Plumbing & Water Systems',
    'Fire Safety Systems', 'Security Systems', 'Cleaning Services', 'Waste Management',
    'Landscaping', 'Energy Management', 'Space Management', 'Vendor Coordination'
  ]

  const technologies = [
    { name: 'CMMS Systems', category: 'Management' },
    { name: 'IoT Sensors', category: 'Monitoring' },
    { name: 'Building Automation', category: 'Control' },
    { name: 'Energy Analytics', category: 'Optimization' },
    { name: 'Security Systems', category: 'Protection' },
    { name: 'Mobile Apps', category: 'Accessibility' },
    { name: 'Predictive Analytics', category: 'Intelligence' },
    { name: 'Cloud Platform', category: 'Integration' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Modern office building and facility management"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Facility Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Integrated Facilities
              <span className="block text-primary-300">Management Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Complete facility management and maintenance services ensuring optimal operations, 
              security, and efficiency for your business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Facility Assessment
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

      {/* Facility Management Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Building maintenance and security systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Security Management</h3>
                  <p className="text-sm">24/7 monitoring & protection</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="HVAC and utilities management"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Utilities Management</h3>
                  <p className="text-sm">Efficient energy systems</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Preventive maintenance and facility care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Preventive Maintenance</h3>
                  <p className="text-sm">Proactive facility care</p>
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
                Comprehensive Facility Management Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From preventive maintenance to emergency response, we provide complete facility 
                management solutions tailored to your specific operational needs.
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

      {/* Facility Types */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Facility Types We Manage
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our expertise spans across various facility types, each with specialized 
                management approaches and industry-specific requirements.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {facilityTypes.map((facility, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="mr-6">{facility.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">{facility.title}</h3>
                      <p className="text-secondary-600 mb-4">{facility.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {facility.specialties.map((specialty, idx) => (
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

      {/* Smart Building Technology Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Smart Building Technologies
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Advanced IoT and automation systems for intelligent facility management
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Smart building automation and IoT systems"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">AI-Powered Facility Management</h3>
                  <p className="text-lg">Predictive maintenance and intelligent automation</p>
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
                Our Facility Management Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to facility management ensuring seamless operations, 
                cost efficiency, and continuous improvement.
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
                Comprehensive coverage of all facility management disciplines with 
                specialized expertise in critical building systems.
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

      {/* Technologies & Tools */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Advanced Technologies & Systems
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage cutting-edge technology and smart building systems to deliver 
                efficient, data-driven facility management solutions.
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

      {/* Energy Efficiency Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Energy Efficiency & Sustainability
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Optimize your facility's energy consumption and reduce environmental impact 
                  through intelligent monitoring and sustainable practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Smart Energy Management</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Cost Reduction Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Real-time Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Energy efficient building and sustainability"
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
                  Why Choose Terrafo International Facility Management?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Optimize Your Facilities?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Let us manage your facilities while you focus on your core business. 
                  Experience the difference of professional facility management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Facility Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Service Proposal</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Performance Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Schedule Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  )
}
