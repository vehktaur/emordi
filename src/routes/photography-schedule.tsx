import { useState } from 'react'
import { Camera, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

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
      'Couple with Worship Harmony Crew',
      'Couple with Uniport Bolides',
      "Couple with UNIBEN Alumni's",
      'Couple with Delta State Polytechnic Ozoro/Ogwashi Uku',
      'Couple with DNL/Kohasa Colleagues',
      'Couple with B.M.S.S',
    ],
  },
  {
    title: 'Church Communities',
    color: 'emerald',
    photos: [
      "Couple with the Mark of Overcomers Int'l Church Members",
      "Couple with Ocean of Success Int'l Church Members",
      'Couple with Salvation Ministries Church, GRA, Benin City',
    ],
  },
]

const colorClasses = {
  rose: {
    bg: '',
    border: 'border-rose-200',
    text: 'text-rose-700',
    btnBg: 'bg-rose-100 hover:bg-rose-200',
    checkBg: 'bg-rose-500',
  },
  pink: {
    bg: '',
    border: 'border-pink-200',
    text: 'text-pink-700',
    btnBg: 'bg-pink-100 hover:bg-pink-200',
    checkBg: 'bg-pink-500',
  },
  purple: {
    bg: '',
    border: 'border-purple-200',
    text: 'text-purple-700',
    btnBg: 'bg-purple-100 hover:bg-purple-200',
    checkBg: 'bg-purple-500',
  },
  amber: {
    bg: '',
    border: 'border-amber-200',
    text: 'text-amber-700',
    btnBg: 'bg-amber-100 hover:bg-amber-200',
    checkBg: 'bg-amber-500',
  },
  blue: {
    bg: '',
    border: 'border-blue-200',
    text: 'text-blue-700',
    btnBg: 'bg-blue-100 hover:bg-blue-200',
    checkBg: 'bg-blue-500',
  },
  emerald: {
    bg: '',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    btnBg: 'bg-emerald-100 hover:bg-emerald-200',
    checkBg: 'bg-emerald-500',
  },
}

type SectionColor = keyof typeof colorClasses

export default function PhotographySchedule() {
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({})
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionIndex: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }))
  }

  const toggleCheck = (id: string): void => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className=" border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <div className="flex justify-center mb-4">
            <Camera className="w-12 h-12 " />
          </div>
          <h1 className="text-4xl md:text-5xl  mb-3">Photography Schedule</h1>
          <p className="text-lg  mb-6">
            Our complete photo checklist for the big day
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-gray-100 px-4 py-2 rounded-full ">
              📸{' '}
              {photoSections.reduce(
                (acc, section) => acc + section.photos.length,
                0,
              )}{' '}
              Total Photos
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full ">
              ✓ {Object.values(checkedItems).filter(Boolean).length} Completed
            </span>
          </div>
        </div>
      </div>

      {/* Photo Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {photoSections.map((section, sectionIndex) => {
            const isExpanded = expandedSections[sectionIndex] !== false
            const colors = colorClasses[section.color as SectionColor]

            return (
              <div
                key={sectionIndex}
                className={`${colors.bg} rounded-lg border-2 ${colors.border} overflow-hidden`}
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className={`w-full px-6 py-4 flex items-center justify-between ${colors.btnBg} transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-serif ${colors.text}`}>
                      {section.title}
                    </span>
                    <span className="text-sm  px-3 py-1 rounded-full ">
                      {section.photos.length} photos
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className={`w-5 h-5 ${colors.text}`} />
                  ) : (
                    <ChevronDown className={`w-5 h-5 ${colors.text}`} />
                  )}
                </button>

                {/* Photo List */}
                {isExpanded && (
                  <div className="p-6 ">
                    <div className="space-y-3">
                      {section.photos.map((photo, photoIndex) => {
                        const itemId = `${sectionIndex}-${photoIndex}`
                        const isChecked = checkedItems[itemId]

                        return (
                          <div
                            key={photoIndex}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <button
                              onClick={() => toggleCheck(itemId)}
                              className={`shrink-0 w-6 h-6 rounded border-2 ${
                                isChecked
                                  ? `${colors.checkBg} border-transparent`
                                  : 'border-gray-300 '
                              } flex items-center justify-center transition-all`}
                            >
                              {isChecked && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </button>
                            <span
                              className={` ${isChecked ? `line-through opacity-60` : ``}`}
                            >
                              {photo}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-block rounded-full px-8 py-4 border bg-rose-50 text-foreground border-rose-200">
            <p className="">
              <Camera className="w-5 h-5 inline mr-2" />
              Capturing every precious moment of your special day
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
