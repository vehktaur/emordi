import {
  Heart,
  Users,
  Cake,
  Music,
  Gift,
  MessageSquare,
  Church,
  UsersRound,
  Wine,
  ThumbsUp,
} from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order-of-service')({
  component: OrderOfService,
})

const programItems = [
  {
    num: 1,
    title: 'Introduction of Chairman',
    subtitle: 'Recognition of Guests',
    icon: Users,
  },
  {
    num: 2,
    title: "Arrival of the Bride and Groom's Parents",
    icon: UsersRound,
  },
  {
    num: 3,
    title: 'Arrival of the Bride & Groom',
    icon: Heart,
  },
  {
    num: 4,
    title: 'Opening Prayer',
    icon: Church,
  },
  {
    num: 5,
    title: "Chairman's Opening Address",
    icon: MessageSquare,
  },
  {
    num: 6,
    title: 'Cutting of the Cake',
    icon: Cake,
  },
  {
    num: 7,
    title: 'Nuptial Dance',
    icon: Music,
  },
  {
    num: 8,
    title: 'Toast to the Bride and Groom',
    icon: Wine,
  },
  {
    num: 9,
    title: 'Presentation of Gifts',
    icon: Gift,
  },
  {
    num: 10,
    title: "Chairman's Closing Remark",
    icon: MessageSquare,
  },
  {
    num: 11,
    title: 'Vote of Thanks by Groom',
    icon: ThumbsUp,
  },
  {
    num: 12,
    title: 'Closing Prayers',
    icon: Church,
  },
]

export default function OrderOfService() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-1">
        <video
          className="size-full object-cover brightness-30"
          autoPlay
          muted
          loop
          src="./videos/vid1.mp4"
        />
      </div>

      {/* Header */}
      <header className=" border-b border-rose-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="clamp-[text,2xl,4xl] mb-3">Order of Service</h1>
          <p className="text-lg ">Join us as we celebrate this special day</p>
        </div>
      </header>

      {/* Program Timeline */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {programItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="border-b border-rose-100 clamp-[p,2,6]"
              >
                <div className="flex items-center gap-4">
                  <span className="clamp-[size,8,12] shrink-0 rounded-full bg-rose-100 flex items-center justify-center clamp-[text,base,lg] font-semibold text-rose-600">
                    {item.num}
                  </span>

                  <div className="flex-1">
                    <h3 className="clamp-[text,sm,xl] font-medium  mb-1">
                      {item.title}
                    </h3>
                    {item.subtitle && <p>{item.subtitle}</p>}
                  </div>
                  <div className="shrink-0 pt-2">
                    <Icon className="clamp-[size,4,6] text-rose-300" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-rose-50 rounded-full px-8 py-3 border border-rose-200 text-foreground">
            <p className="">We look forward to celebrating with you! 💝</p>
          </div>
        </div>
      </div>
    </div>
  )
}
