import React, { useEffect } from 'react'

import { PROJECTS } from 'constants/projects'
import { EXPERIENCES } from 'constants/experiences'
import { Card } from 'ts/interfaces'
import { getTimeframeYears } from 'utils'
import Timeline from 'components/Timeline'
import ProjectsPanel from 'components/ProjectsPanel'
import Jumbotron from 'components/Jumbotron'
import Footer from 'components/Footer'
import * as styles from './styles'
import HomeButton from 'components/HomeButton'

const App = () => {
  const cards: Card[] = PROJECTS.map(({ name, url, year, ...rest }) => ({
    link: url,
    title: name,
    timeframe: year.toString(),
    ...rest
  }))

  const experienceCards: Card[] = EXPERIENCES.filter(({ display }) => display).map(
    ({ timeline, employer, position, url, mainImage, ...rest }) => ({
      title: employer,
      timeframe: getTimeframeYears(timeline[0]),
      subtitle: position,
      link: url,
      imagePath: mainImage,
      ...rest
    })
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <styles.Container>
      <Jumbotron />
      <Timeline cardList={experienceCards} />
      {/* <Gallery data={cards} /> */}
      <ProjectsPanel cardList={cards} />

      <Footer />
    </styles.Container>
  )
}

export default App
