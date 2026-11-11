# coco — portfolio

Source for [www.cocohdz.com](https://www.cocohdz.com). Designed in Figma, built with Next.js.

## Run it locally

    npm install
    npm run dev        # http://localhost:3000

## Deploying

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site as
static files (`npm run build` → `out/`) and publishes them to GitHub Pages.
The custom domain is set in the repo's Pages settings (and `public/CNAME`).

## Where things live

- `app/page.tsx` — home page; `app/{projects,media,about}` — "Coming soon" pages
- `components/SiteNav.tsx`, `components/SiteFooter.tsx` — shared nav and footer
- `components/Keycaps.tsx` — the "hello world" keycaps (positions from Figma)
- `public/images/` — signature, photo, and keycap images exported from Figma
- `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png` — site icons

## To fill in

- GitHub URL and public email — `components/SiteFooter.tsx`
- Résumé — add `public/resume.pdf`
