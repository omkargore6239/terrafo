// src/app/services/waste-management/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Recycle, Leaf, Truck, Shield, BarChart3,
  Users, Clock, Target, Settings, ChevronRight, Star, Award,
  Calculator, FileText, Phone, Droplets, Factory, AlertTriangle,
  TrendingUp, Monitor, Cpu, Layers, Container, Zap
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Waste & Liquid Management - Terrafo International | Sustainable Environmental Solutions',
  description: 'Comprehensive waste and liquid management services including eco-friendly disposal, treatment solutions, environmental compliance, and sustainable recycling programs.',
}

export default function WasteManagementPage() {
  const coreServices = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Waste Collection & Disposal',
      description: 'Comprehensive waste collection services with environmentally responsible disposal methods',
      features: ['Scheduled Collection', 'Sorting & Segregation', 'Safe Disposal', 'Route Optimization']
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Liquid Treatment Solutions',
      description: 'Advanced liquid waste treatment and water management systems for various industries',
      features: ['Wastewater Treatment', 'Chemical Treatment', 'Oil-Water Separation', 'Effluent Management']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Environmental Compliance',
      description: 'Complete compliance management ensuring adherence to environmental regulations',
      features: ['Regulatory Compliance', 'Environmental Audits', 'Permit Management', 'Documentation']
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'Recycling Solutions',
      description: 'Innovative recycling programs maximizing resource recovery and waste reduction',
      features: ['Material Recovery', 'Recycling Programs', 'Waste-to-Energy', 'Circular Economy']
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: 'Hazardous Waste Handling',
      description: 'Specialized handling and disposal of hazardous materials with safety protocols',
      features: ['Chemical Waste', 'Medical Waste', 'Electronic Waste', 'Industrial Hazards']
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Environmental Monitoring',
      description: 'Continuous monitoring systems tracking environmental impact and compliance',
      features: ['Real-time Monitoring', 'Data Analytics', 'Reporting Systems', 'Compliance Tracking']
    }
  ]

  const wasteSpecializations = [
    {
      title: 'Industrial Waste Management',
      description: 'Specialized solutions for manufacturing and industrial facility waste streams',
      icon: <Factory className="h-8 w-8 text-primary-600" />,
      specialties: ['Manufacturing Waste', 'Chemical Processing', 'Industrial Sludge', 'Process Optimization']
    },
    {
      title: 'Commercial Waste Services',
      description: 'Comprehensive waste management for offices, retail, and commercial establishments',
      icon: <Container className="h-8 w-8 text-primary-600" />,
      specialties: ['Office Waste', 'Retail Waste', 'Food Service Waste', 'Commercial Recycling']
    },
    {
      title: 'Liquid Waste Treatment',
      description: 'Advanced treatment systems for various liquid waste streams and contaminated water',
      icon: <Droplets className="h-8 w-8 text-primary-600" />,
      specialties: ['Wastewater Treatment', 'Industrial Effluents', 'Contaminated Groundwater', 'Leachate Treatment']
    },
    {
      title: 'Sustainable Solutions',
      description: 'Eco-friendly waste management promoting circular economy and sustainability',
      icon: <Leaf className="h-8 w-8 text-primary-600" />,
      specialties: ['Zero Waste Programs', 'Green Technologies', 'Resource Recovery', 'Carbon Footprint Reduction']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Environmental Assessment',
      description: 'Comprehensive evaluation of waste streams and environmental impact analysis',
      duration: '1-2 weeks',
      deliverables: ['Waste Audit Report', 'Environmental Impact Assessment', 'Compliance Review']
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom waste management plan development based on specific requirements',
      duration: '2-3 weeks',
      deliverables: ['Management Plan', 'Treatment Design', 'Implementation Strategy']
    },
    {
      step: '03',
      title: 'System Implementation',
      description: 'Installation and deployment of waste management systems and processes',
      duration: '3-6 weeks',
      deliverables: ['System Installation', 'Process Setup', 'Staff Training']
    },
    {
      step: '04',
      title: 'Operations Management',
      description: 'Ongoing waste management operations with monitoring and optimization',
      duration: 'Ongoing',
      deliverables: ['Daily Operations', 'Performance Monitoring', 'Compliance Reports']
    },
    {
      step: '05',
      title: 'Continuous Improvement',
      description: 'Regular optimization and enhancement of waste management processes',
      duration: 'Quarterly',
      deliverables: ['Performance Reviews', 'Process Optimization', 'Sustainability Reports']
    }
  ]

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-primary-600" />,
      title: 'Environmental Impact',
      description: 'Reduce environmental footprint through sustainable waste management',
      metrics: '60% Waste Reduction'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Compliance Assurance',
      description: 'Full regulatory compliance with environmental laws and standards',
      metrics: '100% Compliance'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Optimize waste management costs through efficient processes',
      metrics: '30% Cost Savings'
    },
    {
      icon: <Recycle className="h-8 w-8 text-primary-600" />,
      title: 'Resource Recovery',
      description: 'Maximize resource recovery and recycling opportunities',
      metrics: '80% Recovery Rate'
    }
  ]

  const serviceAreas = [
    'Solid Waste Management', 'Liquid Waste Treatment', 'Hazardous Material Disposal', 'Medical Waste Handling',
    'Electronic Waste Recycling', 'Construction Debris', 'Organic Waste Composting', 'Chemical Waste Treatment',
    'Oil & Grease Management', 'Contaminated Soil Treatment', 'Industrial Sludge', 'Environmental Remediation'
  ]

  const technologies = [
    { name: 'Treatment Systems', category: 'Processing' },
    { name: 'Monitoring Sensors', category: 'Tracking' },
    { name: 'Recycling Equipment', category: 'Recovery' },
    { name: 'Filtration Systems', category: 'Treatment' },
    { name: 'Waste Analytics', category: 'Intelligence' },
    { name: 'Mobile Apps', category: 'Management' },
    { name: 'IoT Solutions', category: 'Monitoring' },
    { name: 'Compliance Software', category: 'Reporting' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Environmental waste management and sustainability"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Environmental Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Waste & Liquid
              <span className="block text-primary-300">Management Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive waste and liquid management solutions with eco-friendly disposal, 
              treatment systems, and environmental compliance for sustainable operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Environmental Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-primary-300 text-white font-semibold rounded-lg hover:bg-primary-700/30 transition-all"
              >
                Explore Solutions
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

      {/* Environmental Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Waste collection and disposal services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Waste Collection</h3>
                  <p className="text-sm">Efficient collection services</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Liquid treatment and processing systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Liquid Treatment</h3>
                  <p className="text-sm">Advanced treatment systems</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Recycling and sustainability programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Recycling Solutions</h3>
                  <p className="text-sm">Sustainable resource recovery</p>
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
                Comprehensive Waste & Liquid Management Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From waste collection to liquid treatment, we provide complete environmental 
                solutions ensuring compliance, sustainability, and operational efficiency.
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

      {/* Waste Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Waste Management Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers diverse waste streams with industry-specific 
                solutions and advanced treatment technologies for optimal results.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {wasteSpecializations.map((specialization, index) => (
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

      {/* Sustainability Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Sustainable Environmental Solutions
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Leading the way in sustainable waste management and environmental protection
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1569163139847-de2b87eb2049?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Sustainable environmental solutions and green technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Building a Sustainable Future</h3>
                  <p className="text-lg">Innovative solutions for environmental protection</p>
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
                Our Waste Management Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to waste management ensuring environmental compliance, 
                sustainability, and operational efficiency throughout the process.
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
                Waste Management Service Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all waste and liquid management services with 
                specialized expertise in environmental compliance and sustainability.
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
                Advanced Environmental Technologies
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage cutting-edge environmental technologies and smart monitoring 
                systems for efficient waste management and treatment processes.
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

      {/* Treatment Systems Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Advanced Treatment Systems
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  State-of-the-art treatment systems and monitoring technologies ensuring 
                  optimal waste processing and environmental protection standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Droplets className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Advanced Filtration Systems</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Real-time Quality Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Performance Analytics</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Advanced waste treatment systems and technology"
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
                  Why Choose Terrafo International Environmental Services?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Go Green?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Partner with us for comprehensive waste and liquid management solutions 
                  that protect the environment while optimizing your operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Environmental Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Solution Design</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Compliance Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Get Environmental Assessment
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
