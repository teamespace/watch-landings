import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AppleCarouselProps {
  slides: {
    id: string
    content: React.ReactNode
  }[]
  height?: number
}

export function AppleCarousel({ slides, height = 500 }: AppleCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(slides.length - 1) * 100}%`])

  return (
    <div ref={containerRef} style={{ height: height * 2, position: 'relative' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <motion.div
          style={{ display: 'flex', x, willChange: 'transform' }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{
                minWidth: '100vw',
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {slide.content}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
