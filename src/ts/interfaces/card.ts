import { PageLink } from './pagelink'

export type Card = PageLink & {
  subtitle: string
  timeframe: string
}
