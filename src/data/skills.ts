import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    skills: [
      'Spring Boot',
      'Spring Security',
      'REST APIs',
      'JWT Authentication',
      'Webhooks',
      'Change Data Capture (CDC)',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      'Java',
      'TypeScript',
      'JavaScript',
      'Python',
      'Rust',
      'PHP',
      'Bash',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Search',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Elasticsearch',
      'Kibana',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    skills: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'GrapesJS Builder',
      'Service Workers & Push API',
      'Tailwind CSS',
      'i18n (7 Languages)',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    skills: [
      'Mailgun Webhooks',
      'Razorpay',
      'WordPress Plugin Dev',
      'WooCommerce API',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Tooling',
    skills: [
      'Linux / Ubuntu VM',
      'Docker',
      'Oracle Cloud (OCI)',
      'Git',
      'Cron Jobs',
      'Graphify',
      'Model Context Protocol (MCP)',
      'Antigravity',
    ],
  },
];
