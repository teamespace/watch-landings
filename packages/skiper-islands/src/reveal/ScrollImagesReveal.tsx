import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollImagesRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  className?: string
}

export function ScrollImagesReveal({
  children,
  direction = 'up',
  duration = 0.7,
  className,
}: ScrollImagesRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const dirMap = { up: -60, down: 60, left: -60, right: 60 }
  const initialY = direction === 'up' || direction === 'down' ? dirMap[direction] : 0
  const initialX = direction === 'left' || direction === 'right' ? dirMap[direction] : 0

  const clipMap: Record<string, string> = {
    up: 'inset(100% 0% 0% 0%)',
    down: 'inset(0% 0% 100% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  }

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    [clipMap[direction], 'inset(0%)']
  )

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        style={{
          clipPath,
          x: initialX,
          y: initialY,
          willChange: 'clip-path',
        }}
        transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}
