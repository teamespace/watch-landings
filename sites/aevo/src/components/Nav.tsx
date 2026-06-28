import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TextRollNavigation } from 'skiper-islands'

const links = [
  { label: 'Watches', href: '/watches' },
  { label: 'Straps', href: '/straps' },
  { label: 'About', href: '/about' },
  { label: 'Collabs', href: '/collabs' },
]

export function AevoNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <nav className="max-w-7xl mx-auto h-[68px] px-6 flex items-center justify-between">
        <a href="/" className="text-brand-accent text-2xl font-bold lowercase tracking-tight">
          aevo
        </a>

        <div className="hidden md:flex items-center">
          <TextRollNavigation
            links={links}
            textColor="#111111"
            hoverColor="#2D4A3E"
            fontSize="14px"
          />
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-1 text-brand-primary hover:text-brand-accent transition-colors duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button aria-label="Bag" className="p-1 text-brand-primary hover:text-brand-accent transition-colors duration-200 relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-accent rounded-full" />
          </button>
          <button
            aria-label="Menu"
            className="md:hidden p-1 text-brand-primary"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden overflow-hidden border-t border-black/5 bg-white"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium lowercase tracking-tight hover:text-brand-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
