import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Text3DPerspectiveProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
  color?: string
  fontSize?: string
  fontWeight?: number
  perspective?: string
  className?: string
}

export function Text3DPerspective({
  text,
  as: Tag = 'h1',
  color = '#0D0D0D',
  fontSize = 'clamp(2rem, 6vw, 5rem)',
  fontWeight = 700,
  perspective = '1000px',
  className,
}: Text3DPerspectiveProps) {
  return (
    <div style={{ perspective, overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ rotateX: 30, y: 40, opacity: 0 }}
        whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center' }}
      >
        <Tag style={{ color, fontSize, fontWeight, margin: 0, letterSpacing: '0.02em' }}>
          {text}
        </Tag>
      </motion.div>
    </div>
  )
}
