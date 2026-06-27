import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Interactive3DHeroProps {
  children: ReactNode
  maxRotation?: number
  className?: string
}

export function Interactive3DHero({
  children,
  maxRotation = 8,
  className,
}: Interactive3DHeroProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rotateX = -y * maxRotation * 2
    const rotateY = x * maxRotation * 2
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    e.currentTarget.style.transition = 'transform 0.5s ease'
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transition: 'transform 0.1s ease',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
