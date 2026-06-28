import { MinimalCardExpand } from 'skiper-islands/other/MinimalCardExpand'

export function BuildWatch() {
  return (
    <MinimalCardExpand
      cards={[
        {
          id: 'case',
          title: '01 — Choose case',
          content: (
            <p className="text-[#6B6B6B] text-[15px] leading-[1.7]">
              Select from polished steel, matte black, or bead-blasted titanium.
              Each case is machined from a single block of 316L stainless steel.
            </p>
          ),
        },
        {
          id: 'strap',
          title: '02 — Choose strap',
          content: (
            <p className="text-[#6B6B6B] text-[15px] leading-[1.7]">
              Italian leather, woven canvas, or precision-milled steel bracelet.
              Quick-release spring bars let you swap in seconds.
            </p>
          ),
        },
        {
          id: 'result',
          title: '03 — See the result',
          content: (
            <p className="text-[#6B6B6B] text-[15px] leading-[1.7]">
              Preview your build in real time. Every combination is photographed
              so you see exactly what you get.
            </p>
          ),
        },
      ]}
      accentColor="#C9A96E"
      bgColor="#F7F5F2"
    />
  )
}
