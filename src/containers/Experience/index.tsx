import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { EXPERIENCES } from 'constants/experiences'
import { getTimeframeYears, cacheImages } from 'utils'
import Pagination from 'components/Pagination'
import * as styles from './styles'
import HomeButton from 'components/HomeButton'

const ExperienceContainer = () => {
  const { id: route } = useParams()
  const list = EXPERIENCES.filter(({ display }) => display)

  const index = list.findIndex(({ id }) => id === route)
  const experience = list[index]

  const nextIndex = (index + 1) % list.length
  const prevIndex = index === 0 ? list.length - 1 : index - 1

  const next = list[nextIndex]
  const previous = list[prevIndex]

  useEffect(() => {
    if (experience) {
      const { mainImage, images } = experience
      cacheImages([mainImage, ...(images ? images : [])])
    }
  }, [experience])

  if (experience === undefined) return <></>

  const {
    id,
    employer,
    position,
    images,
    timeline,
    logo,
    mainImage,
    colours,
    description,
    stack,
    tasks,
    acheivements
  } = experience

  return (
    <styles.Container
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      <HomeButton />
      <styles.Jumbotron key={id}>
        <styles.Image src={mainImage} />

        <styles.Header>
          <styles.Title>{employer}</styles.Title>
          <styles.Subtitle>{position}</styles.Subtitle>
        </styles.Header>
      </styles.Jumbotron>

      <styles.Content>
        <styles.Image2 src={images ? images[0] : mainImage} />
        <styles.Details>
          <styles.Text>{description}</styles.Text>
          <styles.TextHeader>Timeline</styles.TextHeader>
          <styles.Text>{getTimeframeYears(timeline[0])}</styles.Text>
          <styles.TextHeader>Tasks</styles.TextHeader>
          <styles.List>
            <styles.Text>
              {tasks.map((task, index) => (
                <styles.ListItem key={index.toString()}>{task}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
          <styles.TextHeader>Impacts</styles.TextHeader>
          <styles.List>
            <styles.Text>
              {acheivements.map((acheivement, index) => (
                <styles.ListItem key={index.toString()}>{acheivement}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
        </styles.Details>
      </styles.Content>

      <Pagination
        previous={{
          title: previous.employer,
          imagePath: previous.mainImage,
          link: previous.url,
          colours: previous.colours
        }}
        next={{
          title: next.employer,
          imagePath: next.mainImage,
          link: next.url,
          colours: next.colours
        }}
        color={colours.primary}
        type="experience"
      />
    </styles.Container>
    // </AnimatePresence>
  )
}

export default ExperienceContainer
