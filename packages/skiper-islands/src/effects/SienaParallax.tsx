import { ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SienaParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function SienaParallax({
  children,
  speed = 0.3,
  className,
}: SienaParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [speed * -200, speed * 200])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.div style={{ y, scale, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  )
}
