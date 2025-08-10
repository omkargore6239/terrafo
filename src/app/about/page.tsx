// src/app/about/page.tsx
import FadeInView from '@/components/animations/FadeInView'
import { 
  Users, Award, Globe, Clock, Target, Heart, 
  ArrowRight, CheckCircle, TrendingUp, Shield,
  Lightbulb, Star, Eye, ChevronRight,
  Building, Zap, Calendar, MapPin
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Terrafo International | Your Trusted Business Solutions Partner',
  description: 'Learn about Terrafo International, your trusted partner for comprehensive business services across multiple industries with expertise, innovation, and excellence.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project and service we deliver, ensuring exceptional results for our clients.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: 'Integrity',
      description: 'Honest and transparent business practices form the foundation of all our client relationships.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve their business objectives and goals.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Quality',
      description: 'Committed to delivering high-quality solutions that consistently exceed client expectations.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and innovative approaches to solve complex business challenges.',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600" />,
      title: 'Trust',
      description: 'Building long-term relationships based on reliability, consistency, and mutual respect.',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ]

  const achievements = [
    {
      icon: <Building className="h-8 w-8 text-primary-600" />,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across industries'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      number: '100+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      number: '10+',
      label: 'Years Experience',
      description: 'Proven track record of excellence'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      number: '25+',
      label: 'Countries Served',
      description: 'Global reach and expertise'
    }
  ]

  const teamHighlights = [
    {
      title: 'Expert Leadership',
      description: 'Experienced professionals leading each service division',
      icon: <Star className="h-6 w-6" />
    },
    {
      title: 'Skilled Workforce',
      description: 'Certified specialists across all technical domains',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training and development programs',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Global Experience',
      description: 'International project experience and expertise',
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Terrafo International was established with a vision to provide comprehensive business solutions.'
    },
    {
      year: '2017',
      title: 'Service Expansion',
      description: 'Expanded our portfolio to include technical solutions and infrastructure development.'
    },
    {
      year: '2019',
      title: 'Global Reach',
      description: 'Extended operations internationally, serving clients across multiple countries.'
    },
    {
      year: '2021',
      title: 'Technology Integration',
      description: 'Integrated advanced technologies and digital solutions across all service offerings.'
    },
    {
      year: '2023',
      title: 'Sustainability Focus',
      description: 'Launched comprehensive sustainability and environmental management programs.'
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Established innovation centers focused on emerging technologies and solutions.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary-900/20"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
            alt="Professional business team collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div className="text-white">
                <div className="inline-flex items-center bg-primary-100/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-primary-200 mr-2" />
                  <span className="text-primary-200 text-sm font-medium">Established 2015</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  About
                  <span className="block text-primary-300">Terrafo International</span>
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
                  Your trusted partner for comprehensive business solutions across multiple industries, 
                  delivering excellence through innovation, expertise, and unwavering commitment to quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-800 font-semibold rounded-lg hover:bg-primary-50 transition-all transform hover:scale-105"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border border-primary-300 text-white font-semibold rounded-lg hover:bg-primary-700/30 transition-all"
                  >
                    Get In Touch
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern office environment and team collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-600/20"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-400/30 rounded-full blur-xl"></div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-600 transition-all duration-300">
                      <div className="text-primary-600 group-hover:text-white transition-colors">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-secondary-800 mb-1">{achievement.label}</div>
                  <div className="text-sm text-secondary-600">{achievement.description}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-secondary-600">
                  <p>
                    Founded in 2015 with a vision to revolutionize business solutions, 
                    Terrafo International has grown from a small startup to a globally 
                    recognized leader in comprehensive business services.
                  </p>
                  <p>
                    Our journey began with a simple yet powerful mission: to provide 
                    businesses with the tools, expertise, and support they need to thrive 
                    in an increasingly complex global marketplace.
                  </p>
                  <p>
                    Today, we serve over 100 clients across 25 countries, delivering 
                    innovative solutions in import-export, technical services, HR management, 
                    and infrastructure development. Our success is built on the foundation 
                    of trust, excellence, and unwavering commitment to our clients' success.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  {[
                    'ISO 9001:2015 Certified Quality Management',
                    'Certified professionals across all service domains',
                    'Award-winning customer service and support',
                    'Sustainable and environmentally responsible practices'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-status-success mr-3 flex-shrink-0" />
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Team collaboration and innovation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Professional business environment"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Modern office workspace"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Global business operations"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInView>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-xl mr-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-primary-100 text-lg leading-relaxed">
                  To empower businesses worldwide with comprehensive, innovative solutions 
                  that drive growth, efficiency, and success. We are committed to being 
                  the trusted partner that enables our clients to achieve their strategic 
                  objectives and reach new heights of excellence.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-xl mr-4">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in integrated business solutions, recognized 
                  for our innovation, expertise, and unwavering commitment to client 
                  success. We envision a world where businesses thrive through 
                  strategic partnerships and cutting-edge solutions.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                The fundamental principles that guide our decisions, shape our culture, 
                and define our commitment to excellence in everything we do.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-primary-200 group">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${value.gradient} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900">{value.title}</h3>
                  </div>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Journey</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Milestones that mark our growth and evolution as a leading business solutions provider.
              </p>
            </div>
          </FadeInView>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-primary-400 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeInView key={index} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                        <div className="flex items-center mb-4">
                          <div className="bg-primary-600 text-white text-lg font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-secondary-900">{milestone.title}</h3>
                        </div>
                        <p className="text-secondary-600">{milestone.description}</p>
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

      {/* Team Highlights */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Team Excellence</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                The driving force behind our success - experienced professionals dedicated 
                to delivering exceptional results for our clients.
              </p>
            </div>
          </FadeInView>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHighlights.map((highlight, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-xl shadow-lg group-hover:bg-primary-600 transition-all duration-300">
                      <div className="text-primary-600 group-hover:text-white transition-colors">
                        {highlight.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">{highlight.title}</h3>
                  <p className="text-secondary-600">{highlight.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
