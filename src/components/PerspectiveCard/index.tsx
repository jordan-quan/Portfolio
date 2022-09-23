import { useState, useRef, useEffect } from 'react'
import { useMotionValue, useTransform, transform, useAnimation } from 'framer-motion'

import useWindowDimensions from 'utils/useWindowDimensions'
import { Card } from 'ts/interfaces'
import * as styles from './styles'

const PerspectiveCard = ({ title, subtitle, timeframe, link, imagePath, colours }: Card) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [entryCount, setEntryCount] = useState(0)
  const controls = useAnimation()

  const cardRef = useRef<HTMLInputElement>(null)
  const windowWidth = useWindowDimensions().width

  const angle = 4
  const borderWidth = 40

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateX = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true
  })

  const rotateY = useTransform(y, [0, 1], [-angle, angle], {
    clamp: true
  })

  const onMove = (e: any) => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect()

    // set x,y local coordinates
    const rotateXbounded = 1 - (e.clientY - bounds.y) / e.currentTarget.clientHeight
    const rotateYbounded = (e.clientX - bounds.x) / e.currentTarget.clientWidth

    const rX = transform(rotateXbounded, [0, 1], [-angle, angle])
    const rY = transform(rotateYbounded, [0, 1], [-angle, angle])

    if (entryCount < 50) {
      controls.start({
        rotateX: rX,
        rotateY: rY,
        transition: {
          duration: 0.03
        }
      })
      setEntryCount(entryCount + 1)
    } else {
      controls.start({
        rotateX: rX,
        rotateY: rY,
        transition: {
          duration: 0.01
        }
      })
    }
  }

  const CardTextVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scaleX: (dimensions.width - borderWidth) / dimensions.width,
      scaleY: (dimensions.height - borderWidth) / dimensions.height,
      transition: styles.Transition
    }
  }

  const OverlayVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1
    }
  }

  const ImageVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.15,
      transition: styles.Transition
    }
  }

  useEffect(() => {
    if (cardRef && cardRef.current) {
      const { clientWidth, clientHeight } = cardRef.current
      setDimensions({ width: clientWidth, height: clientHeight })
    }
  }, [windowWidth])

  return (
    <styles.Link ref={cardRef} to={link}>
      <styles.PerspectiveWrapper tag="div">
        <styles.Card
          initial="initial"
          whileHover="hover"
          colours={colours}
          onMouseLeave={() => {
            controls.start({
              rotateX: 0.5,
              rotateY: 0.5,
              transition: {
                duration: 0.2
              }
            })
            setEntryCount(0)
          }}
          onPointerMove={onMove}
          style={{ rotateX, rotateY }}
          animate={controls}>
          <styles.CardText variants={CardTextVariants} transition={styles.Transition}>
            <styles.Overlay
              variants={OverlayVariants}
              transition={{ duration: 0.8, ease: [0.03, 0.98, 0.52, 1], delay: 0.2 }}
            />
            <styles.Image
              src={imagePath}
              alt={title}
              variants={ImageVariants}
              transition={styles.Transition}
            />
          </styles.CardText>
          <styles.Info
            variants={styles.InfoVariants}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}>
            <styles.Text>{timeframe}</styles.Text>
            <div>
              <styles.Title>{title}</styles.Title>
              <styles.Text>{subtitle}</styles.Text>
            </div>
            <styles.Text>see the project</styles.Text>
          </styles.Info>
        </styles.Card>
      </styles.PerspectiveWrapper>
    </styles.Link>
  )
}

export default PerspectiveCard
