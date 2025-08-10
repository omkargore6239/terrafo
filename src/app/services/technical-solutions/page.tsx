// src/app/services/technical-solutions/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Settings, Monitor, Wrench, Shield, Zap,
  Users, Clock, Target, ChevronRight, Star, Award, TrendingUp,
  Calculator, FileText, Phone, Cpu, Code, Database,
  BarChart, Briefcase, Layers, Network, Server, Workflow
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Technical Solutions - Terrafo International | Advanced Technology & Integration Services',
  description: 'Comprehensive technical consulting and implementation services including system integration, process automation, equipment installation, and 24/7 technical support.',
}

export default function TechnicalSolutionsPage() {
  const coreServices = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'System Integration',
      description: 'Seamless integration of complex systems and technologies for unified operations',
      features: ['Legacy Integration', 'API Development', 'Data Migration', 'System Compatibility']
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes and workflows',
      features: ['Workflow Automation', 'Robotic Process Automation', 'Business Logic', 'Task Scheduling']
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Technical Consulting',
      description: 'Expert advisory services for technology strategy and implementation planning',
      features: ['Technology Assessment', 'Strategic Planning', 'Architecture Design', 'Best Practices']
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Equipment Installation',
      description: 'Professional installation and commissioning of technical equipment and systems',
      features: ['Hardware Setup', 'Configuration', 'Testing & Validation', 'Documentation']
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support and monitoring for continuous operations',
      features: ['Remote Monitoring', 'Help Desk Support', 'Emergency Response', 'Performance Optimization']
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Management',
      description: 'Comprehensive data solutions including storage, analytics, and security',
      features: ['Database Design', 'Data Analytics', 'Backup Solutions', 'Security Implementation']
    }
  ]

  const technicalSpecializations = [
    {
      title: 'Enterprise Systems',
      description: 'Large-scale enterprise solutions with complex integration requirements',
      icon: <Server className="h-8 w-8 text-primary-600" />,
      specialties: ['ERP Integration', 'CRM Systems', 'Enterprise Architecture', 'Scalability Solutions']
    },
    {
      title: 'Industrial Automation',
      description: 'Manufacturing and industrial process automation with IoT integration',
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      specialties: ['PLC Programming', 'SCADA Systems', 'IoT Integration', 'Process Control']
    },
    {
      title: 'Network Infrastructure',
      description: 'Advanced networking solutions for reliable and secure connectivity',
      icon: <Network className="h-8 w-8 text-primary-600" />,
      specialties: ['Network Design', 'Security Implementation', 'Wireless Solutions', 'Cloud Integration']
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to specific business requirements',
      icon: <Code className="h-8 w-8 text-primary-600" />,
      specialties: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Integration']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Technical Assessment',
      description: 'Comprehensive evaluation of current technical infrastructure and requirements',
      duration: '1-2 weeks',
      deliverables: ['System Analysis', 'Technical Audit', 'Requirement Specification']
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design of technical architecture and implementation strategy',
      duration: '2-3 weeks',
      deliverables: ['Architecture Design', 'Technical Specifications', 'Implementation Plan']
    },
    {
      step: '03',
      title: 'Development & Configuration',
      description: 'Implementation of technical solutions with custom development and configuration',
      duration: '4-12 weeks',
      deliverables: ['System Development', 'Configuration Setup', 'Integration Testing']
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing and validation to ensure system reliability and performance',
      duration: '1-2 weeks',
      deliverables: ['Test Results', 'Performance Reports', 'Security Validation']
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Production deployment with ongoing technical support and maintenance',
      duration: 'Ongoing',
      deliverables: ['Production Deployment', 'Support Documentation', 'Monitoring Setup']
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Performance Boost',
      description: 'Optimize system performance and operational efficiency',
      metrics: '40% Improvement'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'System Reliability',
      description: 'Enhanced system stability and reduced downtime',
      metrics: '99.9% Uptime'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Integration Success',
      description: 'Seamless system integration with minimal disruption',
      metrics: '98% Success Rate'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Rapid Support',
      description: 'Fast response times for technical issues and support',
      metrics: '< 30 Min Response'
    }
  ]

  const serviceAreas = [
    'System Architecture', 'Database Management', 'Network Solutions', 'Security Implementation',
    'Cloud Services', 'Mobile Applications', 'Web Development', 'API Integration',
    'IoT Solutions', 'Automation Systems', 'Performance Tuning', 'Disaster Recovery'
  ]

  const technologies = [
    { name: 'Cloud Platforms', category: 'Infrastructure' },
    { name: 'Database Systems', category: 'Data' },
    { name: 'Programming Languages', category: 'Development' },
    { name: 'Integration Tools', category: 'Connectivity' },
    { name: 'Monitoring Systems', category: 'Operations' },
    { name: 'Security Tools', category: 'Protection' },
    { name: 'Automation Platforms', category: 'Efficiency' },
    { name: 'Analytics Tools', category: 'Intelligence' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Advanced technical solutions and system integration"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Technical Experts</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Technical Solutions &
              <span className="block text-primary-300">System Integration</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Advanced technical consulting and implementation services including system integration, 
              process automation, and comprehensive technology solutions for modern business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Technical Consultation
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

      {/* Technical Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="System integration and technical architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">System Integration</h3>
                  <p className="text-sm">Complex system connectivity</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Process automation and workflow optimization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Process Automation</h3>
                  <p className="text-sm">Intelligent workflow systems</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technical support and system monitoring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">24/7 Support</h3>
                  <p className="text-sm">Continuous monitoring</p>
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
                Comprehensive Technical Solutions
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From system integration to process automation, we provide complete technical 
                solutions tailored to your business requirements and technology objectives.
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

      {/* Technical Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Technical Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers diverse technology domains with deep 
                technical knowledge and industry-specific implementation experience.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecializations.map((specialization, index) => (
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

      {/* Digital Transformation Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Digital Transformation & Innovation
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Leading digital transformation initiatives with cutting-edge technology solutions
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Digital transformation and advanced technology solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Driving Digital Innovation</h3>
                  <p className="text-lg">Transforming businesses through advanced technology</p>
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
                Our Technical Implementation Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to technical solution delivery ensuring quality, 
                reliability, and seamless integration with your existing systems.
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
                Technical Service Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all technical domains with specialized 
                expertise in modern technology solutions and system integration.
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

      {/* Technologies & Platforms */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Technologies & Platforms
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and industry-leading platforms 
                for robust, scalable, and future-ready technical solutions.
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

      {/* Technical Architecture Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Advanced Technical Architecture
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Robust technical architecture design and implementation ensuring 
                  scalability, security, and optimal performance for your systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Layers className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Scalable Architecture Design</span>
                  </div>
                  <div className="flex items-center">
                    <Network className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Secure Network Integration</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Performance Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technical architecture and system design"
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
                  Why Choose Terrafo International Technical Solutions?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Technology?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Let our technical experts optimize your systems and processes with 
                  advanced technology solutions tailored to your business needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Technical Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Solution Design</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Implementation Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Get Technical Consultation
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
