import { AppleFeatureBlock } from 'skiper-islands/other/AppleFeatureBlock'

export function FeaturedBlock() {
  return (
    <AppleFeatureBlock
      title="Vigil Date"
      subtitle="Featured"
      body="Japanese Miyota 9015 movement, 42-hour power reserve. 316L stainless steel case, 40mm diameter, 100m water resistance. Sapphire crystal with double AR coating."
      mediaSlot={
        <img
          src="https://source.unsplash.com/600x700/?watch+leather+strap+ambient"
          alt="Featured Nocte watch"
          className="w-full h-full object-cover"
        />
      }
      cta={
        <div className="flex gap-4 mt-6">
          <a href="#" className="bg-[#C9A96E] text-white px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[#b8944f] transition-colors">Add to cart</a>
          <a href="#" className="border border-white/30 text-white px-8 py-3 text-sm tracking-[0.2em] uppercase hover:border-white transition-colors">View details</a>
        </div>
      }
      bgColor="#111111"
      textColor="#ffffff"
    />
  )
}
