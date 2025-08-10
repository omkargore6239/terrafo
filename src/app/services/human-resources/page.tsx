// src/app/services/human-resources/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  CheckCircle, ArrowRight, Users, TrendingUp, Award, UserCheck, BookOpen,
  Clock, Target, Settings, ChevronRight, Star, Shield,
  Calculator, FileText, Phone, Search, Brain, Heart,
  BarChart, Briefcase, Calendar, MessageSquare, Zap, Building
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
      icon: <Search className="h-6 w-6" />,
      title: 'Talent Acquisition',
      description: 'End-to-end recruitment solutions to find and attract top talent for your organization',
      features: ['Executive Search', 'Mass Recruitment', 'Technical Hiring', 'Campus Recruitment']
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Performance Management',
      description: 'Comprehensive systems to monitor, evaluate, and enhance employee performance',
      features: ['KPI Development', 'Performance Reviews', 'Goal Setting', '360-Degree Feedback']
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'HR Compliance',
      description: 'Ensure full compliance with labor laws, regulations, and industry standards',
      features: ['Labor Law Compliance', 'Policy Development', 'Audit Services', 'Risk Assessment']
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Training & Development',
      description: 'Comprehensive learning programs to enhance employee skills and capabilities',
      features: ['Skill Development', 'Leadership Training', 'Technical Training', 'Soft Skills']
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: 'Payroll Management',
      description: 'Accurate and timely payroll processing with tax compliance and benefits administration',
      features: ['Salary Processing', 'Tax Management', 'Benefits Admin', 'Statutory Compliance']
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Employee Relations',
      description: 'Foster positive workplace relationships and resolve conflicts effectively',
      features: ['Conflict Resolution', 'Employee Engagement', 'Communication Programs', 'Culture Building']
    }
  ]

  const hrSpecializations = [
    {
      title: 'Strategic HR Planning',
      description: 'Align HR strategies with business objectives for sustainable growth',
      icon: <Target className="h-8 w-8 text-primary-600" />,
      specialties: ['Workforce Planning', 'Succession Planning', 'Organization Design', 'Change Management']
    },
    {
      title: 'Compensation & Benefits',
      description: 'Design competitive compensation packages to attract and retain talent',
      icon: <Award className="h-8 w-8 text-primary-600" />,
      specialties: ['Salary Benchmarking', 'Incentive Design', 'Benefits Planning', 'Total Rewards']
    },
    {
      title: 'HR Analytics & Metrics',
      description: 'Data-driven insights for informed HR decision making and optimization',
      icon: <BarChart className="h-8 w-8 text-primary-600" />,
      specialties: ['HR Dashboards', 'Turnover Analysis', 'Performance Metrics', 'Predictive Analytics']
    },
    {
      title: 'Digital HR Solutions',
      description: 'Modern HR technology implementation and digital transformation',
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      specialties: ['HRIS Implementation', 'HR Automation', 'Digital Onboarding', 'Self-Service Portals']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'HR Assessment',
      description: 'Comprehensive evaluation of current HR practices and organizational needs',
      duration: '1-2 weeks',
      deliverables: ['HR Audit Report', 'Gap Analysis', 'Compliance Review']
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creation of customized HR strategy aligned with business objectives',
      duration: '2-3 weeks',
      deliverables: ['HR Strategy Plan', 'Policy Framework', 'Implementation Roadmap']
    },
    {
      step: '03',
      title: 'System Implementation',
      description: 'Deployment of HR processes, systems, and technology solutions',
      duration: '4-8 weeks',
      deliverables: ['Process Documentation', 'System Setup', 'Training Materials']
    },
    {
      step: '04',
      title: 'Change Management',
      description: 'Smooth transition and adoption of new HR practices and systems',
      duration: '2-4 weeks',
      deliverables: ['Training Programs', 'Communication Plan', 'Support Documentation']
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and improvement of HR processes and outcomes',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Analytics Dashboard', 'Optimization Recommendations']
    }
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Talent Excellence',
      description: 'Attract, develop, and retain top talent for sustainable growth',
      metrics: '40% Faster Hiring'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Performance Boost',
      description: 'Enhanced employee productivity and organizational effectiveness',
      metrics: '25% Performance Increase'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Risk Mitigation',
      description: 'Full compliance with labor laws and reduced legal risks',
      metrics: '100% Compliance Rate'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: 'Employee Satisfaction',
      description: 'Improved workplace culture and employee engagement',
      metrics: '90% Satisfaction Score'
    }
  ]

  const industryExpertise = [
    'Information Technology', 'Healthcare', 'Manufacturing', 'Financial Services',
    'Retail & E-commerce', 'Education', 'Consulting', 'Construction',
    'Automotive', 'Telecommunications', 'Energy & Utilities', 'Media & Entertainment'
  ]

  const hrTechnologies = [
    { name: 'ATS Systems', category: 'Recruitment' },
    { name: 'HRIS Platforms', category: 'Management' },
    { name: 'Performance Tools', category: 'Evaluation' },
    { name: 'Learning Management', category: 'Development' },
    { name: 'Payroll Software', category: 'Compensation' },
    { name: 'Analytics Tools', category: 'Insights' },
    { name: 'Employee Apps', category: 'Engagement' },
    { name: 'Compliance Tools', category: 'Legal' }
  ]

  const serviceAreas = [
    'Recruitment & Selection', 'Onboarding Programs', 'Employee Handbook', 'Policy Development',
    'Performance Appraisals', 'Training Needs Analysis', 'Compensation Planning', 'Exit Interviews',
    'Employee Surveys', 'Disciplinary Procedures', 'Grievance Handling', 'Workforce Analytics'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/30"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Professional business team collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <FadeInView>
            <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary-200 mr-2" />
              <span className="text-primary-200 text-sm font-medium">Certified HR Professionals</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Human Resources
              <span className="block text-primary-300">Consultancy Services</span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Complete HR solutions and workforce management services to build strong, 
              compliant, and high-performing teams for your growing business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                Start HR Consultation
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

      {/* HR Visual Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Talent recruitment and hiring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Talent Acquisition</h3>
                  <p className="text-sm">Expert recruitment solutions</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team performance and development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Performance Management</h3>
                  <p className="text-sm">Enhance team productivity</p>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Training and development programs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Training & Development</h3>
                  <p className="text-sm">Skill enhancement programs</p>
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
                Comprehensive HR Consultancy Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From talent acquisition to performance management, we provide complete HR solutions 
                tailored to your organizational needs and business objectives.
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

      {/* HR Specializations */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                HR Specialization Areas
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our specialized expertise covers all aspects of modern human resources management 
                with focus on strategic alignment and business impact.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8">
            {hrSpecializations.map((specialization, index) => (
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

      {/* HR Culture Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Building Exceptional Workplace Culture
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Creating environments where people thrive and organizations succeed
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
                alt="Diverse team collaboration and workplace culture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Empowering People & Organizations</h3>
                  <p className="text-lg">Strategic HR solutions for sustainable growth</p>
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
                Our HR Consultation Process
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                A systematic approach to HR transformation ensuring strategic alignment, 
                smooth implementation, and measurable business outcomes.
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
                HR Service Areas & Solutions
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive coverage of all HR functions with specialized expertise 
                in modern workforce management practices.
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

      {/* HR Technologies */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                HR Technologies & Platforms
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We leverage cutting-edge HR technology and digital solutions to streamline 
                processes and enhance employee experience.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hrTechnologies.map((tech, index) => (
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

      {/* HR Analytics Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Data-Driven HR Insights
                </h2>
                <p className="text-xl text-secondary-600 mb-8">
                  Transform your HR operations with advanced analytics and actionable insights 
                  that drive informed decision-making and measurable business results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Real-time HR Dashboards</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Performance Metrics & KPIs</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-secondary-700">Workforce Analytics</span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="HR analytics and data insights dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-600/10"></div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our HR consultants bring deep industry knowledge and specialized 
                expertise across diverse business sectors.
              </p>
            </div>
          </FadeInView>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industryExpertise.map((industry, index) => (
              <FadeInView key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-4 text-center hover:bg-primary-100 transition-all border border-primary-200">
                  <div className="text-sm font-semibold text-secondary-900">{industry}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-8">
                  Why Choose Terrafo International HR Services?
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
                <h3 className="text-3xl font-bold mb-6">Ready to Build Your Dream Team?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Partner with us to create an exceptional workplace culture and 
                  unlock your organization's full potential through strategic HR solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>Free HR Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <Calculator className="h-5 w-5 mr-3" />
                    <span>Custom Strategy Development</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    <span>Results Guarantee</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all mt-8 transform hover:scale-105"
                >
                  Schedule HR Consultation
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
