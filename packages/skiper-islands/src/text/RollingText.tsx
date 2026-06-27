import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface RollingTextProps {
  items: string[]
  speed?: number
  direction?: 'left' | 'right'
  separator?: string
  fontSize?: string
  color?: string
  pauseOnHover?: boolean
}

export function RollingText({
  items,
  speed = 40,
  direction = 'left',
  separator = ' · ',
  fontSize = '14px',
  color = '#888',
  pauseOnHover = true,
}: RollingTextProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `
  const duration = content.length / speed

  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        padding: '12px 0',
      }}
      className={pauseOnHover ? 'group' : ''}
    >
      <motion.div
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          fontSize,
          color,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
        className={pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}
      >
        {content}
        {content}
      </motion.div>
    </div>
  )
}
