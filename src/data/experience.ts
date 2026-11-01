import type { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'adflipr',
    company: 'AdFlipr',
    role: 'Full Stack Developer',
    period: 'August 2025 – Present',
    isCurrent: true,
    summary:
      'Developing backend services and business workflows in Java and Spring Boot, alongside modular React and TypeScript frontend features.',
    contributions: [
      'Developed REST APIs and backend workflows for campaign management, automated domain verification, and user services using Java and Spring Boot.',
      'Constructed MongoDB queries and designed Elasticsearch search queries, filters, and aggregations for application data retrieval.',
      'Implemented JWT-based authentication and worked with Change Data Capture (CDC) pipelines to synchronize datastores.',
      'Integrated third-party services including Mailgun webhook processing and Razorpay payment flows.',
      'Refactored React application components for maintainability, and built an interactive email and popup builder using GrapesJS.',
      'Developed browser Web Push notifications with Service Workers, Push API, and VAPID, and implemented internationalization (i18n) across seven languages.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'MongoDB',
      'Elasticsearch',
      'JWT',
      'Change Data Capture (CDC)',
      'React',
      'TypeScript',
      'GrapesJS',
      'Service Workers',
      'Web Push API',
      'Razorpay',
      'Mailgun',
      'WordPress',
    ],
    link:[
      'https://linkedin.com/company/adflipr'
    ]
  },
  {
    id: 'mangrove-life',
    company: 'The Mangrove Life',
    role: 'Frontend Developer',
    period: 'March 2024 – July 2025',
    isCurrent: false,
    summary:
      'Developed responsive web interfaces, reusable UI components, and managed application state using Redux Toolkit.',
    contributions: [
      'Built modular, reusable React components and integrated REST API endpoints.',
      'Managed client-side application state using Redux Toolkit to maintain predictable data flow.',
      'Implemented responsive layouts using HTML, CSS, JavaScript, and Tailwind CSS.',
      'Participated in testing, bug fixing, and collaborative code reviews.',
    ],
    technologies: [
      'React.js',
      'Redux Toolkit',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'REST APIs',
    ],
    link:[
      'https://themangrove.in'
    ]
  },
];
