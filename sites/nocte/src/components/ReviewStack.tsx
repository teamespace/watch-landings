import { CardStackScroll } from 'skiper-islands/card/CardStackScroll'

export function ReviewStack() {
  return (
    <CardStackScroll
      cards={[
        {
          id: 'r1',
          content: (
            <div className="bg-white p-10 border border-[#E8E6E3] max-w-xl mx-auto">
              <div className="text-[#C9A96E] text-sm mb-4">★★★★★</div>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.7] mb-4">
                "I've had my Nox 36 for about eight months now. It's on my wrist every day. The size is perfect for my 6.5-inch wrist and the Miyota movement has been accurate to about +5 seconds a day. I forgot I was wearing it after the first week. That's the whole point, right?"
              </p>
              <span className="text-[11px] font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">— Marcus</span>
            </div>
          ),
        },
        {
          id: 'r2',
          content: (
            <div className="bg-white p-10 border border-[#E8E6E3] max-w-xl mx-auto">
              <div className="text-[#C9A96E] text-sm mb-4">★★★★★</div>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.7] mb-4">
                "Was between this and a Seiko for months. Glad I went with the Vigil. The lume is incredible — lasts all night. I work night shifts as a nurse and I can read the time without waking anyone up."
              </p>
              <span className="text-[11px] font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">— Samira</span>
            </div>
          ),
        },
        {
          id: 'r3',
          content: (
            <div className="bg-white p-10 border border-[#E8E6E3] max-w-xl mx-auto">
              <div className="text-[#C9A96E] text-sm mb-4">★★★★☆</div>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.7] mb-4">
                "Bought the Vigil GMT for a trip to Japan. The second time zone is actually useful, not just a design feature. Only wish the bracelet had micro-adjust. Otherwise, it punches way above its price point."
              </p>
              <span className="text-[11px] font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">— David</span>
            </div>
          ),
        },
        {
          id: 'r4',
          content: (
            <div className="bg-white p-10 border border-[#E8E6E3] max-w-xl mx-auto">
              <div className="text-[#C9A96E] text-sm mb-4">★★★★★</div>
              <p className="text-[#6B6B6B] text-[15px] leading-[1.7] mb-4">
                "This is my first proper watch. I spent weeks reading and watching reviews before buying. The Nocte arrived and I just knew. It felt smaller and more elegant than the photos suggested. Exactly what I wanted."
              </p>
              <span className="text-[11px] font-bold text-[#1A1A1A] tracking-[0.15em] uppercase">— Elena</span>
            </div>
          ),
        },
      ]}
    />
  )
}
