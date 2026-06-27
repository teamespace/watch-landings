import { NikeMenu } from 'skiper-islands/nav/NikeMenu'

export function MobileNav() {
  return (
    <NikeMenu
      logo={<span className="font-display text-2xl tracking-wider text-white">nocte</span>}
      links={[
        { label: 'Collections', href: '#collections' },
        { label: 'Lookbook', href: '#lookbook' },
        { label: 'About', href: '#about' },
      ]}
      accentColor="#C9A96E"
      bgColor="#111111"
    />
  )
}
