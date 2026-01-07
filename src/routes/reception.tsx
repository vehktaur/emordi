import { createFileRoute } from '@tanstack/react-router'
import { receptionProgram } from '@/data'

export const Route = createFileRoute('/reception')({
  component: Reception,
})

function Reception() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="page-heading">Reception Program</h1>

          <p className="text-lg ">
            Join us as we celebrate this joyous occasion
          </p>
        </div>

        {/* Program Items */}
        <div className="space-y-6">
          {receptionProgram.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5  group-hover:w-2 transition-all duration-300" />

              <div className="flex items-center gap-6 p-6 pl-8">
                {/* Number Circle */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold">{item.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="clamp-[text,base,lg]">{item.title}</h3>
                  {item.subtitle && (
                    <p className="italic mt-1">{item.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="footer-note mt-20">
          <p>Thank you for being part of our special day</p>
        </div>
      </div>
    </div>
  )
}
