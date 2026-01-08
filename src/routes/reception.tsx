import { createFileRoute } from '@tanstack/react-router'
import { receptionProgram } from '@/data'
import { Decor } from '@/assets/svgs'
import images from '@/assets/images'

export const Route = createFileRoute('/reception')({
  component: Reception,
})

function Reception() {
  return (
    <div className="min-h-screen pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 clamp-[pt,8,16]">
          <img
            src={images.glasses}
            className="clamp-[size,8,12] invert mb-4 mx-auto"
          />

          <h1 className="page-heading clamp-[mb,10,16]">
            Reception
            <Decor className="absolute left-1/2 top-[150%] -z-1 -translate-x-1/2 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
          </h1>

          <p className="text-lg ">
            Join us for an evening of celebration, food, and dancing!
          </p>
        </header>

        {/* Program Items */}
        <div className="space-y-6">
          {receptionProgram.map((item, index) => (
            <div
              key={index}
              className="group relative shadow-md hover:shadow-xl shadow-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5  group-hover:w-2 transition-all bg-white duration-300" />

              <div className="flex items-center gap-6 clamp-[px,3,6] clamp-[py,2,4] clamp-[ps,5,8]">
                {/* Number Circle */}
                <div className="clamp-[size,8,16] rounded-full flex items-center shrink-0 justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 clamp-[text,base,xl] font-bold">
                  {item.number}
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="clamp-[text,base,lg]">{item.title}</h3>
                  {item.subtitle && (
                    <p className="italic mt-1 clamp-[text,xs,sm]">
                      {item.subtitle}
                    </p>
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
