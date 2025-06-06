import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
  id: 'exp1',
  role: 'Participant, Study Abroad Program (SAP)',
  company: 'National University of Singapore (NUS), Singapore',
  duration: 'July 2023 (7 days)',
  description: [
    'Physically attended the intensive 7-day on-campus program at NUS, Singapore',
    'Gained hands-on knowledge and practical skills in Artificial Intelligence (AI), Internet of Things (IoT), Machine Learning (ML), Data Analytics, and Cyber Security',
    'Collaborated with international peers on mini projects and workshops, enhancing problem-solving and teamwork abilities',
    'Exposed to cutting-edge research and real-world applications through expert-led sessions and lab visits',
  ],
},

 {
  id: 'exp2',
  role: 'Participant, Innovare - Smart Maker Festival 2023',
  company: 'IEM Kolkata',
  duration: 'March 2023',
  description: [
    'Attended the annual Techno Management Festival of IEM Kolkata',
    'Participated in Innovare, an innovation-driven event empowered by cutting-edge technology',
    'Designed and implemented a smart door lock system using IoT principles',
    'Collaborated with peers to develop practical solutions and presented the project to a panel of judges',
    'Enhanced skills in embedded systems, sensor integration, and real-time control'
  ],
},

{
  id: 'exp3',
  role: 'Certified Online Learner',
  company: 'Coursera',
  duration: '2023 - Present',
  description: [
    'Completed "Foundations of Cyber Security" by Google, gaining fundamental cybersecurity skills',
    'Completed "Cloud Computing Basics" by LearnQuest, understanding cloud service models and architecture',
    'Completed "IoT: Communication Technologies" by University of California, San Diego, learning about wireless and wired communication protocols in IoT',
    'Completed "Introduction to IoT and Embedded Systems" by University of California, Irvine, developing knowledge in embedded hardware and IoT system design',
    'Applied theoretical knowledge to practical projects and enhanced understanding of emerging technologies'
  ],
},

];

export const education: Education[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Institute of Engineering & Management, Kolkata',
    duration: '2022 - 2026',
    description: 'Currently in final year with a CGPA of 9.11/10. Specialized in MERN Stack Development, Gen AI, Cloud & Internet of Things.',
  },
  {
    id: 'edu2',
    degree: 'Higher Secondary (12th)',
    institution: 'Bongaon Kumudini Uchcha Balika Vidyalaya (WBCHSE)',
    duration: '2021-2022',
    description: 'Completed with 91% marks, Pure Science(Physics, Chemistry, Mathematics, Biology)',

  },

    {
    id: 'edu3',
    degree: 'Secondary (10th)',
    institution: 'Bongaon Kumudini Uchcha Balika Vidyalaya (WBBSE)',
    duration: '2019-2020',
    description: 'Completed with 95.6% marks',

  },


];