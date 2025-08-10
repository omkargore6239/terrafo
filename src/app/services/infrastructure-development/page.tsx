// src/app/services/infrastructure-development/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Building, Hammer, ClipboardCheck, Users, Calendar,
  Clock, Target, Settings, ChevronRight, Star, Award, Shield,
  Calculator, FileText, Phone, Layers, Truck, MapPin,
  BarChart, Briefcase, Zap, Cpu, Monitor, TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Infrastructure Development - Terrafo International | Modern Construction & Planning',
  description: 'Comprehensive infrastructure development services including planning, design, construction, and project management for sustainable growth and modern solutions.',
}

export default function InfrastructurePage() {
  const coreServices = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Project Planning',
      description: 'Comprehensive infrastructure planning with feasibility studies and strategic development',
      features: ['Site Analysis', 'Feasibility Studies', 'Master Planning', 'Regulatory Compliance']
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: 'Civil Construction',
      description: 'Expert construction services for roads, bridges, buildings, and utilities infrastructure',
      features: ['Road Construction', 'Bridge Building', 'Utility Installation', 'Foundation Work']
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and budget control',
      features: ['Timeline Management', 'Budget Control', 'Resource Planning', 'Risk Management']
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and compliance with international construction standards',
      features: ['Quality Control', 'Safety Compliance', 'Material Testing', 'Performance Monitoring']
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Logistics & Supply',
      description: 'Efficient logistics management and supply chain coordination for projects',
      features: ['Material Supply', 'Equipment Management', 'Transportation', 'Warehouse Solutions']
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Smart Infrastructure',
      description: 'Integration of IoT and smart technologies in modern infrastructure development',
      features: ['IoT Integration', 'Smart Systems', 'Automation', 'Digital Monitoring']
    }
  ]

  const infrastructureTypes = [
    {
      title: 'Transportation Infrastructure',
      description: 'Roads, highways, bridges, tunnels, and transportation networks',
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      specialties: ['Highway Construction', 'Bridge Engineering', 'Traffic Systems', 'Railway Infrastructure']
    },
    {
      title: 'Urban Development',
      description: 'Residential, commercial, and mixed-use urban development projects',
      icon: <Building className="h-8 w-8 text-primary-600" />,
      specialties: ['Urban Planning', 'Residential Projects', 'Commercial Development', 'Public Spaces']
    },
    {
      title: 'Utilities Infrastructure',
      description: 'Water, electricity, telecommunications, and waste management systems',
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      specialties: ['Power Systems', 'Water Infrastructure', 'Telecommunications', 'Waste Management']
    },
    {
      title: 'Industrial Infrastructure',
      description: 'Manufacturing facilities, warehouses, and industrial park development',
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      specialties: ['Industrial Parks', 'Manufacturing Plants', 'Logistics Centers', 'Port Development']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Site Assessment & Planning',
      description: 'Comprehensive site evaluation, feasibility studies, and master planning',
      duration: '2-4 weeks',
      deliverables: ['Site Survey Report', 'Feasibility Study', 'Master Plan']
    },
    {
      step: '02',
      title: 'Design & Engineering',
      description: 'Detailed architectural and engineering design with technical specifications',
      duration: '4-8 weeks',
      deliverables: ['Technical Drawings', 'Engineering Plans', 'Specifications']
    },
    {
      step: '03',
      title: 'Permits & Approvals',
      description: 'Regulatory approvals, permits, and compliance documentation',
      duration: '2-6 weeks',
      deliverables: ['Construction Permits', 'Environmental Clearance', 'Regulatory Approvals']
    },
    {
      step: '04',
      title: 'Construction & Implementation',
      description: 'Phased construction with quality control and progress monitoring',
      duration: '12-36 months',
      deliverables: ['Construction Progress', 'Quality Reports', 'Milestone Completions']
    },
    {
      step: '05',
      title: 'Handover & Maintenance',
      description: 'Project completion, handover, and ongoing maintenance services',
      duration: 'Ongoing',
      deliverables: ['Project Handover', 'Maintenance Plan', 'Warranty Services']
    }
  ]

  const benefits = [
    {
      icon: <Building className="h-8 w-8 text-primary-600" />,
      title: 'Modern Design',
      description: 'Contemporary infrastructure solutions built for future sustainability',
      metrics: '100+ Projects'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Timely Delivery',
      description: 'Proven track record of on-time project completion',
      metrics: '95% On-Time'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Quality Assurance',
      description: 'International standards compliance and quality control',
      metrics: '100% Compliance'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Optimized resource management and budget control',
      metrics: '20% Cost Savings'
    }
  ]

  const projectScales = [
    'Residential Complexes', 'Commercial Buildings', 'Industrial Parks', 'Transportation Networks',
    'Public Infrastructure', 'Smart Cities', 'Utility Systems', 'Mixed-Use Developments',
    'Educational Facilities', 'Healthcare Infrastructure', 'Sports Complexes', 'Cultural Centers'
  ]

  const technologies = [
    { name: 'BIM Software', category: 'Design' },
    { name: 'CAD Systems', category: 'Planning' },
    { name: 'Project Management', category: 'Control' },
    { name: 'Quality Monitoring', category: 'Assurance' },
    { name: 'IoT Sensors', category: 'Smart Tech' },
    { name: 'GIS Mapping', category: 'Surveying' },
    { name: 'Drone Technology', category: 'Monitoring' },
    { name: 'Cloud Platform', category: 'Integration' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Modern infrastructure development and construction"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Infrastructure Developers</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Infrastructure
              <span className="block text-primary-300">Development Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive infrastructure development services from planning to completion, 
              building modern, sustainable solutions for tomorrow's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Start Your Project
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

      {/* Infrastructure Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Road and highway construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Transportation</h3>
                  <p className="text-sm">Roads, bridges & highways</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Urban development and building construction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Urban Development</h3>
                  <p className="text-sm">Modern city planning</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Utilities and smart infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Smart Infrastructure</h3>
                  <p className="text-sm">IoT & automation systems</p>
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
                Comprehensive Infrastructure Development Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From initial planning to final delivery, we provide complete infrastructure 
                development solutions for sustainable growth and modern living.
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

      {/* Infrastructure Types */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Infrastructure Development Types
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our expertise spans across various infrastructure sectors with specialized 
                knowledge in modern construction and sustainable development.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructureTypes.map((type, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="mr-6">{type.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">{type.title}</h3>
                      <p className="text-secondary-600 mb-4">{type.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {type.specialties.map((specialty, idx) => (
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

      {/* Sustainable Development Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Sustainable Infrastructure Development
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Building for the future with eco-friendly and sustainable construction practices
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Sustainable infrastructure and green building development"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Building Tomorrow's Infrastructure Today</h3>
                  <p className="text-lg">Sustainable solutions for a better future</p>
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
                Our Development Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to infrastructure development ensuring quality, 
                sustainability, and timely project delivery.
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

      {/* Project Scales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Project Scales & Types
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We handle projects of all scales from small developments to 
                large-scale infrastructure initiatives.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectScales.map((scale, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-primary-50 rounded-xl p-4 text-center hover:bg-primary-100 transition-all">
                  <div className="text-sm font-semibold text-secondary-900">{scale}</div>
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
                We leverage cutting-edge technology and modern construction 
                methodologies for efficient project delivery.
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

      {/* Construction Management Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Advanced Project Management
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Professional project management with real-time monitoring, 
                  quality control, and efficient resource optimization.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Real-time Progress Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Budget Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Quality Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction project management and monitoring"
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
                  Why Choose Terrafo International Infrastructure Development?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Build Your Vision?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Transform your infrastructure dreams into reality with our 
                  comprehensive development services and expert project management.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Project Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Detailed Cost Estimation</span>
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
                  Start Your Project
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
