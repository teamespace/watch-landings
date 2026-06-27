import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ExpandOnHoverVerticalProps {
  children: ReactNode
  expandedContent?: ReactNode
  width?: number
  collapsedHeight?: number
  expandedHeight?: number
  bgColor?: string
  className?: string
}

export function ExpandOnHoverVertical({
  children,
  expandedContent,
  width = '100%',
  collapsedHeight = 48,
  expandedHeight = 200,
  bgColor = '#FFFFFF',
  className,
}: ExpandOnHoverVerticalProps) {
  return (
    <motion.div
      initial={false}
      whileHover={{ height: expandedHeight }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      style={{
        width,
        height: collapsedHeight,
        backgroundColor: bgColor,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
      className={className}
    >
      <div style={{ padding: '0 16px', height: collapsedHeight, display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ padding: '0 16px 16px' }}
      >
        {expandedContent}
      </motion.div>
    </motion.div>
  )
}
