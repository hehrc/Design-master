# Vantora Media — Website Recreation

A production-style, fully client-side website for **Vantora Media**, built with React, TypeScript and Vite. It keeps the same dark/lime identity, typography, imagery, copy and interaction model as the original reference design while running as an independent single-page application.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 (`react-router-dom`, `BrowserRouter`) |
| Styling | Hand-written CSS with design tokens (no UI framework) |
| Animation | CSS transitions/keyframes + `IntersectionObserver` reveal + requestAnimationFrame-free marquee tracks |
| Media | Locally vendored images/video/fonts, Vimeo player embeds |
| Lint | Oxlint |
| QA | Puppeteer-core against headless Chromium |

No backend, database, CMS or analytics scripts are included.

---

## Feature list

### Global
- Fixed glass-style header with scroll state, desktop nav, animated “Let’s Talk” CTA and a full-screen mobile menu (Esc closes, body scroll is locked, closes on navigation).
- Shared footer with email, real social profiles, “Ready When You Are.” display type and SaaS ↔ Personal Branding switch.
- Skip-to-content link, focus management for menus/modals, semantic sections, ARIA tab/accordion/carousel roles.
- Route-aware document titles.
- Hash navigation that accounts for the fixed header (`/#Work`, `/#Review`, `/#Pricing`, `/#talktous`).
- Responsive layout at desktop, tablet and mobile widths; no horizontal overflow.
- Lazy image loading with reserved aspect ratios to avoid layout shift.

### Home (`/`)
- Hero with creator/trust pills, display headline, CTA, watch-process button, brand marquee and a muted looping showreel video.
- Proof section with auto-advancing quote carousel (pause on hover/focus, dot controls) plus an infinite quote marquee and rating pill.
- Four-step process strip, animated brand logos and “What goes into every video” cards.
- **Work tabs** with four categories (Product Release, Launch Video, In-Person Demo, Others), six video cards each and Vimeo lightbox playback.
- Testimonial wall with real social-post screenshots linking to their sources.
- Three-part framework section with a sticky visual and animated glow.
- Pricing cards (one-off and three-video bundle) with old/new price treatment, save badge, slots, feature lists and metadata.
- Four-step “How it works” narrative with artwork and a process video.
- Recent-work marquee with clickable video thumbnails.
- Contact form: client-side validation, inline errors, sending/error/success states, optional JSON endpoint, `mailto:` fallback.
- Review grid, FAQ accordion, rating pill and closing CTA.
- Marquee, reveal-on-scroll and hover animations throughout.

### Case studies (`/case-studies`, `/case-studies/:slug`)
- Hero, featured case study, category-labelled study cards, recent-work marquee and CTA.
- Four detail pages with challenge/approach/result sections, stats, video lightbox, next-study link and project CTA.

### Blog (`/blog`, `/blog/:slug`)
- Featured article, article grid with categories, read time, author, date and editorial imagery.
- Six full articles with structured headings, reading layout, in-article CTA and “Keep reading” recommendations.

### Careers (`/careers`)
- Hiring hero, open-role accordion (one open at a time), role requirements and `mailto:` application links.
- Open-application CTA.

### Personal branding (`/personal-brand`)
- Creator-focused hero, full-bleed looping creator-photo marquee (reference artwork), stats.
- Love/review cards, creator logo marquee, video showcase marquee.
- Eight-format tab switcher, process steps, creator pricing, FAQ accordion, contact form and “Ready to ride?” CTA.
- Uses the same validated contact form and Vimeo lightbox as the home page.

### 404 (`*`)
- Branded not-found page with recovery links and shared footer.

---

## Project structure

```
src/
  App.tsx                  Router, scroll manager, document titles, video provider
  main.tsx                 React entry point
  components/
    Nav.tsx                Header + mobile menu
    Footer.tsx             Shared footer
    VideoModal.tsx         Vimeo lightbox context/provider
    ui.tsx                 Button, Marquee, Reveal, SectionHead, RatingPill, ...
    Icons.tsx              Inline SVG icon set
    sections/              Home-page sections (Hero, Work, Pricing, Contact, ...)
  pages/                   Home, CaseStudies, CaseStudyDetail, Blog, BlogPost,
                           Careers, PersonalBrand, NotFound
  data/site.ts             All copy, links, pricing, case studies, posts, jobs
  styles/
    global.css             Fonts, tokens, base, header/footer, shared components
    home.css               Home + shared marketing sections
    pages.css              Subpage layouts and responsive rules
public/
  assets/img|video|fonts   Vendored media
  _redirects               Netlify SPA fallback
```

---

## Getting started

Requires Node.js 20+ (developed on Node 22).

```bash
npm install
npm run dev
```

Open the printed local URL (Vite defaults to `http://localhost:5173`). The development server is currently running at `http://127.0.0.1:5173/` in this environment.

### Build

