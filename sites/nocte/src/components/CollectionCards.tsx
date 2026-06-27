import { ExpandOnHover } from 'skiper-islands/card/ExpandOnHover'

const collections = [
  { id: 'nox-36', name: 'Nox 36', price: '$680', img: 'https://picsum.photos/seed/watch+minimal+dark/400/400' },
  { id: 'nox-40', name: 'Nox 40', price: '$780', img: 'https://picsum.photos/seed/watch+product+black/400/400' },
  { id: 'vigil-gmt', name: 'Vigil GMT', price: '$1,200', img: 'https://picsum.photos/seed/watch+steel+strap/400/400' },
  { id: 'vigil-date', name: 'Vigil Date', price: '$920', img: 'https://picsum.photos/seed/watch+leather+classic/400/400' },
]

export function CollectionCards() {
  return (
    <>
      {collections.map((c) => (
        <ExpandOnHover
          key={c.id}
          height={380}
          expandedHeight={440}
          bgColor="#ffffff"
          hoverBgColor="#f0f0f0"
          expandedContent={
            <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]">Explore</span>
          }
        >
          <div className="p-4 flex flex-col h-full">
            <div className="flex-1 bg-gray-100 overflow-hidden mb-4">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-body text-sm font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">{c.name}</h3>
            <p className="font-body text-xs text-[#6B6B6B] mt-1">From {c.price}</p>
          </div>
        </ExpandOnHover>
      ))}
    </>
  )
}
