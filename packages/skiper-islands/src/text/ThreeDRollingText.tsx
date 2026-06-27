import { motion } from 'framer-motion'

interface ThreeDRollingTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
  color?: string
  fontSize?: string
  fontWeight?: number
  delay?: number
  perspective?: string
  style?: React.CSSProperties
}

export function ThreeDRollingText({
  text,
  as: Tag = 'h2',
  color = '#0A0A0A',
  fontSize = 'clamp(1.5rem, 4vw, 3rem)',
  fontWeight = 700,
  delay = 0,
  perspective = '800px',
  style,
}: ThreeDRollingTextProps) {
  return (
    <div style={{ perspective, ...style }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {text.split(' ').map((word, i) => (
          <div key={i} style={{ overflow: 'hidden', marginRight: '0.2em' }}>
            <motion.div
              initial={{ rotateX: -90, opacity: 0, y: 40 }}
              whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.08,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom center' }}
            >
              <Tag
                style={{
                  color,
                  fontSize,
                  fontWeight,
                  margin: 0,
                  display: 'inline',
                }}
              >
                {word}
              </Tag>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
