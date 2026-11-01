export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  summary: string;
  contributions: string[];
  technologies: string[];
  link?: string[];
}

export interface EngineeringDecisions {
  approach: string;
  tradeOffs: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  contributions: string[];
  githubUrl?: string;
  liveUrl?: string;
  engineeringDecisions?: EngineeringDecisions;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ResumeConfig {
  url: string;
  filename: string;
  viewUrl?: string;
}
