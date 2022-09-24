import Button from 'components/Button'

import * as styles from './styles'
import useWindowDimensions from 'utils/useWindowDimensions'

const Jumbotron = () => {
  const { width } = useWindowDimensions()

  return (
    <styles.Container>
      <styles.CircleWrapper width={width / 2.5}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill="white" />
        </svg>
      </styles.CircleWrapper>
      <styles.HeaderContent>
        <styles.Title tag="h1">Hello,</styles.Title>
        <styles.Title tag="h1">
          I'm <styles.ColorText>Jordan Quan</styles.ColorText>.
        </styles.Title>
        <styles.Subtitle tag="h4">
          Im a passionate developer who loves to create magical experiences for those surfing the
          web.
        </styles.Subtitle>
        <styles.AnimateButton tag="div">
          <styles.ButtonWrapper whileHover="hover" initial="initial" animate="animate">
            <Button link="about/" text="Hear my Story" />
          </styles.ButtonWrapper>
        </styles.AnimateButton>
      </styles.HeaderContent>
    </styles.Container>
  )
}

export default Jumbotron
