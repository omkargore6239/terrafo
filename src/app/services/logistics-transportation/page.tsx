// src/app/services/logistics-transportation/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Truck, Package, MapPin, Clock, BarChart,
  Users, Target, Settings, ChevronRight, Star, Award, Shield,
  Calculator, FileText, Phone, Navigation, Warehouse, Route,
  TrendingUp, Monitor, Cpu, Layers, Container, Anchor
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
      icon: <Truck className="h-6 w-6" />,
      title: 'Fleet Management',
      description: 'Modern fleet solutions with GPS tracking, route optimization, and vehicle maintenance',
      features: ['GPS Tracking', 'Route Optimization', 'Vehicle Maintenance', 'Driver Management']
    },
    {
      icon: <Warehouse className="h-6 w-6" />,
      title: 'Warehousing Solutions',
      description: 'State-of-the-art warehousing facilities with inventory management and security',
      features: ['Secure Storage', 'Inventory Control', 'Climate Control', '24/7 Security']
    },
    {
      icon: <Route className="h-6 w-6" />,
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain management with cost reduction and efficiency improvements',
      features: ['Process Optimization', 'Cost Reduction', 'Vendor Management', 'Quality Control']
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Last-Mile Delivery',
      description: 'Efficient last-mile delivery solutions with real-time tracking and customer updates',
      features: ['Express Delivery', 'Real-time Tracking', 'Customer Updates', 'Flexible Scheduling']
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Inventory Management',
      description: 'Advanced inventory control systems with automated tracking and reporting',
      features: ['Automated Tracking', 'Stock Management', 'Demand Forecasting', 'Reporting Tools']
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: 'Freight Forwarding',
      description: 'International freight forwarding with customs clearance and documentation',
      features: ['International Shipping', 'Customs Clearance', 'Documentation', 'Insurance Coverage']
    }
  ]

  const logisticsSpecializations = [
    {
      title: 'Road Transportation',
      description: 'Comprehensive road transport solutions for domestic and regional deliveries',
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      specialties: ['Long-haul Transport', 'Local Delivery', 'Express Services', 'Heavy Cargo']
    },
    {
      title: 'Air Cargo Services',
      description: 'Fast and reliable air freight services for time-sensitive shipments',
      icon: <Navigation className="h-8 w-8 text-primary-600" />,
      specialties: ['Express Air Freight', 'Charter Services', 'Perishable Goods', 'Dangerous Goods']
    },
    {
      title: 'Maritime Logistics',
      description: 'Ocean freight and port logistics for international trade operations',
      icon: <Anchor className="h-8 w-8 text-primary-600" />,
      specialties: ['Container Shipping', 'Port Operations', 'Bulk Cargo', 'Project Cargo']
    },
    {
      title: 'Warehousing & Distribution',
      description: 'Modern warehousing facilities with automated systems and distribution networks',
      icon: <Warehouse className="h-8 w-8 text-primary-600" />,
      specialties: ['Automated Systems', 'Cross-docking', 'Cold Storage', 'E-commerce Fulfillment']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Logistics Assessment',
      description: 'Comprehensive evaluation of current logistics operations and requirements',
      duration: '1-2 weeks',
      deliverables: ['Operations Analysis', 'Cost Assessment', 'Improvement Plan']
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom logistics solution design based on specific business needs',
      duration: '2-3 weeks',
      deliverables: ['Logistics Strategy', 'System Architecture', 'Implementation Plan']
    },
    {
      step: '03',
      title: 'System Integration',
      description: 'Integration of logistics systems with existing business operations',
      duration: '3-6 weeks',
      deliverables: ['System Setup', 'Integration Testing', 'Staff Training']
    },
    {
      step: '04',
      title: 'Operations Launch',
      description: 'Launch of optimized logistics operations with monitoring and support',
      duration: '1-2 weeks',
      deliverables: ['Go-live Support', 'Performance Monitoring', 'Issue Resolution']
    },
    {
      step: '05',
      title: 'Continuous Optimization',
      description: 'Ongoing optimization and performance improvement of logistics operations',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Optimization Recommendations', 'System Updates']
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Reduce logistics costs through optimized routing and operations',
      metrics: '30% Cost Reduction'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Fast Delivery',
      description: 'Express delivery services with guaranteed time frames',
      metrics: '99% On-Time'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Secure Operations',
      description: 'Advanced security measures for cargo protection and safety',
      metrics: '100% Security'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Tracking Accuracy',
      description: 'Real-time tracking with precise location and delivery updates',
      metrics: '99.9% Accuracy'
    }
  ]

  const serviceAreas = [
    'Domestic Transportation', 'International Shipping', 'Express Delivery', 'Heavy Cargo Transport',
    'Perishable Goods', 'Dangerous Goods', 'Project Logistics', 'E-commerce Fulfillment',
    'Cross-border Trade', 'Customs Clearance', 'Insurance Services', 'Supply Chain Consulting'
  ]

  const technologies = [
    { name: 'Fleet Management', category: 'Operations' },
    { name: 'GPS Tracking', category: 'Monitoring' },
    { name: 'Route Optimization', category: 'Efficiency' },
    { name: 'WMS Systems', category: 'Warehousing' },
    { name: 'IoT Sensors', category: 'Monitoring' },
    { name: 'Mobile Apps', category: 'Accessibility' },
    { name: 'Analytics Platform', category: 'Intelligence' },
    { name: 'Cloud Integration', category: 'Connectivity' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Logistics and transportation operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Logistics Provider</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Logistics & Transportation
              <span className="block text-primary-300">Supply Chain Solutions</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive logistics and transportation management solutions for efficient 
              supply chains, fleet management, and seamless delivery operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Logistics Quote
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

      {/* Logistics Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Fleet management and transportation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Fleet Management</h3>
                  <p className="text-sm">GPS tracking & optimization</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Warehousing and inventory management"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Warehousing Solutions</h3>
                  <p className="text-sm">Secure storage facilities</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Air cargo and express delivery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Express Delivery</h3>
                  <p className="text-sm">Fast & reliable shipping</p>
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
                Comprehensive Logistics & Transportation Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From fleet management to last-mile delivery, we provide complete logistics 
                solutions tailored to your supply chain requirements and business objectives.
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

      {/* Logistics Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Logistics Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers all modes of transportation and logistics 
                with industry-specific knowledge and advanced technology solutions.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {logisticsSpecializations.map((specialization, index) => (
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

      {/* Supply Chain Optimization Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Supply Chain Excellence
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Optimizing supply chains through advanced technology and strategic logistics management
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Supply chain optimization and logistics network"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">End-to-End Supply Chain Solutions</h3>
                  <p className="text-lg">Streamlined operations for maximum efficiency</p>
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
                Our Logistics Implementation Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to logistics optimization ensuring seamless integration, 
                cost efficiency, and improved operational performance.
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
                Logistics Service Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all logistics and transportation services with 
                specialized expertise in complex supply chain management.
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
                Advanced Logistics Technologies
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage cutting-edge technology and smart logistics systems for 
                efficient operations and real-time visibility.
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

      {/* Real-time Tracking Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Real-Time Tracking & Analytics
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Advanced tracking systems providing real-time visibility of shipments, 
                  fleet performance, and comprehensive logistics analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Live GPS Tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Monitor className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Performance Dashboard</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Analytics & Reporting</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Logistics tracking dashboard and analytics"
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
                  Why Choose Terrafo International Logistics?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Let us streamline your logistics operations with our comprehensive 
                  transportation and supply chain management solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Logistics Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Quote & Proposal</span>
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
                  Get Logistics Quote
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
