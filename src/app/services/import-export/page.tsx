// src/app/services/import-export/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Globe, Truck, FileText, Shield, Clock,
  Users, Target, Settings, ChevronRight, Star, Award,
  Calculator, Phone, Ship, Plane, Package, MapPin,
  BarChart, Briefcase, Container, Navigation, Anchor, DollarSign
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Import & Export Services - Terrafo International | Global Trade Solutions',
  description: 'Professional import and export services with comprehensive documentation, customs clearance, and international shipping support for seamless global trade.',
}

export default function ImportExportPage() {
  const coreServices = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Customs Clearance',
      description: 'Expert customs clearance services ensuring compliance with international regulations',
      features: ['Import Clearance', 'Export Clearance', 'Duty Calculation', 'Regulatory Compliance']
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Documentation Support',
      description: 'Complete documentation services for smooth international trade operations',
      features: ['Commercial Invoices', 'Bill of Lading', 'Certificates of Origin', 'Insurance Documents']
    },
    {
      icon: <Ship className="h-6 w-6" />,
      title: 'International Shipping',
      description: 'Comprehensive shipping solutions across sea, air, and land transportation',
      features: ['Ocean Freight', 'Air Freight', 'Land Transport', 'Door-to-Door Service']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Trade Compliance',
      description: 'Ensure full compliance with international trade laws and regulations',
      features: ['Trade Agreements', 'Sanctions Screening', 'License Management', 'Regulatory Updates']
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Freight Forwarding',
      description: 'End-to-end freight forwarding services with global network coverage',
      features: ['Cargo Consolidation', 'Route Optimization', 'Tracking Services', 'Warehousing']
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: 'Trade Finance',
      description: 'Financial solutions to support your international trade operations',
      features: ['Letters of Credit', 'Trade Insurance', 'Payment Solutions', 'Risk Management']
    }
  ]

  const tradeSpecializations = [
    {
      title: 'Manufacturing Goods',
      description: 'Specialized handling of manufactured products with complex supply chains',
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      specialties: ['Machinery', 'Electronics', 'Automotive Parts', 'Industrial Equipment']
    },
    {
      title: 'Agricultural Products',
      description: 'Expert handling of agricultural commodities with quality preservation',
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      specialties: ['Food Products', 'Raw Materials', 'Processed Goods', 'Perishables']
    },
    {
      title: 'Consumer Goods',
      description: 'Efficient import-export solutions for consumer products and retail items',
      icon: <Package className="h-8 w-8 text-primary-600" />,
      specialties: ['Textiles', 'Home Goods', 'Personal Care', 'Fashion Items']
    },
    {
      title: 'Technology Products',
      description: 'Specialized handling of high-value technology and electronics',
      icon: <Target className="h-8 w-8 text-primary-600" />,
      specialties: ['IT Equipment', 'Software', 'Telecommunications', 'Medical Devices']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Trade Assessment',
      description: 'Comprehensive evaluation of your trade requirements and regulatory needs',
      duration: '1-2 days',
      deliverables: ['Trade Analysis', 'Route Planning', 'Cost Estimation']
    },
    {
      step: '02',
      title: 'Documentation Preparation',
      description: 'Complete preparation of all required trade documents and certifications',
      duration: '2-3 days',
      deliverables: ['Commercial Documents', 'Certificates', 'Insurance Papers']
    },
    {
      step: '03',
      title: 'Customs Processing',
      description: 'Expert handling of customs clearance and regulatory compliance',
      duration: '1-3 days',
      deliverables: ['Customs Declaration', 'Duty Payment', 'Clearance Certificate']
    },
    {
      step: '04',
      title: 'Transportation Management',
      description: 'Coordination of international shipping and logistics operations',
      duration: '5-30 days',
      deliverables: ['Shipping Schedule', 'Tracking Updates', 'Delivery Confirmation']
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'Last-mile delivery and completion of trade transaction',
      duration: '1-2 days',
      deliverables: ['Delivery Receipt', 'Final Documentation', 'Transaction Closure']
    }
  ]

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Global Network',
      description: 'Extensive international partnerships spanning 150+ countries',
      metrics: '150+ Countries'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Fast Processing',
      description: 'Expedited customs clearance and documentation processing',
      metrics: '24-48 Hours'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Secure Handling',
      description: 'Comprehensive insurance and secure handling of all shipments',
      metrics: '100% Insurance'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary-600" />,
      title: 'Cost Efficiency',
      description: 'Optimized routing and consolidation for maximum cost savings',
      metrics: '30% Cost Savings'
    }
  ]

  const serviceRegions = [
    'North America', 'South America', 'Europe', 'Asia Pacific',
    'Middle East', 'Africa', 'Oceania', 'Central Asia',
    'Caribbean', 'Scandinavia', 'Eastern Europe', 'Southeast Asia'
  ]

  const tradeTechnologies = [
    { name: 'EDI Systems', category: 'Communication' },
    { name: 'Track & Trace', category: 'Monitoring' },
    { name: 'Customs Software', category: 'Compliance' },
    { name: 'TMS Platforms', category: 'Management' },
    { name: 'Digital Documents', category: 'Documentation' },
    { name: 'Mobile Apps', category: 'Accessibility' },
    { name: 'Analytics Tools', category: 'Intelligence' },
    { name: 'Blockchain', category: 'Security' }
  ]

  const serviceAreas = [
    'Import Licensing', 'Export Licensing', 'Duty Optimization', 'Free Trade Zones',
    'Temporary Imports', 'Bonded Warehousing', 'Transit Services', 'Cargo Insurance',
    'Quality Inspection', 'Packaging Services', 'Supply Chain Management', 'Trade Consulting'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Global shipping and logistics"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified Trade Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Import & Export
              <span className="block text-primary-300">Global Trade Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive global trade solutions with expert customs clearance, international 
              shipping, and complete documentation support for seamless import-export operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Get Trade Quote
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

      {/* Trade Image Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Container shipping port"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Ocean Freight</h3>
                  <p className="text-sm">Global container shipping</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Air cargo airplane"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Air Freight</h3>
                  <p className="text-sm">Express air cargo</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Customs and documentation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Customs Clearance</h3>
                  <p className="text-sm">Expert documentation</p>
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
                Comprehensive Import & Export Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From customs clearance to final delivery, we provide complete trade solutions 
                tailored to your specific import-export requirements and regulatory compliance needs.
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

      {/* Trade Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Trade Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers diverse product categories with industry-specific 
                knowledge and regulatory compliance requirements.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {tradeSpecializations.map((specialization, index) => (
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

      {/* Global Network Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Global Trade Network
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Connected across continents with strategic partnerships and local expertise
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Global trade network and shipping routes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">150+ Countries Connected</h3>
                  <p className="text-lg">Seamless global trade operations</p>
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
                Our Trade Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A streamlined approach to international trade ensuring compliance, 
                efficiency, and timely delivery of your shipments.
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
                Trade Service Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all trade-related services with specialized 
                expertise in complex international regulations.
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

      {/* Global Regions */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Global Coverage Regions
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Extensive regional expertise and partnerships across all major 
                trade corridors and emerging markets worldwide.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceRegions.map((region, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border border-primary-200">
                  <div className="text-sm font-semibold text-secondary-900">{region}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Trade Technologies & Systems
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Advanced technology platforms and digital solutions for efficient 
                trade management and real-time shipment visibility.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tradeTechnologies.map((tech, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-primary-50 rounded-xl p-6 text-center hover:bg-primary-100 transition-all border border-primary-200">
                  <div className="text-lg font-semibold text-secondary-900 mb-2">{tech.name}</div>
                  <div className="text-sm text-primary-600">{tech.category}</div>
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
                  Why Choose Terrafo International?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Expand Globally?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Let our trade experts handle your import-export needs with precision, 
                  reliability, and comprehensive global coverage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free Trade Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Competitive Quote</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Guaranteed Service</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Get Trade Quote
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
