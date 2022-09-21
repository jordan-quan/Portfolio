import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PROJECTS } from 'constants/projects'
import { cacheImages } from 'utils'
import Pagination from 'components/Pagination'
import * as styles from './styles'
import HomeButton from 'components/HomeButton'

const ProjectContainer = () => {
  const { id: route } = useParams()
  const list = PROJECTS.filter(({ display }) => display)

  const index = list.findIndex(({ id }) => id === route)
  const project = list[index]

  const nextIndex = (index + 1) % list.length
  const prevIndex = index === 0 ? list.length - 1 : index - 1

  const next = list[nextIndex]
  const previous = list[prevIndex]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [index])

  useEffect(() => {
    if (project) {
      const { mainImage, images } = project
      cacheImages([mainImage, ...(images ? images : [])])
    }
  }, [project])

  if (project === undefined) return <></>

  const {
    name,
    id,
    url,
    tasks,
    description,
    subtitle,
    stack,
    mainImage,
    images,
    github,
    year,
    colours
  } = project

  return (
    <>
      <HomeButton />
      <styles.Jumbotron>
        <styles.Image src={mainImage} />

        <styles.Header>
          <styles.Title>{name}</styles.Title>
          <styles.Subtitle>{subtitle}</styles.Subtitle>
        </styles.Header>
      </styles.Jumbotron>

      <styles.Content>
        <styles.Image2 src={images ? images[0] : mainImage} />
        <styles.Details>
          <styles.Text>{description}</styles.Text>
          <styles.TextHeader>Year</styles.TextHeader>
          <styles.Text>{year}</styles.Text>
          <styles.TextHeader>Tasks</styles.TextHeader>
          <styles.List>
            <styles.Text>
              {tasks.map((task) => (
                <styles.ListItem>{task}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
          <styles.TextHeader>Tech Stack</styles.TextHeader>
          <styles.List>
            <styles.Text>
              {stack.map((tech) => (
                <styles.ListItem>{tech}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
        </styles.Details>
      </styles.Content>

      <Pagination
        previous={{
          title: previous.name,
          imagePath: previous.mainImage,
          link: previous.url,
          colours: previous.colours
        }}
        next={{
          title: next.name,
          imagePath: next.mainImage,
          link: next.url,
          colours: next.colours
        }}
        color={colours.primary}
        type="project"
      />
    </>
  )
}

export default ProjectContainer
