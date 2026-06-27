import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StairsPreloaderProps {
  count?: number
  color?: string
  duration?: number
  direction?: 'down' | 'up'
  onComplete?: () => void
}

export function StairsPreloader({
  count = 6,
  color = '#FFFFFF',
  duration = 0.3,
  direction = 'down',
  onComplete,
}: StairsPreloaderProps) {
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const total = count * (duration * 1000) + 300
    const t1 = setTimeout(() => setPhase('exit'), total * 0.6)
    const t2 = setTimeout(() => {
      setDone(true)
      onComplete?.()
    }, total)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [count, duration, onComplete])

  const dir = direction === 'down' ? 1 : -1

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
              initial={{ scaleY: 0 }}
              animate={
                phase === 'enter'
                  ? { scaleY: 1 }
                  : { scaleY: 0 }
              }
              transition={{
                duration,
                delay: phase === 'enter' ? i * 0.08 : (count - 1 - i) * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{
                flex: 1,
                backgroundColor: color,
                transformOrigin: dir === 1 ? 'top' : 'bottom',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
