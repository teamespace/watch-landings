import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface CreativeCarouselProps {
  slides: {
    id: string
    content: React.ReactNode
    caption?: string
  }[]
  height?: number
}

export function CreativeCarousel({ slides, height = 400 }: CreativeCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

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
          justifyContent: 'center',
        }}
      >
        {slides.map((slide, i) => {
          const start = i / slides.length
          const end = (i + 1) / slides.length
          const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0])
          const y = useTransform(scrollYProgress, [start, end], [60, -60])

          return (
            <motion.div
              key={slide.id}
              style={{
                position: 'absolute',
                opacity,
                y,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              {slide.content}
              {slide.caption && (
                <p style={{ marginTop: 12, fontSize: 14, color: '#666' }}>{slide.caption}</p>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
