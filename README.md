# Jamkey Hugo site

This repository is now a Hugo site using [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack).

## Content

Blog posts are kept as Markdown files in `content/post/`. Their text and useful metadata were migrated from the previous Astro site. Inline images are available under `static/images/`.

The homepage contains an overview of the main topics and automatically shows the six latest articles. Edit `content/_index.md` to change its introduction and topic links.

The article index is available at `/post/`, the biography page is available at `/a-propos/`, the conference references are available at `/conferences/`, and article URLs keep the previous root-level slug format, for example `/what-is-devops/`.

## Local development

Install Hugo Extended 0.158.0 or newer, then run:

```sh
hugo server -D
```

Build the site with:

```sh
hugo --minify
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` changes. In the repository settings, set GitHub Pages to use **GitHub Actions** as the source. The existing `static/CNAME` keeps the `jamkey.fr` custom domain.
