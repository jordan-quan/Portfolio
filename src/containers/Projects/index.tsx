import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { cacheImages } from 'utils'
import { PROJECTS } from 'constants/projects'
import Pagination from 'components/Pagination'
import HomeButton from 'components/HomeButton'
import KeyboardPNG from 'assets/images/projects/keyboard.png'
import MousePNG from 'assets/images/projects/mouse.png'
import * as styles from './styles'

const ProjectContainer = () => {
  const { id: route } = useParams()

  const list = PROJECTS.filter(({ display }) => display)

  const index = list.findIndex(({ id }) => id === route)
  const project = list[index]

  const next = list[index + 1]
  const previous = list[index - 1]

  useEffect(() => {
    cacheImages(Object.values(project.images))
  }, [project])

  if (project === undefined) return <></>

  const { name, tasks, description, subtitle, stack, images, year, colours } = project

  return (
    <styles.Container
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <HomeButton />
      <styles.Jumbotron>
        <styles.Image src={images.main} />

        <styles.Header>
          <styles.Title>{name}</styles.Title>
          <styles.Subtitle>{subtitle}</styles.Subtitle>
        </styles.Header>
      </styles.Jumbotron>

      <styles.Content>
        <styles.Image2Wrapper tag="div">
          <styles.Image2 tag="img" src={images.sub} />

          <styles.Keyboard src={KeyboardPNG} />
          <styles.Mouse
            src={MousePNG}
            animate={{ x: ['0px', '-20px', '20px', '0px'], rotateZ: [0, -2, 2, 0] }}
            transition={{ duration: 5, delay: 5, repeatDelay: 5, repeat: Infinity }}
          />
        </styles.Image2Wrapper>
        <styles.Details>
          <styles.Text>{description}</styles.Text>
          <styles.TextHeader tag="h4">Year</styles.TextHeader>
          <styles.Text offset="-175px">{year}</styles.Text>

          <styles.TextHeader tag="h4">Tech Stack</styles.TextHeader>
          <styles.Text offset="-175px">
            {stack.reduce((acc, tech) => `${acc}\u00A0\u00A0/\u00A0\u00A0${tech} `).trim()}
          </styles.Text>
          <styles.TextHeader tag="h4">Tasks</styles.TextHeader>
          <styles.List>
            <styles.Text offset="-175px">
              {tasks.map((task, index) => (
                <styles.ListItem key={index.toString()}>{task}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
        </styles.Details>
      </styles.Content>

      <Pagination
        previous={
          previous && {
            title: previous.name,
            subtitle: 'Previous Project',
            imagePath: previous.images.thumbnail,
            link: previous.url,
            colours: previous.colours
          }
        }
        next={
          next && {
            title: next.name,
            subtitle: 'Next Project',
            imagePath: next.images.thumbnail,
            link: next.url,
            colours: next.colours
          }
        }
        color={colours.primary}
      />
    </styles.Container>
  )
}

export default ProjectContainer
