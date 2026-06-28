import { motion } from 'framer-motion'
import { ParallaxImage } from 'skiper-islands/effects/ParallaxImage'
import { ThreeDRollingText } from 'skiper-islands/text/ThreeDRollingText'

export function FeaturedBlock() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <ParallaxImage depth={0.12} className="h-[55vh] md:h-[75vh]">
            <img
              src="https://picsum.photos/seed/watch+leather+strap+ambient/600/700"
              alt="Featured Nocte watch"
              className="w-full h-full object-cover"
            />
          </ParallaxImage>
        </motion.div>

        <motion.div
          className="md:col-span-5 md:pl-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="block text-[11px] tracking-[0.25em] uppercase text-[#C9A96E] mb-6">
            Featured
          </span>

          <ThreeDRollingText
            text="Vigil Date"
            as="h2"
            color="#ffffff"
            fontSize="clamp(2.5rem, 5vw, 4.5rem)"
            fontWeight={600}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          />

          <p className="text-white/70 text-[15px] leading-[1.7] max-w-md mb-8">
            Japanese Miyota 9015 movement, 42-hour power reserve. 316L stainless
            steel case, 40mm diameter, 100m water resistance. Sapphire crystal
            with double AR coating.
          </p>

          <p className="font-display text-3xl text-white mb-10">$920</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-[#C9A96E] text-[#111111] px-10 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-[#b8944f] transition-colors"
            >
              Add to cart
            </a>
            <a
              href="#"
              className="border border-white/30 text-white px-10 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:border-white hover:bg-white/5 transition-colors"
            >
              View details
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
