import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface OliverParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function OliverParallax({
  children,
  speed = 0.4,
  className,
}: OliverParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.div style={{ y, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  )
}
