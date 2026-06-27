import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface VercelScrollBlurProps {
  children: ReactNode
  blurAmount?: number
  className?: string
}

export function VercelScrollBlur({
  children,
  blurAmount = 8,
  className,
}: VercelScrollBlurProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const blur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, blurAmount, blurAmount, 0]
  )

  return (
    <motion.div
      ref={ref}
      style={{ filter: `blur(${blur}px)`, willChange: 'filter' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
