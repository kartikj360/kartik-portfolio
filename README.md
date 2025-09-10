## Kartik Joshi — Portfolio Website

This is a simple personal portfolio website built with Next.js and Tailwind CSS. It shows who you are, your work experience, organizations you were part of, projects, skills, education, achievements, publications, and contact details. The site is exported as static files so you can easily deploy it anywhere.

### Who is this for?
- Beginners who want to understand a basic Next.js portfolio setup.
- Anyone who wants to customize and deploy a static portfolio quickly.

### What you’ll get
- Clean sections: About, Experience, Organizations, Projects, Skills, Education, Achievements, Publications, Contact
- Simple content editing (one or two files to change)
- Works as a static site (no server needed)

## Tech Stack
- Next.js (App Router) with static export
- TypeScript
- Tailwind CSS for styling
- Framer Motion for small animations

## Quick Start (Local)
1) Install dependencies
```bash
npm install
```
2) Run the dev server
```bash
npm run dev
# Open http://localhost:3000
```

## How to Edit Your Content

### Basic profile text
Open `src/app/data/portfolio.ts` and update `personalInfo` (name, title, links, etc.).

### Projects
Open `src/app/data/portfolio.ts` and edit the `projects` array (title, description, tech, links). Project images are auto-looked up by a slug version of the title: `public/images/projects/<slug>.jpg`.

### Work Experience and Organizations (add pictures)
Open `src/app/components/common/Experience.tsx` and update the two arrays: `workExperiences` and `organizationExperiences`.
- You can add bullet points and an optional `images` array per item.
- Up to 3 images show for each item.
- Put your files in these folders:
  - Work images → `public/images/experience/`
  - Organization images → `public/images/organizations/`

Example inside `Experience.tsx`:
```ts
images: ["hse-1.jpg", "hse-2.jpg"] // reads from public/images/experience/
```

### Publications
Open `src/app/components/common/Achievements.tsx` and edit the exported `Publications` component. Two placeholder entries are provided—replace the title, venue, year, and summary.

### Resume download
- Place your `resume.pdf` in the `public/` folder.
- The button in the Hero section already points to it and supports deployed base paths.

## Build and Export (for Deployment)
This project is configured to export static files.
```bash
npm run build
npm run export
# Files will be generated in the out/ folder
```

The project uses a base path set in `next.config.ts`:
```ts
basePath: "/kartik-portfolio",
assetPrefix: "/kartik-portfolio/",
```
This makes the site work when hosted under `/kartik-portfolio`. If you deploy at the domain root (e.g., `https://example.com/`), you can remove the base path in `next.config.ts`.

## Deploy Options
- Any static hosting (Netlify, GitHub Pages, Vercel static, S3, etc.)
- Upload the `out/` folder contents to your host

## Folder Overview
- `src/app/` – pages and UI components
  - `components/common/` – section components like `Header`, `Hero`, `Experience`, etc.
  - `data/portfolio.ts` – your basic profile and project data
- `public/` – static files (images, resume)
- `out/` – generated static site after export

## Theming
- Default theme is light. The theme toggle was removed to keep things simple for beginners.

## Troubleshooting for Beginners
- Images not showing?
  - Check the file path and name. Put images in the correct `public/images/...` folder.
  - For work experience use `public/images/experience/`, for organizations use `public/images/organizations/`.
- Resume not downloading?
  - Ensure `public/resume.pdf` exists.
  - If deploying under a subpath, keep `basePath` in `next.config.ts`.
- Deployed site looks broken (missing CSS/JS)?
  - Make sure you served the `out/` folder and your host respects the `basePath`.

## Want to Customize More?
- Add or remove sections by editing `src/app/page.tsx` and the matching components under `src/app/components/common/`.
- Update animations or styles with Tailwind classes and Framer Motion props.

That’s it! You can now make it your own and deploy.
