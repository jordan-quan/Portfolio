import IconContainer from 'components/IconContainer'
import useWindowDimensions from 'utils/useWindowDimensions'
import ProfileImage from 'assets/images/profile.jpg'
import * as styles from './styles'

const Jumbotron = () => {
  const { width, height } = useWindowDimensions()

  return (
    <styles.Container height={height}>
      <styles.CircleWrapper
        width={width / 2.8}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
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
          I'm a passionate developer who loves to create amazing experiences on the web & bring
          visions to life {':)'}
        </styles.Subtitle>
        <styles.Icons>
          <IconContainer />
        </styles.Icons>
      </styles.HeaderContent>
      <styles.Frame tag="div" delay={0.75}>
        <styles.Image src={ProfileImage} />
        <styles.Tape />
        <styles.TapeRight />
      </styles.Frame>
    </styles.Container>
  )
}

export default Jumbotron
