import { PanelLeftIcon } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'
import { Link } from '@tanstack/react-router'

const links = [
  { label: 'Welcome', to: '/' },
  { label: 'Wedding Program', to: '/wedding-program' },
  { label: 'Photography Schedule', to: '/photography-schedule' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'RSVP', to: '/rsvp' },
]

const Header = () => {
  return (
    <header className="px-5 h-20 content-center fixed top-0 inset-x-0 z-50">
      <Sheet>
        <SheetTrigger className="ms-auto block cursor-pointer text-white">
          <PanelLeftIcon className="clamp-[size,5,6]" />
        </SheetTrigger>
        <SheetContent className="bg-transparent backdrop-blur-md border-rose-200 text-white">
          <SheetHeader className="mt-12">
            <SheetTitle className="clamp-[text,2xl,4xl] text-white font-bold text-center font-great-vibes tracking-wider">
              Emordi & Nnadi
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-12">
            <ul className="flex flex-col gap-4">
              {links.map(({ label, to }) => (
                <li>
                  <Link
                    to={to}
                    className="font-medium transition-colors block py-2 px-5 hover:bg-white/10 text-center sm:text-start"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
export default Header
