import React, { useEffect, useState } from 'react'
import { cacheImages } from 'utils/cacheImages'
import PerspectiveCard from 'components/PerspectiveCard'
import Button from 'components/Button'

import * as styles from './styles'

interface Card {
  link: string
  title: string
  subtitle: string
  year: number
  imagePath: string
}

interface Props {
  data: Card[]
}

const ProjectsPanel = ({ data }: Props) => {
  useEffect(() => {
    cacheImages(data.map(({ imagePath }) => imagePath))
  }, [])

  return (
    <styles.Gallery>
      <styles.Cards>
        {data.map((cardProps) => (
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
