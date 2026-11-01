import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'codebase-intelligence',
    title: 'AI-Assisted Codebase Intelligence',
    subtitle: 'Knowledge Graph Integration via Model Context Protocol (MCP)',
    description:
      'Integrated Graphify across four repositories (React, Spring Boot, WordPress, and Shopify) to generate codebase knowledge graphs and expose them to AI coding agents via MCP.',
    technologies: ['Graphify', 'Python', 'Model Context Protocol (MCP)', 'Antigravity'],
    contributions: [
      'Generated individual and unified knowledge graphs mapping relationships between files, functions, imports, and dependencies across four distinct codebases.',
      'Configured Graphify MCP integration with Antigravity, enabling coding agents to query repository knowledge graphs and retrieve codebase context for code exploration and dependency analysis.',
      'Structured graph representations to provide relevant structural context without requiring full repository file dumps in agent workflows.',
    ],
    engineeringDecisions: {
      approach:
        'Used Graphify to statically analyze files, functions, and import paths across React, Spring Boot, WordPress, and Shopify repositories, producing unified graph representations of cross-file dependencies.',
      tradeOffs:
        'Connecting the knowledge graph via an MCP server allows coding agents to query specific graph neighborhoods on demand. This provides structural context while avoiding the token overhead and hallucination risks of feeding raw repository files into prompts.',
    },
    featured: true,
  },
  {
    id: 'adflipr-woocommerce',
    title: 'AdFlipr for WooCommerce',
    subtitle: 'WordPress & WooCommerce Integration Plugin',
    description:
      'An integration plugin connecting WooCommerce stores with AdFlipr via REST APIs and webhooks for product, order, checkout, and abandoned cart events.',
    technologies: ['PHP', 'WordPress', 'WooCommerce', 'REST APIs', 'Webhooks'],
    contributions: [
      'Developed a standalone WordPress plugin connecting WooCommerce e-commerce stores with AdFlipr.',
      'Implemented product and order data synchronization using WooCommerce APIs.',
      'Processed webhook events for checkout activity and abandoned cart occurrences.',
      'Built secure authentication handling between merchant stores and AdFlipr endpoints.',
    ],
    githubUrl: 'https://github.com/devadflipr/adflipr',
    engineeringDecisions: {
      approach:
        'Utilized standard WordPress plugin architecture and WooCommerce action hooks to capture checkout actions, order updates, and cart abandonment events as they occur.',
      tradeOffs:
        'Dispatched webhook events directly to AdFlipr REST endpoints with token authentication rather than storing event queues in merchant databases, minimizing plugin overhead on store checkout response times.',
    },
    featured: true,
  },
  {
    id: 'notes-management-system',
    title: 'Notes Management System',
    subtitle: 'Full-Stack Application with Spring Boot & PostgreSQL',
    description:
      'A full-stack notes management application with token-based authentication, a Spring Boot REST API, PostgreSQL persistence, and a React frontend.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'React'],
    contributions: [
      'Developed RESTful API endpoints for note creation, retrieval, updates, and deletion in Spring Boot.',
      'Implemented secure token-based authentication and endpoint authorization using Spring Security.',
      'Configured relational schema mappings and query persistence using Spring Data JPA with PostgreSQL.',
      'Built a React frontend to manage authentication states and notes CRUD interactions.',
    ],
    engineeringDecisions: {
      approach:
        'Organized the backend into distinct Controller, Service, and Repository layers to enforce separation between HTTP routing, business logic, and database persistence.',
      tradeOffs:
        'Chose stateless JWT authentication to keep API endpoints session-independent, paired with Spring Data JPA for straightforward object-relational mapping without manual SQL boilerplate.',
    },
    featured: false,
  },
];
