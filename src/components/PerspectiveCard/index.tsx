import React, { useState, useRef, useEffect } from 'react'
import useWindowDimensions from 'utils/useWindowDimensions'
import { animate, useMotionValue, useTransform, transform, useAnimation } from 'framer-motion'

import * as styles from './styles'

interface Card {
  link: string
  title: string
  subtitle: string
  year: number
  imagePath: string
}

const PerspectiveCard = ({ title, subtitle, year, link, imagePath }: Card) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovered, setHovered] = useState(false)
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

    if (entryCount < 50) {
      controls.start({
        rotateX: transform(rotateXbounded, [0, 1], [-angle, angle]),
        rotateY: transform(rotateYbounded, [0, 1], [-angle, angle]),
        transition: {
          duration: 0.03
        }
      })
      setEntryCount(entryCount + 1)
    } else {
      controls.start({
        rotateX: transform(rotateXbounded, [0, 1], [-angle, angle]),
        rotateY: transform(rotateYbounded, [0, 1], [-angle, angle]),
        transition: {
          duration: 0.01
        }
      })
    }
  }
  const { width, height } = dimensions

  const CardTextVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scaleX: (width - borderWidth) / width,
      scaleY: (height - borderWidth) / height,
      transition: styles.Transition
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
      <styles.PerspectiveWrapper>
        <styles.Card
          whileHover="hover"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            controls.start({
              rotateX: 0.5,
              rotateY: 0.5,
              transition: {
                duration: 0.2
              }
            })
            setEntryCount(0)
            setHovered(false)
          }}
          onPointerMove={onMove}
          style={{ rotateX, rotateY }}
          animate={controls}>
          <styles.CardText variants={CardTextVariants} transition={styles.Transition}>
            <styles.Overlay isHovered={isHovered} />
            <styles.Circle>
              <styles.Image
                src={imagePath}
                alt={title}
                variants={ImageVariants}
                transition={styles.Transition}
              />
            </styles.Circle>
          </styles.CardText>
          <styles.Info>
            <h5>{year}</h5>
            <div>
              <h2>{title}</h2>
              <h5>{subtitle}</h5>
            </div>
            <h5>see the project</h5>
          </styles.Info>
        </styles.Card>
      </styles.PerspectiveWrapper>
    </styles.Link>
  )
}

export default PerspectiveCard
