import { Music } from 'lucide-react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { Hymn } from '@/types'

export function HymnCard({
  hymn: { showVersesNumbers = true, ...hymn },
}: {
  hymn: Hymn
}) {
  return (
    <AccordionItem
      value={`hymn-${hymn.number}`}
      className="bg-rose-50/10 backdrop-blur-sm rounded-lg border border-rose-200"
    >
      <AccordionTrigger className="clamp-[px,3,6] clamp-[py,1.5,4] hover:bg-rose-100/10 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&_svg]:size-5 [&_svg]:text-rose-200">
        <div className="flex items-center gap-3">
          <div className="clamp-[size,7,10] rounded-full bg-rose-200 flex items-center justify-center shrink-0">
            <Music className="clamp-[size,4,5] text-rose-800!" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-rose-100">
              Song {hymn.number} {hymn.title}
            </h3>
            <p className="text-sm text-rose-200">{hymn.scripture}</p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-6 pb-6 pt-4">
        <div className="space-y-6">
          {hymn.verses.map((verse, idx) => (
            <div key={`verse-${verse.number}`}>
              {/* Verse */}
              <div className="mb-4 relative">
                {showVersesNumbers && (
                  <p className="font-semibold text-rose-300 mb-2 absolute -left-1 top-[1.5px]">
                    {verse.number}.
                  </p>
                )}
                <div className="pl-4 space-y-1">
                  {verse.lines.map((line, lineIdx) => (
                    <p key={lineIdx} className="text-rose-100 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Chorus */}
              {hymn?.chorus && hymn.chorus[idx] && (
                <div className="bg-rose-100/10 rounded-md p-4 border-l-4 border-rose-300">
                  <p className="font-semibold text-rose-300 mb-2">
                    (CHORUS {hymn.chorus[idx].number})
                  </p>
                  <div className="space-y-1">
                    {hymn.chorus[idx].lines.map((line, lineIdx) => (
                      <p
                        key={lineIdx}
                        className="text-rose-100 leading-relaxed italic"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* See Also */}
          {hymn.seeAlso && (
            <div className="pt-4 border-t border-rose-200">
              <p className="text-sm text-rose-200">
                <span className="font-semibold">See also:</span> {hymn.seeAlso}
              </p>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
