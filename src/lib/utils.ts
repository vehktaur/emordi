import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export const setItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}
export const removeItem = (key: string) => localStorage.removeItem(key)
