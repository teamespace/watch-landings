import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientHoverCardsProps {
  children: ReactNode
  gradientColor?: string
  gradientOpacity?: number
  className?: string
}

export function GradientHoverCards({
  children,
  gradientColor = '#2D4A3E',
  gradientOpacity = 0.08,
  className,
}: GradientHoverCardsProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(-1000); y.set(-1000) }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      className={className}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
          opacity: gradientOpacity,
          pointerEvents: 'none',
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {children}
    </motion.div>
  )
}
