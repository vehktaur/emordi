import type { Heart } from 'lucide-react'

export interface Hymn {
  number: number
  title: string
  scripture: string
  verses: {
    number: number
    lines: string[]
  }[]
  chorus?: {
    number: number
    lines: string[]
  }[]
  showVersesNumbers?: boolean
  seeAlso?: string
}

export interface ProgramSection {
  title: string
  subtitle?: string
  items: {
    num: number
    title: string
    icon?: typeof Heart
  }[]
}
