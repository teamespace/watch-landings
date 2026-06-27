import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollWithFadeProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

export function ScrollWithFade({
  children,
  delay = 0,
  duration = 0.5,
  y = 30,
  className,
  style,
}: ScrollWithFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
