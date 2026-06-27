import { ScrollRevealGrid, GradientHoverCards } from 'skiper-islands'

interface Product {
  id: string
  name: string
  collection: string
  price: string
  new: boolean
  colors: string[]
}

export function NewArrivalsGrid({ products }: { products: Product[] }) {
  return (
    <ScrollRevealGrid
      columns={4}
      items={products.map(p => ({
        id: p.id,
        content: (
          <GradientHoverCards gradientColor="#2D4A3E">
            <div className="group cursor-pointer">
              <div className="aspect-square bg-[#F4F4F0] mb-3 overflow-hidden relative">
                <img
                  src={`https://source.unsplash.com/400x400/?watch+product+${p.name}`}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {p.new && <span className="absolute top-2 left-2 bg-[#2D4A3E] text-white text-[10px] uppercase tracking-wider px-2 py-0.5">New</span>}
              </div>
              <h3 className="font-medium text-sm lowercase">{p.name}</h3>
              <p className="text-[#888888] text-sm">{p.price}</p>
            </div>
          </GradientHoverCards>
        ),
      }))}
    />
  )
}
