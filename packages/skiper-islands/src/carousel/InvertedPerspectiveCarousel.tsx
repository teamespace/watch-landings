import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InvertedPerspectiveCarouselProps {
  items: {
    id: string
    content: React.ReactNode
    label: string
  }[]
  autoPlay?: boolean
  interval?: number
}

export function InvertedPerspectiveCarousel({
  items,
  autoPlay = true,
  interval = 3500,
}: InvertedPerspectiveCarouselProps) {
  const [current, setCurrent] = useState(0)

  return (
    <div style={{ overflow: 'hidden', position: 'relative', padding: '40px 0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 360,
          position: 'relative',
          perspective: '1000px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={items[current].id}
            initial={{ opacity: 0, rotateY: -20, x: -150, scale: 0.85 }}
            animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 20, x: 150, scale: 0.85 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'absolute',
              width: '80%',
              maxWidth: 320,
            }}
          >
            {items[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              border: 'none',
              backgroundColor: i === current ? '#0A0A0A' : '#D0D0D0',
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
