import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OliverParallax, SienaParallax } from 'skiper-islands'

interface Slide {
  id: string
  img: string
  collection: string
  tagline: string
  cta: string
  parallax: 'oliver' | 'siena'
  href: string
}

const slides: Slide[] = [
  {
    id: 'dusk',
    img: 'https://picsum.photos/seed/watch+tropical+beach+wrist/1600/900',
    collection: 'GMT Transit Dusk',
    tagline: 'A watch that knows what time it is wherever you are.',
    cta: 'Discover',
    parallax: 'oliver',
    href: '/collections/gmt-transit',
  },
  {
    id: 'dawn',
    img: 'https://picsum.photos/seed/gmt+watch+travel+editorial/1600/900',
    collection: 'GMT Transit Dawn',
    tagline: 'First light. Any time zone.',
    cta: 'Discover',
    parallax: 'siena',
    href: '/collections/gmt-transit',
  },
  {
    id: 'sunset',
    img: 'https://picsum.photos/seed/watch+sunset+warm+light/1600/900',
    collection: 'Astronomer',
    tagline: 'Built for the hours between here and there.',
    cta: 'Explore',
    parallax: 'oliver',
    href: '/collections/astronomer',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5500)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[active]
  const ParallaxComponent = slide.parallax === 'siena' ? SienaParallax : OliverParallax

  return (
    <section className="w-full bg-brand-background">
      <div className="relative w-full h-[62vh] md:h-[72vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <ParallaxComponent>
              <div className="w-full h-[62vh] md:h-[72vh]">
                <img
                  src={slide.img}
                  alt={slide.collection}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </ParallaxComponent>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActive(idx)}
              className={`h-1 transition-all duration-500 ${
                idx === active ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="py-10 md:py-14 px-6 max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[11px] uppercase tracking-label text-brand-text-secondary mb-3">
              {slide.collection}
            </p>
            <p className="text-lg md:text-xl text-brand-primary mb-7 leading-relaxed max-w-2xl mx-auto">
              {slide.tagline}
            </p>
            <a
              href={slide.href}
              className="inline-block bg-brand-accent text-white px-10 py-3 text-sm font-medium tracking-wide hover:bg-brand-accent-hover transition-colors duration-300"
            >
              {slide.cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
