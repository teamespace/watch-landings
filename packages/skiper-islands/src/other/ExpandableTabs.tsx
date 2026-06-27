import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableTabsProps {
  tabs: {
    label: string
    content: React.ReactNode
  }[]
  accentColor?: string
  bgColor?: string
  textColor?: string
}

export function ExpandableTabs({
  tabs,
  accentColor = '#CC2200',
  bgColor = '#FFFFFF',
  textColor = '#0A0A0A',
}: ExpandableTabsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div style={{ display: 'flex', borderBottom: '1px solid #E0E0E0' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setOpenIndex(i)}
            style={{
              flex: 1,
              padding: '16px 24px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: i === openIndex ? accentColor : '#888',
              borderBottom: i === openIndex ? `2px solid ${accentColor}` : '2px solid transparent',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={openIndex}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ padding: 24, color: textColor }}>
            {tabs[openIndex]?.content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
