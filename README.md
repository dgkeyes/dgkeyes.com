# dgkeyes.com

Personal site, built with [Astro](https://astro.build). A homepage, a writing index, individual posts, a contact page, and an RSS feed. No CMS, no framework beyond Astro, no client-side JavaScript.

## Writing a post

Add a Markdown file to `src/content/posts/`. The filename becomes the URL (`src/content/posts/hello.md` is served at `/posts/hello`).

```markdown
---
title: Post title
date: 2026-08-28
description: Optional one-line summary used for the meta description and RSS.
draft: true
---

Body in Markdown.
```

Posts are listed newest first. `draft: true` hides a post from production builds but shows it in `npm run dev`. The homepage shows the five most recent posts; `/writing` shows everything.

## Development

```sh
npm install
npm run dev
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to the `dgkeyes-com` Cloudflare Pages project. The workflow needs two repository secrets: `CLOUDFLARE_API_TOKEN` (Pages: Edit) and `CLOUDFLARE_ACCOUNT_ID`.

`public/_redirects` sends `www.dgkeyes.com` to `dgkeyes.com`.
