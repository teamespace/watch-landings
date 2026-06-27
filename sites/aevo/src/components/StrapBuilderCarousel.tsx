import { CreativeCarousel } from 'skiper-islands'

export function StrapBuilderCarousel() {
  return (
    <CreativeCarousel
      slides={[
        {
          id: 'strap-1',
          content: (
            <div className="w-64">
              <img src="https://source.unsplash.com/400x500/?watch+strap+leather+brown" alt="Brown leather strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-3 text-sm font-medium lowercase">Harvest leather</p>
            </div>
          ),
          caption: 'Warm brown, ages beautifully',
        },
        {
          id: 'strap-2',
          content: (
            <div className="w-64">
              <img src="https://source.unsplash.com/400x500/?watch+strap+nato+green" alt="Green NATO strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-3 text-sm font-medium lowercase">Forest NATO</p>
            </div>
          ),
          caption: 'Lightweight, breathable, tough',
        },
        {
          id: 'strap-3',
          content: (
            <div className="w-64">
              <img src="https://source.unsplash.com/400x500/?watch+strap+mesh+steel" alt="Steel mesh strap" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <p className="mt-3 text-sm font-medium lowercase">Steel mesh</p>
            </div>
          ),
          caption: 'Dressed up or down, always works',
        },
      ]}
      height={500}
    />
  )
}
