export type CardColours = {
  primary: string
  secondary: string
}

export interface Card {
  title: string
  subtitle: string
  timeframe: string
  imagePath: string
  link: string
  colours: CardColours
}
