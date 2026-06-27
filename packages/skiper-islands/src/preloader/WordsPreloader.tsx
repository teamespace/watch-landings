import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WordsPreloaderProps {
  words: string[]
  bgColor?: string
  textColor?: string
  duration?: number
  onComplete?: () => void
  fontSize?: string
}

export function WordsPreloader({
  words,
  bgColor = '#111111',
  textColor = '#FFFFFF',
  duration = 0.3,
  onComplete,
  fontSize = 'clamp(2rem, 6vw, 5rem)',
}: WordsPreloaderProps) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index >= words.length) {
      const t = setTimeout(() => {
        setDone(true)
        onComplete?.()
      }, 400)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 600)
    return () => clearTimeout(t)
  }, [index, words.length, onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: bgColor,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration }}
              style={{
                color: textColor,
                fontSize,
                fontWeight: 700,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {words[index] || words[words.length - 1]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
