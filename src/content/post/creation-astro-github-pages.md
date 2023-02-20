---
publishDate: 2023-02-03T00:00:00Z
title: Blog statique Astro avec Github Pages
description: Créer un blog statique hébergé dans Github Pages avec Astro
excerpt: Créer un blog statique hébergé dans Github Pages avec Astro
image: ~/assets/images/astro.jpg
category: Tutorials
tags:
  - astro
  - tailwind
  - github
---

La documentation fournit ici les principales infos pour déployer un site Astro dans **Github Pages** : https://docs.astro.build/en/guides/deploy/github/

## Configuration Astro

Créer un fichier `astro.config.mjs`:
```mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://jamkey.github.io',
})
```

Créer un pipeline Actions `.github/workflows/deploy.yml`:
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

Allez dans les paramètres du repo pour activer les **Pages**.

## Les images dans un site Astro

Comme indiqué dans la [documentation Astro](https://docs.astro.build/fr/guides/images/#where-to-store-images) :

> Your images stored in src/ can be used by components (.astro, .mdx and other UI frameworks) but not in Markdown files.
> So store your images into `/public/images` and reference images in your Markdown pages with `![](/images/<my image file name>)

**Aide** : vous pouvez ajouter un lien symbolique vers `/public/images` à la racine du projet pour avoir un aperçu des fichiers Markdown avec les images intégrées lors de l'édition :
```sh
ln -s public/images images
```

## Personnalisation du thème

Toutes les personnalisations sur le thème sont commitées avec le message d'en-tête `chore(customize)`.
Vous pouvez voir les commits correspondants :
https://github.com/sebastienmoreno/sebastienmoreno.github.io/search?q=chore%28customize%29&type=commits

## Custom DNS

Dans mon cas, le but est d'avoir un blog accessible depuis `https://jamkey.fr` et `https://www.jamkey.fr`.

J'avais besoin de configurer 2 choses:
- Configuration DNS des pages Github
- Configuration du fournisseur DNS OVH

Github décrit la configuration DNS, c'est assez simple : 
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Concernant le fournisseur OVH DNS, vous pouvez configurer :
- un sous-domaine CNAME
- ou un domaine APEX

Dans mon cas, j'ai configuré dans le fournisseur de DNS OVH un domaine APEX. 
Cela semble plus intéressant pour gérer aussi la redirection `https://www.jamkey.fr` vers `https://jamkey.fr`.
Voici la documentation : https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain-and-the-www-subdomain-variant

J'ai eu de l'aide grâce au blog de Daria Hervieux : https://da-sha1.me/configuration/2019/03/03/redirect-custom-domain-to-github-pages.html
Merci à elle !
