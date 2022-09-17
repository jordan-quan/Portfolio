import { CardColours } from 'ts/interfaces'

import pdfImage from 'assets/images/projects/pdfsplitter/pdfsplitter.jpg'
import portfolioImage from 'assets/images/projects/portfolio/portfolio.jpg'
import lcboImage from 'assets/images/projects/LCBO/lcbo.jpeg'
import telus from 'assets/images/experiences/Telus/telusphone.jpeg'

interface Project {
  display: boolean
  name: string
  id: string
  url: string
  tasks: string[]
  description: string
  subtitle: string
  stack: string[]
  imagePath: string
  github?: string
  year: number
  colours: CardColours
}

export const PROJECTS: Project[] = [
  {
    display: true,
    name: 'PDF Splitter',
    url: 'projects/pdfsplitter',
    subtitle: 'Node JS Script',
    colours: {
      primary: '#80a5d2',
      secondary: '#a2bbda'
    },
    year: 2019,
    id: 'pdf',
    tasks: [
      'Discuss requirements with the End Users',
      'Enforced an object-oriented design pattern',
      'Created aesthetic, responsive frontend using Bootstrap',
      "Set up the app's routes and endpoints using Express.js",
      'Integrated C# script for the splitting functionality to optimize performance',
      'Deployed the app using IIS to support Windows Authentication'
    ],
    stack: ['Node JS', 'Express', 'IIS', 'MySQL', 'Powershell', 'C#', 'Bootstrap'],
    description: 'A web app for legal staff to automate partitioning of large legal documents',
    imagePath: pdfImage
  },
  {
    display: true,
    name: 'Portfolio Website',
    subtitle: 'React Application',
    colours: {
      primary: '#e08d68',
      secondary: '#dfad97'
    },
    // colours: {
    //   primary: '#5650DE',
    //   secondary: '#F869D5'
    // },
    year: 2021,
    url: 'projects/portfolio',
    id: 'portfolio',
    stack: ['React JS', 'Netlify', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Node JS', 'Express'],
    tasks: [
      'Conceptualized and built dynamic routes and views for improved extensibility',
      'Created an aesthetic, responsive frontend using Bootstrap',
      'Utilized React components, lifecycle hooks, and routing to optimize UI/UX',
      'Deployed web application using Github and Netlify'
    ],
    description: 'A Personal Portfolio Website to highlight my achievements as a developer',
    github: 'https://github.com/jordan-quan/Portfolio',
    imagePath: portfolioImage
  },

  {
    display: true,
    name: 'LCBO',
    subtitle: 'Node JS Script',
    colours: {
      primary: '#50795a',
      secondary: '#96af8d'
    },
    year: 2021,
    url: 'projects/lcbo-script',
    id: 'lcbo-script',
    stack: ['Node JS', 'MS SQL', 'Tedious', 'XLSX (npm package)'],
    tasks: [
      'Generalized script read in excel data from 10 uniquely strcutured sheets',
      "Collaboratively construct database schema to best suit the company's future needs",
      'Validate input data from excel sheets to comply with target schema',
      'Chunk data with a defined batch size for asynchronous insert queries, optimizing time and space complexity',
      'Connect to an internal windows authenticated server'
    ],
    description:
      "A Node JS script to consolidate LCBO's monthly winery report files into a database.",
    github: 'https://github.com/jordan-quan/lcbo',
    imagePath: lcboImage
  }
]
