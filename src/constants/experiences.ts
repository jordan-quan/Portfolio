import ryersonLogo from 'assets/images/experiences/Ryerson/ryerson.png'
import ryersonImage from 'assets/images/experiences/Ryerson/building.jpeg'
import campus from 'assets/images/experiences/Ryerson/campus.jpeg'
import ryersonSign from 'assets/images/experiences/Ryerson/sign.jpeg'

import oslerLogo from 'assets/images/experiences/Osler/osler.jpeg'
import oslerImage from 'assets/images/experiences/Osler/building.jpeg'
import oslerStreet from 'assets/images/experiences/Osler/street.jpeg'
import financialDistrict from 'assets/images/experiences/Osler/financialDistrict.jpeg'

import telusLogo from 'assets/images/experiences/Telus/telus.jpeg'
import telusImage from 'assets/images/experiences/Telus/building.jpeg'
import telusBuilding from 'assets/images/experiences/Telus/telusBuilding.jpg'

import markhamLogo from 'assets/images/experiences/Markham/markham.jpeg'

import { Experience } from 'ts/interfaces'

export const EXPERIENCES: Experience[] = [
  {
    display: true,
    id: 'telus',
    employer: 'Telus Digital',
    position: 'Senior Fullstack Developer',
    url: 'experiences/telus',
    timeline: [[new Date(2020, 5 - 1), 'present']],
    logo: telusLogo,
    mainImage: telusImage,
    colours: {
      primary: '#6a60a6',
      secondary: '#a5a2da'
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
    images: [telusBuilding]
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
    logo: telusLogo,
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
    mainImage: telusImage
  },

  {
    display: true,
    id: 'osler',
    employer: 'Osler, Harcourt & Hoskin',
    timeline: [[new Date(2020, 5 - 1), new Date(2021, 1 - 1)]],
    url: 'experiences/osler',
    logo: oslerLogo,
    position: 'Junior Web Developer',
    colours: {
      primary: '#a66060',
      secondary: '#daa2a2'
    },
    description:
      "My main role at this company was to maintain the firm's Sharepoint based Intranet.",
    stack: [
      'Sharepoint',
      'Batch',
      'Javascript',
      'C#',
      'Powershell',
      'Node JS',
      'Express JS',
      'MySQL',
      'React JS',
      'REST'
    ],
    tasks: [
      'Managed SharePoint intranet using PowerShell and SharePoint PnP',
      'Communicated regularly with legal staff to gather requirements for custom applications and operational tasks',
      'Built several PowerShell solutions to increase efficiency in the workplace',
      'Constructed a Node JS environment with IIS on a production server enabling the firm to build custom solutions using modern technology',
      'Developed and supported PDF Splitter Web Application (see projects) that is continuing to help eliminate hours of tedious work for legal staff'
    ],
    acheivements: [
      'Over the course of an 8 month term, I built up a track record of both developing a pdf manipulating web application, and delivering 25+ custom solutions successfully eliminating hours of operational tasks in the firm.'
    ],
    mainImage: oslerImage,
    images: [financialDistrict, oslerStreet]
  },

  {
    display: true,
    id: 'ryerson',
    employer: 'Ryerson University',
    timeline: [[new Date(2017, 9 - 1), new Date(2022, 4 - 1)]],
    url: 'experiences/ryerson',
    logo: ryersonLogo,
    colours: {
      primary: '#d4a965',
      secondary: '#dac6a2'
    },
    tasks: [],
    position: 'Student',
    description: 'I am currently a Computer Science Student at Ryerson University.',
    stack: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'Web Development',
      'Computer Networks'
    ],
    acheivements: [
      '2017-2020 Deans List',
      '4.01 CGPA',
      'Awarded the Dr. Byrne H Philip Memorial Award for highest mark in Physics'
    ],
    mainImage: ryersonImage,
    images: [ryersonSign, campus]
  },

  {
    display: false,
    id: 'markham',
    employer: 'City of Markham',
    timeline: [[new Date(2017, 9 - 1), new Date(2022, 4 - 1)]],
    url: 'experiences/markham',
    logo: markhamLogo,
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
    mainImage: markhamLogo
  }
]
