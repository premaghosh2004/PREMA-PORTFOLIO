import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'project1',
    title: "Criminal Record Management System",
    description: "A system that securely stores, manages, and retrieves criminal records for law enforcement agencies efficiently.",
    image: "public/crm.jpg",
    source: "https://github.com/premaghosh2004/CRM",
    tags: ["TailwindCSS", "React", "Mongodb", "Node.js", "Postman"],
  },
  {
    id: 'project2',
    title: "Sentiment Analysis",
    description: "Sentiment analysis automatically detects and classifies emotions and opinions expressed in text data accurately.",
    image: "public/senti.jpg",
    source: "https://github.com/premaghosh2004/Sentiment-Analysis",
    tags: ["Python", "Batchfile"],
  },
  {
    id: 'project3',
    title: "AgentGPT",
    description: "AgentGPT lets you create custom autonomous AI agents that plan, act, and learn to achieve goals",
    image: "public/agentgpt.png",
    source: "https://github.com/premaghosh2004/agent-gpt",
    tags: ["Typescript", "Python", "Javascript", "CSS"],
  },
];

export default projects;
