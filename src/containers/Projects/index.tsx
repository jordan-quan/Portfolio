import { useParams } from 'react-router-dom'

import { PROJECTS } from 'constants/projects'
import Pagination from 'components/Pagination'
import * as styles from './styles'
import HomeButton from 'components/HomeButton'

const ProjectContainer = () => {
  const { id: route } = useParams()

  const list = PROJECTS.filter(({ display }) => display)

  const index = list.findIndex(({ id }) => id === route)
  const project = list[index]

  const next = list[index + 1]
  const previous = list[index - 1]

  if (project === undefined) return <></>

  const {
    name,
    // id,
    // url,
    tasks,
    description,
    subtitle,
    stack,
    mainImage,
    images,
    // github,
    year,
    colours
  } = project

  return (
    <styles.Container
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}>
      <HomeButton />
      <styles.Jumbotron>
        <styles.Image src={mainImage} />

        <styles.Header>
          <styles.Title>{name}</styles.Title>
          <styles.Subtitle>{subtitle}</styles.Subtitle>
        </styles.Header>
      </styles.Jumbotron>

      <styles.Content>
        <styles.Image2Wrapper tag="div">
          <styles.Image2 tag="img" src={images ? images[0] : mainImage} />
        </styles.Image2Wrapper>
        <styles.Details>
          <styles.Text>{description}</styles.Text>
          <styles.TextHeader tag="h4">Year</styles.TextHeader>
          <styles.Text offset="-175px">{year}</styles.Text>
          <styles.TextHeader tag="h4">Tasks</styles.TextHeader>
          <styles.List>
            <styles.Text offset="-175px">
              {tasks.map((task, index) => (
                <styles.ListItem key={index.toString()}>{task}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
          <styles.TextHeader tag="h4">Tech Stack</styles.TextHeader>
          <styles.List>
            <styles.Text offset="-175px">
              {stack.map((tech, index) => (
                <styles.ListItem key={index.toString()}>{tech}</styles.ListItem>
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
            imagePath: previous.mainImage,
            link: previous.url,
            colours: previous.colours
          }
        }
        next={
          next && {
            title: next.name,
            subtitle: 'Next Project',
            imagePath: next.mainImage,
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
