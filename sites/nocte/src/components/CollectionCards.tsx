import { ScrollImagesReveal } from 'skiper-islands/reveal/ScrollImagesReveal'

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
        <ScrollImagesReveal key={c.id} direction="up" className="h-full">
          <a href="#" className="group block h-full">
            <div className="relative bg-[#E8E6E3] aspect-square overflow-hidden mb-5">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              <span className="absolute bottom-5 left-5 text-[11px] tracking-[0.25em] uppercase text-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore
              </span>
            </div>
            <h3 className="font-body text-sm font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">
              {c.name}
            </h3>
            <p className="text-xs text-[#6B6B6B] mt-1">From {c.price}</p>
          </a>
        </ScrollImagesReveal>
      ))}
    </>
  )
}
