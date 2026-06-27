import { MinimalCardExpand } from 'skiper-islands/other/MinimalCardExpand'

export function BuildWatch() {
  return (
    <MinimalCardExpand
      cards={[
        {
          id: 'case',
          title: 'Choose case',
          content: <p className="text-[#6B6B6B] text-sm">Select from polished steel, matte black, or bead-blasted titanium. Each case is machined from a single block of 316L stainless steel.</p>,
        },
        {
          id: 'strap',
          title: 'Choose strap',
          content: <p className="text-[#6B6B6B] text-sm">Italian leather, woven canvas, or precision-milled steel bracelet. Quick-release spring bars let you swap in seconds.</p>,
        },
        {
          id: 'result',
          title: 'See the result',
          content: <p className="text-[#6B6B6B] text-sm">Preview your build in real time. Every combination is photographed so you see exactly what you get.</p>,
        },
      ]}
      accentColor="#C9A96E"
      bgColor="#F7F5F2"
    />
  )
}
