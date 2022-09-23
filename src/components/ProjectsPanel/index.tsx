import React, { useEffect } from 'react'
import { cacheImages } from 'utils/cacheImages'
import PerspectiveCard from 'components/PerspectiveCard'
import { Card } from 'ts/interfaces'

import * as styles from './styles'

type ProjectsPanelProps = {
  cardList: Card[]
}

const ProjectsPanel = ({ cardList }: ProjectsPanelProps) => {
  useEffect(() => {
    cacheImages(cardList.map(({ imagePath }) => imagePath))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <styles.Gallery>
      <styles.HeaderContent>
        <styles.Title tag="h1">Created with passion.</styles.Title>
        <styles.Subtitle tag="h4">These are some of my recent works.</styles.Subtitle>
      </styles.HeaderContent>
      <styles.Cards>
        {cardList.map((cardProps) => (
          <styles.Card key={cardProps.title}>
            <PerspectiveCard {...cardProps} />
          </styles.Card>
        ))}
      </styles.Cards>

      {/* <Button link="projects/" text="View More" /> */}
    </styles.Gallery>
  )
}

export default ProjectsPanel
