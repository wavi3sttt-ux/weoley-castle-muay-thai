# Weoley Castle Muay Thai — Website

A single-page marketing site for Weoley Castle Muay Thai, Birmingham. Built with Next.js (App Router), TypeScript, and Tailwind CSS via `create-next-app`.

Everything lives on the root route (`/`). Navigation is same-page anchor scrolling (`#about`, `#timetable`, `#pricing`, `#contact`) — there are no separate pages or routes.

## Assets

Placeholder (empty) files already exist in `public/` — replace them with real files before shipping:

- `public/logo.png` — gym logo (nav, hero, footer, favicon)
- `public/hero-bg.jpg` — background photo behind the hero section
- `public/fabian.jpg` — Fabian Edwards photo
- `public/amarie.jpg` — Amarie Derick photo

If any of these are missing or empty, the site still renders correctly: `logo.png` and the fighter photos fall back to a dark placeholder block with a green text label, and `hero-bg.jpg` simply doesn't render (the hero still looks complete with its animated gradient and grain).

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) (or whichever port is printed in the terminal, if 3000 is already in use).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # lint the project
```

## Deploy to Netlify via GitHub

1. Push this project to a GitHub repository.
2. In Netlify, click **Add new site → Import an existing project**, and connect the GitHub repo.
3. Netlify will detect the settings from `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - Uses the `@netlify/plugin-nextjs` plugin for Next.js App Router support (SSR/ISR routing handled automatically).
4. Click **Deploy site**. Netlify will build and give you a live URL (e.g. `random-name-123.netlify.app`).
5. Future pushes to the connected branch will trigger automatic redeploys.

## Point a custom domain (Netlify)

1. In the Netlify dashboard, open your site → **Domain settings** → **Add a domain**.
2. Enter your domain (e.g. `weoleycastlemuaythai.com`).
3. Netlify shows the DNS records to add at your domain registrar:
   - Easiest: point your domain's nameservers to Netlify DNS, and it configures everything automatically.
   - Alternative: keep your existing DNS provider and add the CNAME/A record Netlify gives you.
4. Wait for DNS to propagate (minutes to a few hours).
5. Netlify automatically provisions a free HTTPS certificate once the domain is verified.

## Project structure

```
app/
  layout.tsx      # root layout, fonts, metadata, grain overlay
  page.tsx         # assembles all sections for the single page
  globals.css      # Tailwind import, design tokens (@theme), animations
components/        # Nav, Hero, About, Timetable, Pricing, Values, Contact, Footer, ...
lib/
  fonts.ts          # next/font setup (Bebas Neue + Inter)
  fighters.ts        # fighter roster data
  stats.ts            # track record stat grid data
  timetable.ts         # weekly class schedule data
  pricing.ts            # membership pricing data
netlify.toml              # Netlify build settings
```

## Notes

- No analytics or third-party scripts are included, other than Google Fonts (via `next/font`, which self-hosts the font files — no runtime request to Google).
- No `src/` directory — imports use `@/*` mapped to the project root (e.g. `@/components/Nav`, `@/lib/pricing`).
- All WhatsApp links point to `https://wa.me/447487639360`.
- The Facebook link is a placeholder (`https://facebook.com`) until a real page URL is supplied.
