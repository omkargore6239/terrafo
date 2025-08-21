// src/components/preloader/GlobalPreloader.tsx
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedLetterPreloader from './AnimatedLetterPreloader'

export default function GlobalPreloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const pathname = usePathname()

  // Handle initial page load
  useEffect(() => {
    const handleInitialLoad = () => {
      // Wait for DOM content and images to load
      if (document.readyState === 'complete') {
        setIsLoading(false)
      } else {
        window.addEventListener('load', () => setIsLoading(false))
        return () => window.removeEventListener('load', () => setIsLoading(false))
      }
    }

    handleInitialLoad()
  }, [])

  // Handle route changes
  useEffect(() => {
    setIsRouteChanging(true)
    const timer = setTimeout(() => {
      setIsRouteChanging(false)
    }, 1500) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatedLetterPreloader
      show={isLoading || isRouteChanging}
      text="Terrafo International"
      autoHideAfterMs={2000}
      onAutoHidden={() => {
        setIsLoading(false)
        setIsRouteChanging(false)
      }}
      backgroundClassName="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600"
      textClassName="text-white text-3xl md:text-5xl tracking-[0.16em] select-none font-bold"
      zIndexClassName="z-[9999]"
    />
  )
}
