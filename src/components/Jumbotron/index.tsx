import React from 'react'
import Button from 'components/Button'

import * as styles from './styles'
import useWindowDimensions from 'utils/useWindowDimensions'

const Jumbotron = () => {
  const { width } = useWindowDimensions()

  const Circle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="white" />
    </svg>
  )

  return (
    <styles.Container>
      <styles.CircleWrapper width={width / 2.5}>
        <Circle />
      </styles.CircleWrapper>
      <styles.HeaderContent>
        <styles.Title>Hello,</styles.Title>
        <styles.Title>
          I'm <styles.ColorText>Jordan Quan</styles.ColorText>.
        </styles.Title>
        <styles.Subtitle>
          Im a passionate developer who loves to create magical experiences for those surfing the
          web.
        </styles.Subtitle>
        <styles.ButtonWrapper whileHover="hover" initial="initial" animate="animate">
          <Button link="about/" text="Hear my Story" />
        </styles.ButtonWrapper>
      </styles.HeaderContent>
    </styles.Container>
  )
}

export default Jumbotron
