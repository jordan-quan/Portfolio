import { Card } from 'ts/interfaces'
import Button from 'components/Button'
import TimelineBranch from 'components/TimelineBranch'
import * as styles from './styles'

type TimelineItemProps = {
  card: Card
  index: number
  setMinPathLength: (minLength: number) => void
}

const TimelineItem = ({
  card: { title, subtitle, timeframe, link, imagePath, colours },
  index,
  setMinPathLength
}: TimelineItemProps) => {
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

  return (
    <styles.Link to={link}>
      <styles.CardWrapper whileHover="hover" initial="initial" animate="animate">
        <styles.BranchWrapper
          variants={styles.BranchWrapperVariants}
          transition={styles.ImageTransition}>
          <TimelineBranch
            index={index}
            onAnimated={() => {
              if (index === 0) {
                setTimeout(() => {
                  setMinPathLength(0)
                }, 400)
              } else setMinPathLength(index / 2)
            }}
          />
        </styles.BranchWrapper>
        <styles.Card
          tag="div"
          offset={index === 0 ? '-300px' : '-500px'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <styles.Backdrop
            variants={{ initial: { background: '#f8f8f8' }, hover: { background: '#ffffff' } }}
            transition={{ duration: 0.1 }}
          />
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
