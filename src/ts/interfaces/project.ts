import { CardColours } from 'ts/interfaces'

export type Project = {
  display: boolean
  name: string
  id: string
  url: string
  tasks: string[]
  description: string
  subtitle: string
  stack: string[]
  mainImage: string
  images?: string[]
  github?: string
  year: number
  colours: CardColours
}
