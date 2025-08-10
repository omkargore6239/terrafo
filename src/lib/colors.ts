// src/lib/colors.ts
export const colors = {
  // Primary Brand Colors (Blue)
  primary: {
    50: '#eff6ff',   // Very light blue
    100: '#dbeafe',  // Light blue
    200: '#bfdbfe',  // Light blue
    300: '#93c5fd',  // Medium light blue
    400: '#60a5fa',  // Medium blue
    500: '#3b82f6',  // Primary blue
    600: '#2563eb',  // Dark blue
    700: '#1d4ed8',  // Darker blue
    800: '#1e40af',  // Very dark blue
    900: '#1e3a8a',  // Darkest blue
  },
  
  // Secondary Colors (Navy/Dark Blue)
  secondary: {
    50: '#f8fafc',   // Very light slate
    100: '#f1f5f9',  // Light slate
    200: '#e2e8f0',  // Light slate
    300: '#cbd5e1',  // Medium light slate
    400: '#94a3b8',  // Medium slate
    500: '#64748b',  // Slate
    600: '#475569',  // Dark slate
    700: '#334155',  // Darker slate
    800: '#1e293b',  // Very dark slate
    900: '#0f172a',  // Darkest slate
  },
  
  // Accent Colors (Blue Variations)
  accent: {
    lightBlue: '#0ea5e9',    // Sky blue
    indigo: '#6366f1',       // Indigo blue
    navy: '#1e40af',         // Navy blue
    cyan: '#06b6d4',         // Cyan blue
    steel: '#64748b',        // Steel blue
    royal: '#2563eb',        // Royal blue
  },
  
  // Status Colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Neutral Colors
  neutral: {
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    black: '#000000',
  }
}

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
}

// Blue Gradient definitions
export const gradients = {
  primary: 'from-primary-900 via-primary-800 to-primary-700',
  primaryLight: 'from-primary-50 to-primary-100',
  hero: 'from-primary-900 via-primary-800 to-primary-600',
  heroAlt: 'from-primary-800 via-primary-700 to-accent-indigo',
  card: 'from-primary-50 to-primary-100',
  cardHover: 'from-primary-100 to-primary-200',
  cta: 'from-primary-600 to-primary-700',
  ctaHover: 'from-primary-700 to-primary-800',
  accent: 'from-accent-lightBlue to-primary-500',
  ocean: 'from-primary-600 via-accent-cyan to-primary-800',
  sky: 'from-primary-400 to-accent-lightBlue',
  midnight: 'from-secondary-900 via-primary-900 to-secondary-800',
}

// Blue color combinations for specific use cases
export const blueThemes = {
  light: {
    bg: 'bg-primary-50',
    text: 'text-primary-900',
    accent: 'text-primary-600',
    border: 'border-primary-200',
  },
  medium: {
    bg: 'bg-primary-500',
    text: 'text-white',
    accent: 'text-primary-100',
    border: 'border-primary-400',
  },
  dark: {
    bg: 'bg-primary-900',
    text: 'text-white',
    accent: 'text-primary-300',
    border: 'border-primary-700',
  },
  gradient: {
    hero: 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600',
    card: 'bg-gradient-to-br from-primary-50 to-primary-100',
    cta: 'bg-gradient-to-r from-primary-600 to-primary-700',
    ocean: 'bg-gradient-to-br from-primary-600 via-accent-cyan to-primary-800',
  }
}
