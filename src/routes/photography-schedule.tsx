import { useEffect, useState } from 'react'
import { LucideCheck } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { cn, getItem, setItem } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import InstagramIcon from '@/components/ui/instagram-icon'
import { Decor } from '@/assets/svgs'
import images from '@/assets/images'
import CameraIcon from '@/components/ui/camera-icon'

export const Route = createFileRoute('/photography-schedule')({
  component: PhotographySchedule,
})

const photoSections = [
  {
    title: 'Essential Couple Photos',
    color: 'rose',
    photos: [
      'Couple with Officiating Ministers',
      'Couple Alone',
      'Groom Alone',
      'Bride Alone',
    ],
  },
  {
    title: 'Wedding Party',
    color: 'pink',
    photos: [
      'Couple with Best Man & Chief Bridesmaid',
      'Couple with Bridesmaids',
      'Couple with Groomsmen',
      'Couple with Bridesmaids and Groomsmen',
      'Couple with Bridal Train',
      'Bride with Asoebi Girls',
      'Groom with Men on Agbada',
      'Couple with Asoebi Girls and Men on Agbada',
    ],
  },
  {
    title: 'Family Photos',
    color: 'purple',
    photos: [
      "Couple with Groom's Parents",
      "Couple with Bride's Parents",
      'Couple with Both Parents',
      "Couple with Bride's Family",
      "Couple with Groom's Family",
      'Couple with Both Families',
    ],
  },
  {
    title: 'Children in Wedding Party',
    color: 'amber',
    photos: [
      'Bride with Her Little Bride',
      'Groom with His Ring Bearer',
      'Couple with Little Bride and Ring Bearer',
    ],
  },
  {
    title: 'Friends & Groups',
    color: 'blue',
    photos: [
      "Couple with Groom's Colleagues",
      "Couple with Bride's Friends and Well Wishers",
      "Couple with Groom's Friends and Well Wishers",
      'Couple with Friends from Enwanta/Airport Rd Congregation',
      'Couple with Uniport Bolides',
      'Couple with UNIBEN MASCANS',
    ],
  },
]

const colorClasses = {
  rose: {
    border: 'border-rose-200',
    text: 'text-rose-700',
    btnBg: 'bg-rose-100 hover:bg-rose-200',
    checkBg: 'accent-rose-500',
  },
  pink: {
    border: 'border-pink-200',
    text: 'text-pink-700',
    btnBg: 'bg-pink-100 hover:bg-pink-200',
    checkBg: 'accent-pink-500',
  },
  purple: {
    border: 'border-purple-200',
    text: 'text-purple-700',
    btnBg: 'bg-purple-100 hover:bg-purple-200',
    checkBg: 'accent-purple-500',
  },
  amber: {
    border: 'border-amber-200',
    text: 'text-amber-700',
    btnBg: 'bg-amber-100 hover:bg-amber-200',
    checkBg: 'accent-amber-500',
  },
  blue: {
    border: 'border-blue-200',
    text: 'text-blue-700',
    btnBg: 'bg-blue-100 hover:bg-blue-200',
    checkBg: 'accent-blue-500',
  },
  emerald: {
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    btnBg: 'bg-emerald-100 hover:bg-emerald-200',
    checkBg: 'accent-emerald-500',
  },
}

type SectionColor = keyof typeof colorClasses

export default function PhotographySchedule() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    () => getItem('photoChecklist') || {},
  )

  const toggleCheck = (id: string): void => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Set all sections open by default
  const defaultOpenSections = photoSections.map(
    (_, index) => `section-${index}`,
  )

  useEffect(() => {
    setItem('photoChecklist', checkedItems)
  }, [checkedItems])

  return (
    <div className="min-h-screen pb-12">
      <img
        className="fixed inset-0 -z-1 size-full object-cover brightness-80"
        src={images.img2}
        alt="Background"
      />
      {/* Header */}
      <header className="border-b border-gray-500/50 bg-black/10 backdrop-blur-xs clamp-[pt,8,16] clamp-[pb,5,8] text-center px-4">
        <div className="flex justify-center items-center mb-4">
          <CameraIcon className="clamp-[size,7,11]" />
        </div>
        <h1 className="page-heading clamp-[mb,10,16]">
          Photography Schedule
          <Decor className="absolute left-1/2 top-[150%] -z-1 -translate-x-1/2 -translate-y-1/2 clamp-[size,60,100] text-rose-100" />
        </h1>
        <p className="clamp-[text,sm,lg] mb-6">
          Our complete photo checklist for the big day
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 clamp-[text,xs,sm]">
          <span className="border clamp-[px,2,4] clamp-[py,1,2] rounded-full flex items-center gap-2">
            <InstagramIcon className="clamp-[size,4,4.5]" />
            {photoSections.reduce(
              (acc, section) => acc + section.photos.length,
              0,
            )}{' '}
            Total Photos
          </span>
          <span className="border px-4 py-2 rounded-full flex items-center gap-2">
            <LucideCheck className="clamp-[size,4,4.5]" />
            {Object.values(checkedItems).filter(Boolean).length} Completed
          </span>
        </div>
      </header>

      {/* Photo Sections */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Accordion
          type="multiple"
          defaultValue={defaultOpenSections}
          className="space-y-6"
        >
          {photoSections.map((section, sectionIndex) => {
            const colors = colorClasses[section.color as SectionColor]

            return (
              <AccordionItem
                key={sectionIndex}
                value={`section-${sectionIndex}`}
                className={cn(
                  'rounded-lg border overflow-hidden',
                  colors.border,
                )}
              >
                {/* Section Header */}
                <AccordionTrigger
                  className={`w-full px-6 py-4 flex rounded-none items-center justify-between ${colors.btnBg} transition-colors hover:no-underline [&[data-state=open]>svg]:rotate-180 [&_svg]:size-5 [&_svg]:${colors.text}`}
                >
                  <div className="flex items-center clamp-[gap,3,5]">
                    <span className={`clamp-[text,base,xl] ${colors.text}`}>
                      {section.title}
                    </span>
                    <span className="clamp-[text,xs,sm] mt-0.5 text-black">
                      {section.photos.length} photos
                    </span>
                  </div>
                </AccordionTrigger>

                {/* Photo List */}
                <AccordionContent className="px-6 pb-6 pt-4 bg-black/10 backdrop-blur-xs">
                  <div className="space-y-3">
                    {section.photos.map((photo, photoIndex) => {
                      const itemId = `${sectionIndex}-${photoIndex}`
                      const isChecked = checkedItems[itemId]

                      return (
                        <div
                          key={photoIndex}
                          className="flex items-center gap-4 p-3 rounded-lg transition-colors group"
                        >
                          <Checkbox
                            id={itemId}
                            checked={isChecked}
                            onCheckedChange={() => toggleCheck(itemId)}
                            className={cn(
                              `data-[state=checked]:bg-white/90 [&_svg]:text-black`,
                              'clamp-[size,4,5]',
                            )}
                          />
                          <label
                            htmlFor={itemId}
                            className={cn(
                              'cursor-pointer',
                              isChecked && 'line-through opacity-60',
                            )}
                          >
                            {photo}
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Footer */}
        <div className="footer-note mt-12">
          <p className="flex items-center gap-4">
            <CameraIcon className="w-5 h-5" />
            Capturing every precious moment of your special day
          </p>
        </div>
      </div>
    </div>
  )
}
