import { PerspectiveCarousel, ExpandOnHover } from 'skiper-islands'

interface Product {
  id: string
  name: string
  collection: string
  price: string
  new: boolean
  colors: string[]
}

export function BestsellersCarousel({ products }: { products: Product[] }) {
  return (
    <PerspectiveCarousel
      items={products.map(p => ({
        id: p.id,
        label: p.name,
        content: (
          <ExpandOnHover
            width={280}
            height={360}
            expandedContent={
              <div className="flex gap-1.5 px-4 pb-3">
                {p.colors.map(c => (
                  <span className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                ))}
              </div>
            }
          >
            <div className="p-0">
              <div className="aspect-square bg-[#F4F4F0] overflow-hidden">
                <img
                  src={`https://source.unsplash.com/400x400/?watch+minimal+${p.name}`}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-4 pt-3">
                <h3 className="font-medium text-sm lowercase">{p.name}</h3>
                <p className="text-[#888888] text-sm">{p.price}</p>
              </div>
            </div>
          </ExpandOnHover>
        ),
      }))}
      autoPlay={true}
      interval={4000}
    />
  )
}
