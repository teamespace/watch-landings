import { CreativeCarousel } from 'skiper-islands'

export function StrapBuilderCarousel() {
  return (
    <CreativeCarousel
      slides={[
        {
          id: 'strap-1',
          content: (
            <div className="w-72 md:w-80">
              <img src="https://picsum.photos/seed/watch+strap+leather+brown/600/750" alt="Brown leather strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-4 text-base font-medium lowercase tracking-tight">Harvest leather</p>
            </div>
          ),
          caption: 'Warm brown, ages beautifully',
        },
        {
          id: 'strap-2',
          content: (
            <div className="w-72 md:w-80">
              <img src="https://picsum.photos/seed/watch+strap+nato+green/600/750" alt="Green NATO strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-4 text-base font-medium lowercase tracking-tight">Forest NATO</p>
            </div>
          ),
          caption: 'Lightweight, breathable, tough',
        },
        {
          id: 'strap-3',
          content: (
            <div className="w-72 md:w-80">
              <img src="https://picsum.photos/seed/watch+strap+mesh+steel/600/750" alt="Steel mesh strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-4 text-base font-medium lowercase tracking-tight">Steel mesh</p>
            </div>
          ),
          caption: 'Dressed up or down, always works',
        },
      ]}
      height={500}
    />
  )
}
