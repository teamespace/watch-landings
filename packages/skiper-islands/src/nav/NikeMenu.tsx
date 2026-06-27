import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NikeMenuProps {
  logo: ReactNode
  links: { label: string; href: string }[]
  accentColor?: string
  bgColor?: string
}

export function NikeMenu({
  logo,
  links,
  accentColor = '#C9A96E',
  bgColor = '#111111',
}: NikeMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: 64,
          position: 'relative',
          zIndex: 100,
        }}
      >
        <div>{logo}</div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: 32,
            height: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 5,
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            style={{ display: 'block', height: 2, backgroundColor: '#fff', borderRadius: 1 }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            style={{ display: 'block', height: 2, backgroundColor: '#fff', borderRadius: 1 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            style={{ display: 'block', height: 2, backgroundColor: '#fff', borderRadius: 1 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              backgroundColor: bgColor,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                style={{
                  color: '#fff',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  fontWeight: 300,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accentColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#fff'
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
