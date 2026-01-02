import { Heart, MessageSquare, Church } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { Decor } from '@/assets/svgs'

export const Route = createFileRoute('/wedding-program')({
  component: WeddingProgram,
})

interface ProgramSection {
  title: string
  subtitle?: string
  items: {
    num: number
    title: string
    icon?: typeof Heart
  }[]
}

const sections: ProgramSection[] = [
  {
    title: 'Officiating Ministers',
    items: [
      {
        num: 1,
        title: 'Bro Isichei',
      },
      {
        num: 2,
        title: 'Bro Emmanuel Akinkugbe',
      },
    ],
  },

  {
    title: 'Order of Service',
    subtitle: 'Join us as we celebrate this special day',
    items: [
      {
        num: 1,
        title: 'Opening Song (131) and Prayer',
        icon: Church,
      },
      {
        num: 2,
        title: 'Wedding Discourse',
        icon: MessageSquare,
      },
      {
        num: 3,
        title: 'Exchange of Vows',
        icon: Heart,
      },
      {
        num: 4,
        title: 'Announcements',
        icon: MessageSquare,
      },
      {
        num: 5,
        title: 'Closing Song (132) and Prayer',
        icon: Church,
      },
    ],
  },
]

export default function WeddingProgram() {
  return (
    <div className="min-h-screen py-12 px-5">
      <div className="fixed inset-0 -z-1">
        <video
          className="size-full object-cover brightness-30"
          autoPlay
          muted
          loop
          src="./videos/vid1.mp4"
        />
      </div>
      <h1 className="mb-20 mt-10 clamp-[text,2xl,4xl] font-semibold text-center relative">
        <Decor className="absolute left-1/2 -top-[20%] -translate-x-1/2 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
        <Decor className="absolute left-1/2 top-[150%] rotate-180 -translate-x-1/2 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
        Wedding Program
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

            <div className="divide-y divide-rose-100 ">
              {items.map((item) => {
                const Icon = item?.icon
                return (
                  <div
                    key={item.num}
                    className="flex items-center gap-4 py-3 px-4"
                  >
                    <span className="size-8 shrink-0 rounded-full bg-rose-50 flex items-center justify-center font-medium text-rose-800">
                      {item.num}
                    </span>

                    <div className="flex-1">
                      <h3 className="">{item.title}</h3>
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

        <article className="program-section"></article>
      </div>

      {/* Footer note */}
      <div className="w-fit mx-auto mt-12 bg-rose-50 rounded-full clamp-[px,4,6] py-2 border border-rose-200 text-foreground">
        <p className="">We look forward to celebrating with you! 💝</p>
      </div>
    </div>
  )
}
