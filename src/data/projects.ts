import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'codebase-intelligence',
    title: 'AI-Assisted Codebase Intelligence',
    subtitle: 'Knowledge Graph Integration via Model Context Protocol (MCP)',
    description:
      'Engineered a multi-repository knowledge graph integration pipeline connecting developer tooling with codebase context across heterogeneous tech stacks.',
    technologies: ['Graphify', 'Python', 'MCP Protocol', 'Antigravity', 'AST Parsing'],
    contributions: [
      'Integrated Graphify across four distinct production codebases: React, Spring Boot, WordPress, and Shopify.',
      'Constructed individual and unified codebase knowledge graphs mapping explicit relationships across files, functions, AST symbols, imports, and cross-service dependencies.',
      'Configured a custom Model Context Protocol (MCP) server integration with Antigravity agentic workflows.',
      'Enabled AI coding agents to deterministically query codebase topology, find circular dependencies, and retrieve contextual architectural context during debugging and code generation.',
    ],
    architectureNote:
      'Focuses on static graph extraction, MCP server IPC, and context retrieval without hallucinating custom ML models.',
    featured: true,
  },
  {
    id: 'adflipr-woocommerce',
    title: 'AdFlipr for WooCommerce',
    subtitle: 'E-Commerce Synchronization & Real-Time Event Pipeline',
    description:
      'Independently authored an extensible WordPress/WooCommerce plugin connecting merchant e-commerce storefronts with AdFlipr via real-time webhooks and secure REST endpoints.',
    technologies: ['PHP', 'WordPress', 'WooCommerce', 'REST APIs', 'Webhooks', 'HMAC Auth'],
    contributions: [
      'Engineered an event-driven synchronization bridge handling high-frequency merchant store activity.',
      'Implemented secure webhook dispatching for checkout events, order creation, inventory changes, and abandoned cart detection.',
      'Designed a resilient token-based handshake and credential validation layer ensuring tamper-proof communication.',
      'Structured background synchronization jobs adhering to WordPress coding standards and minimal store performance impact.',
    ],
    githubUrl: 'https://github.com/devadflipr/adflipr',
    architectureNote:
      'Decoupled webhook queuing to ensure zero impact on customer checkout latency.',
    featured: true,
  },
  {
    id: 'notes-management-system',
    title: 'Notes Management System',
    subtitle: 'Full-Stack REST Architecture with Spring Boot & PostgreSQL',
    description:
      'Architected an end-to-end notes management system highlighting clean separation of concerns, transactional integrity, and token-based security.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'React'],
    contributions: [
      'Constructed a RESTful API layer in Spring Boot enforcing strict DTO validation and comprehensive error handling.',
      'Implemented secure stateless JWT authentication and authorization filters using Spring Security.',
      'Configured Spring Data JPA repository interfaces and relational schema mapping over PostgreSQL.',
      'Developed a responsive, state-aware React interface supporting seamless CRUD interactions with optimistic UI states.',
    ],
    architectureNote:
      'Emphasizes layered domain architecture: Controller → Service → Repository → Persistence.',
    featured: false,
  },
];
