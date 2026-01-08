import { createFileRoute, Link } from '@tanstack/react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import images from '@/assets/images'
import HeartIcon from '@/components/ui/heart-icon'
import { LucideChevronRight } from 'lucide-react'

const { img1, img2, img3, img4, img5, img6 } = images
const slideImages = [img1, img2, img3, img4, img5, img6]
const backgroundImages = [
  '/img/bg1.png',
  '/img/bg2.jpg',
  '/img/bg3.jpg',
  '/img/bg4.jpg',
  '/img/bg5.jpg',
]

const weddingDate = new Date('2026-01-24T10:00:00')

function Home() {
  const [randomBg] = useState(
    () => backgroundImages[Math.floor(Math.random() * backgroundImages.length)],
  )

  return (
    <div className="flex items-center flex-col sm:flex-row w-full max-w-dvw dark:bg-white">
      <section className="h-svh sm:h-screen flex flex-col min-w-2xs relative w-full sm:w-1/2 xl:w-[62%] overflow-clip">
        <div className="absolute bottom-16 inset-x-0 text-center z-2 flex flex-col gap-2 text-white">
          <h1 className="clamp-[text,4xl,6xl] font-bold text-center font-great-vibes tracking-wider">
            Emordi & Nnadi
          </h1>
          <p className="clamp-[text,sm,lg]">Our Forever Begins</p>
          <p> 24.01.2026</p>
        </div>

        <Swiper
          className="size-full"
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          speed={2000}
        >
          {slideImages.map((img) => (
            <SwiperSlide key={img}>
              <div className="size-full overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="object-cover size-full brightness-75"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="h-screen items-center relative clamp-[gap,3,4] w-full text-white sm:w-1/2 xl:w-[38%] flex flex-col overflow-hidden justify-center min-h-screen">
        <div
          className="absolute inset-0 -z-1  bg-cover brightness-50"
          style={{
            backgroundImage: `url(${randomBg})`,
          }}
        />
        <HeartIcon
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse max-w-[125%] clamp-[size,130,160] text-rose-100"
          strokeWidth={0.35}
        />
        <p className="font-medium clamp-[text,xl,2xl]">
          "Two hearts, one{' '}
          <span className="text-rose-500 animate-pulse">love</span>"
        </p>
        <p className="text-center clamp-[text,lg,xl]">
          Saturday <br />
          January 24<sup>th</sup>, 2026
        </p>

        <p className="text-center clamp-[text,lg,xl]"> Benin City </p>
        <CountDown />

        <Link
          className="flex items-center gap-4 absolute bottom-36 font-medium hover:after:content-[''] after:absolute after:block after:w-0 after:h-0.5 after:bg-rose-200 after:rounded-full text-rose-100 after:transition-all after:duration-300 hover:after:w-1/2 after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:origin-center cursor-pointer clamp-[text,base,lg]"
          to="/wedding-program"
        >
          View Program <LucideChevronRight className="animate-wiggle size-7" />
        </Link>

        <div className="absolute bottom-4 text-center">
          <h3 className="font-medium">Wedding Location</h3>
          <address className="clamp-[text,xs,sm]">
            Kingdom Hall of Jehovah&apos;s Witness,
            <br />
            30 Ogboro Street, Off Oko Central, Airport Road,
            <br />
            Benin City, Edo State.
          </address>
        </div>
      </section>
    </div>
  )
}

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(countdown())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countdown())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function countdown() {
    const now = new Date()
    const distance = weddingDate.getTime() - now.getTime()

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString()
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
      .toString()
      .padStart(2, '0')
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0')

    return { days, hours, minutes, seconds }
  }

  return (
    <div className="grid grid-flow-col clamp-[gap,1.5,4] text-center auto-cols-max">
      <div className="flex flex-col items-center">
        <span className="countdown font-mono clamp-[text,lg,2xl]">
          <span
            style={{ '--value': timeLeft.days } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.days}
          >
            {timeLeft.days}
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono clamp-[text,lg,2xl]">
          <span
            style={{ '--value': timeLeft.hours } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.hours}
          >
            {timeLeft.hours}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono clamp-[text,lg,2xl]">
          <span
            style={{ '--value': timeLeft.minutes } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.minutes}
          >
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono clamp-[text,lg,2xl]">
          <span
            style={{ '--value': timeLeft.seconds } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.seconds}
          >
            {timeLeft.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        title: 'Emordi & Nnadi',
      },
      {
        name: 'description',
        content:
          'Join us as we celebrate the union of Emordi and Nnadi on January 24th, 2026 in Benin City.',
      },
    ],
  }),
})
