import React, { useEffect, useState } from 'react'
import { cacheImages } from 'utils/cacheImages'
import PerspectiveCard from 'components/PerspectiveCard'
import Button from 'components/Button'
import { Card } from 'ts/interfaces'

import * as styles from './styles'

interface Props {
  data: Card[]
}

const Gallery = ({ data }: Props) => {
  useEffect(() => {
    cacheImages(data.map(({ imagePath }) => imagePath))
  }, [])

  return (
    <styles.Gallery>
      <styles.TwoTall>
        <styles.HeaderContent>
          <styles.Title>Crafted with love.</styles.Title>
          <styles.Subtitle>These are some of my recent works.</styles.Subtitle>
        </styles.HeaderContent>
      </styles.TwoTall>
      <styles.ThreeTall>
        <PerspectiveCard {...data[0]} />
      </styles.ThreeTall>
      <styles.ThreeTall>
        <PerspectiveCard {...data[2]} />
      </styles.ThreeTall>
      <styles.ThreeTall addMargin>
        <PerspectiveCard {...data[1]} />
      </styles.ThreeTall>
      <styles.Flex>
        <styles.ButtonWrapper initial="initial" whileHover="hover">
          <Button link="projects/" text="View More" />
        </styles.ButtonWrapper>
      </styles.Flex>
    </styles.Gallery>
  )
}

export default Gallery
