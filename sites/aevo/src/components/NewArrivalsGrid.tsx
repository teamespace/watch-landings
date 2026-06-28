import { motion } from 'framer-motion'
import { GradientHoverCards } from 'skiper-islands'

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
          <GradientHoverCards gradientColor="#2D4A3E" gradientOpacity={0.06} className="bg-brand-surface rounded-sm">
            <div className="group cursor-pointer p-2 pb-4">
              <div className="aspect-square bg-white mb-4 overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/watch+product+${p.name}/600/600`}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {p.new && (
                  <span className="absolute top-3 left-3 bg-brand-accent text-white text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 font-medium">
                    New
                  </span>
                )}
              </div>
              <h3 className="font-medium text-base lowercase tracking-tight text-brand-primary px-1">
                {p.name}
              </h3>
              <p className="text-sm text-brand-text-secondary mt-0.5 px-1">{p.price}</p>
            </div>
          </GradientHoverCards>
        </motion.div>
      ))}
    </div>
  )
}
