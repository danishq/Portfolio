import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
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
    title: 'Frontend',
    skills: [
      'React.js',
      'Redux Toolkit',
      'GrapesJS',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'i18n',
      'Service Workers',
      'Web Push API',
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    skills: [
      'Mailgun',
      'Razorpay',
      'WordPress',
      'WooCommerce',
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Tools',
    skills: [
      'Docker',
      'Linux',
      'Oracle Cloud',
      'Git',
      'Cron Jobs',
      'Graphify',
      'Model Context Protocol (MCP)',
      'Antigravity',
    ],
  },
];
