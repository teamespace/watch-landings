import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface MinimalCardExpandProps {
  cards: {
    id: string
    title: string
    content: ReactNode
    icon?: ReactNode
  }[]
  accentColor?: string
  bgColor?: string
}

export function MinimalCardExpand({
  cards,
  accentColor = '#C9A96E',
  bgColor = '#F7F5F2',
}: MinimalCardExpandProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', gap: 16, backgroundColor: bgColor, padding: '40px 24px' }}>
      {cards.map((card) => {
        const isOpen = expanded === card.id
        return (
          <motion.div
            key={card.id}
            layout
            onClick={() => setExpanded(isOpen ? null : card.id)}
            style={{
              flex: isOpen ? 2 : 1,
              backgroundColor: '#fff',
              borderRadius: 0,
              padding: 24,
              cursor: 'pointer',
              minHeight: isOpen ? 200 : 120,
              display: 'flex',
              flexDirection: 'column',
              transition: 'flex 0.3s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: isOpen ? 16 : 0 }}>
              {card.icon && <span>{card.icon}</span>}
              <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{card.title}</h4>
            </div>
            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? 'auto' : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: 14, lineHeight: 1.6, color: '#666', overflow: 'hidden' }}
            >
              {card.content}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
