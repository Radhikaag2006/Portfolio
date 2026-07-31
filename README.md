# Radhika Agrawal — Portfolio

React + Vite portfolio site. No CSS framework, no UI kit — plain CSS with
design tokens in `src/index.css`.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy (fastest: Vercel)

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist`.
4. Deploy — you'll get a URL like `radhika-agrawal.vercel.app` to put in the
   Motorq application form.

Netlify works the same way (drag-and-drop the `dist/` folder after
`npm run build`, or connect the repo).

## Editing content

- Hero tagline / terminal lines: `src/components/Hero.jsx` (`LINES` array)
- Projects: `src/components/Projects.jsx` (`PROJECTS` array) — update the
  `link` field once you push the Legal RAG Assistant repo (currently points
  to your GitHub profile since that repo isn't public yet)
- Experience: `src/components/Experience.jsx` (`COMMITS` array)
- Skills / achievements: `src/components/Skills.jsx`
- Contact links: `src/components/Contact.jsx`
