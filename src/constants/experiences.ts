import ryersonImage from 'assets/images/experiences/Ryerson/building.jpeg'
import ryersonThumbnail from 'assets/images/experiences/Ryerson/thumbnails/building.jpg'
import ryersonSign from 'assets/images/experiences/Ryerson/sign.jpeg'

import oslerImage from 'assets/images/experiences/Osler/building.jpeg'
import oslerThumbnail from 'assets/images/experiences/Osler/thumbnails/building.jpg'
import financialDistrict from 'assets/images/experiences/Osler/financialDistrict.jpeg'

import telusImage from 'assets/images/experiences/Telus/building.jpeg'
import telusBuilding from 'assets/images/experiences/Telus/telusBuilding.jpg'
import telusThumbnail from 'assets/images/experiences/Telus/thumbnails/building.jpg'

import { Experience } from 'ts/interfaces'

const isSenior = false

export const EXPERIENCES: Experience[] = [
  {
    display: true,
    id: 'telus',
    employer: 'Telus Digital',
    position: isSenior ? 'Senior Fullstack Developer' : 'Fullstack Developer',
    url: 'experiences/telus',
    timeline: [[new Date(2020, 5 - 1), 'present']],
    logo: 'telusLogo',
    colours: {
      primary: '#6a60a6',
      secondary: '#a5a2da'
    },

    description:
      "I worked with a team that completely managed Telus' Live Chat & Chatbot solution.",
    stack: ['React JS', 'Redux', 'Node JS', 'Express', 'Postgres', 'Apollo GraphQL'],
    tasks: [
      'Participate in the full agile development lifecycle within a scrum team',
      'Effectively prioritize tasks and deliver high quality solutions in a timely manner',
      'Design react components using lifecycle hooks to optimize UI/UX',
      'Develop unit tests using jest and enzyme',
      'Implement analytic events in different logic flows',
      'Create complex animations using styled-components',
      'Enable purposeful database interactions leveraging Express & GraphQL',
      'Participate in code reviews and provide thoughtful guidance to best practices',
      'Collaborate with other developers creating a fun productive environment',
      ...(isSenior ? ['Mentor and support junior developers'] : [])
    ],
    acheivements: [
      'Built an interactive drag and drop UI updating a database in real-time (see projects)',
      'Implemented a user-lock based concurrency control mechanism for a real-time admin panel',
      'Helped develop a highly scalable recursion based algorthim that maps users to the correct assist flow given changing user inputs'
    ],
    images: { main: telusImage, sub: telusBuilding, thumbnail: telusThumbnail }
  },
  {
    display: false,
    id: 'telus',
    employer: 'Telus Digital',
    position: 'Coop Fullstack Developer',
    url: 'experiences/telus',
    timeline: [
      [new Date(2020, 5 - 1), new Date(2020, 9 - 1)],
      [new Date(2021, 1 - 1), new Date(2021, 9 - 1)]
    ],
    logo: 'telusLogo',
    colours: {
      primary: '',
      secondary: ''
    },
    description:
      "I worked with a team that completely managed Telus' Live Chat & Chatbot solution.",
    stack: ['React JS', 'Redux', 'Node JS', 'Express', 'Postgres', 'Apollo GraphQL'],
    tasks: [
      'Participate in the full agile development lifecycle within a scrum team',
      'Design and efficiently implement high quality software features',
      'Create react components and respective unit tests using jest and enzyme',
      'Create backend CRUD enpoints using Express JS',
      'Participate in code reviews and provides critical and thoughtful guidance to best practices',
      'Identifies scalability, security, and uptime opportunities to increase efficiency within the system',
      'Collaborates with other software developers and members of their scrum team to deliver value for each sprint.'
    ],
    acheivements: [
      'Built an interactive drage and drop UI updating a database in real-time',
      'Implemented a user-lock based concurrency control mechanism for a real-time admin panel',
      'Helped develop a highly scalable recursion based algorthim that maps users to the correct assist flow given changing user inputs'
    ],
    images: { main: telusImage, sub: ryersonSign, thumbnail: ryersonThumbnail }
  },

  {
    display: true,
    id: 'osler',
    employer: 'Osler, Harcourt & Hoskin',
    timeline: [[new Date(2020, 5 - 1), new Date(2021, 1 - 1)]],
    url: 'experiences/osler',
    logo: 'oslerLogo',
    position: 'Junior Web Developer',
    colours: {
      primary: '#a66060',
      secondary: '#daa2a2'
    },
    description:
      "My main role at this company was to maintain the firm's Sharepoint based Intranet.",
    stack: ['Sharepoint', 'Bash', 'Javascript', 'Powershell', 'Node JS', 'MySQL'],
    tasks: [
      'Managed SharePoint intranet using PowerShell and SharePoint PnP',
      'Built several web applications & PowerShell solutions to increase efficiency in the workplace',
      'Communicated regularly with legal staff to gather user requirements'
    ],
    acheivements: [
      'Developed and supported a PDF Splitter Web Application (see projects) that is continuing to help eliminate hours of tedious work for legal staff',
      'Constructed a Node JS environment with IIS on a production server enabling the firm to build web solutions using modern tech stacks',
      'Delivered 25+ custom solutions successfully eliminating hours of operational tasks in the firm.'
    ],
    images: { main: oslerImage, sub: financialDistrict, thumbnail: oslerThumbnail }
  },

  {
    display: true,
    id: 'ryerson',
    employer: 'Ryerson University',
    timeline: [[new Date(2017, 9 - 1), new Date(2022, 4 - 1)]],
    url: 'experiences/ryerson',
    logo: 'ryersonLogo',
    colours: {
      primary: '#d4a965',
      secondary: '#dac6a2'
    },
    tasks: [
      'Software Engineering',
      'Computer Networks',
      'Discrete Structures',
      'Graph Theory',
      'Algebra',
      'Data Structures & Algorithms',
      'Machine Learning',
      'Data Mining'
    ],
    position: 'Student',
    description: 'Graduated Ryerson University with an undergraduate degree in Computer Science.',
    stack: [],
    acheivements: [
      '2017-2022 Deans List',
      '4.01 CGPA',
      'Awarded the Dr. Byrne H Philip Memorial Award for highest mark in Physics'
    ],
    images: { main: ryersonImage, sub: ryersonSign, thumbnail: ryersonThumbnail }
  },

  {
    display: false,
    id: 'markham',
    employer: 'City of Markham',
    timeline: [[new Date(2017, 9 - 1), new Date(2022, 4 - 1)]],
    url: 'experiences/markham',
    logo: 'markhamLogo',
    colours: {
      primary: '',
      secondary: ''
    },
    position: 'Program Instructor',
    description: 'Create a fun, and safe environment for kids to learn!',
    tasks: [
      'Facilitates, leads and supervises the program',
      'Develops lesson plans specific to the abilities of each group. Reviews lesson plans with the Recreation Supervisor/ Program Coordinator prior to class and submits at the end of each session.',
      'Prepares and organizes program equipment and supplies, maintaining an inventory of supplies, reporting to the Program Coordinator/ Recreation Supervisor any items needing replacement',
      'Meets with parents (if needed) prior to, or after class time',
      'Directly guides volunteers and part-time Program Assistants as required',
      'Advises Program Coordinator/ Recreation Supervisor of any customer service issues, complaints or inquiries',
      'Ensures safety at ALL times, enforcing safety regulations as set out by the City of Markham policies and procedures',
      'Adheres to the principles of Healthy Child Development (children ages 6 to 12 years)',
      'Other duties as required'
    ],
    stack: [],
    acheivements: [],
    images: { main: '', sub: '', thumbnail: '' }
  }
]
