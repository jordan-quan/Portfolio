import { useEffect, useRef, useState } from 'react'

import IconContainer from 'components/IconContainer'
import useWindowDimensions from 'utils/useWindowDimensions'
import * as styles from './styles'

const Mobile = () => {
  const { width, height } = useWindowDimensions()
  const [footerHeight, setFooterHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerHeight = containerRef.current?.clientHeight

    if (containerHeight && containerHeight <= height) {
      setFooterHeight(height - containerHeight)
    } else setFooterHeight(100)
  }, [])

  return (
    <styles.MobileConatiner>
      <styles.Container ref={containerRef}>
        <styles.CircleWrapper
          width={width / 2.5}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="white" />
          </svg>
        </styles.CircleWrapper>
        <styles.HeaderContent>
          <styles.Title tag="h1">Hello, I'm</styles.Title>
          <styles.Title tag="h1">
            <styles.ColorText>Jordan Quan</styles.ColorText>
          </styles.Title>
          <styles.Subtitle tag="h4" delay={0.5}>
            I'm a passionate developer who loves to create amazing experiences on the web & bring
            visions to life {':)'}
          </styles.Subtitle>
          <styles.Message tag="h4" delay={0.5}>
            The full mobile site is under development...
          </styles.Message>
          <styles.Icons tag="div" delay={0.5}>
            <IconContainer />
          </styles.Icons>
        </styles.HeaderContent>
      </styles.Container>
      <styles.Footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 1 }}
        height={footerHeight}
      />
    </styles.MobileConatiner>
  )
}

export default Mobile
