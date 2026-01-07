import type MessageCircleIcon from '@/components/ui/message-circle-icon'
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
    subtitle?: string
    icon?: typeof Heart | typeof MessageCircleIcon
  }>
}

export interface AnimatedIconProps {
  /** Icon size in pixels or CSS string */
  size?: number | string
  /** Icon color (defaults to currentColor) */
  color?: string
  /** SVG stroke width */
  strokeWidth?: number
  /** Additional CSS classes */
  className?: string
}

export interface AnimatedIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}
