import { motion } from 'framer-motion'

interface HorizontalTextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
  color?: string
  fontSize?: string
  fontWeight?: number
  delay?: number
  duration?: number
  direction?: 'left' | 'right'
  style?: React.CSSProperties
}

export function HorizontalTextReveal({
  text,
  as: Tag = 'h2',
  color = '#0A0A0A',
  fontSize = 'clamp(1.5rem, 3vw, 2.5rem)',
  fontWeight = 700,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  style,
}: HorizontalTextRevealProps) {
  const xStart = direction === 'left' ? -60 : 60

  return (
    <motion.div
      initial={{ opacity: 0, x: xStart }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Tag style={{ color, fontSize, fontWeight, margin: 0, ...style }}>{text}</Tag>
    </motion.div>
  )
}
