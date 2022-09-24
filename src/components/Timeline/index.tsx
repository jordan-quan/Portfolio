import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import { cacheImages } from 'utils/cacheImages'
import TimelineItem from 'components/Timeline/TimelineItem'
import { Card } from 'ts/interfaces'

import * as styles from './styles'

type TimelineProps = {
  cardList: Card[]
}

const Timeline = ({ cardList }: TimelineProps) => {
  const galleryRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['500px end', `110% end`]
  })

  const lineLength = 281 * (cardList.length - 1) + 80

  const [minPathLength, setMinPathLength] = useState(-1)

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001
  })

  useEffect(() => {
    cacheImages(cardList.map(({ imagePath }) => imagePath))
  }, [cardList])

  return (
    <styles.Container>
      <styles.Header>
        <styles.HeaderContent>
          <styles.Title tag="h1">my journey through the years...</styles.Title>
          <styles.Subtitle tag="h4">
            These are a few of my endevours over the recent years.
          </styles.Subtitle>
        </styles.HeaderContent>
      </styles.Header>
      <styles.Gallery>
        {minPathLength >= 0.5 && (
          <styles.LineWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100%">
              <motion.path
                d={`M 30 80 V ${lineLength}`}
                stroke="#e5e5e5"
                strokeWidth={10}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: minPathLength }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
              />
            </svg>
          </styles.LineWrapper>
        )}

        {minPathLength !== 1 ? (
          <styles.LineWrapper ref={galleryRef}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100%">
              <motion.path
                d={`M 30 80 V ${lineLength}`}
                stroke="#e5e5e5"
                strokeWidth={10}
                strokeLinecap="round"
                initial={{ scaleY: 0 }}
                animate={minPathLength >= 0 && { scaleY: 1 }}
                style={{
                  pathLength: scrollY,
                  transformBox: 'fill-box',
                  originY: '0px'
                }}
                exit={{ originY: '100%', scaleY: 0, transition: { duration: 3 } }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              />
            </svg>
          </styles.LineWrapper>
        ) : (
          <styles.LineWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100%">
              <path
                d={`M 30 80 V ${lineLength}`}
                stroke="#e5e5e5"
                strokeWidth={10}
                strokeLinecap="round"
                pathLength={1}
              />
            </svg>
          </styles.LineWrapper>
        )}

        <styles.Cards>
          {cardList.map((card, index) => (
            <TimelineItem
              key={card.title}
              setMinPathLength={(value) =>
                setMinPathLength((minLength) => {
                  if (value > minLength) {
                    return value
                  }
                  return minLength
                })
              }
              card={card}
              index={index}
            />
          ))}
        </styles.Cards>
      </styles.Gallery>
    </styles.Container>
  )
}

export default Timeline
