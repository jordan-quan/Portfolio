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
        <styles.CircleWrapper width={width / 2.5}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50" fill="white" />
          </svg>
        </styles.CircleWrapper>
        <styles.HeaderContent>
          <styles.Title tag="h1">Hello, I'm</styles.Title>
          <styles.Title tag="h1">
            <styles.ColorText>Jordan Quan</styles.ColorText>
          </styles.Title>
          <styles.Subtitle tag="h4">
            I'm a passionate developer who loves to create magical experiences for those surfing the
            web.
          </styles.Subtitle>
          <styles.Message tag="h4">The full mobile site is under development...</styles.Message>
          <styles.Icons>
            <IconContainer />
          </styles.Icons>
        </styles.HeaderContent>
      </styles.Container>
      <styles.Footer height={footerHeight} />
    </styles.MobileConatiner>
  )
}

export default Mobile
