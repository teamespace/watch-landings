import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ImageRevealProps {
  children: ReactNode
  direction?: 'left' | 'right'
  delay?: number
  className?: string
}

export function ImageReveal({
  children,
  direction = 'left',
  delay = 0,
  className,
}: ImageRevealProps) {
  const origin = direction === 'left' ? '0%' : '100%'

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#111',
          transformOrigin: origin,
          zIndex: 2,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
