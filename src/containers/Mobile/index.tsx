import { useEffect, useRef, useState } from 'react'
import { Instagram, LinkedIn, Github, Mail } from 'assets/svg'

import * as styles from './styles'
import useWindowDimensions from 'utils/useWindowDimensions'
import { Link } from 'react-router-dom'

const Mobile = () => {
  const { width, height } = useWindowDimensions()
  const [footerHeight, setFooterHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerHeight = containerRef.current?.clientHeight

    if (containerHeight && containerHeight <= height) {
      console.log(containerHeight, 'containerHeight')
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
            Im a passionate developer who loves to create magical experiences for those surfing the
            web.
          </styles.Subtitle>
          <styles.Message tag="h4">The mobile view is under development...</styles.Message>

          <styles.IconContainer>
            <styles.Icon tag="a" href="https://www.instagram.com/jordanquannn" target={'blank'}>
              <Instagram />
            </styles.Icon>
            <styles.Icon tag="a" href="https://www.linkedin.com/in/jordan-quan" target={'blank'}>
              <LinkedIn />
            </styles.Icon>
            <styles.GithubIcon tag="a" href="https://github.com/jordan-quan" target={'blank'}>
              <Github />
            </styles.GithubIcon>
            <styles.Icon tag="a" href="mailto:jordanquan5@gmail.com">
              <Mail />
            </styles.Icon>
          </styles.IconContainer>
        </styles.HeaderContent>
      </styles.Container>
      <styles.Footer height={footerHeight} />
    </styles.MobileConatiner>
  )
}

export default Mobile
