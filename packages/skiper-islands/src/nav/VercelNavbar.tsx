import { motion } from 'framer-motion'

interface VercelNavbarProps {
  logo: React.ReactNode
  links: { label: string; href: string; children?: { label: string; href: string }[] }[]
  rightSlot?: React.ReactNode
  bgColor?: string
  textColor?: string
  borderColor?: string
}

export function VercelNavbar({
  logo,
  links,
  rightSlot,
  bgColor = '#FFFFFF',
  textColor = '#111111',
  borderColor = '#E0E0E0',
}: VercelNavbarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        padding: '0 24px',
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div>{logo}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: textColor,
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {link.label}
              {link.children && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: bgColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: 8,
                    padding: 8,
                    minWidth: 180,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  }}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      style={{
                        display: 'block',
                        padding: '8px 12px',
                        color: textColor,
                        textDecoration: 'none',
                        fontSize: 13,
                        borderRadius: 4,
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div>{rightSlot}</div>
    </nav>
  )
}
