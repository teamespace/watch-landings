import { VercelNavbar } from 'skiper-islands'

export function AevoNav() {
  return (
    <VercelNavbar
      logo={<span className="text-[#2D4A3E] text-xl font-bold lowercase tracking-tight">aevo</span>}
      links={[
        { label: 'Watches', href: '/watches' },
        { label: 'Straps', href: '/straps' },
        { label: 'About', href: '/about' },
        { label: 'Collabs', href: '/collabs' },
      ]}
      rightSlot={
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button aria-label="Bag" className="p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      }
      borderColor="#E0E0E0"
    />
  )
}
