---
type: "query"
date: "2026-11-01T22:29:19.186968+00:00"
question: "how calls preview"
contributor: "graphify"
source_nodes: ["preview", "scripts", "Vite", "package.json"]
---

# Q: how calls preview

## Answer

Expanded from original query via graph vocabulary: [preview, scripts, vite, package, dev, build]. The graph shows package.json contains scripts and scripts contains preview at package.json:L10; it does not encode a calls edge for the preview command. The source defines the script as "preview": "vite preview". Run it with npm run preview (after npm run build to preview the production build).

## Source Nodes

- preview
- scripts
- Vite
- package.json