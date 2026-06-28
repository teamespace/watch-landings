'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fcf5e2] flex flex-col items-center justify-center text-[#1b1b1b]">
      <h2
        ref={textRef}
        className="max-md:text-[10vw] text-center text-[9vw] font-semibold leading-[.8] tracking-tight opacity-0 translate-y-8 transition-all duration-700"
      >
        Watches for wherever
        <br />
        you end up.
      </h2>

      <p className="mt-10 max-md:mt-8 max-md:w-[85vw] max-md:text-[3.7vw] w-[40%] text-center text-[1.3vw] leading-[1.3] tracking-tight text-[#1b1b1b]/75">
        Designed in Stockholm. Built to last longer than the season.
      </p>

      <a
        href="/watches"
        className="mt-10 max-md:mt-8 max-md:px-8 max-md:py-3 max-md:text-[4vw] rounded-full bg-[#1b1b1b] px-6 py-2 text-[1.25vw] font-semibold text-white transition-transform duration-300 hover:scale-105"
      >
        Shop now
      </a>
    </section>
  )
}
