import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealGridProps {
  items: {
    id: string
    content: ReactNode
  }[]
  columns?: number
  staggerDelay?: number
}

export function ScrollRevealGrid({
  items,
  columns = 4,
  staggerDelay = 0.06,
}: ScrollRevealGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 1,
      }}
    >
      {items.map((item, i) => {
        const col = i % columns
        const row = Math.floor(i / columns)
        const delay = (col + row * columns) * staggerDelay

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ overflow: 'hidden' }}
          >
            {item.content}
          </motion.div>
        )
      })}
    </div>
  )
}
