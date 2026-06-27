import { motion } from 'framer-motion'

interface AppleNavbarProps {
  logo: React.ReactNode
  links: { label: string; href: string }[]
  rightSlot?: React.ReactNode
  bgColor?: string
  textColor?: string
}

export function AppleNavbar({
  logo,
  links,
  rightSlot,
  bgColor = 'rgba(255,255,255,0.95)',
  textColor = '#0A0A0A',
}: AppleNavbarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        height: 56,
        padding: '0 24px',
        backgroundColor: bgColor,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ position: 'absolute', left: 24 }}>{logo}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: textColor,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 400,
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div style={{ position: 'absolute', right: 24 }}>{rightSlot}</div>
    </nav>
  )
}
