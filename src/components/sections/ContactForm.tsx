// src/components/sections/ContactForm.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, User, Mail, MessageCircle, Sparkles } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    'Import & Export',
    'Technical Solutions',
    'Human Resources',
    'Waste & Liquid Management',
    'Infrastructure Development',
    'Manpower & Housekeeping',
    'Logistics & Transportation',
    'Facilities Management',
    'Engineering Solutions'
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 opacity-50 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-indigo-200 opacity-30 rounded-full -ml-12 -mb-12"></div>

      {/* Form Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl mr-4">
            <Send className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-secondary-900">Send us a message</h3>
            <p className="text-secondary-600">We'd love to hear from you</p>
          </div>
        </div>
        <p className="text-secondary-600">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12 relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-secondary-900 mb-4">Message Sent Successfully!</h4>
          <p className="text-secondary-600 text-lg">
            Thank you for reaching out. We'll get back to you soon!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="relative"
              animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                <User className="h-4 w-4 inline mr-2 text-primary-600" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 text-base"
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            <motion.div
              className="relative"
              animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-sm font-semibold text-secondary-700 mb-3">
                <Mail className="h-4 w-4 inline mr-2 text-primary-600" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 text-base"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>
          </div>

          {/* Service Selection */}
          <motion.div
            className="relative"
            animate={{ scale: focusedField === 'service' ? 1.02 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-sm font-semibold text-secondary-700 mb-3">
              <Sparkles className="h-4 w-4 inline mr-2 text-primary-600" />
              Service Interested In
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              onFocus={() => setFocusedField('service')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 text-base"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </motion.div>

          {/* Message */}
          <motion.div
            className="relative"
            animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <label className="block text-sm font-semibold text-secondary-700 mb-3">
              <MessageCircle className="h-4 w-4 inline mr-2 text-primary-600" />
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all duration-300 resize-none text-base"
              placeholder="Tell us about your project or inquiry..."
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-8 py-5 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-3 h-5 w-5" />
              </>
            )}
          </motion.button>

          {/* Privacy Notice */}
          <p className="text-sm text-secondary-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      )}
    </motion.div>
  )
}
