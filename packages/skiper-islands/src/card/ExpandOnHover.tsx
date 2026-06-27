import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ExpandOnHoverProps {
  children: ReactNode
  expandedContent?: ReactNode
  width?: number
  height?: number
  expandedHeight?: number
  bgColor?: string
  hoverBgColor?: string
  className?: string
}

export function ExpandOnHover({
  children,
  expandedContent,
  width = 280,
  height = 360,
  expandedHeight = 420,
  bgColor = '#FFFFFF',
  hoverBgColor = '#F5F5F5',
  className,
}: ExpandOnHoverProps) {
  return (
    <motion.div
      whileHover={{ height: expandedHeight, backgroundColor: hoverBgColor }}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={className}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ padding: '12px 16px', marginTop: 'auto' }}
      >
        {expandedContent}
      </motion.div>
    </motion.div>
  )
}
