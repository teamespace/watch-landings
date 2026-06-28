import { motion } from 'framer-motion'

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
      {products.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.55,
            delay: i * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-brand-surface mb-4 overflow-hidden relative">
              <img
                src={`https://picsum.photos/seed/watch+minimal+${p.name}/600/750`}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <h3 className="font-medium text-base lowercase tracking-tight text-brand-primary">
              {p.name}
            </h3>
            <p className="text-sm text-brand-text-secondary mt-0.5 mb-3">{p.price}</p>
            <div className="flex items-center gap-2">
              {p.colors.map((c, idx) => (
                <span
                  key={idx}
                  className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                  style={{ backgroundColor: c }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
