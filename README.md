# Radhika Agrawal — Portfolio

React + Vite portfolio site. Plain CSS with design tokens in `src/index.css`.

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

### Test the production build locally

```bash
npm run build
npx serve dist
# open http://localhost:5000
```

(Install `serve` globally if you prefer: `npm i -g serve`.)

## Deploy (Vercel - recommended)

This project includes a `vercel.json` file to make the Vercel settings explicit (build command: `npm run build`, output directory: `dist`).

Steps to deploy via GitHub:

1. Create a new GitHub repository (e.g. `radhika-portfolio`).
2. From the project folder run:

```bash
# only if this folder is not already a git repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/radhika-portfolio.git
git push -u origin main
```

3. Go to https://vercel.com/new, connect your GitHub account and import the repo.
   Vercel should auto-detect Vite. If not, set:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

4. Deploy — Vercel will provide a URL for the site and preview URLs for each push.

## Notes / Troubleshooting

- If Vercel needs a specific Node version, either add an `engines` field to package.json or set the Node version in Vercel project settings.
- No environment variables are required for the public portfolio by default.

## Editing content

- Hero tagline / terminal lines: `src/components/Hero.jsx` (`LINES` array)
- Projects: `src/components/Projects.jsx` (`PROJECTS` array)
- Experience: `src/components/Experience.jsx` (`COMMITS` array)
- Skills / achievements: `src/components/Skills.jsx`
- Contact links and footer: `src/components/Contact.jsx`
