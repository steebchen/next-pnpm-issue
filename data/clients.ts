import { go } from './go'
import { js } from './js'

export const features = [
  'Interactive Transactions',
  'Raw Queries',
] as const

export type Name = typeof features[number]

export type Feature = {
  // Feature name
  name: Name
  // Current implementation status
  status: Status,
  // Issue number
  issue?: number,
  // URL to docs page
  docs?: string,
}

export const statuses = {
  complete: '✅', // ':white_check_mark:'
  incomplete: '❌', // ':x:'
  preview: '⚠️', // ':eyes:'
  'not started': '👀', // ':question:'
  'in progress': '🚧', // ':construction:'
  unknown: '❓', // ':question:'
}

export type Status = keyof typeof statuses

export interface Client {
  name: string,
  url: string,
  github: string,
  features: Feature[]
}

export const clients: Client[] = [
  js,
  go,
]
