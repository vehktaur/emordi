import type { Heart } from 'lucide-react'

export interface Hymn {
  number: number
  title: string
  scripture: string
  verses: Array<{
    number: number
    lines: Array<string>
  }>
  chorus?: Array<{
    number: number
    lines: Array<string>
  }>
  showVersesNumbers?: boolean
  seeAlso?: string
}

export interface ProgramSection {
  title: string
  subtitle?: string
  items: Array<{
    num: number
    title: string
    icon?: typeof Heart
  }>
}
