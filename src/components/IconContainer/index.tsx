import { Instagram, LinkedIn, Github, Mail } from 'assets/svg'
import * as styles from './styles'

const IconContainer = () => (
  <styles.IconContainer>
    <styles.Icon href="https://www.linkedin.com/in/jordan-quan" target={'blank'}>
      <LinkedIn />
    </styles.Icon>
    <styles.Icon href="https://www.instagram.com/jordanquannn" target={'blank'}>
      <Instagram />
    </styles.Icon>
    <styles.GithubIcon href="https://github.com/jordan-quan" target={'blank'}>
      <Github />
    </styles.GithubIcon>
    <styles.Icon href="mailto:jordanquan5@gmail.com">
      <Mail />
    </styles.Icon>
  </styles.IconContainer>
)

export default IconContainer
