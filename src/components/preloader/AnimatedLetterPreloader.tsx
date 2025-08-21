'use client'

import { memo, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type AnimatedLetterPreloaderProps = {
  // Controls visibility of the overlay
  show: boolean
  // Text to display and animate
  text?: string
  // Optional: automatically hide after N ms (no auto-hide if undefined)
  autoHideAfterMs?: number
  // Callback when auto-hide finishes (fires once when it transitions out)
  onAutoHidden?: () => void
  // Styling
  backgroundClassName?: string     // overlay background classes
  textClassName?: string           // classes applied to the letters container
  letterClassName?: string         // classes applied to each letter
  // z-index for overlay
  zIndexClassName?: string         // e.g., "z-[9999]"
  // Animation controls
  perLetterDelay?: number          // seconds between letters (default 0.05)
  perLetterDuration?: number       // seconds for each letter anim (default 0.4)
  exitDuration?: number            // seconds for overlay fade-out (default 0.5)
}

function AnimatedLetterPreloaderBase({
  show,
  text = 'Terrafo International',
  autoHideAfterMs,
  onAutoHidden,
  backgroundClassName = 'bg-slate-950',
  textClassName = 'text-blue-100 text-2xl md:text-3xl tracking-[0.16em] select-none',
  letterClassName = 'inline-block',
  zIndexClassName = 'z-',
  perLetterDelay = 0.05,
  perLetterDuration = 0.4,
  exitDuration = 0.5,
}: AnimatedLetterPreloaderProps) {
  // Derived array for stable keys
  const chars = useMemo(() => text.split(''), [text])

  useEffect(() => {
    if (!show || !autoHideAfterMs) return
    const t = setTimeout(() => {
      onAutoHidden?.()
    }, autoHideAfterMs + exitDuration * 1000) // allow exit animation time
    return () => clearTimeout(t)
  }, [show, autoHideAfterMs, exitDuration, onAutoHidden])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 ${zIndexClassName} flex items-center justify-center ${backgroundClassName}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: exitDuration }}
          aria-label="Loading"
          role="status"
        >
          <div className={textClassName}>
            {chars.map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: i * perLetterDelay,
                  duration: perLetterDuration,
                  ease: 'easeOut',
                }}
                className={letterClassName}
                aria-hidden="true"
              >
                {ch}
              </motion.span>
            ))}
            {/* Accessible live text for screen readers */}
            <span className="sr-only">{text}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const AnimatedLetterPreloader = memo(AnimatedLetterPreloaderBase)
export default AnimatedLetterPreloader
