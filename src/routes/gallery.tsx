import { Decor } from '@/assets/svgs'
import InstagramIcon from '@/components/ui/instagram-icon'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      {/* Header */}
      <header className="border-b border-gray-500/50  backdrop-blur-xs clamp-[pt,8,16] clamp-[pb,5,8] text-center px-4">
        <div className="flex justify-center items-center mb-4">
          <InstagramIcon className="clamp-[size,7,11]" />
        </div>
        <h1 className="page-heading clamp-[mb,10,16]">
          Gallery
          <Decor className="absolute left-1/2 top-[150%] -z-1 -translate-x-1/2 -translate-y-1/2 clamp-[size,30,50] text-rose-100" />
        </h1>
      </header>
    </div>
  )
}
