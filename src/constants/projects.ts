import { Project } from 'ts/interfaces'

import pdfImage from 'assets/images/projects/pdfsplitter/pdfsplitter.jpg'
import pdfScreenshot from 'assets/images/projects/pdfsplitter/mac.png'
import pdfThumbnail from 'assets/images/projects/pdfsplitter/thumbnails/pdfsplitter.jpg'

import lcboImage from 'assets/images/projects/LCBO/lcbo.jpeg'
import lcboScreenshot from 'assets/images/projects/LCBO/mac.png'
import lcboThumbnail from 'assets/images/projects/LCBO//thumbnails/lcbo.jpg'

import adminImage from 'assets/images/projects/adminpanel/workplace.jpg'
import adminScreenshot from 'assets/images/projects/adminpanel/mac.png'
import adminThumbnail from 'assets/images/projects/adminpanel/thumbnails/workplace.jpg'

export const PROJECTS: Project[] = [
  {
    display: true,
    name: 'Admin Control Panel',
    description: `A real-time admin control panel used to configure settings for the chat 
      assistant telus.com`,
    subtitle: 'React Application',
    colours: {
      primary: '#e08d68',
      secondary: '#dfad97'
    },
    year: 2021,
    url: 'projects/adminpanel',
    id: 'adminpanel',
    stack: ['React JS', 'GraphQL', 'Node JS', 'PostgreSQL'],
    tasks: [
      'Built an interactive drag & drop UI updating a server in real time',
      'Provisioned a checkout system allow multiple users to edit settings concurrently',
      'Designed PostgreSQL schemas prioritizing simplicity',
      'Created an aesthetic, responsive frontend',
      'Utilized lifecycle hooks, debounce functions & memoization optimizing UX performance'
    ],
    github: 'https://github.com/jordan-quan/Portfolio',
    images: { main: adminImage, sub: adminScreenshot, thumbnail: adminThumbnail }
  },

  {
    display: true,
    name: 'LCBO script',
    subtitle: 'Node JS script',
    colours: {
      primary: '#50795a',
      secondary: '#96af8d'
    },
    year: 2021,
    url: 'projects/lcbo-script',
    id: 'lcbo-script',
    stack: ['Node JS', 'MS SQL', 'Tedious', 'XLSX (npm package)'],
    tasks: [
      'Build a script that efficiently reads and transforms millions of rows of data',
      "Collaboratively construct database schema to best suit the company's future needs",
      'Validate input data from excel sheets to comply with target schema',
      'Chunk data with a defined batch size for asynchronous insert queries, optimizing time and space complexity',
      'Connect application to an internal windows authenticated server'
    ],
    description: `Custom solution that populates production databases on a monthly basis with data from
    5,000+ Excel files with several sheets of varying structures.`,
    github: 'https://github.com/jordan-quan/lcbo',
    images: { main: lcboImage, sub: lcboScreenshot, thumbnail: lcboThumbnail }
  },

  {
    display: true,
    name: 'PDF Splitter',
    url: 'projects/pdfsplitter',
    subtitle: 'Web Application',
    colours: {
      primary: '#80a5d2',
      secondary: '#a2bbda'
    },
    year: 2019,
    id: 'pdfsplitter',
    tasks: [
      'Gather user requirements from legal staff',
      'Enforced an object-oriented design pattern for extensibility purposes',
      'Created an aesthetic, responsive frontend using Bootstrap',
      'Define & build out REST endpoints',
      'Integrated C# script for the splitting functionality to optimize performance',
      'Deployed the app using IIS to support Windows Authentication'
    ],
    stack: ['Node JS', 'Express', 'IIS', 'MySQL', 'C#', 'Bootstrap'],
    description: 'A web app for legal staff to automate partitioning of large legal documents',
    images: { main: pdfImage, sub: pdfScreenshot, thumbnail: pdfThumbnail }
  },
  {
    display: false,
    name: 'Portfolio Website',
    subtitle: 'React Application',
    colours: {
      primary: '#e08d68',
      secondary: '#dfad97'
    },
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
    images: { main: '', sub: '', thumbnail: '' }
  }
]
