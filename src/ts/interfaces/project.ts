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
  images: {
    main: string
    sub: string
    thumbnail: string
  }
  github?: string
  year: number
  colours: CardColours
}
