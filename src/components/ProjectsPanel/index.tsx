import PerspectiveCard from 'components/PerspectiveCard'
import { Card } from 'ts/interfaces'

import * as styles from './styles'

type ProjectsPanelProps = {
  cardList: Card[]
}

const ProjectsPanel = ({ cardList }: ProjectsPanelProps) => {
  return (
    <styles.Gallery>
      <styles.HeaderContent>
        <styles.Title tag="h1">Created with passion.</styles.Title>
        <styles.Subtitle tag="h4">Take a look at some of my recent works.</styles.Subtitle>
      </styles.HeaderContent>
      <styles.Cards>
        {cardList.map((cardProps) => (
          <styles.Card key={cardProps.title}>
            <PerspectiveCard {...cardProps} />
          </styles.Card>
        ))}
      </styles.Cards>
    </styles.Gallery>
  )
}

export default ProjectsPanel
