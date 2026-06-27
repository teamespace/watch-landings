import { motion } from 'framer-motion'

interface TextRevealBoxProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
  color?: string
  fontSize?: string
  fontWeight?: number
  delay?: number
  duration?: number
  style?: React.CSSProperties
}

export function TextRevealBox({
  text,
  as: Tag = 'h2',
  color = '#0A0A0A',
  fontSize = 'clamp(1.5rem, 3vw, 2.5rem)',
  fontWeight = 700,
  delay = 0,
  duration = 0.5,
  style,
}: TextRevealBoxProps) {
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        <Tag style={{ color, fontSize, fontWeight, margin: 0 }}>{text}</Tag>
      </motion.div>
    </div>
  )
}
