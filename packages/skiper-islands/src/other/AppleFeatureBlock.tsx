import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode } from 'react'

interface AppleFeatureBlockProps {
  title: string
  subtitle?: string
  body: string
  mediaSlot?: ReactNode
  cta?: ReactNode
  reversed?: boolean
  bgColor?: string
  textColor?: string
}

export function AppleFeatureBlock({
  title,
  subtitle,
  body,
  mediaSlot,
  cta,
  reversed = false,
  bgColor = '#0A0A0A',
  textColor = '#FFFFFF',
}: AppleFeatureBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        backgroundColor: bgColor,
        color: textColor,
        display: 'flex',
        flexDirection: reversed ? 'row-reverse' : 'row',
        alignItems: 'center',
        padding: '80px 48px',
        gap: 48,
      }}
    >
      <div style={{ flex: 1 }}>
        {subtitle && (
          <p style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, marginBottom: 8 }}>
            {subtitle}
          </p>
        )}
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, margin: '0 0 16px' }}>
          {title}
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.8, maxWidth: 480 }}>
          {body}
        </p>
        {cta && <div style={{ marginTop: 24 }}>{cta}</div>}
      </div>
      <div style={{ flex: 1 }}>{mediaSlot}</div>
    </motion.div>
  )
}
