import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PerspectiveCarouselProps {
  items: {
    id: string
    content: React.ReactNode
    label: string
  }[]
  autoPlay?: boolean
  interval?: number
  perspective?: string
}

export function PerspectiveCarousel({
  items,
  autoPlay = true,
  interval = 3000,
  perspective = '1200px',
}: PerspectiveCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setCurrent((c) => (c + 1) % items.length)
  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)

  return (
    <div
      style={{
        perspective,
        overflow: 'hidden',
        position: 'relative',
        padding: '40px 0',
      }}
      onMouseEnter={() => autoPlay && setPaused(true)}
      onMouseLeave={() => autoPlay && setPaused(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 360,
          position: 'relative',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={items[current].id}
            initial={{ opacity: 0, rotateY: 15, x: 200, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -15, x: -200, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              width: '80%',
              maxWidth: 320,
              cursor: 'pointer',
            }}
          >
            {items[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              backgroundColor: i === current ? '#111' : '#DDD',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
