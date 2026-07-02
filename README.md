# Sankarapuram Plot Landing

Single-page landing site for a corner plot in Shankarapuram, Sithalapakkam, Chennai.
Built with React + Vite + Tailwind CSS.

**Live:** https://surenanem.github.io/sankarapuram/

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Deploy (GitHub Pages)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
every push to `main` builds the site and publishes it to GitHub Pages.

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

The site is served from the `/sankarapuram/` subpath, configured via `base` in
[`vite.config.js`](vite.config.js). If the repository is ever renamed, update that
value to match.

## Project structure

```
index.html            App entry / <head> metadata
src/
  main.jsx            React bootstrap
  App.jsx             Page composition
  data.js             Plot details / content data
  index.css           Tailwind entry
  components/         Section components (Hero, Pricing, etc.)
public/favicon.svg    Favicon
landing.md            Source content spec for the landing copy
```
