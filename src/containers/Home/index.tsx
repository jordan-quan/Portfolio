import { PROJECTS } from 'constants/projects'
import { EXPERIENCES } from 'constants/experiences'
import { Card } from 'ts/interfaces'
import { getTimeframeYears } from 'utils'
import Timeline from 'components/Timeline'
import ProjectsPanel from 'components/ProjectsPanel'
import Jumbotron from 'components/Jumbotron'
import * as styles from './styles'

const Home = () => {
  const projectCards: Card[] = PROJECTS.filter(({ display }) => display).map(
    ({ name, url, year, images, ...rest }) => ({
      link: url,
      title: name,
      timeframe: year.toString(),
      imagePath: images.thumbnail,
      ...rest
    })
  )

  const experienceCards: Card[] = EXPERIENCES.filter(({ display }) => display).map(
    ({ timeline, employer, position, url, images, ...rest }) => ({
      title: employer,
      timeframe: getTimeframeYears(timeline[0]),
      subtitle: position,
      link: url,
      imagePath: images.thumbnail,
      ...rest
    })
  )

  return (
    <styles.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      <Jumbotron />
      <Timeline cardList={experienceCards} />
      {/* <Gallery data={cards} /> */}
      <ProjectsPanel cardList={projectCards} />
      <styles.Footer>
        <styles.Line>
          <styles.FooterText>
            Let's work together, don't hesitate to{' '}
            <styles.ColorText to="/contact">say hi</styles.ColorText>
          </styles.FooterText>
        </styles.Line>
        <styles.FooterLinks>
          <styles.Trademark>© 2022 - ALL RIGHTS RESERVED - Jordan Quan 2022</styles.Trademark>
          <styles.SocialSection>
            <styles.Social href="https://github.com/jordan-quan" target="blank">
              Github
            </styles.Social>
            <styles.Social href="https://www.linkedin.com/in/jordan-quan" target="blank">
              Linkedin
            </styles.Social>
            <styles.Social href="https://www.instagram.com/jordanquannn" target="blank">
              Instagram
            </styles.Social>
          </styles.SocialSection>
        </styles.FooterLinks>
      </styles.Footer>
    </styles.Container>
  )
}

export default Home
