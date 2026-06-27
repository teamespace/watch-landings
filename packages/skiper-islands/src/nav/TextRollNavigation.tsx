import { motion } from 'framer-motion'

interface TextRollNavigationProps {
  links: { label: string; href: string }[]
  textColor?: string
  hoverColor?: string
  fontSize?: string
}

export function TextRollNavigation({
  links,
  textColor = '#111111',
  hoverColor = '#888888',
  fontSize = '14px',
}: TextRollNavigationProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{
            color: textColor,
            textDecoration: 'none',
            fontSize,
            fontWeight: 500,
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            height: '1.2em',
            lineHeight: '1.2em',
          }}
        >
          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            style={{ display: 'block' }}
          >
            <span>{link.label}</span>
            <span style={{ position: 'absolute', top: '100%', left: 0, color: hoverColor }}>
              {link.label}
            </span>
          </motion.span>
        </a>
      ))}
    </div>
  )
}
