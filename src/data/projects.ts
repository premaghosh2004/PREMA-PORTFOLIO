import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'project1',
    title: "Criminal Record Management System",
    description: "A system that securely stores, manages, and retrieves criminal records for law enforcement agencies efficiently.",
    image: "https://res.cloudinary.com/dm1aqajk7/image/upload/v1749227083/crm_epp4l9.jpg",
    source: "https://github.com/premaghosh2004/CRM",
    tags: ["TailwindCSS", "React", "Mongodb", "Node.js", "Postman"],
  },
  {
    id: 'project2',
    title: "Sentiment Analysis",
    description: "Sentiment analysis automatically detects and classifies emotions and opinions expressed in text data accurately.",
    image: "https://res.cloudinary.com/dm1aqajk7/image/upload/v1749227195/senti_v3qocd.jpg",
    source: "https://github.com/premaghosh2004/Sentiment-Analysis",
    tags: ["Python", "Batchfile"],
  },
  {
    id: 'project3',
    title: "AgentGPT",
    description: "AgentGPT lets you create custom autonomous AI agents that plan, act, and learn to achieve goals",
    image: "https://res.cloudinary.com/dm1aqajk7/image/upload/v1749227224/agentgpt_kc3zl8.png",
    source: "https://github.com/premaghosh2004/agent-gpt",
    tags: ["Typescript", "Python", "Javascript", "CSS"],
  },
];

export default projects;
