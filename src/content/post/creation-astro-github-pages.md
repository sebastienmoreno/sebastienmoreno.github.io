---
publishDate: 2023-02-03T00:00:00Z
title: Create a static blog hosted in Github Pages with Astro
description: Create a static blog hosted in Github Pages with Astro
excerpt: Create a static blog hosted in Github Pages with Astro
image: ~/assets/images/caos.jpg
category: Tutorials
tags:
  - astro
  - tailwind css
  - github
---

The documentation here provide main inputs: https://docs.astro.build/en/guides/deploy/github/

## Build configuration

Create a file `astro.config.mjs`:
```mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://jamkey.github.io',
})
```

Create a build file `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:
  
# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0
        # with:
            # path: . # The root location of your Astro project inside the repository. (optional)
            # node-version: 16 # The specific version of Node that should be used to build your site. Defaults to 16. (optional)
            # package-manager: yarn # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

Go into settings of the repo to activate **Pages**

## Usage

As said by the [Astro documentation](https://docs.astro.build/fr/guides/images/#where-to-store-images):
`Your images stored in src/ can be used by components (.astro, .mdx and other UI frameworks) but not in Markdown files.`

So store your images into `/public/images` and reference images in your Markdown pages with `![](/images/<my image file name>)`

**Help**: you can add a symbolic link to public/images at the root of the project to render Markdown files when editing:
```sh
ln -s public/images images
```