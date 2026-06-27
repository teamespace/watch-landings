import { useRef, ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCursorTrailProps {
  images: { src: string; id: string; label: string }[]
  children: ReactNode
}

export function ImageCursorTrail({ images, children }: ImageCursorTrailProps) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 80 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIndex(-1)}
      style={{ position: 'relative' }}
    >
      {children}
      <AnimatePresence>
        {activeIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              left: pos.x,
              top: pos.y,
              width: 180,
              height: 240,
              zIndex: 50,
              pointerEvents: 'none',
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={images[activeIndex]?.src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
