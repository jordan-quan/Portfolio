import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { EXPERIENCES } from 'constants/experiences'
import { getTimeframeYears, cacheImages, chunk } from 'utils'
import Pagination from 'components/Pagination'
import * as styles from './styles'
import HomeButton from 'components/HomeButton'

const ExperienceContainer = () => {
  const { id: route } = useParams()
  const list = EXPERIENCES.filter(({ display }) => display)

  const index = list.findIndex(({ id }) => id === route)
  const experience = list[index]

  const next = list[index + 1]
  const previous = list[index - 1]

  useEffect(() => {
    cacheImages([experience.images.main])
  }, [experience])

  if (experience === undefined) return <></>

  const { id, employer, position, images, timeline, colours, description, tasks, acheivements } =
    experience

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
          <styles.Title>{employer}</styles.Title>
          <styles.Subtitle>{position}</styles.Subtitle>
        </styles.Header>
      </styles.Jumbotron>
      <styles.Content>
        <styles.Image2Wrapper tag="div">
          <styles.Image2 tag="img" src={images.sub} />
        </styles.Image2Wrapper>
        <styles.Details>
          <styles.Text>{description}</styles.Text>
          <styles.TextHeader tag="h4">Timeline</styles.TextHeader>
          <styles.Text offset="-175px">{getTimeframeYears(timeline[0])}</styles.Text>
          {id === 'ryerson' ? (
            <>
              <styles.TextHeader tag="h4">Key Classes</styles.TextHeader>
              <styles.Classlist>
                {chunk(tasks, 4).map((chunk) => (
                  <styles.List>
                    <styles.Text offset="-175px">
                      {chunk.map((acheivement) => (
                        <styles.ListItem>{acheivement}</styles.ListItem>
                      ))}
                    </styles.Text>
                  </styles.List>
                ))}
              </styles.Classlist>
            </>
          ) : (
            <>
              <styles.TextHeader tag="h4">Tasks</styles.TextHeader>
              <styles.List>
                <styles.Text offset="-175px">
                  {tasks.map((task, index) => (
                    <styles.ListItem key={index.toString()}>{task}</styles.ListItem>
                  ))}
                </styles.Text>
              </styles.List>
            </>
          )}

          <styles.TextHeader tag="h4">
            {id === 'ryerson' ? 'Acheivements' : 'Highlights'}
          </styles.TextHeader>
          <styles.List>
            <styles.Text offset="-175px">
              {acheivements.map((acheivement, index) => (
                <styles.ListItem key={index.toString()}>{acheivement}</styles.ListItem>
              ))}
            </styles.Text>
          </styles.List>
        </styles.Details>
      </styles.Content>

      <Pagination
        previous={
          previous && {
            title: previous.employer,
            subtitle: 'Previous Experience',
            imagePath: previous.images.main,
            link: previous.url,
            colours: previous.colours
          }
        }
        next={
          next && {
            title: next.employer,
            subtitle: 'Next Experience',
            imagePath: next.images.main,
            link: next.url,
            colours: next.colours
          }
        }
        color={colours.primary}
      />
    </styles.Container>
  )
}

export default ExperienceContainer
