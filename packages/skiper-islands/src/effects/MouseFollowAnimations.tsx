import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MouseFollowAnimationsProps {
  children: ReactNode
  maxShift?: number
  className?: string
}

export function MouseFollowAnimations({
  children,
  maxShift = 12,
  className,
}: MouseFollowAnimationsProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 30 })
  const springY = useSpring(y, { stiffness: 200, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - rect.left) / rect.width - 0.5) * maxShift * 2
    const py = ((e.clientY - rect.top) / rect.height - 0.5) * maxShift * 2
    x.set(px)
    y.set(py)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className={className}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          willChange: 'transform',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
