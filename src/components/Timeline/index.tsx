import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { cacheImages } from 'utils/cacheImages'
import TimelineItem from 'components/Timeline/TimelineItem'
import { Card } from 'ts/interfaces'

import * as styles from './styles'

type TimelineProps = {
  cardList: Card[]
}

const Timeline = ({ cardList }: TimelineProps) => {
  const transition = {
    duration: 3.5,
    ease: 'easeInOut',
    delay: 1
  }

  const lineLength = 281 * (cardList.length - 1) + 80

  const Line = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100%">
      <motion.path
        d={`M 30 80 V ${lineLength}`}
        // d="M 100 80 V 30" if first branch

        strokeWidth="10"
        stroke="#D9D9D9"
        strokeLinecap="round"
        initial={{ pathLength: 0, display: 'none' }}
        animate={{ pathLength: 1, display: 'block' }}
        transition={transition}
      />
    </svg>
  )

  useEffect(() => {
    cacheImages(cardList.map(({ imagePath }) => imagePath))
  }, [])

  return (
    <styles.Container>
      <styles.Header>
        <styles.HeaderContent>
          <styles.Title>my journey through the years...</styles.Title>
          <styles.Subtitle>These are a few of my endevours over the recent years.</styles.Subtitle>
        </styles.HeaderContent>
      </styles.Header>
      <styles.Gallery>
        <styles.LineWrapper>
          <Line />
        </styles.LineWrapper>
        <styles.Cards>
          {cardList.map((card, index) => (
            <TimelineItem card={card} index={index} />
          ))}
        </styles.Cards>
      </styles.Gallery>
    </styles.Container>
  )
}

export default Timeline
