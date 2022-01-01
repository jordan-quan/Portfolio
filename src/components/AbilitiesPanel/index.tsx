import React from 'react';
import { DESIGN, LANGUAGES, FRAMEWORKS  } from 'constants/abilities';
import * as styles from './styles';


const AbilitiesPanel = () => (
  <styles.AbilityWrapper>
      <AbilityColumn {...DESIGN} />
      <AbilityColumn {...LANGUAGES} />
      <AbilityColumn {...FRAMEWORKS} />
  </styles.AbilityWrapper>
)

interface Props {
  title: string;
  description: string;
  skillsTitle: string;
  skills: string[];
  border: boolean;
  icon: any;
}

const AbilityColumn = ({ title, skills, border, skillsTitle, description, icon }: Props) => {
	return (
		<styles.ColumnWrapper border={border}>
      <styles.Header>
			<styles.IconWrapper>{icon}</styles.IconWrapper>
			<h3>{title}</h3>
			<p>{description}</p>
      </styles.Header>

			<styles.List>
				<h4>{skillsTitle}</h4>
				<ul>
					{skills.map((skill) => <li key={skill}>{skill}</li>)}
				</ul>
			</styles.List>
		</styles.ColumnWrapper>
	);
};



export default AbilitiesPanel;