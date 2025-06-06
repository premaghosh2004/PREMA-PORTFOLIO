export interface NavItem {
  id: string;
  title: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  source: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}