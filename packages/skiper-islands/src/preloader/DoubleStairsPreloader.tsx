import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DoubleStairsPreloaderProps {
  count?: number
  color?: string
  accentColor?: string
  duration?: number
  onComplete?: () => void
}

export function DoubleStairsPreloader({
  count = 8,
  color = '#FFFFFF',
  accentColor = '#CC2200',
  duration = 0.35,
  onComplete,
}: DoubleStairsPreloaderProps) {
  const [phase, setPhase] = useState<'enter' | 'accent' | 'exit'>('enter')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const step = duration * 1000
    const t1 = setTimeout(() => setPhase('accent'), step * count * 0.5)
    const t2 = setTimeout(() => setPhase('exit'), step * count * 0.75)
    const t3 = setTimeout(() => {
      setDone(true)
      onComplete?.()
    }, step * count + 400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [count, duration, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex' }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              style={{ flex: 1, display: 'flex' }}
            >
              <motion.div
                initial={{ scaleY: 0 }}
                animate={
                  phase === 'enter'
                    ? { scaleY: 1 }
                    : phase === 'accent'
                      ? { backgroundColor: accentColor }
                      : { scaleY: 0 }
                }
                transition={{
                  duration,
                  delay:
                    phase === 'enter'
                      ? i * 0.06
                      : phase === 'exit'
                        ? (count - 1 - i) * 0.06
                        : 0,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  flex: 1,
                  backgroundColor: color,
                  transformOrigin: 'top',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
