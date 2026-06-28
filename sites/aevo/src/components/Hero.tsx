'use client'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fcf5e2]">
      <img
        src="/assets/1.png"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-16 max-w-2xl text-white">
        <h1 className="text-5xl md:text-7xl font-bold lowercase leading-[0.95] tracking-tight mb-5">
          Watches for wherever you end up.
        </h1>
        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-md leading-relaxed">
          Designed in Stockholm. Built to last longer than the season.
        </p>
        <a
          href="/watches"
          className="btn-primary inline-flex items-center gap-2"
        >
          Shop now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
