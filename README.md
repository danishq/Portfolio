# Danish Qureshi — Portfolio

A single-page personal portfolio for **Danish Qureshi**, a backend-focused full stack developer. It presents experience, projects, and skills through a data-driven React interface, with a few production-style touches: scroll-spy navigation, a downloadable resume, clipboard feedback, an engagement-gated exit-intent popup, and a service worker for local notifications.

**Live site:** [danishqureshi.online](https://danishqureshi.online/)

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19, TypeScript |
| Build tool | Vite 8 |
| Linting | ESLint 10, typescript-eslint |
| Styling | Hand-written CSS with design tokens (`src/styles/variables.css`) |
| Fonts | Victor Mono (Google Fonts) |
| Browser APIs | Clipboard, Session Storage, Service Worker, Notifications |

## Features

- **Sectioned layout** — Hero, About, Experience, Projects, Skills, and Contact, with semantic landmarks and an accessibility skip link.
- **Scroll-spy navigation** — the desktop navbar highlights the section currently in view; mobile gets a slide-in drawer that closes on resize, Escape, or link selection.
- **Data-driven content** — experience, projects, skills, and resume metadata live under `src/data/`, so content updates don't require touching components.
- **Resume download** — served from `public/resume.pdf` through a reusable `ResumeButton` component.
- **Copy-to-clipboard contact** — copying the email shows an ephemeral toast with success or failure feedback.
- **Exit-intent popup** — requires 9 seconds of desktop engagement before a top-edge mouse leave triggers, or 14 seconds plus 75% scroll depth on touch devices. Dismissals are remembered for the session, and the footer exposes a manual trigger.
- **Service worker + notifications** — registers `public/sw.js` for notification click handling and deep-linking, with a `NotificationPreferences` UI component that is currently commented out in `src/App.tsx` pending backend support.
- **SEO and social metadata** — title, description, Open Graph tags, theme color, and favicon declarations in `index.html`.

## Getting Started

### Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm (the repository ships a `package-lock.json`)

### Install and run

```bash
npm install
npm run dev
```

Vite serves the app at the URL printed in the terminal, typically `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc -b` and produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── resume.pdf        # Downloadable resume
│   └── sw.js             # Service worker (notification clicks)
├── src/
│   ├── components/
│   │   ├── About/ Experience/ Projects/ Skills/   # Page sections
│   │   ├── Contact/ Hero/ Footer/ Navbar/
│   │   ├── Common/                              # ResumeButton, Toast
│   │   ├── ExitIntentPopup/
│   │   └── NotificationPreferences/
│   ├── data/             # experience, projects, skills, resume config
│   ├── hooks/            # useScrollSpy, useExitIntent, useEngagementTimer, useServiceWorker
│   ├── styles/           # global styles and CSS variables
│   ├── types/            # shared TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── vite.config.ts
```

## Editing Content

Most content changes are confined to `src/data/`:

- `experience.ts` — roles, companies, contributions, and technologies.
- `projects.ts` — project write-ups, links, and optional engineering-decision notes.
- `skills.ts` — skill categories and their items.
- `resume.ts` — resume file path and download filename.

Replace `public/resume.pdf` to update the downloadable resume, and keep the `filename` in `src/data/resume.ts` in sync if you want a different download name.

## Notes

- **No backend.** The site is fully static; the notification preferences UI is scaffolded but not wired up, as noted by the TODO in `src/App.tsx`.
- **Service worker scope.** `sw.js` registers at `/` and currently handles notification clicks and a `PING`/`PONG` test message rather than caching assets.
- **Browser APIs degrade gracefully.** Clipboard and storage access are