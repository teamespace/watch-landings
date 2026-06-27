import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface CardStackScrollProps {
  cards: {
    id: string
    content: React.ReactNode
  }[]
  stackRotation?: number
}

export function CardStackScroll({ cards, stackRotation = 3 }: CardStackScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} style={{ position: 'relative', height: cards.length * 100 + 300 }}>
      {cards.map((card, i) => {
        const start = i / cards.length
        const end = (i + 1) / cards.length
        const y = useTransform(scrollYProgress, [start, end], [0, -60])
        const scale = useTransform(scrollYProgress, [start, end], [1, 0.92])
        const opacity = useTransform(scrollYProgress, [start, end - 0.1], [1, 0.3])
        const rotate = (i - (cards.length - 1) / 2) * stackRotation

        return (
          <motion.div
            key={card.id}
            style={{
              position: 'sticky',
              top: `${40 + i * 10}px`,
              y,
              scale,
              opacity,
              rotate,
              transformOrigin: 'center center',
              marginBottom: -80,
            }}
          >
            {card.content}
          </motion.div>
        )
      })}
      <div style={{ height: 200 }} />
    </div>
  )
}
