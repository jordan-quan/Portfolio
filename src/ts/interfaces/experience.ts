import { Timeframe, CardColours } from 'ts/interfaces'

export type Experience = {
  id: string
  display: boolean
  position: string
  employer: string
  url: string
  tasks: string[]
  description: string
  stack: string[]
  logo: string
  mainImage: string
  acheivements: string[]
  timeline: Timeframe[]
  colours: CardColours
  images?: string[]
}
