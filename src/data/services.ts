// src/data/services.ts
export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  features: string[]
  category: string
  isPopular?: boolean
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Import & Export',
    slug: 'import-export',
    shortDescription: 'Global trade solutions and customs clearance services',
    fullDescription: 'Comprehensive import and export services including documentation, customs clearance, and international trade consultation.',
    features: [
      'Customs Clearance',
      'Documentation Support',
      'International Shipping',
      'Trade Compliance',
      'Freight Forwarding'
    ],
    category: 'Trade Services',
    isPopular: true
  },
  {
    id: '2',
    title: 'Technical Solutions',
    slug: 'technical-solutions',
    shortDescription: 'Advanced technical consulting and implementation services',
    fullDescription: 'Expert technical solutions covering system integration, automation, and specialized engineering services.',
    features: [
      'System Integration',
      'Process Automation',
      'Technical Consulting',
      'Equipment Installation',
      '24/7 Support'
    ],
    category: 'Technical Services'
  },
  {
    id: '3',
    title: 'Human Resources',
    slug: 'human-resources',
    shortDescription: 'Complete HR solutions and workforce management',
    fullDescription: 'Professional HR consultancy services including recruitment, training, compliance, and workforce optimization.',
    features: [
      'Talent Acquisition',
      'Performance Management',
      'HR Compliance',
      'Training Programs',
      'Payroll Management'
    ],
    category: 'Business Services'
  },
  {
    id: '4',
    title: 'Waste & Liquid Management Services',
    slug: 'waste-management',
    shortDescription: 'Eco-friendly waste disposal and liquid management solutions',
    fullDescription: 'Comprehensive waste management services including collection, treatment, disposal, and environmental compliance.',
    features: [
      'Waste Collection',
      'Liquid Treatment',
      'Environmental Compliance',
      'Recycling Solutions',
      'Hazardous Waste Handling'
    ],
    category: 'Environmental Services',
    isPopular: true
  },
  {
    id: '5',
    title: 'Infrastructure Developments',
    slug: 'infrastructure-development',
    shortDescription: 'Modern infrastructure planning and construction services',
    fullDescription: 'End-to-end infrastructure development including planning, design, construction, and project management.',
    features: [
      'Project Planning',
      'Civil Construction',
      'Project Management',
      'Quality Assurance',
      'Maintenance Services'
    ],
    category: 'Construction Services'
  },
  {
    id: '6',
    title: 'Manpower Supply And Housekeeping Services',
    slug: 'manpower-housekeeping',
    shortDescription: 'Professional staffing and comprehensive housekeeping solutions',
    fullDescription: 'Reliable manpower supply and professional housekeeping services for commercial and industrial facilities.',
    features: [
      'Skilled Manpower Supply',
      'Professional Cleaning',
      'Security Services',
      'Maintenance Support',
      'Flexible Staffing'
    ],
    category: 'Support Services'
  },
  {
    id: '7',
    title: 'Logistics And Transportation',
    slug: 'logistics-transportation',
    shortDescription: 'Efficient logistics and transportation management solutions',
    fullDescription: 'Complete logistics and transportation services including fleet management, warehousing, and supply chain optimization.',
    features: [
      'Fleet Management',
      'Warehousing',
      'Supply Chain Optimization',
      'Last-Mile Delivery',
      'Inventory Management'
    ],
    category: 'Logistics Services',
    isPopular: true
  },
  {
    id: '8',
    title: 'Integrated Facilities Management',
    slug: 'facilities-management',
    shortDescription: 'Complete facility management and maintenance services',
    fullDescription: 'Comprehensive facilities management including maintenance, security, utilities management, and space optimization.',
    features: [
      'Preventive Maintenance',
      'Security Management',
      'Utilities Management',
      'Space Planning',
      'Emergency Response'
    ],
    category: 'Management Services'
  },
  {
    id: '9',
    title: 'Engineering Solutions & Service',
    slug: 'engineering-solutions',
    shortDescription: 'Specialized engineering consulting and implementation services',
    fullDescription: 'Professional engineering solutions covering design, consultation, implementation, and ongoing technical support.',
    features: [
      'Engineering Design',
      'Technical Consultation',
      'Project Implementation',
      'Quality Control',
      'Ongoing Support'
    ],
    category: 'Engineering Services'
  }
]

// Helper function to get service by slug
export const getServiceBySlug = (slug: string) => {
  return services.find(service => service.slug === slug)
}

// Helper function to get related services
export const getRelatedServices = (currentSlug: string, limit = 3) => {
  return services.filter(service => service.slug !== currentSlug).slice(0, limit)
}
