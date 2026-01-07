import { createFileRoute } from '@tanstack/react-router'
import { Decor } from '@/assets/svgs'
import { HymnCard } from '@/components/hymn-card'
import { hymns, programSections as sections } from '@/data'
import { Accordion } from '@/components/ui/accordion'

export const Route = createFileRoute('/wedding-program')({
  component: WeddingProgram,
})

export default function WeddingProgram() {
  return (
    <div className="py-12 px-5">
      <div className="fixed inset-0 -z-1">
        <video
          className="size-full object-cover brightness-40"
          autoPlay
          muted
          loop
        >
          <source
            src="/videos/vid2.mp4"
            media="(min-width: 1024px)"
            type="video/mp4"
          />
          <source src="/videos/vid1.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="mb-20 mt-10">
        <Decor className="absolute left-1/2 -top-[40%] -translate-x-1/2 rotate-180 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
        Wedding Program
        <Decor className="absolute left-1/2 top-[150%]  -translate-x-1/2 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
      </h1>

      <div className="grid gap-6">
        {sections.map(({ title, subtitle, items }) => (
          <article className="program-section">
            {/* Header */}
            <header className="text-center w-fit mx-auto clamp-[px,4,10]">
              <h1 className="heading">{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </header>

            <hr className="border-rose-100 mt-4 mb-2 w-24 mx-auto" />

            {/* Program Timeline */}
            <div className="divide-y divide-rose-100 overflow-x-clip">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.num}
                    className="flex items-center gap-4 clamp-[py,2,3] clamp-[px,1.5,4] hover:translate-x-4 transition-transform duration-300"
                  >
                    <span className="size-8 shrink-0 rounded-full bg-rose-50 flex items-center justify-center font-medium text-rose-800">
                      {item.num}
                    </span>

                    <div className="flex-1">
                      <h3 className="">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-sm text-rose-100">{item.subtitle}</p>
                      )}
                    </div>
                    {Icon && (
                      <div className="shrink-0">
                        <Icon className="clamp-[size,4,5] text-rose-200" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </article>
        ))}

        {/* Hymns Section */}
        <article className="program-section">
          <header className="text-center w-fit mx-auto clamp-[px,4,10]">
            <h1 className="heading">Songs</h1>
            <p>Click to view full lyrics</p>
          </header>

          <hr className="border-rose-100 mt-4 mb-6 w-24 mx-auto" />

          <Accordion type="single" collapsible className="w-full space-y-4">
            {hymns.map((hymn) => (
              <HymnCard key={hymn.number} hymn={hymn} />
            ))}
          </Accordion>
        </article>
      </div>

      {/* Footer note */}
      <div className="footer-note">
        <p className="">We look forward to celebrating with you! 💝</p>
      </div>
    </div>
  )
}
