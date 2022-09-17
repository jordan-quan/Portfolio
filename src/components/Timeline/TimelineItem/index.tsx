import { motion } from 'framer-motion'

import { Card } from 'ts/interfaces'
import Button from 'components/Button'
import * as styles from './styles'

type TimelineItemProps = {
  card: Card
  index: number
}

const TimelineItem = ({
  card: { title, subtitle, timeframe, link, imagePath, colours },
  index
}: TimelineItemProps) => {
  const transition = { duration: 1, ease: 'easeInOut', delay: [0, 2.75, 4.4][index] }
  const cardTransition = { duration: 1, ease: 'easeInOut', delay: [0, 3.5, 5][index] }

  const Svg = () => (
    <svg viewBox="0 0 430 300" width="100%" height="100%">
      <defs>
        <mask id="maskThumbnail">
          <polygon points="430, 300 0, 270 0, 30 430, 0 430, 300" fill="#fff"></polygon>
        </mask>
      </defs>
      <image
        href={imagePath}
        mask="url(#maskThumbnail)"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  )

  const Branch = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100%">
      <motion.path
        d={index === 0 ? 'M 85 80 H 17' : 'M 30 80 H 100'}
        // d="M 100 80 H 30" if first branch
        fill="transparent"
        strokeWidth="10"
        stroke="#D9D9D9"
        strokeLinecap="round"
        variants={styles.BranchVariants}
        transition={transition}
      />
    </svg>
  )

  return (
    <styles.Link to={link}>
      <styles.CardWrapper whileHover="hover" initial="initial" animate="animate">
        <styles.BranchWrapper
          variants={styles.BranchWrapperVariants}
          transition={styles.ImageTransition}>
          <Branch />
        </styles.BranchWrapper>
        <styles.Card initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={cardTransition}>
          <styles.Backdrop variants={{ hover: { background: 'white' } }} />
          <styles.Content>
            <styles.CardInfo
              index={index}
              variants={styles.CardInfoVariants}
              transition={styles.ImageTransition}>
              <styles.Year
                variants={{ initial: { color: '#d1d0d0' }, hover: { color: colours.primary } }}
                transition={styles.ImageTransition}>
                {timeframe}
              </styles.Year>
              <styles.Title>{title}</styles.Title>
              <styles.Subtitle>{subtitle}</styles.Subtitle>
            </styles.CardInfo>
            <styles.ButtonWrapper index={index}>
              <Button text="View Experience" link={link} />
            </styles.ButtonWrapper>
          </styles.Content>

          <styles.Square
            colours={colours}
            index={index}
            variants={styles.SquareVariants}
            transition={styles.SquareTransition}
          />
          <styles.Image
            index={index}
            variants={styles.ImageVariants}
            transition={styles.ImageTransition}>
            <Svg />
          </styles.Image>
        </styles.Card>
      </styles.CardWrapper>
    </styles.Link>
  )
}

export default TimelineItem
