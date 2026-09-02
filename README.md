# Shay Doron — Portfolio

Personal portfolio site: an About section, the projects I've built, a skills
grid and a contact form. Single page, dark theme, no router.

## Tech stack

| | |
|---|---|
| Framework | React 17 |
| Build | Create React App 4 via [craco](https://github.com/dilanx/craco) (to inject the PostCSS/Tailwind pipeline without ejecting) |
| Styling | Tailwind CSS 2 (`@tailwindcss/postcss7-compat`) |
| Icons | Heroicons, Font Awesome, [devicon](https://devicon.dev/) via CDN |
| Tests | Jest + React Testing Library |

## Running locally

This project is pinned to **Node 16** (see [`.nvmrc`](.nvmrc)). CRA 4 builds on
webpack 4, which hashes with MD4 — OpenSSL 3 (bundled with Node 17+) rejects
that and the dev server dies with `ERR_OSSL_EVP_UNSUPPORTED`.

```bash
nvm use          # reads .nvmrc → 16.20.2
npm install
npm start        # http://localhost:3000
```

On a newer Node you can work around it with
`NODE_OPTIONS=--openssl-legacy-provider`, but Node 16 is the supported path.

```bash
npm test         # watch mode
npm run build    # production bundle into build/
```

## Accessibility

The site is meant to hold up to the thing it advertises, so a few decisions are
deliberate:

- Project cards render their title, description and links **in the flow**.
  An earlier version hid them behind `opacity-0 hover:opacity-100`, which meant
  touch devices — most of the traffic — saw images and nothing else.
- Every form field has a real `<label>` bound with `htmlFor`, and validation
  errors are wired to their input with `aria-describedby` / `aria-invalid`.
- Submission status is announced through an `aria-live` region rather than an
  `alert()`.
- Icon-only links carry an `aria-label`; decorative icons are `aria-hidden`.
- A "skip to main content" link is the first focusable element.

`src/App.test.js` guards the label wiring specifically.

## Known gaps

- **No deployment.** The contact form posts in Netlify Forms' format, so it only
  works once the site is hosted on Netlify with form handling enabled.
- **Client-side rendering only.** Crawlers get `<div id="root">` and the
  `<noscript>` fallback. Fixing this properly means moving to a framework that
  pre-renders.
- **Project media are GIFs**, ~29 MB total. Converting them to MP4/WebM would cut
  that by roughly 40×.
- **Dead demos.** The Heroku free tier closed in Nov 2022 and the Dark Sky API in
  Mar 2023, so those two projects link to source only.

## License

MIT
