import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface AnimatedNumberProps {
  from?: number
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  fontSize?: string
  color?: string
  fontWeight?: number
}

export function AnimatedNumber({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 1.5,
  fontSize = '1.5rem',
  color = '#111',
  fontWeight = 700,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayed(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, from, to, duration])

  const formatted = typeof to === 'number' && to >= 1000
    ? displayed.toLocaleString()
    : displayed.toString()

  return (
    <span
      ref={ref}
      style={{ fontSize, color, fontWeight, fontVariantNumeric: 'tabular-nums' }}
    >
      {prefix}{formatted}{suffix}
    </span>
  )
}
