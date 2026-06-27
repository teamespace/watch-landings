import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ProgressiveBlurProps {
  children: ReactNode
  className?: string
}

export function ProgressiveBlur({ children, className }: ProgressiveBlurProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blur = useTransform(
    scrollYProgress,
    [0.5, 1],
    [0, 12]
  )
  const opacity = useTransform(
    scrollYProgress,
    [0.5, 1],
    [1, 0]
  )

  return (
    <motion.div
      ref={ref}
      style={{
        filter: `blur(${blur}px)`,
        opacity,
        willChange: 'filter, opacity',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
