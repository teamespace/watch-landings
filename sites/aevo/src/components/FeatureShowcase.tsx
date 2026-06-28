'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    title: 'Titanium. So strong. So light. So Pro.',
    desc: 'Grade 5 titanium with a new thermomechanical processing treatment creates a stronger, lighter, more premium feel.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=800&fit=crop',
    color: '#E8C97E',
  },
  {
    title: 'Precision engineering meets timeless design.',
    desc: 'Sapphire crystal glass with anti-reflective coating protects a dial crafted to within 0.01mm tolerances.',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=800&fit=crop',
    color: '#2D4A3E',
  },
  {
    title: '20 days of battery. Zero compromises.',
    desc: 'Our new energy-efficient movement powers through three weeks on a single charge. Never think about battery again.',
    image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&h=800&fit=crop',
    color: '#4A4A4A',
  },
  {
    title: '100m water resistance. Your daily companion.',
    desc: 'Take it from the boardroom to the beach. Tested to 10 ATM with a screw-down crown for ultimate peace of mind.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=800&fit=crop',
    color: '#C4A882',
  },
]

const colors = ['#2D4A3E', '#E8C97E', '#111111', '#C4A882', '#4A4A4A', '#1A3A5C']

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState('#2D4A3E')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const feature = features[activeIndex]

  return (
    <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-4 block">Why Aevo</span>
          <h2 className="text-4xl md:text-6xl font-bold lowercase leading-[1.05] tracking-tight text-brand-primary">
            Built different.
            <br />
            <span className="text-brand-accent">On purpose.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative mx-auto w-[280px] md:w-[360px] aspect-[3/4]">
              <div
                className="absolute inset-0 rounded-[3rem] shadow-2xl"
                style={{
                  background: `linear-gradient(145deg, ${selectedColor}22, ${selectedColor}44)`,
                  transform: 'rotate(-3deg)',
                }}
              />
              <div className="relative size-full rounded-[3rem] overflow-hidden border-8 border-zinc-900/10 shadow-xl bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={feature.image}
                    alt={feature.title}
                    className="size-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-3 flex-wrap">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`size-8 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === c
                      ? 'border-brand-primary scale-110 shadow-md'
                      : 'border-transparent scale-100'
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`Select color ${c}`}
                />
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-bold lowercase leading-[1.1] tracking-tight text-brand-primary">
              {feature.title}
            </h3>
            <p className="text-base text-brand-text-secondary leading-relaxed max-w-md">
              {feature.desc}
            </p>

            <div className="flex gap-3 mt-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? 'w-10 bg-brand-primary'
                      : 'w-3 bg-black/10 hover:bg-black/20'
                  }`}
                  aria-label={`Go to feature ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              layout
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="group cursor-pointer rounded-2xl border border-black/5 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                className="mb-4 size-10 rounded-xl flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: f.color }}
              >
                {i + 1}
              </div>
              <h4 className="text-lg font-semibold lowercase tracking-tight text-brand-primary mb-2">
                {f.title.split('.')[0]}.
              </h4>
              <AnimatePresence initial={false}>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                      {f.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
