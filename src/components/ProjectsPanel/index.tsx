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
  }, [])

  return (
    <styles.Gallery>
      <styles.HeaderContent>
        <styles.Title>Crafted with love.</styles.Title>
        <styles.Subtitle>These are some of my recent works.</styles.Subtitle>
      </styles.HeaderContent>
      <styles.Cards>
        {cardList.map((cardProps) => (
          <styles.Card>
            <PerspectiveCard {...cardProps} />
          </styles.Card>
        ))}
      </styles.Cards>

      {/* <Button link="projects/" text="View More" /> */}
    </styles.Gallery>
  )
}

export default ProjectsPanel
