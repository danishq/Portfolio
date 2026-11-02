# Graph Report - Portfolio  (2026-11-02)

## Corpus Check
- Corpus is ~8,391 words - fits in a single context window. You may not need a graph.

## Summary
- 212 nodes · 294 edges · 20 communities (14 shown, 6 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 50 input · 102 output

## Community Hubs (Navigation)
- Project Tooling Configuration
- Core Portfolio Components
- App TypeScript Compiler Settings
- Portfolio Content and Projects
- Node TypeScript Configuration
- Frontend Stack and Tooling
- Portfolio Projects and Experience
- Hero and Resume Components
- Graphify Documentation and Tools
- Service Worker Notifications
- Social Media Icons
- Development Script Commands
- Portfolio Favicon Design
- React ESLint Plugins
- Root TypeScript References
- Hero Image Asset
- Isometric Platform Illustration
- React Logo Asset
- Vite Logo Asset

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `Danish Qureshi` - 15 edges
4. `react` - 14 edges
5. `App()` - 13 edges
6. `graphify` - 7 edges
7. `Danish Qureshi` - 7 edges
8. `ResumeButton()` - 6 edges
9. `SVG Icon Sprite` - 6 edges
10. `scripts` - 5 edges

## Surprising Connections (you probably didn't know these)
- `graphify` --semantically_similar_to--> `graphify`  [INFERRED] [semantically similar]
  .claude/CLAUDE.md → AGENTS.md
- `Danish Qureshi FS Resume` --semantically_similar_to--> `Danish Qureshi`  [INFERRED] [semantically similar]
  src/assets/Danish_Qureshi_FS_Resume.pdf → public/resume.pdf
- `graphify` --semantically_similar_to--> `graphify`  [INFERRED] [semantically similar]
  .claude/CLAUDE.md → CLAUDE.md
- `graphify` --semantically_similar_to--> `graphify`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `React` --semantically_similar_to--> `React`  [INFERRED] [semantically similar]
  README.md → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify usage rules shared across CLAUDE.md, AGENTS.md and .claude/CLAUDE.md** — _claude_claude_graphify, agents_graphify, claude_graphify [INFERRED 0.75]
- **Resume Core Tech Stack** — public_resume_java, public_resume_spring_boot, public_resume_react, public_resume_typescript, public_resume_mongodb, public_resume_elasticsearch, public_resume_docker [EXTRACTED 1.00]
- **Favicon Composition** — public_favicon_d_glyph, public_favicon_q_accent, public_favicon_color_palette [INFERRED 0.85]
- **Social Media Icon Set** — public_icons_bluesky_icon, public_icons_discord_icon, public_icons_github_icon, public_icons_x_icon [EXTRACTED 1.00]

## Communities (20 total, 6 thin omitted)

### Community 0 - "Project Tooling Configuration"
Cohesion: 0.09
Nodes (33): dependencies, react@^19.3.1, react-dom@^19.3.1, devDependencies, eslint@^10.13.0, @eslint/js@^10.0.1, eslint-plugin-react-hooks@^7.1.1, eslint-plugin-react-refresh@^0.5.7 (+25 more)

### Community 1 - "Core Portfolio Components"
Cohesion: 0.13
Nodes (18): react, App(), About(), Toast(), ToastProps, Contact(), ContactProps, Experience() (+10 more)

### Community 2 - "App TypeScript Compiler Settings"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 3 - "Portfolio Content and Projects"
Cohesion: 0.18
Nodes (10): ProjectCard(), ProjectCardProps, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EngineeringDecisions, ExperienceItem, ProjectItem (+2 more)

### Community 4 - "Node TypeScript Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 5 - "Frontend Stack and Tooling"
Cohesion: 0.13
Nodes (16): Danish Qureshi, Elasticsearch, Java, MongoDB, React, Spring Boot, TypeScript, HMR (Hot Module Replacement) (+8 more)

### Community 6 - "Portfolio Projects and Experience"
Cohesion: 0.14
Nodes (16): AdFlipr, AdFlipr for WooCommerce, AI-Assisted Codebase Intelligence, Danish Qureshi, Docker, Elasticsearch, Full Stack Developer, Graphify (+8 more)

### Community 7 - "Hero and Resume Components"
Cohesion: 0.24
Nodes (10): ResumeButton(), ResumeButtonProps, ExitIntentPopup(), ExitIntentPopupProps, CORE_STACK, Hero(), downloadResumeFile(), RESUME_CONFIG (+2 more)

### Community 8 - "Graphify Documentation and Tools"
Cohesion: 0.22
Nodes (10): graphify, GRAPH_REPORT.md, graphify, graphify explain, graphify path, graphify query, graphify update, Knowledge Graph (graphify-out) (+2 more)

### Community 9 - "Service Worker Notifications"
Cohesion: 0.39
Nodes (6): NotificationPreferences(), getInitialPermission(), getIsSupported(), NotificationPermissionState, useServiceWorker(), UseServiceWorkerReturn

### Community 10 - "Social Media Icons"
Cohesion: 0.38
Nodes (7): Bluesky Icon, Discord Icon, Documentation Icon, GitHub Icon, Social Icon, SVG Icon Sprite, X Icon

### Community 11 - "Development Script Commands"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 12 - "Portfolio Favicon Design"
Cohesion: 0.50
Nodes (4): Favicon Color Palette (Dark Navy #171D2B, Blurple #5865F2, White), D Letter Glyph, Portfolio Favicon (SVG), Q Accent Slash / Terminal

### Community 13 - "React ESLint Plugins"
Cohesion: 0.50
Nodes (4): ESLint, eslint-plugin-react-dom, eslint-plugin-react-x, typescript-eslint

## Knowledge Gaps
- **37 isolated node(s):** `graphify query`, `graphify path`, `graphify explain`, `graphify update`, `GRAPH_REPORT.md` (+32 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 94 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Core Portfolio Components` to `Project Tooling Configuration`, `Service Worker Notifications`, `Portfolio Content and Projects`, `Hero and Resume Components`?**
  _High betweenness centrality (0.192) - this node is a cross-community bridge._
- **What connects `graphify query`, `graphify path`, `graphify explain` to the rest of the system?**
  _37 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Tooling Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08571428571428572 - nodes in this community are weakly interconnected._
- **Why does `Danish Qureshi` connect `Frontend Stack and Tooling` to `Core Portfolio Components`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `Core Portfolio Components` be split into smaller, more focused modules?**
  _Cohesion score 0.1349206349206349 - nodes in this community are weakly interconnected._
- **Should `App TypeScript Compiler Settings` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Node TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._