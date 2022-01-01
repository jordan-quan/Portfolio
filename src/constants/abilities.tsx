import { MdCode, MdFlipToFront, MdColorLens } from "react-icons/md";



export const DESIGN = {
  title: 'Design',
  description: 'I enjoy designing beautiful assets to perfectly fit my applications',
  skillsTitle: 'Design tools I like:',
  skills: [ 'Photoshop', 'Illustrator', 'Final Cut' ],
  border: false,
  icon: <MdColorLens/>
}
  
export const LANGUAGES = {
  title: 'Languages',
  description: 'I believe that developers are made by how well they know their tools',
  skillsTitle: 'Languages I speak:',
  skills: [ 'Javascript', 'NodeJS', 'Java', 'Python', 'MySQL', 'C', 'Powershell', 'UNIX / Shell', 'Mongo DB' ],
  border: true,
  icon: <MdCode/>
}


export const FRAMEWORKS = {
  title: 'Frameworks',
  description: 'Good collaboration only makes things better... why rebuild the wheel?',
  skillsTitle: 'Tools I like to use:',
  skills: [ 'React JS', 'Express', 'Sharepoint', 'Bootstrap', 'Angular JS' ],
  border: true,
  icon: <MdFlipToFront/>
}

