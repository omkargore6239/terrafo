// src/app/services/engineering-solutions/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Cpu, Compass, Cog, Award, 
  Lightbulb, Users, Clock, Shield, Target, Zap, 
  Settings, ChevronRight, Star, Building, Wrench,
  Calculator, FileText, Phone, Monitor, Layers, Code
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
      icon: <Compass className="h-6 w-6" />,
      title: 'Engineering Design',
      description: 'Complete CAD/CAM design solutions, 3D modeling, prototyping, and technical drawings',
      features: ['CAD/CAM Design', '3D Modeling', 'Prototyping', 'Technical Documentation']
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Technical Consultation',
      description: 'Expert advisory services for complex engineering challenges and strategic planning',
      features: ['Feasibility Studies', 'Technical Audits', 'Risk Assessment', 'Strategic Planning']
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Project Implementation',
      description: 'End-to-end project execution with dedicated project management and quality assurance',
      features: ['Project Management', 'Resource Planning', 'Timeline Management', 'Budget Control']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Quality Control',
      description: 'Rigorous testing, validation, and compliance ensuring highest engineering standards',
      features: ['Testing & Validation', 'Standards Compliance', 'Quality Assurance', 'Performance Analysis']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Ongoing Support',
      description: '24/7 technical support, maintenance, and continuous improvement services',
      features: ['24/7 Support', 'Preventive Maintenance', 'System Updates', 'Performance Optimization']
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'System Integration',
      description: 'Seamless integration of complex systems with existing infrastructure',
      features: ['Legacy Integration', 'API Development', 'Data Migration', 'Process Automation']
    }
  ]

  const engineeringDisciplines = [
    {
      title: 'Mechanical Engineering',
      description: 'Design and development of mechanical systems, equipment, and machinery',
      icon: <Cog className="h-8 w-8 text-primary-600" />,
      specialties: ['Machine Design', 'HVAC Systems', 'Manufacturing Processes', 'Materials Engineering']
    },
    {
      title: 'Electrical Engineering',
      description: 'Power systems, control systems, and electrical infrastructure solutions',
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      specialties: ['Power Systems', 'Control Systems', 'Automation', 'Electrical Design']
    },
    {
      title: 'Civil Engineering',
      description: 'Structural design, construction planning, and infrastructure development',
      icon: <Building className="h-8 w-8 text-primary-600" />,
      specialties: ['Structural Design', 'Construction Management', 'Infrastructure', 'Site Planning']
    },
    {
      title: 'Software Engineering',
      description: 'Custom software solutions, system integration, and digital transformation',
      icon: <Cpu className="h-8 w-8 text-primary-600" />,
      specialties: ['Custom Software', 'System Integration', 'Database Design', 'Mobile Apps']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Comprehensive requirement analysis and feasibility assessment',
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Requirements', 'Feasibility Report']
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Detailed engineering design and project planning phase',
      duration: '2-4 weeks',
      deliverables: ['Technical Drawings', 'Project Plan', 'Resource Allocation']
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Execution phase with continuous monitoring and quality control',
      duration: '4-12 weeks',
      deliverables: ['Progress Reports', 'Quality Checks', 'Milestone Reviews']
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing and performance validation',
      duration: '1-2 weeks',
      deliverables: ['Test Results', 'Performance Reports', 'Compliance Certificates']
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Final deployment with ongoing support and maintenance',
      duration: 'Ongoing',
      deliverables: ['Deployment Guide', 'Support Documentation', 'Maintenance Schedule']
    }
  ]

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Industry Expertise',
      description: 'Over 15 years of engineering excellence across multiple industries',
      metrics: '500+ Projects Completed'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
      title: 'Innovation-Driven',
      description: 'Cutting-edge solutions using latest technologies and methodologies',
      metrics: '95% Client Satisfaction'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Expert Team',
      description: 'Certified engineers and technical specialists',
      metrics: '50+ Technical Experts'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Timely Delivery',
      description: 'Proven track record of on-time project completion',
      metrics: '98% On-Time Delivery'
    }
  ]

  const industries = [
    'Manufacturing', 'Healthcare', 'Automotive', 'Aerospace', 
    'Energy & Utilities', 'Construction', 'Technology', 'Defense'
  ]

  const technologies = [
    { name: 'AutoCAD', category: 'Design' },
    { name: 'SolidWorks', category: 'Design' },
    { name: 'MATLAB', category: 'Analysis' },
    { name: 'ANSYS', category: 'Simulation' },
    { name: 'Python', category: 'Programming' },
    { name: 'PLC Systems', category: 'Automation' },
    { name: 'IoT Solutions', category: 'Connectivity' },
    { name: 'Cloud Computing', category: 'Infrastructure' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Engineering design and technical solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">ISO 9001:2015 Certified</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Engineering Solutions
              <span className="block text-primary-300">& Expert Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Transform your engineering challenges into innovative solutions with our comprehensive 
              consulting, design, and implementation services powered by cutting-edge technology.
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

      {/* Engineering Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="CAD design and engineering blueprints"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Engineering Design</h3>
                  <p className="text-sm">CAD/CAM & 3D modeling</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Technical consultation and project planning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Technical Consultation</h3>
                  <p className="text-sm">Expert advisory services</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Quality control and testing procedures"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Quality Control</h3>
                  <p className="text-sm">Testing & validation</p>
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
                Comprehensive Engineering Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From initial concept to final implementation, we provide end-to-end engineering solutions 
                tailored to your specific requirements and industry standards.
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

      {/* Engineering Disciplines */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Engineering Disciplines
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our multidisciplinary team covers all major engineering fields with specialized expertise 
                and industry-specific knowledge.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {engineeringDisciplines.map((discipline, index) => (
              <FadeInView key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-lg">
                  <div className="flex items-start mb-6">
                    <div className="mr-6">{discipline.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-3">{discipline.title}</h3>
                      <p className="text-secondary-600 mb-4">{discipline.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {discipline.specialties.map((specialty, idx) => (
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

      {/* Innovation & Technology Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Innovation & Advanced Technology
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Cutting-edge engineering solutions powered by the latest technologies and methodologies
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Advanced engineering technology and innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Engineering Excellence Through Innovation</h3>
                  <p className="text-lg">Transforming ideas into reality with precision and expertise</p>
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
                Our Engineering Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach ensuring quality, efficiency, and successful project delivery 
                from concept to completion.
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

      {/* Technologies & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Technologies & Tools
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage industry-leading software, tools, and technologies to deliver 
                cutting-edge engineering solutions.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-all">
                  <div className="text-lg font-semibold text-secondary-900 mb-2">{tech.name}</div>
                  <div className="text-sm text-primary-600">{tech.category}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CAD & Design Image Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Advanced CAD & Design Solutions
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  State-of-the-art computer-aided design and engineering solutions for 
                  precision modeling, simulation, and technical documentation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Layers className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">3D Modeling & Simulation</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Automated Design Workflows</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Virtual Prototyping</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="CAD design software and engineering workstation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/10"></div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our engineering expertise spans across multiple industries, delivering 
                specialized solutions for diverse sectors.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-primary-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border border-primary-200">
                  <div className="text-secondary-800 font-semibold">{industry}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Why Choose Terrafo International Engineering Services?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Let's discuss your engineering challenges and create innovative solutions 
                  that drive your business forward.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Detailed Project Estimation</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Satisfaction Guaranteed</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Get Free Consultation
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
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Engineering innovation and success"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <h2 className="text-4xl font-bold text-white mb-6">
              Engineer Your Success Today
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Transform your engineering challenges into competitive advantages with our 
              comprehensive solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Start Engineering Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                View Our Portfolio
                <Wrench className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  )
}
