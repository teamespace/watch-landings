import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollProgressProps {
  color?: string
  height?: number
  position?: 'top' | 'bottom'
}

export function ScrollProgress({
  color = '#111111',
  height = 2,
  position = 'top',
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{
        position: 'fixed',
        [position]: 0,
        left: 0,
        right: 0,
        height,
        backgroundColor: color,
        transformOrigin: '0%',
        scaleX,
        zIndex: 999,
      }}
    />
  )
}