```bash
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

### Contact form endpoint

Copy `.env.example` to `.env` and set:

```bash
VITE_CONTACT_ENDPOINT=https://your-form-service.example/submit
```

The form sends a JSON `POST` with `name`, `email`, `company`, `website`, `budget` and `message`. If the variable is absent (the default), submitting a valid form opens the visitor's email client with a prefilled message to `hello@vantora.media`; no data is sent anywhere by the site itself.

---

## Deploying

The build output is a static SPA. Configure the host to rewrite unknown paths to `index.html` so deep links such as `/blog/some-post` work.

**Netlify** — `public/_redirects` is included and copied to `dist/`:

```
/*    /index.html   200
```

**Vercel** — add a rewrite in `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Nginx**:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**GitHub Pages / S3 / other static hosts** — configure a 404 fallback to `index.html` (or copy `index.html` to `404.html` for GitHub Pages).

Set `VITE_CONTACT_ENDPOINT` in the host's environment settings before building if form submissions should reach an API.

---

## Testing results

Verified against a local production-equivalent Vite dev build in headless Chromium (Puppeteer-core, `/usr/bin/chromium`):

- `npm run build` — passes; TypeScript reports no errors.
- `npm run lint` — 0 errors, 3 non-blocking React fast-refresh/effect warnings.
- Route smoke test at 1440, 834 and 390 px: `/`, `/case-studies`, `/case-studies/clickup`, `/blog`, one blog post, `/careers`, `/personal-brand`, unknown route → 404 page. All render with no console or page errors.
- All homepage lazy images load after scrolling; 0 broken images. All asset responses return 200.
- No horizontal overflow (`scrollWidth <= clientWidth`) on any tested route at 390/834/1440.
- Work tabs: switching updates the active tab, labels and the six-card set.
- FAQ accordion: opens one item, closes on second click, updates `aria-expanded`.
- Proof carousel: dots change the active quote (transform moves by one 304 px step), auto-advance pauses on hover.
- Video lightbox: opens with the correct Vimeo ID, locks body scroll, focuses the close button, closes via Esc, backdrop click and close button. Vimeo player URL and Cloudflare challenge load; actual playback was not asserted in headless Chromium.
- Mobile menu: opens, locks scroll, closes on Esc and on link navigation; navigation succeeds.
- Contact form: empty submit shows four inline errors and an error status; valid submit with no endpoint shows the `mailto:` fallback message. (No real endpoint was configured, so network delivery was not tested.)
- Anchor navigation: `/#Work`, `/#Pricing`, `/#talktous` from home and from subpages land with the fixed header offset (96 px); native in-page anchors use `scroll-margin-top`.
- Tablet and mobile screenshots reviewed for hero, work, pricing, process, reviews, FAQ, contact, footer and subpages. Pricing old/new prices were corrected at tablet/mobile breakpoints; personal-brand hero and case-study next-link were adjusted for small screens.
- Document titles verified on every route.
- Internal link crawl: 0 broken internal routes and 0 `href="#"` placeholders.

Not performed: real-device Safari/Firefox testing, screen-reader audit, Lighthouse scoring, real form delivery, and real Vimeo playback.

---

## Known limitations

- **Form delivery is environment-dependent.** Without `VITE_CONTACT_ENDPOINT` the form relies on the visitor's mail client. There is no server-side spam protection or persistence.
- **Third-party media.** Vimeo embeds and outbound social/post links require network access and may be blocked by privacy tooling or regional restrictions. Vimeo player playback was not verified in headless Chromium.
- **Static content.** Case studies, posts, jobs and pricing live in `src/data/site.ts`; there is no CMS or admin UI. Editing content requires a rebuild.
- **No analytics.** The reference's Clarity/GA4 snippets were intentionally omitted.
- **Reference assets.** Images, fonts, video and brand marks are vendored from the reference for this recreation. Review licensing/trademark usage before publishing commercially.
- **Personal-brand page** preserves the reference's structure and creator artwork, but uses the site's shared header/footer rather than the reference's separate personal-brand navigation.
- **Copy fidelity.** Copy follows the reference closely; a few section labels and microcopy were normalised for grammar/consistency (for example the reference's lowercase/typo spellings).
- **No SSR/prerendering.** Initial HTML is the app shell, so social crawlers may not see route-specific OG tags. Route titles are updated client-side.
- **The contact form exposes the endpoint URL** in the client bundle, as is normal for static form services; use a service with domain restrictions or a serverless proxy if that matters.

---

## Notes for maintainers

- Content and media paths are centralised in `src/data/site.ts`.
- Design tokens (`--bg`, `--lime`, `--container`, `--section-pad`, radii, fonts) are defined at the top of `src/styles/global.css`.
- Home sections are composed in `src/pages/Home.tsx`; section order: header, hero, proof, steps, work, testimonials, framework, pricing, process, showcase, contact, reviews, FAQ, footer.
- The Vimeo lightbox is opened via `useVideo()`; pass a numeric Vimeo ID.
- `scroll-behavior` is smooth by default; the scroll manager offsets anchor targets by the fixed header height.
